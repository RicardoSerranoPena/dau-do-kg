<template>
  <main class="newsletter-page">
    <article v-if="content" class="newsletter-article">
      <header class="newsletter-heading">
        <h1 class="title">{{ title }}</h1>
      </header>
      <div v-html="content" class="newsletter-content"></div>
    </article>
  </main>
</template>

<script>
import getResource from '~/queries/getResource'

export default {
  async asyncData({ app, params, redirect }) {
    const client = app.apolloProvider.defaultClient
    const { id } = params
    try {
      const res = await client.query({
        query: getResource,
        variables: {
          bucket_slug: 'dau-do-house-production',
          read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
          object_id: id,
        },
      })

      const resource = res.data.getObject
      console.log('data', resource)
      const { title, content, metadata } = resource

      return {
        title,
        content,
        metadata,
      }
    } catch (error) {
      console.log('error', error)
      redirect('/newsletters')
    }
  },
}
</script>

<style></style>

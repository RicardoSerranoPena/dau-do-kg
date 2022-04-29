<template>
  <main class="resource-page page">
    <article v-if="content" class="resource-article">
      <header>
        <h1 class="resource-header-title">{{ title }}</h1>
      </header>
      <div v-html="content" class="resource-content"></div>
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
  head() {
    return {
      title: this.title,
      description: this.metadata.description,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.metadata.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://daudohouse.com${this.$nuxt.$route.path}`,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article',
        },
      ],
    }
  },
}
</script>

<style></style>

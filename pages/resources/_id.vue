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
          slug: id,
        },
      })

      const resource = res.data.getObjects.objects[0]
      const { title, slug, content, metadata } = resource

      return {
        title,
        slug,
        content,
        metadata,
      }
    } catch (error) {
      console.log('error', error)
      redirect('/resources')
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
          content: `https://daudohouse.com/resources/${this.slug}`,
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

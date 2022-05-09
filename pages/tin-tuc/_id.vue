<template>
  <main class="newsletter-page page">
    <article v-if="content" class="newsletter-article">
      <header>
        <h1 class="newsletter-header-title">{{ title }}</h1>
        <h3 class="newsletter-header-subtitle">
          {{ metadata.description }}
        </h3>
        <div class="newsletter-hero-container">
          <img :src="metadata.hero.url" alt="" class="newsletter-hero" />
        </div>
      </header>
      <div v-html="content" class="newsletter-content"></div>
    </article>
  </main>
</template>

<script>
import getNewsletter from '~/queries/getNewsletter'

export default {
  async asyncData({ app, params, error }) {
    const client = app.apolloProvider.defaultClient
    const { id } = params

    try {
      const res = await client.query({
        query: getNewsletter,
        variables: {
          bucket_slug: 'dau-do-house-production',
          read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
          slug: id,
        },
      })
      const newsletter = res.data.getObjects.objects[0]
      const { title, slug, content, metadata } = newsletter
      return {
        title,
        slug,
        content,
        metadata,
      }
    } catch (err) {
      // console.log('error', error)
      error({
        statusCode: 404,
      })
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
          hid: 'og:image',
          name: 'og:image',
          content: this.metadata.hero.url,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.metadata.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://daudohouse.com/tin-tuc/${this.slug}`,
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

<template>
  <main class="newsletter-page">
    <article v-if="content" class="newsletter-article">
      <heading class="newsletter-heading">
        <h1 class="title">{{ title }}</h1>
        <h3 class="subtitle">
          {{ metadata.description }}
        </h3>
        <div class="newsletter-hero-container">
          <img :src="metadata.hero.url" alt="" class="newsletter-hero" />
        </div>
      </heading>
      <div v-html="content" class="newsletter-content"></div>
    </article>
  </main>
</template>

<script>
import getNewsletter from '~/queries/getNewsletter'

export default {
  async asyncData({ app, params, redirect }) {
    const client = app.apolloProvider.defaultClient
    const { id } = params
    try {
      const res = await client.query({
        query: getNewsletter,
        variables: {
          bucket_slug: 'dau-do-house-production',
          read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
          object_id: id,
        },
      })

      const newsletter = res.data.getObject
      console.log('data', newsletter)
      const { title, content, metadata } = newsletter

      return {
        title,
        content,
        metadata,
      }
    } catch (error) {
      console.log('error', error)
      redirect('/Newsletters')
    }
  },
  // data() {
  //   return {
  //     title: '',
  //     date: '',
  //     hero_url: '',
  //   }
  // },
}
</script>

<style></style>

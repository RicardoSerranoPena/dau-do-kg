<template>
  <main class="newsletters-page">
    <header class="section-title">
      <h1>Newsletters</h1>
    </header>
    <div class="newsletter-cards">
      <div
        v-for="{ id, title } in getObjects.objects"
        :key="title"
        class="card-newsletter"
      >
        <nuxt-link :to="'/resources/' + id">
          <div class="card-newsletter-hero"></div>
          <div class="card-newsletter-body">
            <div class="card-newsletter-title">
              <h2>{{ title }}</h2>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
import getResources from '~/queries/getResources'

export default {
  apollo: {
    getObjects: {
      prefetch: true,
      query: getResources,
      variables: {
        bucket_slug: 'dau-do-house-production',
        read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
      },
    },
  },
}
</script>

<style scoped></style>

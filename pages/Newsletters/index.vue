<template>
  <main>
    <header class="section-title">
      <h1>Newsletters</h1>
    </header>
    <!-- {{ getObjects }} -->
    <div
      v-for="{ id, title, metadata } in getObjects.objects"
      :key="title"
      class="newsletter-cards"
    >
      <nuxt-link :to="'/Newsletters/' + id" class="card-newsletter">
        <div
          class="card-newsletter-hero"
          v-bind:style="{
            backgroundImage: 'url(' + metadata.hero.url + ')',
          }"
        ></div>
        <div class="card-newsletter-body">
          <div class="card-newsletter-title">
            {{ title }}
          </div>
          <div class="card-newsletter-description">
            <p>{{ metadata.description }}</p>
          </div>
          <div class="card-newsletter-date">
            <p>{{ metadata.date }}</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import getObjects from '~/queries/getNewsletters'

export default {
  apollo: {
    getObjects: {
      prefetch: true,
      query: getObjects,
      variables: {
        bucket_slug: 'dau-do-house-production',
        read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
      },
    },
  },
}
</script>

<style scoped>
main {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>

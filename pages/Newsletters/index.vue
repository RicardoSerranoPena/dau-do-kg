<template>
  <main class="newsletters-page page">
    <header class="section-title">
      <h1>Newsletters</h1>
    </header>
    <div class="newsletter-cards">
      <div
        v-for="{ id, title, metadata } in getObjects.objects"
        :key="title"
        class="card-newsletter"
      >
        <nuxt-link :to="'/newsletters/' + id">
          <div
            class="card-newsletter-hero"
            v-bind:style="{
              backgroundImage: 'url(' + metadata.hero.url + ')',
            }"
          ></div>
          <div class="card-newsletter-body">
            <div class="card-newsletter-title">
              <h2>{{ title }}</h2>
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
    </div>
  </main>
</template>

<script>
import getNewsletters from '~/queries/getNewsletters'

export default {
  apollo: {
    getObjects: {
      prefetch: true,
      query: getNewsletters,
      variables: {
        bucket_slug: 'dau-do-house-production',
        read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
      },
    },
  },
}
</script>

<style scoped></style>

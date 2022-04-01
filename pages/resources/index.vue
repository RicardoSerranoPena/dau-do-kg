<template>
  <main class="resources-page page">
    <header class="section-title">
      <h1>Resources</h1>
    </header>
    <div class="resources-cards">
      <nuxt-link
        :to="'/resources/' + id"
        v-for="{ id, title } in getObjects.objects"
        :key="id"
        class="resources-card-link resources-card"
      >
        <img
          src="~/assets/images/document-icon.png"
          alt="document icon"
          class="resources-icon"
        />
        <p class="resources-card-title">{{ title }}</p>
      </nuxt-link>
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

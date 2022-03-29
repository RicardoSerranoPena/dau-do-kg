<template>
  <main>
    <h1>Newsletters</h1>
    {{ getObjects }}
    <div v-for="newsletter in getObjects.objects" :key="newsletter.title">
      <nuxt-link :to="'/Newsletters/' + newsletter.id">
        <div class="title">{{ newsletter.title }}</div>
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

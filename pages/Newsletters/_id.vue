<template>
  <main v-if="page">
    <div v-html="page"></div>
  </main>
</template>

<script>
import getObject from '~/queries/getNewsletter'

export default {
  async asyncData({ app, route, redirect }) {
    let data = {}
    try {
      const d = await app.apolloProvider.defaultClient.query({
        query: getObject,
        variables: {
          bucket_slug: 'dau-do-house-production',
          read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
          object_id: route.params.id,
        },
      })
      const data = d.data
      console.log('data', data)
      return {
        page: data.getObject.content,
      }
    } catch (error) {
      console.log('error', error)
      // redirect('/')
    }
  },
}
</script>

<style></style>

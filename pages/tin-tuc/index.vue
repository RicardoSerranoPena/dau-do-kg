<template>
  <main v-if="!getObjects" class="page">
    <header class="section-title">
      <h1>Tin Tức</h1>
    </header>
    <h2 style="text-align: center">Đang tải nội dung...</h2>
  </main>
  <main v-else class="newsletters-page page">
    <header class="section-title">
      <h1>Tin Tức</h1>
    </header>
    <div class="newsletter-cards" v-if="getObjects.objects">
      <div
        v-for="{ slug, title, metadata } in getObjects.objects"
        :key="title"
        class="card-newsletter"
      >
        <nuxt-link :to="'/tin-tuc/' + slug">
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
  data() {
    return {
      title: 'Đậu Đỗ House - Tin Tức',
      description: 'Đọc tất cả các bản tin tức đây từ Đậu Đỗ House',
    }
  },
  head() {
    return {
      title: this.title,
      description: this.description,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://daudohouse.com/tin-tuc`,
        },
      ],
    }
  },
}
</script>

<style scoped></style>

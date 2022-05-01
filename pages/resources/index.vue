<template>
  <main class="resources-page page">
    <header class="section-title">
      <h1>Resources</h1>
    </header>
    <div class="select-type">
      <button
        class="btn btn-primary"
        @click="resourceType = 'all'"
        v-bind:class="{ 'active-btn': resourceType == 'all' }"
      >
        Tất Cả
      </button>
      <button
        class="btn btn-primary"
        @click="resourceType = 'Parent'"
        v-bind:class="{ 'active-btn': resourceType == 'Parent' }"
      >
        Phụ Huynh
      </button>
      <button
        class="btn btn-primary"
        @click="resourceType = 'Teacher'"
        v-bind:class="{ 'active-btn': resourceType == 'Teacher' }"
      >
        Giáo Viên
      </button>
    </div>
    <div class="resources-cards" v-if="resourceType == 'Teacher'">
      <nuxt-link
        :to="'/resources/' + id"
        v-for="{ id, title, metadata } in teacherResources"
        :key="id"
        class="resources-card-link resources-card"
      >
        <img
          src="~/assets/images/document-icon.png"
          alt="document icon"
          class="resources-icon"
        />
        <p class="resources-card-title">{{ title }}</p>
        <div class="tags">
          <div class="tag" v-for="type in metadata.type" :key="type">
            {{ type }}
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="resources-cards" v-else-if="resourceType == 'Parent'">
      <nuxt-link
        :to="'/resources/' + id"
        v-for="{ id, title, metadata } in parentResources"
        :key="id"
        class="resources-card-link resources-card"
      >
        <img
          src="~/assets/images/document-icon.png"
          alt="document icon"
          class="resources-icon"
        />
        <p class="resources-card-title">{{ title }}</p>
        <div class="tags">
          <div class="tag" v-for="type in metadata.type" :key="type">
            {{ type }}
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="resources-cards" v-else>
      <nuxt-link
        :to="'/resources/' + slug"
        v-for="{ id, title, slug, metadata } in resources"
        :key="id"
        class="resources-card-link resources-card"
      >
        <img
          src="~/assets/images/document-icon.png"
          alt="document icon"
          class="resources-icon"
        />
        <p class="resources-card-title">{{ title }}</p>
        <div class="tags">
          <div class="tag" v-for="type in metadata.type" :key="type">
            {{ type }}
          </div>
        </div>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
import getResources from '~/queries/getResources'

export default {
  data() {
    return {
      resourceType: 'all',
      title: 'Đậu Đỗ House - Tài Liệu Tham Khảo',
      description:
        'Đọc tất cả các tài liệu tham khảo được cung cấp bởi Đậu Đỗ House',
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
          content: `https://daudohouse.com/success`,
        },
      ],
    }
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    try {
      // getting resources
      const res = await client.query({
        query: getResources,
        variables: {
          bucket_slug: 'dau-do-house-production',
          read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
        },
      })

      const resources = res.data.getObjects.objects

      const parentResources = resources.filter((resource) =>
        resource.metadata.type.includes('Phụ Huynh')
      )
      const teacherResources = resources.filter((resource) =>
        resource.metadata.type.includes('Giáo Viên')
      )

      return { resources, parentResources, teacherResources }
    } catch (error) {
      console.log('error', error)
    }
  },
}
</script>

<style scoped></style>

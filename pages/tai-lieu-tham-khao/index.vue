<template>
  <main class="resources-page page">
    <header class="section-title">
      <h1>Resources</h1>
    </header>

    <div class="select-type">
      <button
        class="btn btn-primary"
        @click="changeResources('all')"
        v-bind:class="{ 'active-btn': resourceType == 'all' }"
      >
        Tất Cả
      </button>
      <button
        class="btn btn-primary"
        @click="changeResources('parent')"
        v-bind:class="{ 'active-btn': resourceType == 'parent' }"
      >
        Phụ Huynh
      </button>
      <button
        class="btn btn-primary"
        @click="changeResources('teacher')"
        v-bind:class="{ 'active-btn': resourceType == 'teacher' }"
      >
        Giáo Viên
      </button>
    </div>

    <div class="resources-cards">
      <nuxt-link
        :to="'/tai-lieu-tham-khao/' + slug"
        v-for="{ id, title, slug, metadata } in shownResources"
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
      shownResources: [],
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
          content: `https://daudohouse.com/tai-lieu-tham-khao`,
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
      redirect('/')
    }
  },
  created() {
    this.shownResources = this.resources
  },
  methods: {
    changeResources(name) {
      this.resourceType = name
      if (name == 'all') {
        this.shownResources = this.resources
      } else if (name == 'parent') {
        this.shownResources = this.parentResources
      } else if (name == 'teacher') {
        this.shownResources = this.teacherResources
      }
    },
  },
}
</script>

<style scoped></style>

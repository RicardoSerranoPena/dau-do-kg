<template>
  <header class="nav-header">
    <h1 hidden>ĐẬU ĐỖ HOUSE</h1>
    <nuxt-link to="/"
      ><img
        class="logo"
        src="~/assets/images/Title-logo.webp"
        width="295"
        height="60"
        alt="ĐẬU ĐỖ HOUSE"
    /></nuxt-link>
    <button
      class="mobile-nav-toggle"
      aria-controls="primary-nav-bar"
      aria-expanded="false"
      @click="toggleNavBar"
    >
      <span class="sr-only">Menu</span>
    </button>
    <nav>
      <ul id="primary-nav-bar" data-visible="false" class="primary-nav-bar">
        <li>
          <nuxt-link to="/gioi-thieu">Giới Thiệu</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/phuong-phap-giao-duc">Phương Pháp Giáo Dục</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/thong-tin-chi-tiet">Thông Tin Chi Tiết</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tin-tuc">Tin Tức</nuxt-link>
        </li>
        <li>
          <!-- <nuxt-link
            v-if="$nuxt.$route.path == '/'"
            to="/#tuyen-sinh"
            class="clr-accent"
            >Tuyển Sinh</nuxt-link
          > -->
          <nuxt-link to="/tuyen-sinh" class="clr-accent">Tuyển Sinh</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      primaryNav: '',
      navBarToggle: '',
    }
  },
  mounted() {
    this.primaryNav = this.$nuxt.$el.querySelector('.primary-nav-bar')
    this.navBarToggle = this.$nuxt.$el.querySelector('.mobile-nav-toggle')
  },
  methods: {
    toggleNavBar() {
      const visibility = this.primaryNav.getAttribute('data-visible')

      if (visibility === 'false') {
        this.primaryNav.setAttribute('data-visible', true)
        this.navBarToggle.setAttribute('aria-expanded', true)
      } else {
        this.primaryNav.setAttribute('data-visible', false)
        this.navBarToggle.setAttribute('aria-expanded', false)
      }
    },
  },
}
</script>

<style scoped></style>

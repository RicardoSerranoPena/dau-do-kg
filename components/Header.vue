<template>
  <header class="nav-header">
    <h1 hidden>ĐẬU ĐỖ HOUSE</h1>
    <nuxt-link to="/"
      ><img
        class="logo"
        src="~/assets/images/Title-logo.png"
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
          <nuxt-link to="/triet-hoc">Triết Học</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tin-tuc">Tin Tức</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/#apply" class="clr-accent">Ghi Danh</nuxt-link>
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

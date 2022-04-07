<template>
  <header class="nav-header">
    <h1 hidden>ĐẬU ĐỖ HOUSE</h1>
    <nuxt-link to="/"
      ><img class="logo" src="~/assets/images/Title-logo.png"
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
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Philosopy</a>
        </li>
        <li>
          <nuxt-link to="/newsletters">Newsletter</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#apply" class="clr-accent">Apply</nuxt-link>
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

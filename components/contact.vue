<template>
  <div class="contact-us-float" data-visible="false">
    <button
      class="btn-contact"
      aria-controls="contact-links"
      aria-expanded="false"
      @click="toggleContactLinks"
    ></button>
    <div id="contact-links" class="contact-links">
      <a href="tel:123-456-8909">
        <img src="~/assets/images/phone-alt-solid.svg" class="" />
      </a>
      <a href="mailto:daudohousekindergarten@gmail.com">
        <img src="~/assets/images/envelope-solid.svg" class="" />
      </a>
      <a href="https://zalo.com"
        ><img src="~/assets/images/zalo-logo.png" alt="zalo logo" class="round"
      /></a>
      <a href="https://facebook.com"
        ><img
          src="~/assets/images/fb-logo.png"
          alt="facebook logo"
          class="round"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactLinks: '',
      contactLinksToggle: '',
    }
  },
  mounted() {
    this.contactLinks = this.$nuxt.$el.querySelector('.contact-us-float')
    this.contactLinksToggle = this.$nuxt.$el.querySelector('.btn-contact')
  },
  methods: {
    toggleContactLinks() {
      const visibility = this.contactLinks.getAttribute('data-visible')

      if (visibility === 'false') {
        this.contactLinks.setAttribute('data-visible', true)
        this.contactLinksToggle.setAttribute('aria-expanded', true)
      } else {
        this.contactLinks.setAttribute('data-visible', false)
        this.contactLinksToggle.setAttribute('aria-expanded', false)
      }
    },
  },
}
</script>

<style scoped></style>

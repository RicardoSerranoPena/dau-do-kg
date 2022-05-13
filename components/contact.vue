<template>
  <div class="contact-us-float" data-visible="false">
    <button
      class="btn-contact"
      aria-controls="contact-links"
      aria-expanded="false"
      @click="toggleContactLinks"
    ></button>
    <div id="contact-links" class="contact-links">
      <a href="tel:123-456-8909" target="_blank">
        <img
          src="~/assets/images/phone-alt-solid-light.svg"
          alt="Biểu tượng điện thoại"
          class="phone-svg"
          width="40"
          height="40"
        />
      </a>
      <a href="mailto:daudohousekindergarten@gmail.com" target="_blank">
        <img
          src="~/assets/images/envelope-solid-light.svg"
          alt="Biểu tượng email"
          class=""
          width="40"
          height="40"
        />
      </a>
      <a href="https://chat.zalo.me/?phone=" target="_blank"
        ><img
          src="~/assets/images/zalo-logo.webp"
          alt="zalo logo"
          class="round"
          width="40"
          height="40"
      /></a>
      <a href="https://www.facebook.com/daudohouse.preschool" target="_blank"
        ><img
          src="~/assets/images/fb-logo.webp"
          alt="facebook logo"
          class="round"
          width="40"
          height="40"
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

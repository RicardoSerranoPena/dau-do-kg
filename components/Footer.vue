<template>
  <footer class="footer">
    <img class="footer-logo" src="~/assets/images/Title-logo.webp" />
    <img class="footer-logo-full" src="~/assets/images/ddhk-logo.webp" />
    <div class="footer-contact-us">
      <h4 class="title">Liên Hệ</h4>
      <div>
        <img src="~/assets/images/phone-alt-solid.svg" />
        <p>(323)555-3245</p>
      </div>
      <div>
        <img src="~/assets/images/envelope-solid.svg" />
        <p>daodokindergarten@gmail.com</p>
      </div>
      <div>
        <img src="~/assets/images/map-marker-solid.svg" />
        <p>Street Name 123 - New York Elevent</p>
      </div>
      <div class="social-media">
        <a href="https://zalo.com"
          ><img
            src="~/assets/images/zalo-logo.webp"
            alt="zalo logo"
            class="hover-animation"
        /></a>
        <a href="https://facebook.com"
          ><img
            src="~/assets/images/fb-logo.webp"
            alt="facebook logo"
            class="hover-animation"
        /></a>
      </div>
    </div>
    <div class="footer-working-hours">
      <h4 class="title">Giờ Làm Việc</h4>
      <p>Monday to Friday</p>
      <p>Open from 9am to 6pm</p>
      <p>Holidays - Closed</p>
      <p>Weekends - Closed</p>
    </div>
    <div class="footer-site-map">
      <h4 class="title">Sơ Đồ Trang Web</h4>
      <div class="site-map-links">
        <nuxt-link to="/">Trang Chủ</nuxt-link>
        <nuxt-link to="/ghi-danh">Ghi Danh</nuxt-link>

        <nuxt-link to="/gioi-thieu">Giới Thiệu</nuxt-link>
        <nuxt-link to="/triet-hoc">Triết Học</nuxt-link>

        <nuxt-link to="/tin-tuc">Tin Tức</nuxt-link>
        <nuxt-link to="/tai-lieu-tham-khao">Tài Liệu Tham Khảo</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>

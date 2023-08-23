<template>
  <footer>
    <div class="footer">
      <img
        loading="lazy"
        class="footer-logo"
        src="~/assets/images/Title-logo.webp"
        alt="Đậu Đỗ logo"
        width="413"
        height="84"
      />
      <img
        loading="lazy"
        class="footer-logo-full"
        src="~/assets/images/ddhk-logo.webp"
        alt="Đậu Đỗ logo"
        width="500"
        height="500"
      />
      <div class="footer-contact-us">
        <span>Địa chỉ</span>
        <!-- <img src="~/assets/images/map-marker-solid.svg" /> -->
        <a href="https://goo.gl/maps/GixGi8GJ12C5Hrdv9" target="_blank"
          >Ngõ 4 Đỗ Đức Dục, Mễ Trì, Hà Nội, Vietnam</a
        >
        <span>Hotline</span>
        <!-- <img src="~/assets/images/phone-alt-solid-dark.svg" /> -->
        <a href="tel:0869169302">(086) 916.9302</a>

        <span>Email</span>
        <!-- <img src="~/assets/images/envelope-solid-dark.svg" /> -->
        <a href="mailto:mndaudohouse@gmail.com">mndaudohouse@gmail.com</a>
        <span>Website</span>
        <a href="https://daudohouse.com">https://daudohouse.com</a>
      </div>

      <div class="footer-site-map">
        <span>Đường dẫn đến các trang</span>
        <ul class="site-map-links">
          <li><nuxt-link to="/">Trang Chủ</nuxt-link></li>
          <li><nuxt-link to="/tuyen-sinh">Tuyển Sinh</nuxt-link></li>
          <li><nuxt-link to="/gioi-thieu">Giới Thiệu</nuxt-link></li>
          <li>
            <nuxt-link to="/phuong-phap-giao-duc"
              >Phương Pháp Giáo Dục</nuxt-link
            >
          </li>
          <li>
            <nuxt-link to="/thong-tin-chi-tiet">Thông Tin Chi Tiết</nuxt-link>
          </li>
          <li><nuxt-link to="/tin-tuc">Tin Tức</nuxt-link></li>
          <li>
            <nuxt-link to="/tai-lieu-tham-khao">Tài Liệu Tham Khảo</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="footer-social-media">
        <span>Kết nối với nhà trường</span>
        <div class="social-media">
          <a href="tel:0869169302" target="_blank">
            <img
              loading="lazy"
              src="~/assets/images/phone-alt-solid-dark.svg"
              alt="Biểu tượng điện thoại"
              class="phone-svg"
              width="37"
              height="37"
            />
          </a>
          <a
            href="mailto:mndaudohouse@gmail.com"
            target="_blank"
            class="phone-svg"
          >
            <img
              loading="lazy"
              src="~/assets/images/envelope-solid-dark-cut.svg"
              alt="Biểu tượng email"
              class=""
              width="37"
              height="40"
            />
          </a>
          <a href="https://chat.zalo.me/?phone=0869169302" target="_blank"
            ><img
              loading="lazy"
              src="~/assets/images/zalo-logo.webp"
              alt="zalo logo"
              class=""
              width="37"
              height="37"
          /></a>
          <a
            href="https://www.facebook.com/daudohouse.preschool"
            target="_blank"
            ><img
              loading="lazy"
              src="~/assets/images/fb-logo.webp"
              alt="facebook logo"
              class=""
              width="37"
              height="37"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>

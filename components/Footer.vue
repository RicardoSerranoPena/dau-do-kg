<template>
  <footer class="footer">
    <img class="footer-logo" src="~/assets/images/Title-logo.png" />
    <img class="footer-logo-full" src="~/assets/images/ddhk-logo.png" />
    <div class="footer-contact-us">
      <h4 class="title">Contact Us</h4>
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
            src="~/assets/images/zalo-logo.png"
            alt="zalo logo"
            class="hover-animation"
        /></a>
        <a href="https://facebook.com"
          ><img
            src="~/assets/images/fb-logo.png"
            alt="facebook logo"
            class="hover-animation"
        /></a>
      </div>
    </div>
    <div class="footer-working-hours">
      <h4 class="title">Working Hours</h4>
      <p>Monday to Friday</p>
      <p>Open from 9am to 6pm</p>
      <p>Holidays - Closed</p>
      <p>Weekends - Closed</p>
    </div>
    <div class="footer-subscribe">
      <h4 class="title">Subscribe to Our Newsletter</h4>
      <form class="subscribe">
        <label for="subscribe-email">Email</label>
        <input
          tpye="text"
          id="subscribe-email"
          placeholder="Your Email Address"
        />
        <input
          type="submit"
          id="subscribe-button"
          value="Subscribe"
          class="btn-form btn-primary"
        />
      </form>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>

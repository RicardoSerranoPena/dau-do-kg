<template>
  <footer>
    <img class="footer-logo" src="~/assets/images/Title-logo.png" />
    <div class="section footer-contact-us">
      <div class="title">
        <h4>Contact Us</h4>
      </div>
      <div class="">
        <img src="~/assets/images/phone-alt-solid.svg" />
        <p>(323)555-3245</p>
      </div>
      <div class="">
        <img src="~/assets/images/envelope-solid.svg" />
        <p>daodokindergarten@gmail.com</p>
      </div>
      <div class="">
        <img src="~/assets/images/map-marker-solid.svg" />
        <p>Street Name 123 - New York Elevent</p>
      </div>
    </div>
    <div class="section footer-working-hours">
      <div class="title">
        <h4>Working Hours</h4>
      </div>
      <p>Monday to Friday</p>
      <p>Open from 9am to 6pm</p>
      <p>Holidays - Closed</p>
      <p>Weekends - Closed</p>
    </div>
    <div class="section footer-subscribe-newsletter">
      <div class="title">
        <h4>Subscribe to Our Newsletter</h4>
      </div>
      <form>
        <label for="subscribe-email">Email</label>
        <input
          tpye="text"
          id="subscribe-email"
          placeholder="Your Email Address"
        />
        <input type="submit" value="Subscribe" class="btn-form btn-primary" />
      </form>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style></style>

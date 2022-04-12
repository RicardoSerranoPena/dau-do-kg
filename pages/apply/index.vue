<template>
  <main class="page">
    <section id="apply" class="apply">
      <div class="apply-card hover-animation">
        <div class="apply-img-wrapper">
          <div class="apply-img"></div>
        </div>
        <div class="apply-form">
          <header>
            <h2 class="form-title">Enroll Today</h2>
          </header>
          <form name="apply-form" action="/apply/success" method="POST" netlify>
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input type="text" id="first-name" placeholder="First Name" />
              <label for="last-name">Last Name</label>
              <input type="text" id="last-name" placeholder="Last Name" />
            </div>
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Email Address" />
            <label for="phone">Phone</label>
            <input type="text" id="phone" placeholder="Phone Number" />
            <input
              type="submit"
              value="Enroll"
              class="btn-form btn-secondary"
            />
            <input type="hidden" name="form-name" value="apply-form" />
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {}
</script>

<style></style>

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
          <form
            netlify
            name="Apply"
            method="POST"
            netlify-honeypot="bot-field"
            action="/apply/success"
          >
            <p class="hidden">
              <label>
                Don't fill this out if you're a human:
                <input name="bot-field" />
              </label>
            </p>
            <div class="form-group">
              <label for="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                v-model="form.firstName"
                placeholder="First Name"
                oninvalid="this.setCustomValidity('Please enter your name')"
                oninput="setCustomValidity('')"
                maxlength="50"
                required
              />
              <label for="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                v-model="form.lastName"
                placeholder="Last Name"
                oninvalid="this.setCustomValidity('Please enter your last name')"
                oninput="setCustomValidity('')"
                maxlength="50"
                required
              />
            </div>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              placeholder="Email Address"
              oninvalid="this.setCustomValidity('Please enter your email address')"
              oninput="setCustomValidity('')"
              maxlength="320"
              required
            />
            <label for="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              v-model="form.phone"
              placeholder="Phone Number"
              oninvalid="this.setCustomValidity('Please enter your phone number')"
              oninput="setCustomValidity('')"
              maxlength="12"
              required
            />
            <input
              type="submit"
              value="Enroll"
              class="btn-form btn-secondary"
            />
            <input type="hidden" name="form-name" value="Apply" />
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

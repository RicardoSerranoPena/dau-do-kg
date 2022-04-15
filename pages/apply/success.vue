<template>
  <main class="page">
    <div class="success-message">
      <p>
        Form was successly submited. Wait for an email in your inbox at:
        {{ email }}
      </p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  created() {
    console.log(this.$route.query.email)
    this.email = this.$route.query.email
  },
}
</script>

<style></style>

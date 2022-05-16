<template>
  <main class="page">
    <div class="success-message">
      <p>
        Form was successly submited. Wait for us to contact you for the next
        step in this process.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: 'Đậu Đỗ House - Thành Công',
      description: 'Đã gửi biểu mẫu thành công',
    }
  },
  head() {
    return {
      title: this.title,
      description: this.description,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: `https://daudohouse.com/success`,
        },
      ],
    }
  },
}
</script>

<style></style>

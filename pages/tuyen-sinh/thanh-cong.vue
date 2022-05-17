<template>
  <main class="page">
    <div class="success-message">
      <p>
        Biểu mẫu đã được gửi thành công. Chờ chúng tôi liên hệ với bạn để thực
        hiện bước tiếp theo trong quy trình này.
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
          hid: 'description',
          name: 'description',
          content: this.description,
        },
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
          content: `https://daudohouse.com/tuyen-sinh/thanh-cong`,
        },
      ],
    }
  },
}
</script>

<style></style>

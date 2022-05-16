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
            <label for="parent-name">Họ tên Phụ huynh</label>
            <input
              type="text"
              id="parent-name"
              name="parent-name"
              placeholder="Họ tên Phụ huynh"
              oninvalid="this.setCustomValidity('Vui lòng nhập tên phụ huynh')"
              oninput="setCustomValidity('')"
              maxlength="50"
              required
            />
            <label for="student-name">Họ tên Học sinh</label>
            <input
              type="text"
              id="student-name"
              name="student-name"
              placeholder="Họ tên Học sinh"
              oninvalid="this.setCustomValidity('Vui lòng nhập tên học sinh')"
              oninput="setCustomValidity('')"
              maxlength="50"
              required
            />
            <label for="age">Tuổi học sinh</label>
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Tuổi học sinh"
              oninvalid="this.setCustomValidity('Vui lòng nhập tuổi của học sinh')"
              oninput="setCustomValidity('')"
              maxlength="1"
              required
            />
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Địa chỉ Email"
              oninvalid="this.setCustomValidity('Vui lòng nhập email của bạn')"
              oninput="setCustomValidity('')"
              maxlength="320"
              required
            />
            <label for="phone">Số điện thoại</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Số điện thoại"
              oninvalid="this.setCustomValidity('Vui lòng điền số điện thoại của bạn')"
              oninput="setCustomValidity('')"
              maxlength="12"
              required
            />
            <label for="message">Tin nhắn</label>
            <textarea
              type="text"
              id="message"
              name="message"
              placeholder="Lời nhắn đến Đậu Đỗ"
              maxlength="500"
              rows="4"
            />
            <input
              type="submit"
              value="Nộp đơn"
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
export default {
  data() {
    return {
      title: 'Đậu Đỗ House - Ghi Danh',
      description: 'Đăng ký ghi danh vào Đậu Đỗ House mẫu giáo',
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
          content: `https://daudohouse.com/apply`,
        },
      ],
    }
  },
}
</script>

<style></style>

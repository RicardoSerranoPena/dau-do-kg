<template>
  <main class="page sign-up-page">
    <header class="section-title">
      <h1>HƯỚNG DÂN ĐĂNG KÝ HỌC</h1>
    </header>

    <div class="section-body">
      <img
        src="~/assets/images/number-1.png"
        alt="Number 1"
        width="70"
        height="70"
      />
      <p>
        Bố mẹ chuẩn bị : giấy khai sinh của bé bản photo, chứng mình thư/ căn
        cước công dân bản photo, hình chụp ảnh thẻ mới nhất của bé, và bố mẹ
        điền đầy vào hồ sơ thông tin do nhà trường cung cấp.
      </p>
      <img
        src="~/assets/images/checklist.png"
        alt="Checklist"
        class="special-icon"
        width="70"
        height="70"
      />
      <img
        src="~/assets/images/number-2.png"
        alt="Number 2"
        width="70"
        height="70"
      />
      <p>
        Bố mẹ vui lòng đóng học phí cho Quản lý nhà trường (bằng 2 hình thức:
        gửi tiền mặt hoặc chuyển khoản) để sẵn sàng cho con đi học.
      </p>
      <img
        src="~/assets/images/pay-mobile.png"
        alt="Checklist"
        class="special-icon"
        width="70"
        height="70"
      />
      <img
        src="~/assets/images/number-3.png"
        alt="Number 3"
        width="70"
        height="70"
      />
      <p>
        Đăng kí học thành công chỉ sau khi trường nhận hồ sơ hoàn chỉnh và xác
        nhận đóng học phí thành công.
      </p>
      <img
        src="~/assets/images/checkmark.png"
        alt="Checklist"
        class="special-icon"
        width="70"
        height="70"
      />
      <img
        src="~/assets/images/number-4.png"
        alt="Number 4"
        width="70"
        height="70"
      />
      <p>
        Sau khi đăng kí học thành công, các cô sẽ hướng dẫn các bố mẹ chuẩn bị
        tâm lý cho trẻ trước khi đi học và làm quen với trường. Điều này rất
        quan trọng với tâm lý của trẻ.
      </p>
      <img
        src="~/assets/images/mommy-and-baby.png"
        alt="Checklist"
        class="special-icon"
        width="70"
        height="70"
      />
    </div>
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
          content: `https://daudohouse.com/tuyen-sinh`,
        },
      ],
    }
  },
}
</script>

<style></style>

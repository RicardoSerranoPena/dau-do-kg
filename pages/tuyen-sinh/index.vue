<template>
  <main class="page sign-up-page">
    <header class="section-title">
      <h1>Cách Thức Tuyển Sinh</h1>
    </header>

    <div class="section-body">
      <p>
        Các bố mẹ có nhu cầu đăng kí học cho con vui lòng liên hệ cho Đậu Đỗ qua
        fanpage Đậu Đỗ House hoặc Zalo, cho Đậu Đỗ biết một số thông tin:
        <br />
        Với bé từ 18 tháng tuổi - 3 tuổi : bé có ăn chay không? bé bao nhiêu
        tuổi? bé đã có khả năng nói, tự ăn, đi đứng chưa ? bé ăn được cơm chưa ?
        thói quen ngủ của bé ? bé đã đi lớp bao giờ chưa ? ...<br />
        Với bé trên 3 tuổi : bé có tự đi vệ sinh được chưa ? có giúp đỡ bố mẹ
        việc nhà không ? thói quen ăn và ngủ của bé ? ...
      </p>
      <p>
        -Sau khi nói chuyện và xin các bố mẹ một số thông tin, các cô sẽ gửi cho
        bố mẹ số tài khoản của trường, các bố mẹ vui lòng chuyển khoản phí giữ
        chỗ là 3,000,000 VNĐ. <br />
        - Đăng kí học thành công chỉ sau khi trường nhận được xác nhận chuyển
        khoản phí giữ chỗ. 3 ngày sau khi các cô gửi số tài khoản cho bố mẹ mà
        vẫn chưa nhận được xác nhận chuyển khoản, đăng kí học được coi như là
        chưa thành công.<br />
        - Sau khi đăng kí học thành công, các bố mẹ đăng kí với trường ngày con
        chính thức đi học, các cô sẽ hướng dẫn các bố mẹ chuẩn bị tâm lý cho trẻ
        trước khi đi học và làm quen với trường.
        <br />
      </p>
      <p>
        - Các bố mẹ đăng kí học thành công đợt tuyển sinh, khi đăng kí thời gian
        tham quan trường (qua page Đậu Đỗ House hoặc Zalo ), các cô sẽ sắp xếp
        lịch và báo lại thời gian phù hợp để các bố mẹ qua tham quan trường.
        Trường sẽ không tiếp phụ huynh qua tham quan khi chưa đăng kí lịch trước
        để tránh ảnh hưởng đến bầu không khí an lành của trẻ.
      </p>
      <p>
        Lưu ý': để hỗ trợ tâm lý của con khi sắp bước vào môi trường mới, phụ
        huynh cho con đến trường trải nghiệm trước 1 vài ngày trong khoảng thời
        gian từ 16h30 đến 17h30.
      </p>
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

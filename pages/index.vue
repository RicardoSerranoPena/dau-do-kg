<template>
  <main>
    <section class="hero">
      <header>
        <h2 class="hero-title">
          Yêu thương chân thật,<br />
          Hạnh phúc chân thật
        </h2>
      </header>
    </section>

    <section class="highlights">
      <div class="cards">
        <div class="card">
          <h3 class="card-title">Giáo dục từ trái tim</h3>
          <p class="card-body">
            Nhà trường luôn chú trọng đến đời sống của các cô, để cùng sống với
            đạo đức thương mình, thương người, một tình thương rộng lớn phủ trùm
            vũ trụ, vạn vật để nuôi dưỡng các bé cũng có tình yêu thương như
            vậy.
          </p>
          <div class="card-img-wrapper">
            <div class="card-img" />
          </div>
        </div>
        <div class="card">
          <h3 class="card-title">Vật liệu tự nhiên</h3>
          <p class="card-body">
            Đồ chơi tại trường hoàn toàn làm bằng đôi bàn tay mẹ, của cha và của
            cô giáo để khơi gợi lòng biết ơn của trẻ. Vật liệu được nhập khẩu từ
            nước ngoài, 100% làm từ nguyên liệu thân thiện với môi trường.
          </p>
          <div class="card-img-wrapper">
            <div class="card-img" />
          </div>
        </div>
        <div class="card">
          <h3 class="card-title">Ngôi trường hạnh phúc</h3>
          <p class="card-body">
            Chúng tôi mong muốn xây dựng một ngôi trường hạnh phúc, để trẻ được
            an toàn, tự do sáng tạo, gần gũi với thiên nhiên, tập yêu thương con
            người, động vật và cả cây cỏ hoa lá.
          </p>
          <div class="card-img-wrapper">
            <div class="card-img" />
          </div>
        </div>
      </div>
    </section>
    <section class="about-us">
      <header><h2 class="section-title">Giới Thiệu</h2></header>
      <div class="section-body">
        <div class="body-left">
          <p>
            Nhà trường mong muốn cùng bố mẹ nuôi dưỡng những em bé hạnh phúc, tự
            do, có sức mạnh nội tại, an nhiên là chính mình. Ở Đậu Đỗ, các con
            được tôn trọng, thoải mái, ấm áp như ở nhà, mỗi trẻ đều được tạo
            không gian để tự do khai phá, phát huy tiềm năng của mình.
          </p>
          <p>
            Chương trình học được thiết kế cẩn thận theo nhịp điệu nhằm giúp trẻ
            cân bằng, hài hòa với môi trường, nuôi dưỡng ý chí, rèn luyện và
            phát triển kỹ năng sống, khơi dậy và phát huy lòng yêu thương của
            trẻ. Trẻ được tạo cơ hội để tự làm mọi việc, được tạo môi trường và
            giá trị sống cốt lõi là sống với lòng yêu thương chan hoà...
          </p>
          <nuxt-link to="/gioi-thieu" class="btn btn-primary"
            >Tiếp Tục Đọc Phần Giới Thiệu</nuxt-link
          >
        </div>
        <div class="body-right">
          <img
            loading="lazy"
            class="figure-hover-animation"
            src="/kids-eating.webp"
            alt="Trẻ em chơi với bột ở Đậu Đỗ House"
            width="400"
            height="533.328"
          />
        </div>
      </div>
    </section>
    <section class="our-philosophy">
      <header>
        <h2 class="section-title">Phương Pháp Giáo Dục</h2>
      </header>
      <div class="section-body">
        <div class="body-left">
          <p>
            Trường Mầm non Đậu Đỗ House - Đỗ Đức Dục trả trẻ con về thế giới
            giao tiếp từ trái tim và sống chan hòa cùng tự nhiên, đưa các con về
            giá trị sống cốt lõi là sống với lòng yêu thương chan hoà. Đồ chơi
            tại trường hoàn toàn là vật liệu tự nhiên, bằng đôi bàn tay mẹ, bằng
            sức mạnh của cha, khéo léo của cô giáo chứa đựng đầy sức sống và
            giàu cảm xúc, khơi gợi lòng biết ơn, sự trân trọng, phát triển trí
            tưởng tượng và sáng tạo kỳ diệu của trẻ.
          </p>
          <p>Ngoài ra, Màu sáp, màu nước, sáp ong, đồ chơi…</p>
          <nuxt-link to="/phuong-phap-giao-duc" class="btn btn-primary"
            >Tiếp Tục Đọc Phương Pháp Giáo Dục</nuxt-link
          >
        </div>
        <div class="body-right">
          <img
            loading="lazy"
            src="~/assets/images/woodplane.webp"
            alt="máy bay đồ chơi trẻ em bằng gỗ"
            width="300"
            height="230"
          />
        </div>
      </div>
    </section>
    <section class="testimonials">
      <header>
        <h2 class="section-title">Những lời chứng thực</h2>
      </header>
      <div class="section-body">
        <div class="cards">
          <div class="card testimonial-card">
            <div class="testimonial-img-wrapper">
              <div loading="lazy" class="testimonial-img"></div>
            </div>
            <p class="testimonial-name">Chu Thanh Nhàn</p>
            <p class="testimonial-role">Phụ Huynh</p>
            <p class="testimonial-quote">
              Mình thực sự cảm thấy may mắn khi chọn đúng trường cho con. Con
              được vui chơi, yêu thương, khám phá. Các cô còn viết lại nhật ký
              cho con. Mong con trai sẽ đi cùng Đậu Đỗ đến hết 5 tuổi để có 1
              tuổi thơ trọn vẹn.
            </p>
          </div>
          <div class="card testimonial-card">
            <div class="testimonial-img-wrapper">
              <div class="testimonial-img"></div>
            </div>
            <p class="testimonial-name">Mai Khánh Linh</p>
            <p class="testimonial-role">Quản Lý Tại Trường</p>
            <p class="testimonial-quote">
              “Tôi có một tâm huyết vô cùng lớn trong lĩnh vực giáo dục trẻ em
              mong muốn mang lại cho các con một ngôi trường yêu thương, ở đó
              các con luôn được tự do học hỏi, tôn trọng, an toàn, tự khám phá
              trải nghiệm bằng sự tò mò lớn nhất, ở đó các con được yêu thương
              nâng đỡ vô điều kiện, mọi tri thức luôn không ngừng biến đổi nhưng
              với mong muốn luôn học hỏi, khám phám bằng trái tim yêu thương lớn
              lao sẽ giúp các con thích nghi trong mọi hoàn cảnh cuộc sống.”
            </p>
          </div>
          <div class="card testimonial-card">
            <div class="testimonial-img-wrapper">
              <div class="testimonial-img"></div>
            </div>
            <p class="testimonial-name">Mai Xin Hiêng</p>
            <p class="testimonial-role">Phụ Huynh</p>
            <p class="testimonial-quote">
              Trường cơ sở vật chất chất lương , các cô nhẹ nhàng và rất yêu các
              bé , đặc biệt thích nhất khoản khi một bé mới đến sẽ có 1 cô chăm
              sóc riêng trong nhưng tuần đầu đi học ạ
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="newsletter-resources">
      <div class="newsletter">
        <header>
          <h2 class="section-title">Tin Tức</h2>
        </header>
        <div class="newsletter-card hover-animation">
          <div class="newsletter-card-img-wrapper">
            <div
              class="newsletter-card-img"
              v-bind:style="{
                backgroundImage: 'url(' + newsletter.heroURL + ')',
              }"
            ></div>
          </div>
          <div class="card-date">
            <div class="date">{{ newsletter.date }}</div>
          </div>
          <h3 class="newsletter-card-title">
            {{ newsletter.title }}
          </h3>
          <div class="newsletter-card-body">
            <p>
              {{ newsletter.description }}
            </p>
            <nuxt-link :to="'/tin-tuc/' + newsletter.slug"
              >Hãy Đọc Tiếp &#8594;</nuxt-link
            >
          </div>
        </div>
        <nuxt-link to="/tin-tuc" class="btn btn-primary"
          >Đọc Thêm Tin Tức</nuxt-link
        >
      </div>
      <div class="resources">
        <header>
          <h2 class="section-title">Tài Liệu Tham Khảo</h2>
        </header>
        <div class="resources-cards">
          <nuxt-link
            :to="'/tai-lieu-tham-khao/' + slug"
            class="resources-card-link resources-card"
            v-for="{ id, title, slug, metadata } in resources"
            :key="id"
          >
            <img
              loading="lazy"
              src="~/assets/images/document-icon.png"
              alt="document icon"
              class="resources-icon"
            />
            <p class="resources-card-title">{{ title }}</p>
            <div class="tags">
              <div class="tag" v-for="type in metadata.type" :key="type">
                {{ type }}
              </div>
            </div>
          </nuxt-link>
        </div>
        <nuxt-link to="/tai-lieu-tham-khao" class="btn btn-secondary"
          >Nhận Thêm Tài Liệu Tham Khảo</nuxt-link
        >
      </div>
    </section>
    <section></section>
    <section id="tuyen-sinh" class="apply" style="display: none">
      <div class="apply-card hover-animation">
        <div class="apply-img-wrapper">
          <div class="apply-img"></div>
        </div>
        <div class="apply-form">
          <header>
            <h2 class="form-title">Đăng ký ngay để nhận tư vấn</h2>
          </header>
          <form
            netlify
            name="Apply"
            method="POST"
            netlify-honeypot="bot-field"
            action="/tuyen-sinh/thanh-cong"
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
              minlength="1"
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
import getRecentNewsletter from '~/queries/getRecentNewsletter'
import getRecentResources from '~/queries/getRecentResources'

export default {
  data() {
    return {}
  },
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    try {
      // getting most recent newsletter
      const newsletterRes = await client.query({
        query: getRecentNewsletter,
        variables: {
          bucket_slug: 'dau-do-house-production',
          read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
        },
      })

      const newsletterObj = newsletterRes.data.getObjects.objects[0]
      const { title, slug, metadata, id } = newsletterObj
      const date =
        metadata.date.split('-')[2] + '/' + metadata.date.split('-')[1]
      const newsletter = {
        title,
        slug,
        id,
        date,
        description: metadata.description,
        heroURL: metadata.hero.url,
      }

      // getting most recent resources
      const resourcesRes = await client.query({
        query: getRecentResources,
        variables: {
          bucket_slug: 'dau-do-house-production',
          read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
        },
      })

      const resources = resourcesRes.data.getObjects.objects
      return {
        newsletter,
        resources,
      }
    } catch (error) {
      console.log('error', error)
    }
  },
  methods: {},
}
</script>

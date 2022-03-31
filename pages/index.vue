<template>
  <main>
    <section class="hero">
      <header>
        <h2 class="hero-title">
          gieo nhân tốt,<br />
          gặt quả lành
        </h2>
      </header>
    </section>

    <section class="highlights">
      <div class="cards">
        <div class="card">
          <h3 class="card-title">Licensed Child Care</h3>
          <p class="card-body">
            Cupcake ipsum dolor sit amet jelly beans gummies. Sweet chupa chups
            chocolate oat cake caramels jujubes muffin marshmallow. Gingerbread
            oat cake caramels icing topping.
          </p>
          <div class="card-img-wrapper">
            <div class="card-img" />
          </div>
        </div>
        <div class="card">
          <h3 class="card-title">High Quality Learning</h3>
          <p class="card-body">
            Cupcake ipsum dolor sit amet cotton candy candy tootsie roll.
            Marshmallow candy canes sugar plum bonbon sugar plum. Sweet bonbon
            soufflé dessert apple pie. Jelly-o
          </p>
          <div class="card-img-wrapper">
            <div class="card-img" />
          </div>
        </div>
        <div class="card">
          <h3 class="card-title">The Talented Staff</h3>
          <p class="card-body">
            Cupcake ipsum dolor sit amet lollipop marshmallow. Sweet chocolate
            cake liquorice dessert jelly-o cake jujubes shortbread. Apple pie
            sugar plum gingerbread
          </p>
          <div class="card-img-wrapper">
            <div class="card-img" />
          </div>
        </div>
      </div>
    </section>
    <section class="about-us">
      <header><h2 class="section-title">About Us</h2></header>
      <div class="section-body">
        <div class="body-left">
          <p>
            Cupcake ipsum dolor sit amet. Powder donut gummies jelly beans
            gingerbread. Halvah sugar plum caramels candy canes pastry cake.
            Gingerbread cookie bear claw jelly ice cream jelly-o tart. Tart
            sesame snaps caramels lemon drops chocolate icing cake toffee
            chocolate bar. Pudding jelly-o carrot cake gummies chupa chups.
            Gingerbread brownie halvah donut cookie chocolate cake jelly beans
            macaroon.
          </p>
          <p>
            Chocolate bar icing sugar plum cupcake gingerbread candy canes.
            Wafer danish icing chocolate bar topping marshmallow muffin brownie.
            Bonbon chocolate bar oat cake bonbon gummi bears. Jelly halvah
            bonbon chocolate cake donut chocolate cake chupa chups. Tiramisu
            caramels candy chupa chups chocolate. Marshmallow tootsie roll gummi
            bears biscuit caramels lollipop sweet roll gummi bears. Candy canes
            sweet roll halvah dessert dragée jujubes gummi bears lemon drops.
            Dragée icing dessert chupa chups halvah brownie fruitcake chupa
            chups. Sesame snaps wafer carrot cake powder shortbread wafer bear
            claw.
          </p>
          <a href="" class="btn btn-primary">Learn More</a>
        </div>
        <div class="body-right">
          <img src="~/assets/images/kids-eating.jpg" />
        </div>
      </div>
    </section>
    <section class="our-philosophy">
      <header>
        <h2 class="section-title">Our Philosophy</h2>
      </header>
      <div class="section-body">
        <div class="body-left">
          <p>
            Cupcake ipsum dolor sit amet apple pie marzipan cookie. Pie candy
            canes ice cream dragée brownie. Carrot cake bear claw pie liquorice
            toffee gummies.
          </p>
          <p>
            Topping candy canes pudding biscuit lollipop pudding apple pie
            chocolate cake. Macaroon gummi bears cake sugar plum croissant apple
            pie dragée. Candy jelly beans biscuit candy canes dessert ice cream
            pie. Icing tart macaroon gingerbread toffee bear claw wafer.
          </p>
          <p>
            Gingerbread shortbread gummies carrot cake tootsie roll oat cake
            wafer. Croissant sweet roll cheesecake pie ice cream. Wafer cupcake
            croissant cotton candy carrot cake candy cupcake. Powder jelly-o
            danish wafer tiramisu.
          </p>
          <a href="" class="btn btn-primary">Learn More</a>
        </div>
        <div class="body-right">
          <img src="~/assets/images/woodplane.png" />
        </div>
      </div>
    </section>
    <section class="testimonials">
      <header>
        <h2 class="section-title">Testimonials</h2>
      </header>
      <div class="section-body">
        <div class="cards">
          <div class="card testimonial-card">
            <div class="testimonial-img-wrapper">
              <div class="testimonial-img"></div>
            </div>
            <h4 class="testimonial-name">Name Lastname</h4>
            <p class="testimonial-role">Parent</p>
            <p class="testimonial-quote">
              Cupcake ipsum dolor sit amet muffin. Tiramisu dessert wafer
              gummies chocolate cake pastry chocolate bar soufflé. Jujubes cake
              tiramisu sweet roll chocolate.
            </p>
          </div>
          <div class="card testimonial-card">
            <div class="testimonial-img-wrapper">
              <div class="testimonial-img"></div>
            </div>
            <h4 class="testimonial-name">Name Lastname</h4>
            <p class="testimonial-role">Director</p>
            <p class="testimonial-quote">
              Cupcake ipsum dolor sit amet muffin. Tiramisu dessert wafer
              gummies chocolate cake pastry chocolate bar soufflé. Jujubes cake
              tiramisu sweet roll chocolate.
            </p>
          </div>
          <div class="card testimonial-card">
            <div class="testimonial-img-wrapper">
              <div class="testimonial-img"></div>
            </div>
            <h4 class="testimonial-name">Name Lastname</h4>
            <p class="testimonial-role">Major</p>
            <p class="testimonial-quote">
              Cupcake ipsum dolor sit amet muffin. Tiramisu dessert wafer
              gummies chocolate cake pastry chocolate bar soufflé. Jujubes cake
              tiramisu sweet roll chocolate.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="newsletter-resources">
      <div class="newsletter">
        <header>
          <h2 class="section-title">Newsletter</h2>
        </header>
        <div class="newsletter-card">
          <div class="newsletter-card-img-wrapper">
            <div
              class="newsletter-card-img"
              v-bind:style="{
                backgroundImage: 'url(' + hero.url + ')',
              }"
            ></div>
          </div>
          <div class="card-date">
            <div class="date">{{ date[2] }}/{{ date[1] }}</div>
          </div>
          <h3 class="newsletter-card-title">
            {{ title }}
          </h3>
          <div class="newsletter-card-body">
            <p>
              {{ description }}
            </p>
            <nuxt-link :to="'/Newsletters/' + id">Keep Reading</nuxt-link>
          </div>
        </div>
        <a href="" class="btn btn-primary">Read More News</a>
      </div>
      <div class="resources">
        <header>
          <h2 class="section-title">Resources</h2>
        </header>
        <div class="resources-cards">
          <div class="resources-card">
            <img src="~/assets/images/document-icon.png" alt="" />
            <p class="resources-card-title">Resources on Parenting</p>
          </div>
          <div class="resources-card">
            <img src="~/assets/images/document-icon.png" alt="" />
            <p class="resources-card-title">Resources on Parenting</p>
          </div>
          <div class="resources-card">
            <img src="~/assets/images/document-icon.png" alt="" />
            <p class="resources-card-title">Resources on Parenting</p>
          </div>
          <div class="resources-card">
            <img src="~/assets/images/document-icon.png" alt="" />
            <p class="resources-card-title">Resources on Parenting</p>
          </div>
        </div>
        <a href="" class="btn btn-secondary">Get More Resources</a>
      </div>
    </section>
    <section class="apply">
      <div class="apply-card">
        <div class="apply-img-wrapper">
          <div class="apply-img"></div>
        </div>
        <div class="apply-form">
          <header>
            <h2 class="form-title">Enroll Today</h2>
          </header>
          <form>
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
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import getRecentNewsletter from '~/queries/getRecentNewsletter'

export default {
  async asyncData({ app }) {
    const client = app.apolloProvider.defaultClient
    try {
      const res = await client.query({
        query: getRecentNewsletter,
        variables: {
          bucket_slug: 'dau-do-house-production',
          read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
        },
      })

      const newsletter = res.data.getObjects.objects[0]
      console.log(newsletter)
      const { title, metadata, id } = newsletter
      const { description, hero } = metadata
      let date = metadata.date
      date = date.split('-')
      console.log(date)

      return {
        title,
        id,
        description,
        hero,
        date,
      }
    } catch (error) {
      console.log('error', error)
    }
  },

  apollo: {
    getObjects: {
      prefetch: true,
      query: getRecentNewsletter,
      variables: {
        bucket_slug: 'dau-do-house-production',
        read_key: 'fk6S5xVNuPsrf3WchtJhjgy2vr6OIxkkpWoWcg1KPbW4xnUh8s',
      },
    },
  },
}
</script>

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
          <img
            loading="lazy"
            class="figure-hover-animation"
            src="~/assets/images/kids-eating.webp"
          />
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
          <img loading="lazy" src="~/assets/images/woodplane.webp" />
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
              <div loading="lazy" class="testimonial-img"></div>
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
              >Keep Reading</nuxt-link
            >
          </div>
        </div>
        <nuxt-link to="/tin-tuc" class="btn btn-primary"
          >Read More News</nuxt-link
        >
      </div>
      <div class="resources">
        <header>
          <h2 class="section-title">Resources</h2>
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
          >Get More Resources</nuxt-link
        >
      </div>
    </section>
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

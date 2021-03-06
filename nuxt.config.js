export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Đậu Đỗ House',
    htmlAttrs: {
      lang: 'vi',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

      { hid: 'og:title', name: 'og:title', content: 'Đậu Đỗ House' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        name: 'og:image',
        content: 'https://daudohouse.com/thumbnail.jpg',
      },
      { hid: 'og:url', name: 'og:url', content: 'https://daudohouse.com' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },

      {
        hid: 'description',
        name: 'description',
        content:
          'Trường mầm non thuần chay đầu tiên tại Hà Nội, với đội ngũ giáo viên đầu tiên tràn đầy tình yêu thương dành cho các bé.',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Trường mầm non thuần chay đầu tiên tại Hà Nội, với đội ngũ giáo viên đầu tiên tràn đầy tình yêu thương dành cho các bé.',
      },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Đậu Đỗ House' },
      {
        hid: 'og:image:alt',
        name: 'og:image:alt',
        content: 'Trẻ em chơi trong nhà trẻ',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Trẻ em chơi trong nhà trẻ',
      },

      { name: 'format-detection', content: 'telephone:yes' },
      { name: 'msapplication-TileColor', content: '#fffced' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#fffced' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/apple-icon-57x57.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-icon-60x60.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/apple-icon-72x72.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/apple-icon-76x76.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/apple-icon-114x114.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/apple-icon-144x144.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    link: [{ rel: 'manifest', href: '/manifest.json' }],
    link: [{ rel: 'preload', as: 'image', href: '/kids-eating.webp' }],
  },

  // For rendering error page
  generate: {
    fallback: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/critical.css', '~/assets/css/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-fonts'],

  // Google Fonts Config
  googleFonts: {
    families: {
      'Be Vietnam Pro': [400, 600],
    },
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/apollo', '@nuxtjs/robots', '@nuxtjs/sitemap'],

  // Apollo config
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://graphql.cosmicjs.com/v3',
      },
    },
  },

  // Sitemap config
  sitemap: {
    hostname: 'https://daudohouse.com',
    gzip: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    host: '0.0.0.0',
  },
}

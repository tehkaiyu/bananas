module.exports = {
  siteMetadata: {
    title: 'itsBananas · There’s more to life than hustle & grind.',
    description: '',
    canonicalUrl: 'https://www.itsBananas.club',
    image: 'https://www.itsBananas.club/images/preview.jpg',
    organization: {
      name: 'itsBananas',
      url: 'https://www.itsBananas.club',
      logo: 'https://www.itsBananas.club/images/android-chrome-512x512.png',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-74511083-1' },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: { fonts: ['Open+Sans:400,600,700,800'] },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};

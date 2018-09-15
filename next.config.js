const externalLinks = require('remark-external-links');
const withMDX = require('@zeit/next-mdx');
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const { version, homepage } = require('./package.json');

const nextConfig = {
  distDir: 'build',
  publicRuntimeConfig: {
    ISNA_MESSAGES: [
      {
        activateAfter: 10000,
        expiration: new Date(2018, 8, 22, 23, 59, 59),
        hideAfter: 10000,
        key: 'react-next.js',
        message: '¡Migramos el sitio a React usando next.js!'
      }
    ],
    REACT_APP_SOCIAL_IMAGE: 'http://meetupjs.com.ar/static/social.jpg',
    REACT_APP_TITLE: 'Meetup.js Argentina',
    REACT_APP_URL: homepage,
    REACT_APP_VERSION: version
  }
};

module.exports = withPlugins(
  [
    withMDX({
      options: {
        mdPlugins: [externalLinks]
      }
    }),
    [withOptimizedImages, { optimizeImagesInDev: true }]
  ],
  nextConfig
);

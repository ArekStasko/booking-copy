module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `source sans pro\:100,300,400,700` 
        ],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/assets/images/discover`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `object`,
        path: `${__dirname}/src/data/objects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `poland`,
        path: `${__dirname}/src/data/Poland`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `discover`,
        path: `${__dirname}/src/data/discover`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `houses`,
        path: `${__dirname}/src/data/houses`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact`,
        path: `${__dirname}/src/data/contact`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `inspirations`,
        path: `${__dirname}/src/data/inspirations`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `offer`,
        path: `${__dirname}/src/data/offer`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  /*  {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },*/
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

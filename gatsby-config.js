module.exports = {
  siteMetadata: {
    title: "E-Commerce Store",
    titleTemplate: "%s · E-Commerce Store",
    description:
      "An ecommerce template for easy plug-n-play product pages and graphql support.",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/product5-3.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-json`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
};

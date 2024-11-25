/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
  resolve: "@plasmicapp/loader-gatsby",
  options: {
    projects: [
      {
        id: "MDw55HGZJULWpLyP8MoiJ",
        token: "JsMiTn4rMsjoAgQGyhDiX0xSoYEUBzzMrbgUVnQ2dPY9SUPUjjFDjGhklUYTNlrjp2JD7i5c7PkRR4z7g",
      },
    ], // An array of project ids.
    preview: false,
    defaultPlasmicPage: require.resolve("./src/templates/defaultPlasmicPage.jsx"),
  },
},
{
  resolve: "gatsby-plugin-react-helmet",
}
]
}

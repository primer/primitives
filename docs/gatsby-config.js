module.exports = {
  siteMetadata: {
    title: 'Primer Primitives',
    shortName: 'Primitives',
    description: 'Color, spacing, and typography primitives for the Primer Design System',
    imageUrl: 'https://user-images.githubusercontent.com/10384315/53922681-2f6d3100-402a-11e9-9719-5d1811c8110a.png',
  },
  pathPrefix: '/primitives',
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        defaultBranch: 'main',
        repoRootPath: '..',
      },
    },
  ],
}

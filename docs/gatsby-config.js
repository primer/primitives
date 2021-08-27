module.exports = {
  siteMetadata: {
    title: 'Primer Primitives',
    shortName: 'Primitives',
    description: 'Color, spacing, and typography primitives for the Primer Design System',
    imageUrl: '#'
  },
  pathPrefix: '/primitives',
  plugins: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        defaultBranch: 'main',
        repoRootPath: '..'
      }
    }
  ]
}

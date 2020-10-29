/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WordPress",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wordPress",
        // Url to query from
        url: "http://localhost:10018/graphql",
        refetchInterval: 20,
      },
    },
  ],
};

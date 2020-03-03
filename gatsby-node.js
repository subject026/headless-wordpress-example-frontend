// gatsby-node.js
const path = require("path");
const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;

  await createResolvers({
    WordPress_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl;

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      wordPress {
        pages {
          edges {
            node {
              title
              id
              uri
            }
          }
        }
      }
    }
  `);

  if (!data.wordPress) {
    console.error("No wordPress data returned from pages query!");
    return null;
  }

  data.wordPress.pages.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.uri,
      component: path.resolve("./src/components/PageTemplate/index.js"),
      context: {
        ...node,
      },
    });
  });
};

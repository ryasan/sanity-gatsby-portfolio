const {isFuture} = require('date-fns');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createProjectPages(graphql, actions) {
  const {createPage} = actions;
  const result = await graphql(`
    {
      allSanityProject(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const projectEdges = (result.data.allSanityProject || {}).edges || [];

  projectEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge) => {
      const id = edge.node.id;
      const slug = edge.node.slug.current;
      const path = `/projects/${slug}/`;

      createPage({
        path,
        component: require.resolve('./src/templates/project.js'),
        context: {id},
      });
    });
}

async function createBlogPages(graphql, actions) {
  const {createPage} = actions;
  const result = await graphql(`
    {
      allSanityBlogPost(filter: {slug: {current: {ne: null}}, publishedAt: {ne: null}}) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const blogEdges = (result.data.allSanityBlogPost || {}).edges || [];

  blogEdges
    .filter((edge) => !isFuture(edge.node.publishedAt))
    .forEach((edge) => {
      const id = edge.node.id;
      const slug = edge.node.slug.current;
      const path = `/blog/${slug}/`;

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id},
      });
    });
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createProjectPages(graphql, actions, reporter);
  await createBlogPages(graphql, actions, reporter);
};

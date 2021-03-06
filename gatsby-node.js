const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");
const crypto = require("crypto");
const fetch = require("node-fetch");

// load variables from the .env.* files
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// add a slug field to all MDX files
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode, basePath: `page-content` });
    console.log("create this slug: ", value);
    createNodeField({
      // Individual MDX node
      node,
      // Name of the field you are adding
      name: "slug",
      // Generated value based on filepath. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value: value,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  console.log("CreatePages is called.");
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error("page creation error");
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create pages from /page-content.
  const pages = result.data.allMdx.edges;
  console.log("Pages to create : ", pages.length);
  // you'll call `createPage` for each result
  pages.forEach(({ node }, index) => {
    console.log("Path:", node);
    //console.log("Path:", node.slug);
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/templates/page-content-layout.js`),
      //component: path.resolve(`src/templates/empty-page-layout.js`),
      // Data passed to context is available
      // in page queries as GraphQL variables.
      //context: { id: node.id },
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    });
  });
};

// define fields for the menu & submenus if we want to avoid props with null values for example
// this is important in order for the main-layout to work even if there are no SubMenus
exports.createSchemaCustomization = ({ actions }) => {
  const { createFieldExtension, createTypes } = actions;
  createFieldExtension({
    name: `defaultArray`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return [];
          }
          return source[info.fieldName];
        },
      };
    },
  });
  const typeDefs = `
    type Site implements Node {
      siteMetadata: SiteMetadata
    }
    type SiteMetadata {
      menuLinks: [MenuLinks]!
    }
    type MenuLinks {
      name: String!
      link: String!
      subMenu: [SubMenu] @defaultArray
    }
    type SubMenu {
      name: String
      link: String
    }     
  `;
  createTypes(typeDefs);
};

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  // fetch raw data from the rest api & create GraphQL nodes
  // TBD - MAKE IT REALLY GENERIC TO DEAL WITH MULTIPLE YEARS

  await addProjectsInGraphQL(createNode, "Web2 2020"); 

  await addProjectsInGraphQL(createNode, "Web2 2021");  

  return;
};

async function addProjectsInGraphQL(createNode, projectGroupName) {
  const url =
    process.env.GATSBY_API_URL + "projects/projectgroups/" + projectGroupName + "/public";
  const response = await fetch(url);
  const publicProjects = await response.json();

  // map into these results and create nodes, but ensure that the id's are unique ! 
  publicProjects.map((project, i) => {
    // Create your node object
    const projectNode = {
      // Required fields
      id: `${projectGroupName + i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `PublicProjects`, // name of the graphQL query --> allPublicProjects {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      name: project.name,
      description: project.description,
      presentationUrl: project.presentationUrl,
      frontendProductionUrl: project.frontendProductionUrl,
      frontendRepo: project.frontendRepo,
      backendRepo: project.backendRepo,
      projectGroupName: project.projectGroupName,
    };

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(projectNode))
      .digest(`hex`);
    // add it to userNode
    projectNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(projectNode);
  });
}

/* USE OF gatsby-plugin-create-client-paths instead
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/auths/)) {
    page.matchPath = "/auths/*"
    // Update the page.
    createPage(page)
  }
}
*/

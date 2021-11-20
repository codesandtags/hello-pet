const path = require("path");

exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  if (page.path.match(/^\/[id]/)) {
    createPage({
      path: "/[id]/",
      matchPath: "/:id",
      component: path.resolve("src/pages/[id]/index.js"),
    });
  }
};

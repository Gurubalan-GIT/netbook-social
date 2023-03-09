import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  env: {
    graphCMSEndpoint:
      "https://ap-south-1.cdn.hygraph.com/content/cleypepj50ho801td4t5we437/master",
  },
});

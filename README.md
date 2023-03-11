## Netbook Social

A simple responsive landing page with data from Graph CMS and some complex components.

## Installation

- Install dependecies with _yarn_ : `yarn`
- Run the development server : `yarn dev`
- Run the production server : `yarn build && yarn start`
- To lint and test the codebase with linters : `yarn test-all`
- To open cypress : `yarn cypress:open`
- To perform e2e tests with cypress : `yarn e2e`
- To perform unit / component tests with cypress: `yarn component`

## Architecture Decisions

- I am following [DDD](https://en.wikipedia.org/wiki/Domain-driven_design) ( Domain Driven Design ) as you can see under the [modules](./modules/) directory.
- Shared / dependent logics are grouped under the [common](./common/) directory.

## Key Methodologies Used

- [Composition](https://reactjs.org/docs/composition-vs-inheritance.html) models, this can be seen with [Layouts](./layouts/) which saves re-rendering components such as Navbar and Footer for serveral pages.
- [Context API](https://reactjs.org/docs/context.html) is used to avoid prop drilling specifically. I have not gone with Redux / state-management as that is not the goal here. Rather dependency injection methodologies which aims to share data is more performant and light weight here. You can refer this [here](./common/context/).
- Custom hooks are encapsulated and written [here](./common/hooks/). This contains custom hooks such as `useOnClickOutside` which helps with closing modals / dropdowns when clicked outside it's DOM.

## Technical choices 

Apart from the given spec, which is using Tailwind, Sass and React, some of the additional choices taken to aid the app were :

### Codebase Quality Control
- Pre-commit hooks via Husky.
  - This uses prettier and eslint configs together to setup linting when commiting.
- Github linters for automated commit annotations via [Github actions](https://github.com/Gurubalan-GIT/netbook-social/blob/main/.github/workflows/linter.yml).
  - This runs a linter action based on the prettier and eslint configs in the respective PR and lints the PR for a status check.
  
### Package decisions
This is pretty lean on external packages.

- Eslint config packages and plugins. Some include eslint configs from Google, Sonar lint, etc.
- [next-mdx-remote](https://www.npmjs.com/package/next-mdx-remote) : This was used as some content which needed to be dynamic had to be sent in the form of HTML.
  - Due to this, the data sent from the CMS is _Markdown_.
  - Markdown is converted to HTML on the server side and content is served in a Mdx Remote component.
  - This makes it easy to send dynamic CMS data which are styled.
  - This also expands to `remark-gfm` which handled strike-throughs, etc. from the CMS.
- [next-secure-headers](https://www.npmjs.com/package/next-secure-headers) : This is present to handle CSPs of the webpage.
- [graphql-request](https://www.npmjs.com/package/graphql-request) : Is present to enable syntax highlighting for graphql queries.
- [classnames](https://www.npmjs.com/package/classnames) : To combine / merge classes conditionally.
- For testing suites on e2e and Unit tests, I have gone ahead with [Cypress](https://www.cypress.io/).

## Feature / Task Coverage

- [x] Base UI which is responsive across all browsers by using NextJS, Tailwind CSS, SASS.
- [x] Write e2e tests with 100% coverage for the application.
- [x] Host the webpage on a cloud hosting platform.
  - [Here](https://netbook-social.vercel.app/)
- [x] Integrate the landing page with a CMS.
  - [GraphCMS](https://hygraph.com/)
  - [High Performance Read-only Content API](https://ap-south-1.cdn.hygraph.com/content/cleypepj50ho801td4t5we437/master)
  - The API is based on GraphQL, you can use a sandbox such as [Apollo](https://studio.apollographql.com/sandbox/explorer/) to test it.
- [x] Write tests to ensure CMS is working correctly.
  - Decision taken: Data driven tests, the e2e tests are done based on data from the CMS during test coverage.
- [x] Implement a search bar that allows visitors to search for content on the landing page.
  - Optimization of search results :
    - Debouncing to rate limit API calls on key press.
    - Memoization of search results to avoid recomputation / refetch results from the API.
- [x] Write e2e tests to ensure that the search bar works as expected.

## Netbook Social

A simple responsive landing page with data from Graph CMS and some complex components.

## Installation

- Install dependecies with _yarn_ : `yarn`
- Run the development server : `yarn dev`
- Run the production server : `yarn build && yarn start`
- To lint and test the codebase with linters : `yarn test-all`
- To open cypress : `yarn cypress:open`
- To perform e2e tests with cypress : `yarn e2e`

## Feature / Task Coverage

- [x] Base UI which is responsive across all browsers by using NextJS, Tailwind CSS, SASS.
- [x] Write e2e tests with 100% coverage for the application.
- [x] Host the webpage on a cloud hosting platform.
  - [Here](https://netbook-social.vercel.app/)
- [x] Integrate the landing page with a CMS.
  - [GraphCMS](https://hygraph.com/)
  - [High Performance Read-only Content API](https://ap-south-1.cdn.hygraph.com/content/cleypepj50ho801td4t5we437/master)
- [x] Write tests to ensure CMS is working correctly.
  - Decision taken: Data driven tests, the e2e tests are done based on data from the CMS during test coverage.
- [x] Implement a search bar that allows visitors to search for content on the landing page.
  - Optimization of search results :
    - Debouncing to rate limit API calls on key press.
    - Memoization of search results to avoid recomputation / refetch results from the API.
- [x] Write e2e tests to ensure that the search bar works as expected.

import { gql } from "graphql-request";

export const GET_SEARCH_ITEMS = gql`
  query SearchItemsQuery($query: String!) {
    navbarSection(where: { id: "clf1eo4sr086w0aoa6s5w1m8a" }) {
      items(where: { name_starts_with: $query }) {
        id
        name
        outLink
      }
    }
  }
`;

export const GET_HOME_PAGE_DATA = `
  query HomePageQuery {
    heroSection(where: { id: "clezqlr6r03fy0bmufvxhzy47" }) {
      id
      subTitle
      title
      description
      image {
        url
      }
    }
    aboutSection(where: {id: "clf03p7nc062o0aptv52gbr0g"}) {
      featureImages {
        id
        url
      }
      description
      title
      subTitle
      id
      featuresOffered
    }
  }
`;

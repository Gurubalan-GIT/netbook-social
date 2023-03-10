export const GET_HOME_PAGE_DATA = `
  query HomePageQuery {
    navbarSection(where: {id: "clf1eo4sr086w0aoa6s5w1m8a"}) {
      logo {
        url
      }
      navbarLinks
    }
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
      featureVideoThumbnail {
        url
      }
    }
    achievementSection(where: {id: "clf0u4kfb0lha0bo75sw692oa"}) {
      subTitle
      title
      description
      achievements {
        id
        title
        subTitle
        url
        outLinkLabel
        description
        iconStack {
          id
          url
        }
        titleIcon {
          url
        }
      }
    }
    footerSection(where: {id: "clf19ei3903te0aoajkkft9xu"}) {
      sitemaps {
        id
        outLinks
        category
      }
      title
      description
      org
      socials {
        id
        icon {
          url
        }
        url
      }
      logo {
        url
      }
    }
  }
`;

import { gql } from 'graphql-request';

export const GRAPHQL_FRAGMENTS = gql`
  fragment image on UploadFileEntity {
    id
    attributes {
      name
      alternativeText
      url
    }
  }

  fragment menuLink on ComponentMenuMenuLink {
    id
    link
    text
    newTab
  }

  fragment cover on UploadFileEntityResponse {
    data {
      id
      attributes {
        name
        alternativeText
        url
      }
    }
  }

  fragment tags on TagRelationResponseCollection {
    data {
      id
      attributes {
        displayName
        slug
      }
    }
  }

  fragment categories on CategoryRelationResponseCollection {
    data {
      id
      attributes {
        displayName
        slug
      }
    }
  }

  fragment author on AuthorEntityResponse {
    data {
      id
      attributes {
        displayName
        slug
      }
    }
  }

  fragment settings on SettingEntity {
    id
    attributes {
      blogName
      blogDescription
      logo {
        data {
          ...image
        }
      }
      menuLinks: menuLink {
        ...menuLink
      }
      footer: text
    }
  }

  fragment post on PostEntity {
    id
    attributes {
      title
      slug
      cover {
        ...cover
      }
      excerpt
      content
      tags {
        ...tags
      }
      categories {
        ...categories
      }
      author {
        ...author
      }
      allowComments
      createdAt
    }
  }
`;

import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERIES = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS {
    setting {
      data {
        ...settings
      }
    }

    posts {
      data {
        ...post
      }
    }
  }

  query GET_POST_BY_SLUG($postSlug: String!) {
    setting {
      data {
        ...settings
      }
    }
    posts(filters: { slug: { eq: $postSlug } }) {
      data {
        ...post
      }
    }
  }

  query GET_POSTS_BY_AUTHOR($authorSlug: String!) {
    setting {
      data {
        ...settings
      }
    }
    posts(filters: { author: { slug: { eq: $authorSlug } } }) {
      data {
        ...post
      }
    }
  }

  query GET_POSTS_BY_CATEGORY($categorySlug: String!) {
    setting {
      data {
        ...settings
      }
    }
    posts(filters: { categories: { slug: { eq: $categorySlug } } }) {
      data {
        ...post
      }
    }
  }

  query GET_POSTS_BY_TAGS($tagSlug: String!) {
    setting {
      data {
        ...settings
      }
    }
    posts(filters: { tags: { slug: { eq: $tagSlug } } }) {
      data {
        ...post
      }
    }
  }
`;

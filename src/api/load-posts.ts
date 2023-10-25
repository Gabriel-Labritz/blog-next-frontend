import { request, gql } from 'graphql-request';
import config from '../config/config';
import { GRAPHQL_FRAGMENTS } from '../graphql/fragments';
import { PostStrapi } from '../shared-typed/post-strapi';
import { SettingsStrapi } from '../shared-typed/settings-strapi';

export type LoadPostVariables = {
  postSlug?: string;
  authorSlug?: string;
  categorySlug?: string;
  tagSlug?: string;
};

export type StrapiPostAndSettings = {
  setting: SettingsStrapi;
  posts: PostStrapi[];
};

const document = gql`
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
`;

export const loadPosts = async (
  variables: LoadPostVariables = {},
): Promise<StrapiPostAndSettings> => {
  const data: StrapiPostAndSettings = await request(
    config.graphqlURL,
    document,
    {
      ...variables,
    },
  );

  return data;
};

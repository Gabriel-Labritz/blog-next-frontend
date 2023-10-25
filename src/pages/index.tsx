import { GetStaticProps } from 'next';
import Head from 'next/head';
import { StrapiPostAndSettings, loadPosts } from '../api/load-posts';
import { PostsTemplate } from '../templates/PostsTemplate/PostsTemplate';
import { getPosts } from '../api/getPosts';

export default function Index({ setting, posts }: StrapiPostAndSettings) {
  return (
    <>
      <Head>
        <title>{setting.blogName}</title>
        <meta name="description" content={setting.blogDescription} />
      </Head>
      <PostsTemplate setting={setting} posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps<
  StrapiPostAndSettings
> = async () => {
  let settingData = null;
  let postsData = null;

  try {
    settingData = await loadPosts();
    postsData = await getPosts();
  } catch (e) {
    settingData = null;
    postsData = null;
  }

  if (!postsData || !postsData.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: settingData.setting.data.attributes,
      posts: postsData,
    },
    revalidate: 24 * 60 * 60,
  };
};

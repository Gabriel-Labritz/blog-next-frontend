import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { StrapiPostAndSettings, loadPosts } from '../../api/load-posts';
import { getPostsBySearch } from '../../api/get-posts-by-search';
import { useRouter } from 'next/router';
import { PostsTemplate } from '../../templates/PostsTemplate/PostsTemplate';

export default function SearchPage({ setting, posts }: StrapiPostAndSettings) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Search: {router.query.q} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate setting={setting} posts={posts} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  StrapiPostAndSettings
> = async (context) => {
  let settingData = null;
  let postsData = null;

  const query = context.query.q || '';

  if (!query) {
    return {
      notFound: true,
    };
  }

  try {
    settingData = await loadPosts();
    postsData = await getPostsBySearch(query as string);
  } catch (e) {
    settingData = null;
    postsData = null;
  }

  if (!postsData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: settingData.setting.data.attributes,
      posts: postsData,
    },
  };
};

import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { StrapiPostAndSettings, loadPosts } from '../../api/load-posts';
import { useRouter } from 'next/router';
import { PostsTemplate } from '../../templates/PostsTemplate/PostsTemplate';
import { getPostsByAuthor } from '../../api/get-posts-by-author';
import { Loading } from '../../templates/Loading/Loading';

export default function AuthorPage({ setting, posts }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>
          Author: {posts[0].author.displayName} - {setting.blogName}
        </title>
      </Head>
      <PostsTemplate setting={setting} posts={posts} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  context,
) => {
  let settingData = null;
  let postData = null;

  try {
    settingData = await loadPosts();
    postData = await getPostsByAuthor(context.params.slug as string);
  } catch (e) {
    settingData = null;
    postData = null;
  }

  if (!postData || !postData.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      setting: settingData.setting.data.attributes,
      posts: postData,
    },
    revalidate: 24 * 60 * 60,
  };
};

import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { StrapiPostAndSettings, loadPosts } from '../../api/load-posts';
import { getPosts } from '../../api/getPosts';
import { useRouter } from 'next/router';
import { PostTemplate } from '../../templates/PostTemplate/PostTemplate';
import { Loading } from '../../templates/Loading/Loading';

export default function PostPage({ setting, posts }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const post = posts[0];

  return (
    <>
      <Head>
        <title>
          {post.title} - {setting.blogName}
        </title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostTemplate setting={setting} post={posts[0]} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let settingData = null;
  let postData = null;
  let paths = [];

  try {
    settingData = await loadPosts();
    postData = await getPosts();

    paths = postData.posts.map((post) => ({ params: { slug: post.slug } }));
  } catch (e) {
    settingData = null;
    postData = null;
  }

  if (!postData || !postData.length) {
    paths = [];
  }

  return {
    paths,
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
    postData = await getPosts(context.params.slug as string);
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

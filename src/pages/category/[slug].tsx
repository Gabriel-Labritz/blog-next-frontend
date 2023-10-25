import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { StrapiPostAndSettings, loadPosts } from '../../api/load-posts';
import { getPostsByCategory } from '../../api/get-posts-by-category';
import { useRouter } from 'next/router';
import { PostsTemplate } from '../../templates/PostsTemplate/PostsTemplate';
import { Loading } from '../../templates/Loading/Loading';

export default function CategoryPage({
  setting,
  posts,
}: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const categoryName = posts[0].categories.filter(
    (category) => category.slug === router.query.slug,
  )[0].displayName;

  return (
    <>
      <Head>
        <title>
          Category : {categoryName} - {setting.blogName}
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
  let postsData = null;

  try {
    settingData = await loadPosts();
    postsData = await getPostsByCategory(context.params.slug as string);
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

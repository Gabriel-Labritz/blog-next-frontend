import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { StrapiPostAndSettings, loadPosts } from '../../api/load-posts';
import { getPostsByTags } from '../../api/get-posts-by-tags';
import { useRouter } from 'next/router';
import { PostsTemplate } from '../../templates/PostsTemplate/PostsTemplate';
import { Loading } from '../../templates/Loading/Loading';

export default function TagPage({ setting, posts }: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const tagName = posts[0].tags.filter(
    (tag) => tag.slug === router.query.slug,
  )[0].displayName;

  return (
    <>
      <Head>
        <title>
          Tag: {tagName} - {setting.blogName}
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
    postData = await getPostsByTags(context.params.slug as string);
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

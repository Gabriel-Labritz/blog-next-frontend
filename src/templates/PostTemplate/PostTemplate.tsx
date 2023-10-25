import { Comments } from '../../components/Comments/Comments';
import { Post } from '../../components/Post/Post';
import { PostTags } from '../../components/PostTags/PostTags';
import { PostStrapi } from '../../shared-typed/post-strapi';
import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../Base/Base';
import * as Styled from './styles';

export type PostTemplateProps = {
  setting: SettingsStrapi;
  post: PostStrapi;
};

export const PostTemplate = ({ setting, post }: PostTemplateProps) => {
  return (
    <>
      <BaseTemplate setting={setting}>
        <Post {...post} />
        <Styled.TagContainer>
          <PostTags tags={post.tags} />
        </Styled.TagContainer>
        <Comments
          title={post.title}
          slug={post.slug}
          id={post.id}
          allowComments={post.allowComments}
        />
      </BaseTemplate>
    </>
  );
};

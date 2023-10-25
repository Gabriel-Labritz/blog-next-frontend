import { PostGrid } from '../../components/PostGrid/PostGrid';
import { PostStrapi } from '../../shared-typed/post-strapi';
import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { BaseTemplate } from '../Base/Base';
import * as Styled from './styles';

export type PostsTemplateProps = {
  setting: SettingsStrapi;
  posts?: PostStrapi[];
};

export const PostsTemplate = ({ setting, posts }: PostsTemplateProps) => {
  return (
    <>
      <BaseTemplate setting={setting}>
        <PostGrid posts={posts} />
      </BaseTemplate>
    </>
  );
};

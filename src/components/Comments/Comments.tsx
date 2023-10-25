import * as Styled from './styles';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
  id: number;
  slug: string;
  title: string;
  allowComments: boolean;
};

export const Comments = ({ id, slug, title, allowComments }: CommentsProps) => {
  const stringId = String(id);

  if (!allowComments) return null;

  return (
    <Styled.Container>
      <DiscussionEmbed
        shortname="blog-do-rogerio-tech"
        config={{
          url: `http://localhost:3000/post/${slug}`,
          identifier: stringId,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Styled.Container>
  );
};

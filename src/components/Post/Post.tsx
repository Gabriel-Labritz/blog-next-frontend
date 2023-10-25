import {
  ArticleHeader,
  ArticleHeaderProps,
} from '../ArticleHeader/ArticleHeader';
import { HtmlContent } from '../HtmlContent/HtmlContent';
import { PostContainer } from '../PostContainer/PostContainer';
import * as Styled from './styles';

export type PostProps = ArticleHeaderProps & {
  content: string;
};

export const Post = ({
  title,
  excerpt,
  cover,
  author,
  categories,
  createdAt,
  allowComments,
  content,
}: PostProps) => {
  return (
    <Styled.Container>
      <PostContainer size="max">
        <ArticleHeader
          title={title}
          excerpt={excerpt}
          cover={cover}
          author={author}
          categories={categories}
          createdAt={createdAt}
          allowComments={allowComments}
        />
      </PostContainer>
      <PostContainer size="content">
        <HtmlContent html={content} />
      </PostContainer>
    </Styled.Container>
  );
};

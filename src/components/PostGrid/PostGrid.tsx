import { PostCard, PostCardProps } from '../PostCard/PostCard';
import * as Styled from './styles';

export type PostGridProps = {
  posts?: PostCardProps[];
};

export const PostGrid = ({ posts = [] }: PostGridProps) => {
  return (
    <Styled.Container>
      {posts.length === 0 && (
        <Styled.NotFound>Nenhum post foi encontrado !</Styled.NotFound>
      )}
      <Styled.Grid>
        {posts.length > 0 &&
          posts.map((post) => {
            return (
              <PostCard
                key={`post-card-${post.id}`}
                id={post.id}
                slug={post.slug}
                cover={post.cover}
                title={post.title}
                excerpt={post.excerpt}
              />
            );
          })}
      </Styled.Grid>
    </Styled.Container>
  );
};

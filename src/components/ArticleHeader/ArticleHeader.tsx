import { Author } from '../../shared-typed/author';
import { Category } from '../../shared-typed/category';
import { StrapiCover } from '../../shared-typed/strapi-cover';
import { ArticleMeta } from '../ArticleMeta/ArticleMeta';
import { Heading } from '../Heading/Heading';
import * as Styled from './styles';

export type ArticleHeaderProps = {
  id?: number;
  title: string;
  excerpt: string;
  cover: StrapiCover;
  createdAt: string;
  author: Author;
  categories: Category[];
  allowComments: boolean;
};

export const ArticleHeader = ({
  title,
  excerpt,
  cover,
  createdAt,
  author,
  categories,
}: ArticleHeaderProps) => {
  return (
    <Styled.Container>
      <Heading as="h1" size="huge" colorDark>
        {title}
      </Heading>
      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
      <Styled.Cover src={cover.url} alt={title} />
      <ArticleMeta
        createdAt={createdAt}
        author={author}
        categories={categories}
      />
    </Styled.Container>
  );
};

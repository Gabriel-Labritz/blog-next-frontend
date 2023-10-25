import Link from 'next/link';
import { Heading } from '../Heading/Heading';
import * as Styled from './styles';
import { StrapiCover } from '../../shared-typed/strapi-cover';

export type PostCardProps = {
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  cover: StrapiCover;
};

export const PostCard = ({ slug, title, excerpt, cover }: PostCardProps) => {
  return (
    <Styled.Container>
      <Link href={`/post/${slug}`}>
        <Styled.Cover src={cover.url} />
      </Link>

      <Heading as="h2" size="small">
        <Link href={`/post/${slug}`}>{title}</Link>
      </Heading>

      <Styled.Excerpt>{excerpt}</Styled.Excerpt>
    </Styled.Container>
  );
};

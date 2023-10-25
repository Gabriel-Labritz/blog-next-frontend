import Link from 'next/link';
import { Tag } from '../../shared-typed/tag';
import * as Styled from './styles';

export type PostTagsProps = {
  tags?: Tag[];
};

export const PostTags = ({ tags = [] }: PostTagsProps) => {
  if (tags.length === 0) {
    return null;
  }

  return (
    <Styled.Container>
      tags:
      {tags.map((tag) => {
        return (
          <span key={`tag-${tag.id}`}>
            <Link href={`/tag/${tag.slug}`}>{tag.displayName}</Link>
          </span>
        );
      })}
    </Styled.Container>
  );
};

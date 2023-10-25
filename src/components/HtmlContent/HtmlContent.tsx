import Prism from 'prismjs';
import * as Styled from './styles';
import { PrimsContainer } from './/prims-vs-code-dark';
import { useEffect } from 'react';

export type HtmlContentProps = {
  html: string;
};

export const HtmlContent = ({ html }: HtmlContentProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);
  return (
    <PrimsContainer>
      <Styled.Text dangerouslySetInnerHTML={{ __html: html }} />
    </PrimsContainer>
  );
};

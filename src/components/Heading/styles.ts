import styled, { css } from 'styled-components';
import { HeadingProps } from './Heading';
import { DefaultTheme } from 'styled-components';

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaTitle(theme)}
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const mediaTitle = (theme: DefaultTheme) => css`
  @media ${theme.font.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.darkText : theme.colors.white};
    line-height: 1.2;
    ${titleSize[size](theme)}
    ${titleCase(uppercase)}
  `}
`;

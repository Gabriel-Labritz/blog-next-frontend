import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacings.large};
    padding: ${theme.spacings.large};

    @media ${theme.font.media.lteSmall} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const NotFound = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.large};
    text-align: center;
  `}
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.sizes.content};
    margin: ${theme.spacings.large} auto;
    padding: 0 ${theme.spacings.large};
  `}
`;

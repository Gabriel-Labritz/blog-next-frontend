import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} auto;
    max-width: ${theme.sizes.content};
    padding: 0 ${theme.spacings.large} 0;

    span {
      color: ${theme.colors.darkText};
      margin: 0 0 0 0.5rem;
    }

    span::before {
      content: ' ';
    }

    span::after {
      content: ', ';
    }

    span:last-child::after {
      content: '';
    }

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      transition: all 300ms ease-in-out;

      &:hover {
        filter: brightness(50%);
      }
    }
  `}
`;

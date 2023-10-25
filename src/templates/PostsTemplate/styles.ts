import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.large};
    margin: ${theme.spacings.large};
    display: flex;
    justify-content: center;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: ${theme.spacings.small} ${theme.spacings.large};
    cursor: pointer;

    &:disabled {
      background-color: ${theme.colors.darkerGray};
    }
  `}
`;

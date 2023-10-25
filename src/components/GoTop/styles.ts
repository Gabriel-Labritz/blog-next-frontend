import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border: 2rem;
    right: 2rem;
    bottom: 2rem;
    border: 0.1rem solid ${theme.colors.primary};
    border-radius: 50%;
    z-index: 5;
  `}
`;

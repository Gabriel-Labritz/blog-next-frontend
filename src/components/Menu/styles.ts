import styled, { DefaultTheme, css } from 'styled-components';
import { Title as HeadingStyles } from '../Heading/styles';

type MenuBehaviorProps = {
  menuVisible: boolean;
};

const containerChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '0' : '-30rem'};
  overflow-y: ${menuVisible ? 'auto' : 'hidden'};

  @media ${theme.font.media.lteMedium} {
    left: ${menuVisible ? '0' : '-32rem'};
  }
`;

export const Container = styled.div<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.large};
    display: flex;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100vh;
    max-width: 32rem;
    top: 0;
    left: 0;
    transition: all 300ms ease-in-out;
    overflow-y: auto;
    ${containerChanger(menuVisible, theme)}
  `}
`;

export const Nav = styled.nav`
  margin: auto;
  width: 100%;
`;

export const Logo = styled.nav`
  ${({ theme }) => css`
    ${HeadingStyles} {
      display: flex;
      justify-content: center;
      margin: 0;
      margin-bottom: ${theme.spacings.xlarge};

      img {
        border: 0.5rem solid ${theme.colors.secondary};
      }
    }
  `}
`;

const buttonChanger = (
  menuVisible: MenuBehaviorProps['menuVisible'],
  theme: DefaultTheme,
) => css`
  left: ${menuVisible ? '26rem' : '1rem'};
  color: ${menuVisible ? theme.colors.secondary : theme.colors.white};

  @media ${theme.font.media.lteMedium} {
    left: ${menuVisible ? '26rem' : '-0.5rem'};
  }
`;

export const OpenClose = styled.a<MenuBehaviorProps>`
  ${({ theme, menuVisible }) => css`
    position: fixed;
    top: ${theme.spacings.medium};
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    z-index: 2;
    width: 3rem;
    height: 3rem;
    left: 26rem;
    transition: all 300ms ease-in-out;
    ${buttonChanger(menuVisible, theme)}
  `}
`;

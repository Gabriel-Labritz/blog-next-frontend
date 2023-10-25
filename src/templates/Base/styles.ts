import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  svg.search-ok-icon,
  svg.search-cancel-icon {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 1rem;
  }

  svg.search-cancel-icon {
    ${({ theme }) => css`
      color: ${theme.colors.secondary};
    `}
  }
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xhuge};
    padding: 0 ${theme.spacings.large};
  `}
`;

export const SearchContainer = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: ${theme.spacings.xlarge};
    padding: 0 ${theme.spacings.large};
    width: 100%;
    max-width: 120rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const SearchInput = styled.input`
  padding: ${theme.spacings.small};
  font-size: ${theme.font.sizes.small};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ContentContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    margin-bottom: ${theme.spacings.large};
  `}
`;

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;

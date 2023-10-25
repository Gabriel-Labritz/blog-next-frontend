import { useRouter } from 'next/router';
import { Footer } from '../../components/Footer/Footer';
import { GoTop } from '../../components/GoTop/GoTop';
import { Header } from '../../components/Header/Header';
import { Menu } from '../../components/Menu/Menu';
import { SettingsStrapi } from '../../shared-typed/settings-strapi';
import { ToggleTheme } from '../../components/ToggleTheme/ToggleTheme';
import { useEffect, useRef, useState } from 'react';
import { Cancel } from '@styled-icons/material-outlined/Cancel';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';
import * as Styled from './styles';

export type BaseTemplateProps = {
  setting: SettingsStrapi;
  children: React.ReactNode;
};

export const BaseTemplate = ({ setting, children }: BaseTemplateProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeOut = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeOut.current);

    if (router?.query?.q === searchValue) {
      return;
    }

    const q = searchValue;

    if (!q || q.length < 3) return;

    inputTimeOut.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => clearTimeout(inputTimeOut.current);
  }, [searchValue, router]);

  return (
    <Styled.Container>
      <ToggleTheme />

      <Menu
        links={setting.menuLinks}
        logo={setting.logo}
        blogName={setting.blogName}
      />

      <Styled.HeaderContainer>
        <Header
          blogName={setting.blogName}
          blogDescription={setting.blogDescription}
          logo={setting.logo}
        />
      </Styled.HeaderContainer>

      <Styled.SearchContainer>
        <Styled.SearchInput
          type="search"
          placeholder="Buscar posts"
          name="q"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={searchDisabled}
        />
        {searchDisabled ? (
          <Cancel className="search-cancel-icon" aria-label="Input disabled" />
        ) : (
          <CheckCircleOutline
            className="search-ok-icon"
            aria-label="input enabled"
          />
        )}
      </Styled.SearchContainer>

      <Styled.ContentContainer>{children}</Styled.ContentContainer>

      <Styled.FooterContainer>
        <Footer html={setting.footer} />
      </Styled.FooterContainer>

      <GoTop />
    </Styled.Container>
  );
};

import { LogoLink } from '../LogoLink/LogoLink';
import { MenuLink } from '../MenuLink/MenuLink';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './styles';
import { useState } from 'react';
import { StrapiImage } from '../../shared-typed/strapi-image';

export type MenuPropsLink = {
  id: string;
  link: string;
  newTab: boolean;
  text: string;
};

export type MenuProps = {
  links: MenuPropsLink[];
  blogName: string;
  logo: StrapiImage;
};

export const Menu = ({ links, blogName, logo }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const { attributes } = logo.data;

  const handleOpenCloseMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuVisible((menuVisible) => !menuVisible);
  };

  return (
    <>
      <Styled.OpenClose
        menuVisible={menuVisible}
        href="#"
        aria-label="open or close"
        title="open or close"
        onClick={handleOpenCloseMenu}
      >
        {menuVisible && <CloseIcon aria-label="Close menu" />}
        {!menuVisible && <MenuIcon aria-label="Open menu" />}
      </Styled.OpenClose>

      <Styled.Container menuVisible={menuVisible}>
        <Styled.Nav>
          <Styled.Logo>
            <LogoLink text={blogName} link="/" srcImg={attributes.url} />
          </Styled.Logo>

          {links.map((link) => {
            return (
              <MenuLink key={link.id} link={link.link} newTab={link.newTab}>
                {link.text}
              </MenuLink>
            );
          })}
        </Styled.Nav>
      </Styled.Container>
    </>
  );
};

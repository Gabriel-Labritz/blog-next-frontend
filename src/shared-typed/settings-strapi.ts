import { MenuPropsLink } from '../components/Menu/Menu';
import { StrapiImage } from './strapi-image';

export type SettingsStrapi = {
  id: string;
  blogName: string;
  blogDescription: string;
  logo: StrapiImage;
  menuLinks: MenuPropsLink[];
  footer: string;
};

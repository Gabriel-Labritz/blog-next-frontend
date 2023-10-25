import { StrapiImage } from '../../shared-typed/strapi-image';
import { Heading } from '../Heading/Heading';
import { LogoLink } from '../LogoLink/LogoLink';
import * as Styled from './styles';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: StrapiImage;
  showText?: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  const { attributes } = logo.data;

  return (
    <Styled.Container>
      <LogoLink text={blogName} link="/" srcImg={attributes.url} />
      {showText && (
        <Styled.InfoBlogContainer>
          <Heading as="h2" size="small" colorDark={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.InfoBlogContainer>
      )}
    </Styled.Container>
  );
};

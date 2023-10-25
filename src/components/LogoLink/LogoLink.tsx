import { Heading } from '../Heading/Heading';
import * as Styled from './styles';

export type LogoLinkProps = {
  text: string;
  srcImg?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({
  text,
  srcImg = '',
  link,
  newTab = false,
}: LogoLinkProps) => {
  const target = newTab ? '_blank' : '_self';

  return (
    <Heading>
      <Styled.Container href={link} target={target}>
        {srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

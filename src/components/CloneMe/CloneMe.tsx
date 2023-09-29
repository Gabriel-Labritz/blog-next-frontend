import * as Styled from './styles';

export type CloneMeProps = {
  title: string;
}

export function CloneMe({ title = 'Change Me'}: CloneMeProps){
  return (
    <Styled.Wrapper>
      <h1>{title}</h1>
    </Styled.Wrapper>
  )
}

import styled from 'styled-components';
import { respondTo } from './_respondTo';

const BodyText = styled.p`
  color: ${({theme}) => theme.colors.grey70};
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 32px;

  ${respondTo.medium`
    margin-bottom: 48px;
  `}
`

type TextProps = {
  body: string;
};

export default function Text({ body }: TextProps) {
  return <BodyText>{body}</BodyText>;
}

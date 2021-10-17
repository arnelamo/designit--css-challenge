import styled from 'styled-components';
import { respondTo } from './_respondTo';

const Large = styled.h1`
  color: ${({theme}) => theme.colors.grey100};
  font-weight: 400;
  letter-spacing: -0.02em;

  ${respondTo.small`
    font-size: 48px;
    line-height: 48px;
  `}

  ${respondTo.medium`
    font-size: 64px;
    line-height: 64px;
  `}
`

const Medium = styled.h2`
  color: ${({theme}) => theme.colors.grey100};;
  font-weight: 700;
  margin-top: 32px;
  margin-bottom: 16px;
  letter-spacing: -0.02em;

  ${respondTo.small`
    font-size: 24px;
    line-height: 32px;
  `}

  ${respondTo.medium`
    font-size: 32px;
    line-height: 36px;
    margin-bottom: 24px;
  `}
`

const HeaderGridContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr);

  .header {
    grid-column: span 12;
  }

  ${respondTo.large`
    gap: 32px;
  
    .header {
      grid-column: span 8;
    }
  `}
`

type HeadingProps = {
  heading: string;
  size: 'large' | 'medium' | 'small';
};

export default function Heading({ heading, size }: HeadingProps) {
  let header

  if (size === 'large') header = <HeaderGridContainer><Large className="header">{heading}</Large></HeaderGridContainer>
  else if (size === 'medium') header = <Medium>{heading}</Medium>
  else header = <h3>{heading}</h3>

  return header;
}

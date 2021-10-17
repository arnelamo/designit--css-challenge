import Text from './Text';
import Heading from './Heading';
import styled from 'styled-components';

const StyledCard = styled.article`
  margin: 32px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey40};

  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`

type CardProps = {
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
};

export default function Card({ heading, body, image, imageAlt }: CardProps) {
  return (
    <StyledCard className="card">
      <img src={image} alt={imageAlt} />
      <Heading heading={heading} size="medium" />
      <Text body={body} />
    </StyledCard>
  );
}

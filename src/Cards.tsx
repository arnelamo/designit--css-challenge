import Card from './Card';
import dummyImage from './images/dummy.jpg';
import styled from 'styled-components';
import { respondTo } from './_respondTo';

const GridSection = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  .card {
      grid-column: span 12;
    }

  ${respondTo.medium`
    gap: 32px;

    .card {
      grid-column: span 6;
    }
  `}

  ${respondTo.large`
    .card {
      grid-column: span 4;
    }

    .card:nth-of-type(1) {
      grid-column: 5 / span 4;
    }
  `}
`

export default function Cards() {
  return (
    <GridSection>
      <Card
        heading={`The home office`}
        body={`Etiam at ornare magna. Quisque ullamcorper ante neque, et pharetra nisl sollicitudin.`}
        image={dummyImage}
        imageAlt={`Dummy alt`}
      />
      <Card
        heading={`The shared space`}
        body={`Curabitur ut consequat metus. Phasellus malesuada tincidunt elit, posuere gravida felis congue ac. Quisque vitae arcu non risus volutpat.`}
        image={dummyImage}
        imageAlt={`Etiam at ornare magna.`}
      />
      <Card
        heading={`The hot desk`}
        body={`Office desk; open or closed`}
        image={dummyImage}
        imageAlt={`Etiam at ornare magna.`}
      />
      <Card
        heading={`The meeting room`}
        body={`A seamless working experience across productivity tools such as Office 365, Miro, and AppSpace`}
        image={dummyImage}
        imageAlt={`Etiam at ornare magna.`}
      />
    </GridSection>
  );
}

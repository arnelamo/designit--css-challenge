import Cards from './Cards';
import Heading from './Heading';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme'
import { respondTo } from './_respondTo';

const AppContainer = styled.div`
  padding: 16px;
  max-width: 1440px;
  margin: 0 auto;

  ${respondTo.medium`
    padding: 32px;
  `}

  // ...🙄
  ${respondTo.large`
   padding: 48px 42px 0 75px;
  `}
`

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Heading heading="Scalable solutions for all spaces" size="large" />
        <Cards />
      </AppContainer>
    </ThemeProvider>
  );
}

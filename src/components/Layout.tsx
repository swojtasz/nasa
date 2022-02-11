import { FunctionComponent } from 'react';
import { Navbar } from './Navbar';
import styled from 'styled-components';
import bg from '../images/background.jpg';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;

const ChildrenContainer = styled.div`
  width: 90%;
  margin: 2% 5%;
`;

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};

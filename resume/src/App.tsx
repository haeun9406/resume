import React from 'react';
import styled from "styled-components";
import CareerList from './CareerList.tsx';
import Education from './Education.tsx';
import Introduction from './Introduction.tsx';

function App() {
  return (
    <Container>
      <Wrapper>
      <Introduction />
      <CareerList />
      <Education />
      </Wrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
box-sizing: border-box;
padding: 30px;
background-color: #dee2e6;
`;

const Wrapper = styled.div`
box-sizing: border-box;
width: 100%;
height: 100%;
padding: 70px 100px;

background-color: white;
`;
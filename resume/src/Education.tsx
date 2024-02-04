import React from 'react';
import styled from "styled-components";

function Education() {
  return (
    <Container>
      <Title>교육</Title>
      <Name>한양대학교</Name>
      <Status>{`대학교(학사) | 정보시스템학과
2014.03. ~ 2018.02. | 졸업`}</Status>
    </Container>
  );
}

export default Education;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding-bottom: 30px;
`
const Title = styled.span`
font-size: 24px;
font-weight: 600;
`;

const Name = styled.div`
margin-top: 20px;
margin-bottom: 5px;
font-size: 18px;
font-weight: 600;
`;

const Status = styled.span`
font-size: 13px;
color: gray;
white-space: pre-wrap;
`;
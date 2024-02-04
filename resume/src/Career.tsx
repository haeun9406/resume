import React, { PropsWithChildren } from 'react';
import styled from "styled-components";

interface Props {
  companyName: string;
  period: string;
}


function Career({companyName, period, children}: PropsWithChildren<Props>) {
  return (
    <Container>
      <CompanyName>{companyName}</CompanyName>
      <Period>{period}</Period>
      {children}
    </Container>
  );
}

export default Career;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 20px;
margin-bottom: 30px;;
border-bottom: 1.5px solid gray;

&:last-of-type {
  border-bottom: 3px solid gray;
  margin-bottom: 0px;
}

`;

const CompanyName = styled.span`
margin-bottom: 5px;
font-size: 16px;
font-weight: 600;
`;

const Period = styled.span`
font-size: 14px;
font-weight: 500;
color: gray;
`;
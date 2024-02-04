import React from 'react';
import styled from "styled-components";

interface Props {
  projectName: string;
  skills: string;
  projectDescription: string;
  result: string;
}


function CareerProject({projectName, skills, projectDescription, result}: Props) {
  return (
    <Container>
      <Title>프로젝트 명</Title>
      <Content>{projectName}</Content>
      <Title>기술 스택</Title>
      <Content>{skills}</Content>
      <Title>프로젝트 설명</Title>
      <Content>{projectDescription}</Content>
      <Title>성과</Title>
      <Content>{result}</Content>
    </Container>
  );
}

export default CareerProject;

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 15px;
border-bottom: 0.5px solid gray;
`;

const Title = styled.span`
font-size: 14px;
font-weight: 600;
`;

const Content = styled.div`
margin: 5px 0 10px;
font-size: 13px;
font-weight: 500;
color: #545E6C;
white-space: pre-wrap;
`;


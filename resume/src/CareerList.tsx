import React from 'react';
import styled from "styled-components";
import Career from './Career.tsx';
import CareerProject from './CareerProject.tsx';
import { Myrealtrip_ProjectList, LS_ProjectList } from './ProjectList.ts';


function CareerList() {
  return (
    <Container>
      <CareerTitle>경력</CareerTitle>
      <Career companyName={'마이리얼트립'} period={'2021.09 ~ present'}>
        {Myrealtrip_ProjectList.map((project)=>(
           <CareerProject
           projectName={project.projectName}
           skills={project.skills}
           projectDescription={project.projectDescription}
           result={project.result}
           />
        ))}
      </Career>
      <Career companyName={'LS일렉트릭'} period={'2019.01 ~ 2021.09'}>
        {LS_ProjectList.map((project)=>(
           <CareerProject
           projectName={project.projectName}
           skills={project.skills}
           projectDescription={project.projectDescription}
           result={project.result}
           />
        ))}
      </Career>
    </Container>
  );
}

export default CareerList;

const Container = styled.div`
width: 100%;
padding: 30px 0;
`;

const CareerTitle = styled.span`
font-size: 24px;
font-weight: 600;
`;
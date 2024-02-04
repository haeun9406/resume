import React from 'react';
import styled from "styled-components";

function Introduction() {
  return (
    <Container>
      <ProfileWrapper>
        <ProfileImg src='./profile.jpeg' />
        <NameSection>
          <Name>조하은</Name>
          <Job>Frontend Developer</Job>
          <ContactWrapper>
            <Contact>
              <Icon src='./icon-phone.png' />
              <a href="tel:010-5546-9138">010-5546-9138</a>
            </Contact>
            <Contact>
              <Icon src='./icon-mail.png' />
              <a href="mailto:haeun9406@naver.com">haeun9406@naver.com</a>
            </Contact>
          </ContactWrapper>
        </NameSection>
      </ProfileWrapper>
      <IntroductionText>
        React, TypeScript 기반의 프론트엔드 개발자(2019.08~ present) 입니다. <br/>
        언제나 고객 중심적 사고를 기반으로 개발을 진행합니다.<br/>
        문제 해결을 통한 발전과 기술 습득을 좋아합니다.
      </IntroductionText>
      <Skills>
        - React, Typescript <br />
        - HTML, CSS, Javascript <br />
        - Sentry, Github Actions, Jenkins <br />
      </Skills>
    </Container>
  );
}

export default Introduction;

const Container = styled.div`
width: 100%;
padding-bottom: 30px;
border-bottom: 3px solid gray;
`
const NameSection = styled.div`
display: flex;
flex-direction: column;
`;

const Name = styled.span`
color: black;
font-weight: 700;
font-size: 40px;
`;

const Job =styled.span`
margin-bottom: 10px;
font-size: 24px;
`;

const ProfileWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 30px;

@media screen and (max-width: 500px) {
  flex-direction: column;

  img {
    margin-bottom: 20px;
    margin-right: 0;
  }

  div {
    align-items: center;
    text-align: center;
  }
}

`;

const ProfileImg = styled.img`
width: 150px;
height: 150px;
margin-right: 50px;
border-radius: 100%;
`;

const ContactWrapper = styled.div`
display: flex;
flex-direction: column;
font-size: 16px;
color: gray;
`;

const Contact = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 3px;
 a {
  color: gray;
 }
`;

const Icon = styled.img`
width: 16px;
height: 16px;
margin-right: 5px;
`;

const IntroductionText = styled.div`
font-size: 15px;
line-height: 25px;
`;

const Skills =styled.div`
margin-top: 15px;
font-size: 15px;
line-height: 20px;
`;


export const Myrealtrip_ProjectList: {
  projectName: string;
  skills:string;
  projectDescription: string;
  result: string;
}[] = [
  {
    projectName: '패키지솔루션 시스템 개발, 개선, 유지보수',
    skills:'React18, Typescript, react-query, AntDesign, Webpack, Jenkins',
    projectDescription: `기존의 티켓, 숙소, 항공 등의 상품들을 통합하여 하나의 패키지 상품으로 판매할 수 있는 프로세스로 마이리얼트립 파트너페이지에 구현되었습니다.
실시간으로 항공권, 티켓 정보 및 관련 데이터가 연동되어 있습니다.
지속적으로 개선 작업 및 유지보수 진행 중입니다.`,
    result: `- 티켓, 숙소, 항공 등 다양한 상품들을 하나의 패키지 상품으로 통합하여 등록할 수 있는 프로세스 개발.
- Ant Design(Antd) 활용하여 촉박한 일정 속에서도 빠르게 개발 진행.
- 구성상품 등록 시 판매 기간, 날짜 별 재고 설정, 항공 상품의 실시간 데이터 연동 등 기능 구현.
`,
  },
  {
    projectName: '패키지 검색',
    skills:'React18, Typescript, react-query, recoil',
    projectDescription: `패키지 솔루션에서 등록한 상품을 여행자가 검색하고 예약할 수 있는 시스템 도메인을 개발하였습니다.
마이리얼트립 여행자 페이지 패키지 메뉴에서 확인 가능합니다.(https://www.myrealtrip.com/packages)`,
    result: `- 루비 서버에 패키지 검색 도메인 추가
- Swiper 라이브러리를 활용하여 스와이프 기능 구현.
- 데스크탑, 모바일웹, 웹뷰 구현
`,
  },
  {
    projectName: '파트너 회원 가입 프로세스 분리',
    skills:'React18, Typescript, react-query, recoil',
    projectDescription: `기존 여행자 회원과 통합되어 있던 파트너 회원 가입 프로세스를 별도로 분리하는 프로젝트를 주도적으로 진행하였습니다.
    `,
    result: `- 4단계로 이뤄진 가입 프로세스 구현 (이메일 계정 가입, 파트너 기본 정보 입력, 유형별 정보 입력, 정산 정보 등록).
- 가입 신청 후 매니저의 승인/반려에 따라 접근 가능 단계 및 수정 가능 필드가 달라지는 동적인 구조 구현.
`,
  },
  {
    projectName: '파트너 회원 유형 분리',
    skills:'React18, Typescript, react-query, recoil',
    projectDescription: `기존 하나였던 파트너 회원 유형을 3가지로 분리하고, 각 유형별 가입 플로우를 추가하였습니다.
입점 파트너/ 마케팅 파트너/ 제휴 여행사 파트너로 분리하였으며 기존 프로세스는 입점 파트너 가입 프로세스가 되었고 각 파트너 유형별로 필요한 정보를 입력 받을 수 있도록 가입 프로세스를 분리하였습니다.
    `,
    result: `- 하나의 파트너 회원 유형을 3가지로 분리하고, 각 유형별로 가입 플로우를 분리하여 추가 기능 구현.
- 각 파트너 유형별로 필요한 정보를 입력 받을 수 있도록 가입 프로세스 수정.
- 전체적인 리팩토링 및 에러 처리 추가로 코드 관리 용이성 향상.

`,
  },
  {
    projectName: '파트너 가입 플로우 고도화',
    skills:'React18, Typescript, react-query, recoil',
    projectDescription: `제휴 여행사 파트너 및 마케팅 파트너의 신규 유입을 유도하고 운영 리소스 병목 해결을 위해 가입 플로우 고도화 작업을 진행하였습니다.`,
    result: `- 가입 시 필요한 정보를 받는 프로세스 추가 및 매니저가 입력해야 했던 부분을 파트너가 직접 입력할 수 있도록 수정.
- 사용자 편의성 향상을 위한 에러 메시지 추가 및 text input 필드 자동 포맷팅 기능 추가.
- 전체적인 리팩토링 및 에러 처리를 통한 코드 관리 용이성 향상.
`,
  },
  {
    projectName: '여행자와 파트너 간의 메신저 시스템',
    skills:'React18 -> React18, Typescript',
    projectDescription: `센드버드(SendBird)를 활용하여 상품 구매자(여행자)와 판매자(파트너) 간의 메시지 전송 및 소통을 가능하게 하는 메신저 기능을 개발하였습니다.`,
    result: `- 센드버드 SDK를 활용하여 메신저의 기본 기능 개발.
- 웹뷰 작업 동반으로 여러 플랫폼과 환경에서의 프로그램 확인 및 스크롤, 가상 키보드 등의 이슈 해결.
- 기획 및 디자인 일정 지연으로, 기획 완료 전 센드버드 SDK 사전 조사 및 기본 메시지 기능 먼저 구현하여 프론트엔드 작업 일정에 영향 최소화.
`,
  },
  {
    projectName: '파트너 레포지토리 마이그레이션',
    skills:'React16 -> React18',
    projectDescription: `파트너페이지 모듈 마이그레이션 작업을 수행하여 개발 환경적 문제를 개선했습니다.`,
    result: `- 버전 차이로 인한 여행자 페이지 작업과 파트너 페이지 작업 간의 스위치 비용 감소.
- 여행자 페이지와 동일한 기능을 적용할 때 발생하는 모듈 제한성 해결.
- 오랜 기간 버전업이 이루어지지 않아 적용할 수 없는 모듈들 식별 및 업데이트.
`,
  },
  {
    projectName: '파트너페이지 배포 알림 채널 추가',
    skills:'Jenkins, slack',
    projectDescription: `젠킨스와 슬랙을 연동하여 파트너 페이지 배포 시 메시지에 빌드자와 커밋 정보가 있는 Slack알림 기능을 추가하였습니다.`,
    result: `- 각 배포마다 팀에 직접 알리지 않아 생기는 혼선 문제 해결.
- 배포 기록 확인을 위한 리소스 소모와 QA팀과의 커뮤니케이션 비용 감소.
- 메시지에 빌드자와 커밋 정보 추가하여 사용자와 이유를 명확히 전달.
`,
  }
];


export const LS_ProjectList: {
  projectName: string;
  skills:string;
  projectDescription: string;
  result: string;
}[] = [
  {
    projectName: '전력 기기들의 실시간 모니터링 시스템 코어 플랫폼 개발',
    skills:'React, Typescript, AntDesign, Webpack, Jenkins, Java, Spring, MariaDB, MongoDB, Redis',
    projectDescription: `회사 제품인 전력 기기들의 실시간 모니터링을 위한 웹시스템의 코어 플랫폼을 개발하였습니다.
전력 기기들의 종류가 워낙 다양하여 제품 특성 별로 관리자도 다르고 고객들도 다양하게 있습니다. 때문에 여러 개의 웹 시스템이 요구되어 그 모든 시스템의 기반이 되는 코어 플랫폼을 개발하였습니다.
프론트엔드, 백엔드 개발에 참여하였습니다.`,
    result: `- 마이크로 서비스 패턴 활용하여 유연성 있는 시스템 구조 설계 및 구현.
- 새로운 웹 시스템이 필요한 경우 기존 시스템에 연결하여 사용 가능한 유연한 아키텍처 구현.
- 프론트엔드 부분과 BFF 마이크로 서비스 추가를 통해 확장성을 고려한 플랫폼 구축.
`,
  },
  {
    projectName: 'PCS(전력 변환 장치) 실시간 모니터링 시스템',
    skills:'React, Typescript, AntDesign, Webpack, Jenkins, Java, Spring, MariaDB, MongoDB, Redis',
    projectDescription: `코어 플랫폼을 사용하여 개발한 1차 웹 시스템이며 사내 시스템으로 외부에서 접근은 불가 합니다.
PCS 관리 팀에서 고객에게 실시간 관리 서비스를 제공하는데 사용합니다.`,
    result: `- 코어 플랫폼을 기반으로 개발한 1차 웹 시스템이며 프론트엔드 서비스 개발 주도.
- 실시간 모니터링을 통한 기기 에러에 대한 신속한 대응으로 보상금 손실 감소.
`,
  },
  {
    projectName: '태양광 발전 사이트 실시간 모니터링 시스템',
    skills:'React, Typescript, AntDesign, Webpack, Jenkins, Java, Spring, MariaDB, MongoDB, Redis',
    projectDescription: `ESS, PCU, PV 등 다양한 전력기기들을 포함한 실시간 태양광 발전 사이트 관리 시스템으로 마찬가지로 코어 플랫폼을 토대로 개발하였습니다.`,
    result: `- 코어 플랫폼을 기반으로 개발한 2차 웹 시스템이며 프론트엔드 서비스 개발 주도.
- 코어 플랫폼의 확장성을 기반으로 태양광 발전 사이트에 특화된 시스템 구축.
`,
  },
];
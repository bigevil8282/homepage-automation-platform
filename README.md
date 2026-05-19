# 랜딩페이지·퍼널 자동화 스튜디오

여러 직업군에서 바로 쓸 수 있는 마케팅 랜딩페이지와 퍼널 자동 생성기입니다.

공개 GitHub Pages 주소: `https://bigevil8282.github.io/homepage-automation-platform/`

연결 예정 도메인: `homepageoutomationplatform.com`

## 실행 방법

`index.html`을 브라우저로 열면 바로 사용할 수 있습니다.

## 주요 기능

- 병원, 법률/세무, 뷰티, 교육, 부동산, B2B 컨설팅 업종 템플릿
- 상호명, 서비스, 지역, 고객군 입력에 따른 실시간 랜딩페이지 문구 생성
- 톤과 전환 목표별 CTA 문구 자동 조정
- 리드마그넷, 문의 채널, 후속 메시지 기반 퍼널 구성
- 고객 망설임 해소 섹션과 리드 수집 폼 생성
- Vercel 서버리스 API를 통한 Supabase 리드 저장
- SEO 제목, 검색 설명, 광고 문구 자동 생성
- 데스크톱/모바일 미리보기
- 완성된 퍼널 랜딩페이지 HTML 복사 및 다운로드

## 인터넷 공개

이 폴더는 정적 사이트라 GitHub Pages, Netlify, Vercel에 바로 배포할 수 있습니다.
Supabase 리드 저장까지 쓰려면 Vercel 배포를 권장합니다. 도메인과 Supabase 연결 절차는 `DEPLOY.md`를 참고하세요.

## Supabase 연결 파일

- `api/leads.js`: 문의 폼 데이터를 Supabase로 저장하는 Vercel API
- `supabase.sql`: Supabase에서 실행할 테이블 생성 SQL
- `.env.example`: Vercel에 등록할 환경변수 예시

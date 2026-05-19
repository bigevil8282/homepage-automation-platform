# 인터넷 공개 및 도메인 연결

연결할 도메인: `homepageoutomationplatform.com`

도메인은 DNS에서 대소문자를 구분하지 않으므로 `HOMEPAGEOUTOMATIONPLATFORM.com`도 같은 주소입니다.

이 프로젝트는 Vercel + Supabase 조합을 기본 운영 방식으로 권장합니다.

## 0. Supabase 리드 저장소 만들기

1. Supabase 프로젝트 생성
2. SQL Editor 열기
3. 프로젝트의 `supabase.sql` 내용을 실행
4. Project Settings -> API에서 Project URL 확인
5. Project Settings -> API Keys에서 Service Role Key 확인

Vercel 환경변수:

```txt
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

주의: Service Role Key는 브라우저에 노출하면 안 됩니다. 이 프로젝트는 `api/leads.js` 서버리스 함수에서만 사용하도록 구성했습니다.

## 1. 가장 쉬운 배포: Netlify

1. <https://app.netlify.com/drop> 접속
2. 이 폴더 전체를 드래그해서 업로드
3. Netlify에서 생성된 임시 주소 확인
4. Site settings -> Domain management -> Add a domain
5. `homepageoutomationplatform.com` 입력
6. Netlify가 안내하는 DNS 레코드를 도메인 구매처에 입력

일반적으로 Netlify DNS를 쓰면 도메인 구매처에서 네임서버를 Netlify 값으로 바꾸면 됩니다.

## 2. GitHub Pages로 연결

이 프로젝트에는 GitHub Pages용 `CNAME` 파일이 이미 들어 있습니다.

GitHub Pages DNS 레코드:

```txt
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: 사용자명.github.io
```

GitHub 저장소 설정:

1. 저장소에 파일 업로드
2. Settings -> Pages
3. Source를 `Deploy from a branch`로 설정
4. Custom domain에 `homepageoutomationplatform.com` 입력
5. `Enforce HTTPS` 켜기

`www` 레코드의 `사용자명.github.io`는 실제 GitHub 계정명으로 바꿔야 합니다.

## 3. Vercel로 연결

1. <https://vercel.com/new> 접속
2. GitHub 저장소 연결
3. Framework Preset은 `Other`
4. Build Command는 비워두기
5. Output Directory는 `.`
6. Project Settings -> Environment Variables에 `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` 추가
7. Project Settings -> Domains
8. `homepageoutomationplatform.com` 추가
9. Vercel이 안내하는 DNS 레코드를 Cloudflare에 입력

일반적으로 Vercel DNS 레코드는 아래 형태입니다.

```txt
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 4. Cloudflare DNS에서 입력

도메인 구매처에서 Cloudflare 네임서버로 연결할 경우, Cloudflare가 안내한 네임서버 2개를 모두 입력해야 합니다.

Cloudflare 네임서버:

```txt
cesar.ns.cloudflare.com
grannbo.ns.cloudflare.com
```

도메인 구매처의 네임서버 관리 화면에서 기존 네임서버를 위 2개로 교체하면 Cloudflare가 `homepageoutomationplatform.com`의 DNS를 관리하게 됩니다.

Cloudflare에서 DNS만 관리하고 사이트는 Vercel에 올릴 경우:

```txt
Type: A
Name: @
IPv4 address: 76.76.21.21
Proxy status: DNS only

Type: CNAME
Name: www
Target: cname.vercel-dns.com
Proxy status: DNS only
```

Cloudflare Pages에 직접 배포할 경우:

1. Cloudflare Dashboard -> Workers & Pages
2. Create application -> Pages
3. 이 프로젝트를 GitHub 저장소로 연결
4. Build command는 비워두기
5. Build output directory는 `/`
6. 배포 후 Custom domains에서 `homepageoutomationplatform.com` 추가

Cloudflare Pages를 쓰면 Cloudflare가 필요한 DNS 레코드를 자동으로 만들 수 있습니다.

## 배포 후 확인

- `https://homepageoutomationplatform.com` 접속
- `https://www.homepageoutomationplatform.com` 접속
- 모바일 화면 확인
- HTML 복사와 다운로드 확인
- 실제 고객 연락처를 받을 경우 개인정보 처리방침과 수집 동의 문구 추가

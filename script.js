const automationHeroImage = "url('assets/automation-background.jpg')";

const industries = {
  clinic: {
    label: "병원 / 의원",
    hint: "신뢰, 진료, 예약 중심",
    service: "개인별 맞춤 진료와 건강 관리",
    image: "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80')",
    benefits: ["전문의 상담", "편안한 진료 동선", "예약부터 사후관리까지"],
    objections: ["비용이 불명확할까 걱정돼요", "내 상황에 맞는지 모르겠어요", "예약 후 오래 기다릴까 걱정돼요"],
    steps: ["문제 인지", "자가 진단", "전문 상담", "예약 확정", "사후 관리"]
  },
  law: {
    label: "법률 / 세무",
    hint: "전문성, 리스크 해결",
    service: "복잡한 문제를 정리하는 전문 자문",
    image: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80')",
    benefits: ["사안별 전략 수립", "명확한 진행 안내", "비밀 유지와 책임 상담"],
    objections: ["내 사안이 상담 대상인지 모르겠어요", "비용과 기간이 걱정돼요", "자료 준비가 어렵게 느껴져요"],
    steps: ["사안 인지", "자료 체크", "전문가 검토", "전략 상담", "후속 대응"]
  },
  beauty: {
    label: "뷰티 / 웰니스",
    hint: "감각, 후기, 예약 중심",
    service: "일상에 변화를 주는 프리미엄 케어",
    image: "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80')",
    benefits: ["개인 맞춤 디자인", "섬세한 케어", "재방문을 부르는 만족도"],
    objections: ["나에게 어울리는지 모르겠어요", "결과가 과하지 않을까 걱정돼요", "예약 가능 시간이 궁금해요"],
    steps: ["스타일 탐색", "후기 확인", "맞춤 상담", "예약 확정", "재방문 관리"]
  },
  education: {
    label: "교육 / 학원",
    hint: "성과, 커리큘럼, 상담",
    service: "목표 달성을 위한 체계적인 교육",
    image: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80')",
    benefits: ["수준별 커리큘럼", "학습 데이터 관리", "꾸준한 피드백"],
    objections: ["우리 아이에게 맞을지 모르겠어요", "실제 성과가 궁금해요", "수업 방식이 부담스럽지 않을까요"],
    steps: ["학습 고민", "진단 신청", "커리큘럼 제안", "수강 등록", "성과 점검"]
  },
  realestate: {
    label: "부동산 / 분양",
    hint: "입지, 상담, 매물 전환",
    service: "조건에 맞는 공간과 투자 기회 제안",
    image: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80')",
    benefits: ["검증된 매물 큐레이션", "현장 중심 설명", "계약 전후 지원"],
    objections: ["실매물인지 확인하고 싶어요", "입지와 가격이 적절한지 궁금해요", "계약 과정이 복잡할까 걱정돼요"],
    steps: ["관심 형성", "조건 입력", "매물 추천", "현장 방문", "계약 지원"]
  },
  b2b: {
    label: "B2B / 컨설팅",
    hint: "문제 해결, 리드 확보",
    service: "성장을 만드는 실무형 컨설팅",
    image: automationHeroImage,
    benefits: ["문제 구조화", "실행 가능한 로드맵", "성과 지표 관리"],
    objections: ["우리 회사에 맞는지 모르겠어요", "투자 대비 성과가 궁금해요", "내부 실행까지 가능할까요"],
    steps: ["문제 인식", "자료 제출", "진단 미팅", "제안서 검토", "프로젝트 착수"]
  }
};

const tones = {
  trust: {
    headline: "검증된 전문가가 처음부터 끝까지 책임집니다",
    body: "복잡한 선택을 쉽게 만들고, 필요한 순간에 정확한 답을 제공하는 전문 서비스를 경험하세요."
  },
  premium: {
    headline: "디테일이 다른 서비스로 더 높은 만족을 만듭니다",
    body: "고객의 상황과 취향을 세심하게 반영해 결과의 완성도를 높이는 프리미엄 경험을 제공합니다."
  },
  friendly: {
    headline: "어렵지 않게, 편하게 시작하는 전문 서비스",
    body: "처음 문의하는 고객도 쉽게 이해할 수 있도록 친절하게 안내하고 필요한 부분만 정확히 제안합니다."
  },
  urgent: {
    headline: "지금 필요한 해결책을 빠르게 연결합니다",
    body: "상담부터 실행까지 지연을 줄이고, 고객이 바로 다음 결정을 내릴 수 있도록 돕습니다."
  }
};

const goals = {
  consult: "무료 상담 신청",
  booking: "예약하기",
  quote: "견적 문의",
  store: "방문 상담"
};

const channels = {
  phone: { label: "전화 상담", action: "tel:010-0000-0000", micro: "전화번호를 남기면 담당자가 빠르게 연락드립니다." },
  kakao: { label: "카카오톡 상담", action: "#lead-form", micro: "카카오톡으로 상담 가능한 시간과 필요한 정보를 안내합니다." },
  form: { label: "폼 접수", action: "#lead-form", micro: "상담에 필요한 정보를 남기면 맞춤 안내를 보내드립니다." },
  calendar: { label: "예약 캘린더", action: "#lead-form", micro: "가능한 시간을 선택하면 예약 확정 안내를 드립니다." }
};

const state = {
  industry: "clinic",
  variant: 0
};

const fieldIds = [
  "businessName",
  "mainService",
  "serviceArea",
  "targetCustomer",
  "tone",
  "goal",
  "proofPoints",
  "leadMagnet",
  "contactChannel",
  "followUp"
];

const fields = fieldIds.reduce((acc, id) => ({ ...acc, [id]: document.getElementById(id) }), {});
const industryGrid = document.getElementById("industryGrid");
const preview = document.getElementById("sitePreview");
const previewFrame = document.getElementById("previewFrame");
const toast = document.getElementById("toast");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function getProofs() {
  return fields.proofPoints.value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4);
}

function getCopy() {
  const industry = industries[state.industry];
  const tone = tones[fields.tone.value];
  const channel = channels[fields.contactChannel.value];
  const name = fields.businessName.value.trim() || "우리 브랜드";
  const service = fields.mainService.value.trim() || industry.service;
  const area = fields.serviceArea.value.trim() || "전국";
  const target = fields.targetCustomer.value.trim() || "전문 서비스를 찾는 고객";
  const leadMagnet = fields.leadMagnet.value.trim() || "무료 진단 자료";
  const followUp = fields.followUp.value.trim() || "문의 후 담당자가 빠르게 다음 단계를 안내드립니다.";
  const variants = [
    `${name}, ${area}에서 ${target}에게 가장 빠른 ${service}를 제공합니다.`,
    `${target}을 위한 ${name}의 ${service}. 상담부터 결과까지 명확하게 안내합니다.`,
    `${area} 고객이 선택하는 ${name}. 필요한 순간 바로 연결되는 ${service}를 만나보세요.`
  ];

  return {
    name,
    service,
    area,
    target,
    leadMagnet,
    followUp,
    headline: variants[state.variant % variants.length],
    subhead: `${tone.headline}. ${tone.body}`,
    cta: goals[fields.goal.value],
    channel,
    benefits: industry.benefits,
    objections: industry.objections,
    steps: industry.steps,
    proofs: getProofs(),
    image: industry.image
  };
}

function renderIndustryButtons() {
  industryGrid.innerHTML = Object.entries(industries).map(([key, item]) => `
    <button class="template-card ${key === state.industry ? "active" : ""}" type="button" data-industry="${key}" role="radio" aria-checked="${key === state.industry}">
      <strong>${item.label}</strong>
      <span>${item.hint}</span>
    </button>
  `).join("");
}

function renderPreview() {
  const copy = getCopy();
  const proofItems = copy.proofs.length ? copy.proofs : ["빠른 응답", "투명한 안내", "전문 경험", "사후 관리"];

  preview.style.setProperty("--hero-image", `${copy.image || automationHeroImage}, ${automationHeroImage}`);
  preview.innerHTML = `
    <section class="preview-hero">
      <div class="preview-nav">
        <span>${escapeHtml(copy.name)}</span>
        <a href="${copy.channel.action}">${escapeHtml(copy.cta)}</a>
      </div>
      <div class="preview-hero-content">
        <p class="eyebrow">${escapeHtml(copy.area)} 전문 서비스</p>
        <h2>${escapeHtml(copy.headline)}</h2>
        <p>${escapeHtml(copy.subhead)}</p>
        <div class="cta-row">
          <a class="preview-cta" href="#lead-form">${escapeHtml(copy.cta)}</a>
          <a class="preview-cta alt" href="#funnel">퍼널 보기</a>
        </div>
      </div>
    </section>

    <section class="preview-section compact-band">
      <div class="metric">
        <b>Awareness</b>
        <span>문제 인지</span>
      </div>
      <div class="metric">
        <b>Lead</b>
        <span>${escapeHtml(copy.leadMagnet)}</span>
      </div>
      <div class="metric">
        <b>Conversion</b>
        <span>${escapeHtml(copy.cta)}</span>
      </div>
      <div class="metric">
        <b>Follow-up</b>
        <span>후속 안내</span>
      </div>
    </section>

    <section class="preview-section" id="services">
      <div class="section-heading">
        <p class="eyebrow">Landing Page Strategy</p>
        <h3>${escapeHtml(copy.target)}이 ${escapeHtml(copy.name)}를 선택하는 이유</h3>
        <p>${escapeHtml(copy.service)}에 필요한 핵심 정보를 정리하고, 고객이 안심하고 문의할 수 있는 흐름으로 설계했습니다.</p>
      </div>
      <div class="cards">
        ${copy.benefits.map((benefit) => `
          <div class="preview-card">
            <b>${escapeHtml(benefit)}</b>
            <p>방문자가 서비스 차이를 빠르게 이해하고 다음 행동으로 넘어가도록 돕습니다.</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="preview-section muted" id="funnel">
      <div class="section-heading">
        <p class="eyebrow">Full Funnel</p>
        <h3>랜딩페이지부터 상담 전환까지 단계별 퍼널</h3>
        <p>각 단계는 방문자의 의심을 줄이고, 리드 정보를 확보한 뒤, 상담 또는 예약으로 연결되도록 구성됩니다.</p>
      </div>
      <div class="funnel-board">
        ${copy.steps.map((step, index) => `
          <div class="funnel-step">
            <span class="step-num">${index + 1}</span>
            <b>${escapeHtml(step)}</b>
            <p>${escapeHtml(index === 1 ? copy.leadMagnet : index === 3 ? copy.channel.micro : "다음 행동이 자연스럽게 이어지도록 필요한 메시지를 배치합니다.")}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="preview-section">
      <div class="section-heading">
        <p class="eyebrow">Objection Handling</p>
        <h3>고객이 망설이는 지점을 먼저 해소합니다</h3>
      </div>
      <div class="objection-list">
        ${copy.objections.map((item) => `
          <div>
            <span>고객 고민</span>
            <b>${escapeHtml(item)}</b>
            <p>${escapeHtml(proofItems.join(", "))}를 근거로 문의 전 불안을 줄입니다.</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="lead-section" id="lead-form">
      <div>
        <p class="eyebrow">Lead Capture</p>
        <h3>${escapeHtml(copy.leadMagnet)} 받고 상담을 시작하세요</h3>
        <p>${escapeHtml(copy.followUp)}</p>
      </div>
      <form class="lead-form">
        <input name="name" type="text" placeholder="이름" aria-label="이름" required>
        <input name="phone" type="tel" placeholder="연락처" aria-label="연락처" required>
        <select name="interest" aria-label="관심 단계">
          <option>상담이 필요합니다</option>
          <option>가격이 궁금합니다</option>
          <option>예약 가능 시간을 알고 싶습니다</option>
        </select>
        <input name="source" type="hidden" value="${escapeHtml(copy.name)} 퍼널 랜딩페이지">
        <button type="submit">${escapeHtml(copy.cta)}</button>
        <small>${escapeHtml(copy.channel.micro)}</small>
      </form>
    </section>

    <section class="preview-section">
      <div class="section-heading">
        <p class="eyebrow">Trust Points</p>
        <h3>광고와 상세페이지에 바로 쓰는 신뢰 포인트</h3>
      </div>
      <div class="proof-strip">
        ${proofItems.map((proof) => `<div class="proof-item">${escapeHtml(proof)}</div>`).join("")}
      </div>
    </section>

    <section class="final-cta">
      <div>
        <h3>${escapeHtml(copy.name)} 퍼널을 지금 실행하세요</h3>
        <p>${escapeHtml(copy.area)}에서 ${escapeHtml(copy.service)}가 필요하다면 랜딩, 리드 수집, 후속 안내까지 한 흐름으로 연결합니다.</p>
      </div>
      <a class="preview-cta" href="${copy.channel.action}">${escapeHtml(copy.cta)}</a>
    </section>
  `;

  document.getElementById("seoTitle").textContent = `${copy.name} | ${copy.area} ${copy.service}`;
  document.getElementById("seoDescription").textContent = `${copy.target}을 위한 ${copy.area} 전문 ${copy.service}. ${copy.leadMagnet}과 ${copy.cta}로 빠르게 문의하세요.`;
  document.getElementById("adCopy").textContent = `${copy.name} ${copy.cta} - ${copy.leadMagnet}, ${proofItems.slice(0, 2).join(", ")}.`;
  document.getElementById("funnelSummary").textContent = copy.steps.join(" → ");
}

function getStylesForExport() {
  return Array.from(document.styleSheets)
    .filter((sheet) => sheet.href && sheet.href.endsWith("styles.css"))
    .map((sheet) => {
      try {
        return Array.from(sheet.cssRules).map((rule) => rule.cssText).join("\n");
      } catch {
        return "";
      }
    })
    .join("\n");
}

function makeStandaloneHtml() {
  const copy = getCopy();
  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(copy.name)} | ${escapeHtml(copy.area)} ${escapeHtml(copy.service)}</title>
  <meta name="description" content="${escapeHtml(copy.target)}을 위한 ${escapeHtml(copy.area)} 전문 ${escapeHtml(copy.service)}.">
  <style>${getStylesForExport()}</style>
</head>
<body>
${preview.outerHTML}
<script>
${getLeadCaptureScript()}
</script>
</body>
</html>`;
}

function getLeadCaptureScript() {
  return `document.addEventListener("submit", async function (event) {
  var form = event.target;
  if (!form.classList.contains("lead-form")) return;
  event.preventDefault();
  var button = form.querySelector("button");
  var original = button ? button.textContent : "";
  if (button) {
    button.disabled = true;
    button.textContent = "전송 중...";
  }
  try {
    var payload = Object.fromEntries(new FormData(form).entries());
    payload.page_url = location.href;
    var response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error("lead_submit_failed");
    form.reset();
    alert("문의가 접수되었습니다.");
  } catch (error) {
    alert("저장에 실패했습니다. 잠시 후 다시 시도해주세요.");
  } finally {
    if (button) {
      button.disabled = false;
      button.textContent = original;
    }
  }
});`;
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1900);
}

function downloadHtml() {
  const blob = new Blob([makeStandaloneHtml()], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${getCopy().name.replace(/\s+/g, "-")}-funnel-page.html`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("퍼널 랜딩페이지 HTML 파일을 만들었습니다.");
}

renderIndustryButtons();
renderPreview();

industryGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-industry]");
  if (!button) return;
  state.industry = button.dataset.industry;
  fields.mainService.value = industries[state.industry].service;
  renderIndustryButtons();
  renderPreview();
});

Object.values(fields).forEach((field) => {
  field.addEventListener("input", renderPreview);
  field.addEventListener("change", renderPreview);
});

document.getElementById("shuffleCopy").addEventListener("click", () => {
  state.variant += 1;
  renderPreview();
  showToast("새 문구와 퍼널 흐름으로 다시 구성했습니다.");
});

document.getElementById("copyHtml").addEventListener("click", async () => {
  await copyToClipboard(makeStandaloneHtml());
  showToast("HTML을 클립보드에 복사했습니다.");
});

document.getElementById("downloadHtml").addEventListener("click", downloadHtml);

document.querySelectorAll(".device-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".device-tab").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    previewFrame.classList.toggle("mobile", button.dataset.device === "mobile");
    previewFrame.classList.toggle("desktop", button.dataset.device === "desktop");
  });
});

document.addEventListener("submit", async (event) => {
  const form = event.target;
  if (!form.classList.contains("lead-form")) return;
  event.preventDefault();

  const button = form.querySelector("button");
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "전송 중...";

  try {
    const payload = Object.fromEntries(new FormData(form).entries());
    payload.page_url = window.location.href;
    payload.generated_for = getCopy().name;

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) throw new Error("lead_submit_failed");
    form.reset();
    showToast("문의가 Supabase에 저장되었습니다.");
  } catch {
    showToast("Vercel 배포 후 Supabase 연결 시 저장됩니다.");
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
});

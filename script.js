
// ==========================================
// SCOOPIT - Main JavaScript
// Human Fact-Checking Platform
// ==========================================

// ---------- 1. ARTICLE DATABASE ----------

const articles = [
  {
    id: "A01",
    category: "Politics",
    publisher: "bdnews24.com",
    title: "Tarique Rahman's government restores stability, but economy, energy, governance remain major tests",
    date: "Not recorded",
    url: "https://bdnews24.com/politics/3256038a3c60",
    claims: "CLM001–CLM010",
    summary: "Government performance, political stability, economic challenges, energy and governance."
  },
  {
    id: "A02",
    category: "Business",
    publisher: "bdnews24.com",
    title: "Bangladesh export earnings fall 0.58% in FY2025-26, miss annual target by 13%",
    date: "Not recorded",
    url: "https://bdnews24.com/business/f2e977bbbb29",
    claims: "CLM011–CLM020",
    summary: "Export earnings, annual export performance and ready-made garment exports."
  },
  {
    id: "A03",
    category: "Science & Technology",
    publisher: "Dhaka Tribune",
    title: "Bangladesh expands high-performance computing for research and AI",
    date: "14 January 2026",
    url: "https://www.dhakatribune.com/science-technology-environment/401027/bangladesh-expands-high-performance-computing-for/",
    claims: "CLM021–CLM030",
    summary: "GPU Cloud, high-performance computing, research and AI infrastructure."
  },
  {
    id: "A04",
    category: "Health & Education",
    publisher: "The Daily Star",
    title: "Healthcare reels from shortage of nurses, midwives",
    date: "Not recorded",
    url: "https://www.thedailystar.net/news/bangladesh/news/healthcare-reels-shortage-nurses-midwives-4202591",
    claims: "CLM031–CLM040",
    summary: "Healthcare workforce shortages, nurses, midwives and research findings."
  },
  {
    id: "A05",
    category: "International Affairs",
    publisher: "UNB",
    title: "Dhaka seeks fitting measures, security in Rakhine to avoid another cycle of displacement",
    date: "6 September 2026",
    url: "https://www.unb.com.bd/category/bangladesh/dhaka-seeks-fitting-measures-security-in-rakhine-to-avoid-another-cycle-of-displacement/194751",
    claims: "CLM041–CLM050",
    summary: "Rakhine security, Rohingya repatriation and Bangladesh's diplomatic efforts."
  }
];


// ---------- 2. HUMAN VERDICT DATABASE ----------

const verdictMap = {
  CLM001: "Verified",
  CLM002: "Verified",
  CLM003: "Unverifiable",
  CLM004: "Unverifiable",
  CLM005: "Unverifiable",
  CLM006: "Unverifiable",
  CLM007: "Unverifiable",
  CLM008: "Unverifiable",
  CLM009: "Verified",
  CLM010: "Verified",

  CLM011: "Partially True",
  CLM012: "Verified",
  CLM013: "Verified",
  CLM014: "Verified",
  CLM015: "Verified",
  CLM016: "Verified",
  CLM017: "Verified",
  CLM018: "Partially True",
  CLM019: "Partially True",
  CLM020: "Verified",

  CLM021: "Verified",
  CLM022: "Verified",
  CLM023: "Verified",
  CLM024: "Unverifiable",
  CLM025: "Unverifiable",
  CLM026: "Verified",
  CLM027: "Verified",
  CLM028: "Partially True",
  CLM029: "Verified",
  CLM030: "Verified",

  CLM031: "Partially True",
  CLM032: "Misleading",
  CLM033: "Unverifiable",
  CLM034: "Unverifiable",
  CLM035: "Unverifiable",
  CLM036: "Verified",
  CLM037: "Unverifiable",
  CLM038: "Unverifiable",
  CLM039: "Unverifiable",
  CLM040: "Unverifiable",

  CLM041: "Unverifiable",
  CLM042: "Partially True",
  CLM043: "Partially True",
  CLM044: "Partially True",
  CLM045: "Partially True",
  CLM046: "Unverifiable",
  CLM047: "Partially True",
  CLM048: "Partially True",
  CLM049: "Unverifiable",
  CLM050: "Verified"
};


// ---------- 3. CLAIM DATABASE ----------

const claims = [];

for (let i = 1; i <= 50; i++) {
  const id = `CLM${String(i).padStart(3, "0")}`;

  let articleId = "A01";
  if (i > 10 && i <= 20) articleId = "A02";
  else if (i > 20 && i <= 30) articleId = "A03";
  else if (i > 30 && i <= 40) articleId = "A04";
  else if (i > 40) articleId = "A05";

  claims.push({
    id,
    articleId,
    statement: "Original claim statement to be added.",
    aiVerdict: "Not Recorded",
    aiAnalysis: "Original claim-by-claim AI output was not preserved.",
    humanVerdict: verdictMap[id],
    humanVerification: "Human verification findings are documented in the investigation report.",
    supportingEvidence: "See the relevant evidence records.",
    contradictingEvidence: "See the relevant evidence records.",
    explanation: "Refer to the claim-by-claim investigation report for the detailed explanation."
  });
}


// ---------- 4. DETAILED CLAIM NOTES ----------

const claimNotes = {
  CLM001: {
    humanVerification: "IPU information confirmed that BNP won the election held on 12 February 2026.",
    supportingEvidence: "IPU parliamentary election information.",
    explanation: "The election result was supported by the available institutional record."
  },
  CLM002: {
    humanVerification: "The oath-taking date of 17 February 2026 was supported by IPU and BSS reporting.",
    supportingEvidence: "IPU and BSS reporting.",
    explanation: "Available records supported the reported oath-taking date."
  },
  CLM009: {
    humanVerification: "A technical fault at the Moheshkhali LNG terminal reduced gas supply by approximately 450 mmcfd.",
    supportingEvidence: "The Business Standard report citing Petrobangla.",
    explanation: "The reported supply reduction was supported by available reporting."
  },
  CLM010: {
    humanVerification: "BSS reporting citing BBS recorded July 2026 point-to-point inflation at 8.32%.",
    supportingEvidence: "BSS report citing Bangladesh Bureau of Statistics.",
    explanation: "The reported inflation figure was supported by the available data."
  },
  CLM011: {
    humanVerification: "EPB reported a 0.58% decline, while Bangladesh Bank reported 0.17% growth for FY2025–26.",
    supportingEvidence: "EPB official export data.",
    contradictingEvidence: "Bangladesh Bank June 2026 data.",
    explanation: "Different official sources reported different export growth figures."
  },
  CLM018: {
    humanVerification: "Bangladesh Bank data indicated April 2026 export growth of approximately 32.36%.",
    supportingEvidence: "Bangladesh Bank April 2026 data.",
    explanation: "The reported growth was close, but the exact percentage required clarification."
  },
  CLM019: {
    humanVerification: "Bangladesh Bank data indicated a May 2026 export decline of approximately 6.90%.",
    supportingEvidence: "Bangladesh Bank June 2026 data.",
    explanation: "The reported decline was close, but the exact percentage differed."
  },
  CLM028: {
    humanVerification: "The Kubernetes-based PaaS platform was reported, but CNCF certification was not independently confirmed.",
    supportingEvidence: "Dhaka Tribune reporting.",
    explanation: "The platform information was supported, while the certification detail remained unconfirmed."
  },
  CLM030: {
    humanVerification: "The 2,240 teraFLOPS figure referred to the shared GPU Cloud platform capacity, not each individual GPU.",
    supportingEvidence: "PID announcement dated 14 January 2026.",
    explanation: "The technical context of the computing capacity was clarified."
  },
  CLM031: {
    humanVerification: "The reported healthcare workforce information required further examination of the underlying study.",
    supportingEvidence: "The Daily Star report.",
    explanation: "The available information supported some aspects, but the original research needed independent examination."
  },
  CLM032: {
    humanVerification: "WHO clarified that 44.5 is a benchmark associated with workforce planning, not a universal recommendation for every country.",
    supportingEvidence: "WHO health workforce clarification.",
    explanation: "The benchmark needed additional context to avoid an inaccurate interpretation."
  },
  CLM036: {
    humanVerification: "The reported workforce ratio of 1:0.75:0.74 compared with 1:3:5 was supported by the government task force report.",
    supportingEvidence: "Government task force report.",
    explanation: "The ratio was supported by the available government report."
  },
  CLM047: {
    humanVerification: "UNHCR recorded 1,208,018 refugees as of 31 October 2026, while UNB reported over 1.3 million.",
    supportingEvidence: "UNHCR Bangladesh data.",
    explanation: "The figures differed and required clarification of reporting dates and population coverage."
  },
  CLM050: {
    humanVerification: "The National Strategy Formulation Committee was also reported by BSS.",
    supportingEvidence: "BSS committee report.",
    explanation: "The committee information was supported by the available reporting."
  }
};

claims.forEach(claim => {
  if (claimNotes[claim.id]) {
    Object.assign(claim, claimNotes[claim.id]);
  }
});


// ---------- 5. SOURCE DATABASE ----------

const sources = [
  {
    id: "SRC01",
    name: "International Parliamentary Union (IPU)",
    type: "Primary",
    score: "Provisional: 10/10",
    url: "https://data.ipu.org/parliament/BD/BD-LC01/election/BD-LC01-E20260212/"
  },
  {
    id: "SRC02",
    name: "The Business Standard (TBS)",
    type: "Secondary",
    score: "Provisional: 9/10",
    url: "https://www.tbsnews.net/bangladesh/energy/technical-fault-moheskhali-lng-terminal-cuts-gas-supply-natl-grid-450-mmcfd"
  },
  {
    id: "SRC03",
    name: "Export Promotion Bureau (EPB)",
    type: "Primary",
    score: "Provisional: 10/10",
    url: "https://epb.portal.gov.bd/pages/epb-export-datas/"
  },
  {
    id: "SRC04",
    name: "Bangladesh Bank - June 2026 Data",
    type: "Primary",
    score: "Provisional: 10/10",
    url: "https://www.bb.org.bd/pub/monthly/selectedecooind/2026_june.pdf"
  },
  {
    id: "SRC05",
    name: "Bangladesh Bank - April 2026 Data",
    type: "Primary",
    score: "Provisional: 10/10",
    url: "https://www.bb.org.bd/pub/monthly/selectedecooind/2026_april.pdf"
  },
  {
    id: "SRC06",
    name: "Press Information Department (PID)",
    type: "Primary",
    score: "Provisional: 10/10",
    url: "https://pressinform.gov.bd/pages/all-notes/তথ্যবিবরণী-১৪-জানুয়ারি-২০২৬-69676b3ba8313736dab2353b"
  },
  {
    id: "SRC07",
    name: "Dhaka Tribune",
    type: "Secondary",
    score: "Provisional: 9/10",
    url: "https://www.dhakatribune.com/science-technology-environment/401027/bangladesh-expands-high-performance-computing-for/"
  },
  {
    id: "SRC08",
    name: "The Daily Star",
    type: "Secondary",
    score: "Provisional: 9/10",
    url: "https://www.thedailystar.net/news/bangladesh/news/healthcare-reels-shortage-nurses-midwives-4202591"
  },
  {
    id: "SRC09",
    name: "World Health Organization (WHO)",
    type: "Primary",
    score: "Provisional: 10/10",
    url: "https://www.who.int/news-room/questions-and-answers/item/who-health-workforce-support-and-safeguards-list"
  },
  {
    id: "SRC10",
    name: "Government Task Force Report",
    type: "Primary",
    score: "Pending document review",
    url: ""
  },
  {
    id: "SRC11",
    name: "United News of Bangladesh (UNB)",
    type: "Secondary",
    score: "Provisional: 9/10",
    url: "https://www.unb.com.bd/category/bangladesh/dhaka-seeks-fitting-measures-security-in-rakhine-to-avoid-another-cycle-of-displacement/194751"
  },
  {
    id: "SRC12",
    name: "UNHCR Bangladesh Data Portal",
    type: "Primary",
    score: "Provisional: 10/10",
    url: "https://data.unhcr.org/en/country/BGD/591"
  },
  {
    id: "SRC13",
    name: "Bangladesh Sangbad Sangstha (BSS) - Inflation Report",
    type: "Secondary",
    score: "Provisional: 9/10",
    url: ""
  },
  {
    id: "SRC14",
    name: "Bangladesh Sangbad Sangstha (BSS) - Committee Report",
    type: "Secondary",
    score: "Provisional: 9/10",
    url: "https://www.bssnews.net/news-flash/405228"
  }
];


// ---------- 6. EVIDENCE DATABASE ----------

const evidence = sources.map(source => ({
  evidenceId: `EV-${source.id.slice(3)}`,
  sourceId: source.id,
  sourceName: source.name,
  sourceType: source.type,
  classification: "Contextual / Supporting - confirm per claim",
  excerpt: "Relevant evidence excerpt to be added from the original source."
}));


// ---------- 7. DASHBOARD ----------

function updateDashboard() {
  const counts = {
    "Verified": 0,
    "Partially True": 0,
    "Misleading": 0,
    "False": 0,
    "Unverifiable": 0
  };

  claims.forEach(claim => {
    if (counts[claim.humanVerdict] !== undefined) {
      counts[claim.humanVerdict]++;
    }
  });

  document.getElementById("totalArticles").textContent = articles.length;
  document.getElementById("totalClaims").textContent = claims.length;
  document.getElementById("verifiedCount").textContent = counts["Verified"];
  document.getElementById("partialCount").textContent = counts["Partially True"];
  document.getElementById("misleadingCount").textContent = counts["Misleading"];
  document.getElementById("falseCount").textContent = counts["False"];
  document.getElementById("unverifiableCount").textContent = counts["Unverifiable"];

  document.getElementById("disagreementRate").textContent = "N/A";

  const chart = document.getElementById("verdictChart");
  const total = claims.length || 1;

  chart.innerHTML = Object.entries(counts).map(([label, count]) => {
    const width = (count / total) * 100;
    return `
      <div class="bar-row">
        <span>${label}</span>
        <div class="bar-track">
          <div class="bar-fill" style="width:${width}%"></div>
        </div>
        <strong>${count}</strong>
      </div>
    `;
  }).join("");
}


// ---------- 8. VERDICT BADGE ----------

function verdictClass(verdict) {
  return verdict.toLowerCase().replace(/\s+/g, "-");
}

function verdictBadge(verdict) {
  return `<span class="verdict ${verdictClass(verdict)}">${verdict}</span>`;
}


// ---------- 9. CLAIM TABLE ----------

function renderClaims() {
  const search = document.getElementById("claimSearch").value.toLowerCase();
  const articleFilter = document.getElementById("articleFilter").value;
  const verdictFilter = document.getElementById("verdictFilter").value;

  const filtered = claims.filter(claim => {
    const article = articles.find(a => a.id === claim.articleId);

    const matchesSearch =
      claim.id.toLowerCase().includes(search) ||
      claim.statement.toLowerCase().includes(search) ||
      article.title.toLowerCase().includes(search);

    const matchesArticle =
      articleFilter === "all" || claim.articleId === articleFilter;

    const matchesVerdict =
      verdictFilter === "all" || claim.humanVerdict === verdictFilter;

    return matchesSearch && matchesArticle && matchesVerdict;
  });

  const tbody = document.getElementById("claimsTable");

  tbody.innerHTML = filtered.map(claim => `
    <tr>
      <td>${claim.id}</td>
      <td>${claim.articleId}</td>
      <td>${escapeHTML(claim.statement)}</td>
      <td>${verdictBadge(claim.humanVerdict)}</td>
      <td><button class="detail-btn" onclick="openClaim('${claim.id}')">View details →</button></td>
    </tr>
  `).join("");

  document.getElementById("claimResultCount").textContent =
    `Showing ${filtered.length} of ${claims.length} claims.`;
}


// ---------- 10. AI VS HUMAN TABLE ----------

function renderComparison() {
  const tbody = document.getElementById("comparisonTable");

  tbody.innerHTML = claims.map(claim => `
    <tr>
      <td>${claim.id}</td>
      <td>Not Recorded</td>
      <td>${verdictBadge(claim.humanVerdict)}</td>
      <td><span class="verdict unverifiable">Pending Comparison</span></td>
    </tr>
  `).join("");
}


// ---------- 11. SOURCE TABLE ----------

function renderSources() {
  const search = document.getElementById("sourceSearch").value.toLowerCase();

  const filtered = sources.filter(source =>
    source.name.toLowerCase().includes(search) ||
    source.id.toLowerCase().includes(search)
  );

  document.getElementById("sourcesTable").innerHTML =
    filtered.map(source => `
      <tr>
        <td>${source.id}</td>
        <td>${escapeHTML(source.name)}</td>
        <td>${source.type}</td>
        <td>${source.score}</td>
        <td>
          ${source.url
            ? `<a href="${escapeHTML(source.url)}" target="_blank" rel="noopener noreferrer">Open source ↗</a>`
            : "Link not available"}
        </td>
      </tr>
    `).join("");
}


// ---------- 12. ARTICLE CARDS ----------

function renderArticles() {
  document.getElementById("articlesGrid").innerHTML =
    articles.map(article => {
      const articleClaims = claims.filter(c => c.articleId === article.id);
      const verified = articleClaims.filter(c => c.humanVerdict === "Verified").length;

      return `
        <article class="article-card">
          <span class="category">${article.category}</span>
          <h3>${escapeHTML(article.title)}</h3>
          <p><strong>Publisher:</strong> ${article.publisher}</p>
          <p><strong>Publication date:</strong> ${article.date}</p>
          <p>${escapeHTML(article.summary)}</p>
          <p><strong>Claims:</strong> ${articleClaims.length} | <strong>Verified:</strong> ${verified}</p>
          <a href="${article.url}" target="_blank" rel="noopener noreferrer">Read original article ↗</a>
          <br><br>
          <button class="secondary-btn" onclick="filterByArticle('${article.id}')">View claims</button>
        </article>
      `;
    }).join("");
}

function filterByArticle(articleId) {
  showSection("claims");
  document.getElementById("articleFilter").value = articleId;
  document.getElementById("verdictFilter").value = "all";
  renderClaims();
}


// ---------- 13. CLAIM DETAILS MODAL ----------

function openClaim(claimId) {
  const claim = claims.find(c => c.id === claimId);
  if (!claim) return;

  const article = articles.find(a => a.id === claim.articleId);

  document.getElementById("modalTitle").textContent = claim.id;

  document.getElementById("modalBody").innerHTML = `
    <p><strong>Article:</strong> ${escapeHTML(article.title)}</p>
    <p><strong>Original Statement:</strong> ${escapeHTML(claim.statement)}</p>
    <p><strong>AI Verdict:</strong> Not Recorded</p>
    <p><strong>AI Analysis:</strong> ${escapeHTML(claim.aiAnalysis)}</p>
    <p><strong>Human Verification:</strong> ${escapeHTML(claim.humanVerification)}</p>
    <p><strong>Supporting Evidence:</strong> ${escapeHTML(claim.supportingEvidence)}</p>
    <p><strong>Contradicting Evidence:</strong> ${escapeHTML(claim.contradictingEvidence)}</p>
    <p><strong>Final Classification:</strong> ${verdictBadge(claim.humanVerdict)}</p>
    <p><strong>Explanation:</strong> ${escapeHTML(claim.explanation)}</p>
  `;

  document.getElementById("claimModal").classList.remove("hidden");
}


// ---------- 14. BASIC PROTOTYPE VERIFICATION ----------

function verifyClaim() {
  const input = document.getElementById("claimInput").value.trim();
  const result = document.getElementById("verifyResult");

  if (!input) {
    result.classList.remove("hidden");
    result.textContent = "Please enter a claim first.";
    return;
  }

  const text = input.toLowerCase();

  let status = "Needs Verification";
  let explanation = "This prototype cannot establish the truth of a new claim. Independent evidence and source checking are required.";

  if (text.includes("earth is flat")) {
    status = "Contradicted";
    explanation = "This statement conflicts with established scientific evidence. Check authoritative scientific sources.";
  } else if (text.includes("water boils at 100")) {
    status = "Supported with Context";
    explanation = "Water boils at approximately 100°C at standard atmospheric pressure. Boiling point changes with pressure and altitude.";
  }

  result.classList.remove("hidden");
  result.innerHTML = `
    <strong>Preliminary Result: ${status}</strong>
    <p>${escapeHTML(explanation)}</p>
    <small>This is a demonstration result, not a completed fact-check.</small>
  `;
}


// ---------- 15. ADD NEW CLAIM ----------

function addNewClaim(newClaim) {
  if (!newClaim.id || !newClaim.statement) {
    alert("Claim ID and statement are required.");
    return false;
  }

  if (claims.some(c => c.id === newClaim.id)) {
    alert("This Claim ID already exists.");
    return false;
  }

  const claim = {
    id: newClaim.id,
    articleId: newClaim.articleId || "A01",
    statement: newClaim.statement,
    aiVerdict: "Not Recorded",
    aiAnalysis: "Pending AI analysis.",
    humanVerdict: "Unverifiable",
    humanVerification: "Pending human investigation.",
    supportingEvidence: "Pending evidence collection.",
    contradictingEvidence: "Pending evidence collection.",
    explanation: "This claim has been added for investigation."
  };

  claims.push(claim);
  saveCustomClaims();
  updateDashboard();
  renderClaims();
  renderComparison();

  return true;
}


// ---------- 16. SAVE MANUALLY ADDED CLAIMS ----------

function saveCustomClaims() {
  try {
    const originalIds = new Set(
      Array.from({ length: 50 }, (_, i) =>
        `CLM${String(i + 1).padStart(3, "0")}`
      )
    );

    const custom = claims.filter(c => !originalIds.has(c.id));
    localStorage.setItem("scoopitCustomClaims", JSON.stringify(custom));
  } catch (error) {
    console.error("Could not save custom claims:", error);
  }
}

function loadCustomClaims() {
  try {
    const saved = JSON.parse(localStorage.getItem("scoopitCustomClaims") || "[]");
    saved.forEach(claim => {
      if (!claims.some(existing => existing.id === claim.id)) {
        claims.push(claim);
      }
    });
  } catch (error) {
    console.error("Could not load saved claims:", error);
  }
}


// ---------- 17. CSV EXPORT ----------

function downloadCSV(filename, rows) {
  const csv = rows.map(row =>
    row.map(value =>
      `"${String(value ?? "").replace(/"/g, '""')}"`
    ).join(",")
  ).join("\n");

  const blob = new Blob(["\uFEFF" + csv], {
    type: "text/csv;charset=utf-8;"
  });

  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}

function exportClaims() {
  const rows = [
    ["Claim ID", "Article ID", "Original Statement", "AI Verdict", "Human Verdict", "Explanation"],
    ...claims.map(c => [
      c.id, c.articleId, c.statement, c.aiVerdict, c.humanVerdict, c.explanation
    ])
  ];

  downloadCSV("SCOOPIT_Claims.csv", rows);
}

function exportEvidence() {
  const rows = [
    ["Evidence ID", "Source ID", "Source", "Source Type", "Classification", "Excerpt"],
    ...evidence.map(e => [
      e.evidenceId, e.sourceId, e.sourceName, e.sourceType, e.classification, e.excerpt
    ])
  ];

  downloadCSV("SCOOPIT_Evidence.csv", rows);
}


// ---------- 18. NAVIGATION ----------

function showSection(sectionId) {
  document.querySelectorAll(".page-section").forEach(section => {
    section.classList.remove("active");
  });

  document.querySelectorAll(".nav-link").forEach(button => {
    button.classList.toggle("active", button.dataset.section === sectionId);
  });

  const selected = document.getElementById(sectionId);
  if (selected) selected.classList.add("active");

  document.getElementById("mainNav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}


// ---------- 19. SAFE TEXT DISPLAY ----------

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}


// ---------- 20. EVENT LISTENERS ----------

document.querySelectorAll(".nav-link").forEach(button => {
  button.addEventListener("click", () => {
    showSection(button.dataset.section);
  });
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("mainNav").classList.toggle("open");
});

document.getElementById("claimSearch").addEventListener("input", renderClaims);
document.getElementById("articleFilter").addEventListener("change", renderClaims);
document.getElementById("verdictFilter").addEventListener("change", renderClaims);
document.getElementById("sourceSearch").addEventListener("input", renderSources);

document.getElementById("verifyButton").addEventListener("click", verifyClaim);

document.getElementById("modalClose").addEventListener("click", () => {
  document.getElementById("claimModal").classList.add("hidden");
});

document.getElementById("claimModal").addEventListener("click", event => {
  if (event.target.id === "claimModal") {
    document.getElementById("claimModal").classList.add("hidden");
  }
});


// ---------- 21. INITIALIZE SCOOPIT ----------

loadCustomClaims();
updateDashboard();
renderClaims();
renderComparison();
renderSources();
renderArticles();

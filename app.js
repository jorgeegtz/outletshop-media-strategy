// Interactive Media Plan & ROAS Simulator + Deck Slide Navigation for OutletShop
(function () {
  const inpBudget = document.getElementById('inp-out-budget');
  const inpSplit = document.getElementById('inp-out-split');
  const inpAov = document.getElementById('inp-out-aov');
  const inpCpi = document.getElementById('inp-out-cpi');
  const inpCpaApp = document.getElementById('inp-out-cpa-app');

  const valBudget = document.getElementById('val-out-budget');
  const valSplit = document.getElementById('val-out-split');
  const valAov = document.getElementById('val-out-aov');
  const valCpiCpl = document.getElementById('val-out-cpicpl');
  const valCpa = document.getElementById('val-out-cpa');
  const simResult = document.getElementById('sim-outlet-result');

  const fmtMoney = (n, decimals = 0) =>
    '$' + n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  const fmtInt = (n) => Math.round(n).toLocaleString('en-US');

  function updateOutletSimulator() {
    if (!inpBudget || !simResult) return;

    const totalBudget = Number(inpBudget.value);
    const captShare = Number(inpSplit.value) / 100; // default 20%
    const salesShare = 1 - captShare; // default 80%
    const aov = Number(inpAov.value); // default $850
    const cpi = Number(inpCpi.value); // default $40
    const cpl = Math.round(cpi * 1.375); // scales proportionally ($40 CPI -> $55 CPL)
    const cpaApp = Number(inpCpaApp.value); // default $125
    const cpaWeb = cpaApp * 2; // scales proportionally ($125 CPA App -> $250 CPA Web)

    // Within Captacion (default 20%): 60% goes to App Installs (12% total), 40% goes to Web Leads (8% total)
    const budgetObj1 = totalBudget * captShare * 0.6;
    const budgetObj4 = totalBudget * captShare * 0.4;

    // Within Sales (default 80%): 56.25% goes to App Sales (45% total), 43.75% goes to Web Sales (35% total)
    const budgetObj2 = totalBudget * salesShare * 0.5625;
    const budgetObj3 = totalBudget * salesShare * 0.4375;

    const installs = budgetObj1 / cpi;
    const leads = budgetObj4 / cpl;
    const ordersApp = budgetObj2 / cpaApp;
    const ordersWeb = budgetObj3 / cpaWeb;
    const totalOrders = ordersApp + ordersWeb;

    const revApp = ordersApp * aov;
    const revWeb = ordersWeb * aov;
    const totalRev = revApp + revWeb;

    const roasApp = revApp / budgetObj2;
    const roasWeb = revWeb / budgetObj3;
    const roasBlended = totalRev / totalBudget;

    valBudget.textContent = fmtMoney(totalBudget, 0);
    valSplit.textContent = `${Math.round(captShare * 100)}% Captacion / ${Math.round(salesShare * 100)}% Ventas`;
    valAov.textContent = fmtMoney(aov, 0);
    valCpiCpl.textContent = `${fmtMoney(cpi, 0)} CPI | ${fmtMoney(cpl, 0)} CPL`;
    valCpa.textContent = `${fmtMoney(cpaApp, 0)} CPA App | ${fmtMoney(cpaWeb, 0)} CPA Web`;

    const allGoalsMet = installs >= 1300 && leads >= 850 && roasApp >= 6.8 && roasWeb >= 3.4;
    const badgeHtml = allGoalsMet
      ? `<span class="status-ok">4 / 4 METAS CUMPLIDAS</span>`
      : `<span class="status-warn">REVISAR PARAMETROS</span>`;

    const meterPct = Math.min(100, Math.max(10, (roasBlended / 6.0) * 100));
    const meterColor = allGoalsMet ? '#047857' : '#b45309';

    simResult.innerHTML = `
      <div class="forecast-hero-top">
        <div>
          <div class="forecast-kicker">Ingresos Totales Proyectados (ROAS Blended ${roasBlended.toFixed(2)}x)</div>
          <div class="forecast-big-cac">${fmtMoney(totalRev, 0)} MXN</div>
        </div>
        ${badgeHtml}
      </div>
      <div class="forecast-meter">
        <div class="forecast-meter-track">
          <div class="forecast-meter-fill" style="width:${meterPct.toFixed(1)}%;background:${meterColor};"></div>
        </div>
        <div class="forecast-meter-labels">
          <span>Obj 1: <strong>${fmtInt(installs)} installs</strong> (Meta: 1,300)</span>
          <span>Obj 4: <strong>${fmtInt(leads)} leads</strong> (Meta: 850)</span>
        </div>
      </div>
      <div class="forecast-sub-row">
        <span>ROAS App (Obj 2): <strong>${roasApp.toFixed(2)}x</strong> (${fmtInt(ordersApp)} ped.)</span>
        <span>ROAS Web (Obj 3): <strong>${roasWeb.toFixed(2)}x</strong> (${fmtInt(ordersWeb)} ped.)</span>
      </div>
      <div style="font-size:12.5px;color:var(--text-secondary);margin-top:8px;">
        <strong>Desglose de Inversion:</strong> Obj 1: ${fmtMoney(budgetObj1)} | Obj 2: ${fmtMoney(budgetObj2)} | Obj 3: ${fmtMoney(budgetObj3)} | Obj 4: ${fmtMoney(budgetObj4)} (Total Pedidos: <strong>${fmtInt(totalOrders)}</strong>).
      </div>
    `;
  }

  const presetButtons = Array.from(document.querySelectorAll('.preset-btn[data-preset]'));
  const presets = {
    baseline: { budget: 850000, split: 20, aov: 850, cpi: 40, cpaApp: 125 },
    aov_boost: { budget: 850000, split: 20, aov: 950, cpi: 40, cpaApp: 125 },
    brief_floor: { budget: 850000, split: 20, aov: 850, cpi: 78, cpaApp: 125 }
  };

  presetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const p = presets[btn.dataset.preset];
      if (!p) return;
      inpBudget.value = p.budget;
      inpSplit.value = p.split;
      inpAov.value = p.aov;
      inpCpi.value = p.cpi;
      inpCpaApp.value = p.cpaApp;
      presetButtons.forEach((b) => b.classList.toggle('active', b === btn));
      updateOutletSimulator();
    });
  });

  [inpBudget, inpSplit, inpAov, inpCpi, inpCpaApp].forEach((el) => {
    if (!el) return;
    el.addEventListener('input', () => {
      presetButtons.forEach((b) => b.classList.remove('active'));
      updateOutletSimulator();
    });
  });

  updateOutletSimulator();

  // Deck Slide Navigation
  const slides = Array.from(document.querySelectorAll('.deck-slide'));
  const navLinks = Array.from(document.querySelectorAll('.nav-links a[data-slide]'));
  const btnPrev = document.getElementById('btn-prev-slide');
  const btnNext = document.getElementById('btn-next-slide');
  const slideLabel = document.getElementById('deck-slide-label');

  const slideNames = [
    'A. Resumen Ejecutivo',
    'B. Plan de Medios ($850k)',
    'C. Estrategia App (Obj 1 y 2)',
    'D. Estrategia Web + Simulador',
    'E. Medicion y KPIs'
  ];

  let currentSlide = 0;

  function showSlide(index, scrollTop = true) {
    if (index < 0 || index >= slides.length) return;
    currentSlide = index;

    slides.forEach((s, i) => {
      s.classList.toggle('active', i === currentSlide);
    });

    navLinks.forEach((link) => {
      const target = Number(link.dataset.slide);
      link.classList.toggle('active', target === currentSlide);
    });

    if (slideLabel) {
      slideLabel.innerHTML = `Slide <strong>${currentSlide + 1} / ${slides.length}</strong> | ${slideNames[currentSlide]}`;
    }

    if (btnPrev) btnPrev.disabled = currentSlide === 0;
    if (btnNext) btnNext.disabled = currentSlide === slides.length - 1;

    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(Number(link.dataset.slide));
    });
  });

  if (btnPrev) {
    btnPrev.addEventListener('click', () => showSlide(currentSlide - 1));
  }
  if (btnNext) {
    btnNext.addEventListener('click', () => showSlide(currentSlide + 1));
  }

  document.addEventListener('keydown', (e) => {
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
    if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
  });

  const hashMap = {
    '#executive-summary': 0,
    '#media-plan': 1,
    '#app-strategy': 2,
    '#web-simulator': 3,
    '#measurement-kpis': 4
  };
  if (window.location.hash && hashMap[window.location.hash] !== undefined) {
    showSlide(hashMap[window.location.hash], false);
  } else {
    showSlide(0, false);
  }
})();

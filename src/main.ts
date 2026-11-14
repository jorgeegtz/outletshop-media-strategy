import { SIMULATOR_PRESETS } from './data';
import { formatMoney, renderAppShell, renderSimulatorHero } from './render';
import { calculateMediaSimulation } from './simulator';
import { PresetKey, SimulatorInputs } from './types';

function initApp(): void {
  const root = document.getElementById('app-root');
  if (!root) return;

  root.innerHTML = renderAppShell();

  const inpBudget = document.getElementById('inp-out-budget') as HTMLInputElement | null;
  const inpSplit = document.getElementById('inp-out-split') as HTMLInputElement | null;
  const inpRmkt = document.getElementById('inp-out-rmkt') as HTMLInputElement | null;
  const inpAov = document.getElementById('inp-out-aov') as HTMLInputElement | null;
  const inpCpi = document.getElementById('inp-out-cpi') as HTMLInputElement | null;

  const valBudget = document.getElementById('val-out-budget');
  const valSplit = document.getElementById('val-out-split');
  const valRmkt = document.getElementById('val-out-rmkt');
  const valAov = document.getElementById('val-out-aov');
  const valCpiCpa = document.getElementById('val-out-cpicpa');
  const simResult = document.getElementById('sim-outlet-result');

  let currentCpaAppBase = 125;

  function readInputs(): SimulatorInputs {
    return {
      totalBudgetMxn: inpBudget ? Number(inpBudget.value) : 850000,
      captacionSharePct: inpSplit ? Number(inpSplit.value) : 20,
      rmkt60dShareOfSalesPct: inpRmkt ? Number(inpRmkt.value) : 26,
      aovMxn: inpAov ? Number(inpAov.value) : 850,
      cpiMxn: inpCpi ? Number(inpCpi.value) : 40,
      cpaAppMxn: currentCpaAppBase
    };
  }

  function refreshSimulator(): void {
    const inputs = readInputs();
    const outputs = calculateMediaSimulation(inputs);

    if (valBudget) valBudget.textContent = formatMoney(inputs.totalBudgetMxn, 0);
    if (valSplit) {
      valSplit.textContent = `${inputs.captacionSharePct}% Captacion / ${100 - inputs.captacionSharePct}% Ventas`;
    }
    if (valRmkt) {
      valRmkt.textContent = `${inputs.rmkt60dShareOfSalesPct}% (${formatMoney(outputs.rmkt60dBudgetMxn, 0)} MXN)`;
    }
    if (valAov) valAov.textContent = formatMoney(inputs.aovMxn, 0);
    if (valCpiCpa) {
      valCpiCpa.textContent = `${formatMoney(inputs.cpiMxn, 0)} CPI | ${formatMoney(inputs.cpaAppMxn, 0)} CPA App`;
    }
    if (simResult) {
      simResult.innerHTML = renderSimulatorHero(outputs);
    }
  }

  const presetButtons = Array.from(
    document.querySelectorAll<HTMLButtonElement>('.preset-btn[data-preset]')
  );

  presetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.preset as PresetKey | undefined;
      if (!key || !SIMULATOR_PRESETS[key]) return;
      const preset = SIMULATOR_PRESETS[key];

      if (inpBudget) inpBudget.value = String(preset.totalBudgetMxn);
      if (inpSplit) inpSplit.value = String(preset.captacionSharePct);
      if (inpRmkt) inpRmkt.value = String(preset.rmkt60dShareOfSalesPct);
      if (inpAov) inpAov.value = String(preset.aovMxn);
      if (inpCpi) inpCpi.value = String(preset.cpiMxn);
      currentCpaAppBase = preset.cpaAppMxn;

      presetButtons.forEach((b) => b.classList.toggle('active', b === btn));
      refreshSimulator();
    });
  });

  [inpBudget, inpSplit, inpRmkt, inpAov, inpCpi].forEach((inputEl) => {
    if (!inputEl) return;
    inputEl.addEventListener('input', () => {
      presetButtons.forEach((b) => b.classList.remove('active'));
      refreshSimulator();
    });
  });

  refreshSimulator();

  // Slide Navigation Engine
  const slides = Array.from(document.querySelectorAll<HTMLElement>('.deck-slide'));
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a[data-slide]'));
  const btnPrev = document.getElementById('btn-prev-slide') as HTMLButtonElement | null;
  const btnNext = document.getElementById('btn-next-slide') as HTMLButtonElement | null;
  const slideLabel = document.getElementById('deck-slide-label');

  const slideNames: string[] = [
    'A. Resumen Ejecutivo',
    'B. Plan de Medios ($850k)',
    'C. Remarketing Carrito 60D',
    'D. App/Web + Simulador TS',
    'E. Medicion y KPIs'
  ];

  let currentSlide = 0;

  function showSlide(index: number, scrollTop = true): void {
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
    link.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      showSlide(Number(link.dataset.slide));
    });
  });

  if (btnPrev) btnPrev.addEventListener('click', () => showSlide(currentSlide - 1));
  if (btnNext) btnNext.addEventListener('click', () => showSlide(currentSlide + 1));

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
    if (e.key === 'ArrowRight') showSlide(currentSlide + 1);
    if (e.key === 'ArrowLeft') showSlide(currentSlide - 1);
  });

  const hashMap: Record<string, number> = {
    '#executive-summary': 0,
    '#media-plan': 1,
    '#remarketing-60d': 2,
    '#web-simulator': 3,
    '#measurement-kpis': 4
  };

  if (window.location.hash && hashMap[window.location.hash] !== undefined) {
    showSlide(hashMap[window.location.hash], false);
  } else {
    showSlide(0, false);
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}

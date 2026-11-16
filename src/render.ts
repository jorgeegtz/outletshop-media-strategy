import {
  GOOGLE_SHEET_URL,
  KPI_GROUP_CARDS,
  OBJECTIVE_GROUPS,
  REMARKETING_60D_SEGMENTS
} from './data';
import { MediaChannelLine, ObjectiveGroup, SimulatorOutputs } from './types';

export function formatMoney(amount: number, decimals = 0): string {
  return (
    '$' +
    amount.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    })
  );
}

export function formatInt(amount: number): string {
  return Math.round(amount).toLocaleString('en-US');
}

function renderObjectiveRows(group: ObjectiveGroup): string {
  const rowsHtml = group.lines
    .map((line: MediaChannelLine) => {
      const rmktBadge = line.isRemarketing60d
        ? ` <span class="tag tag-purple">RMKT CARRITO 60D</span>`
        : '';
      return `
        <tr>
          <td>${line.name}${rmktBadge}</td>
          <td>${formatMoney(line.monthlySpendMxn)}</td>
          <td>${line.sharePct.toFixed(1)}%</td>
          <td>${formatMoney(line.cpmMxn, 2)}</td>
          <td>${formatInt(line.impressions)}</td>
          <td>${line.ctrPct.toFixed(2)}%</td>
          <td>${formatInt(line.clicks)}</td>
          <td>${formatMoney(line.cpcMxn, 2)}</td>
          <td>${line.cvrPct.toFixed(2)}%</td>
          <td>${formatInt(line.conversions)} ${line.conversionUnit}</td>
          <td>${formatMoney(line.costPerResultMxn, 2)} ${line.costMetricType}</td>
          <td>${formatMoney(line.revenueMxn)}</td>
          <td><strong>${line.kpiHighlight}</strong></td>
        </tr>
      `;
    })
    .join('');

  const totalImpr = group.lines.reduce((acc, l) => acc + l.impressions, 0);
  const totalClicks = group.lines.reduce((acc, l) => acc + l.clicks, 0);
  const totalConv = group.lines.reduce((acc, l) => acc + l.conversions, 0);
  const totalRev = group.lines.reduce((acc, l) => acc + l.revenueMxn, 0);
  const blendedCpm = (group.monthlySpendMxn / totalImpr) * 1000;
  const blendedCtr = (totalClicks / totalImpr) * 100;
  const blendedCpc = group.monthlySpendMxn / totalClicks;
  const blendedCvr = (totalConv / totalClicks) * 100;
  const blendedCostPerResult = group.monthlySpendMxn / totalConv;
  const costType = group.lines[0].costMetricType;
  const unitLabel = group.lines[0].conversionUnit;
  const subtotalBg = group.block === 'Captación (20%)' ? '#eef2ff' : '#ecfdf5';
  const roasOrNote =
    totalRev > 0
      ? `<span class="status-ok">ROAS ${(totalRev / group.monthlySpendMxn).toFixed(2)}x</span>`
      : group.id === 'obj1'
      ? '1,148 Reg App (45%)'
      : '+45% vs. Meta (850)';

  return `
    <tr class="row-anchor">
      <td colspan="13"><strong>${group.title.toUpperCase()} (${group.sharePct.toFixed(1)}% Presupuesto = ${formatMoney(group.monthlySpendMxn)} MXN | Plataformas: ${group.platformsText} | Meta: ${group.briefTargetLabel})</strong></td>
    </tr>
    ${rowsHtml}
    <tr style="background:${subtotalBg};font-weight:700;">
      <td>Subtotal ${group.title}</td>
      <td>${formatMoney(group.monthlySpendMxn)}</td>
      <td>${group.sharePct.toFixed(1)}%</td>
      <td>${formatMoney(blendedCpm, 2)}</td>
      <td>${formatInt(totalImpr)}</td>
      <td>${blendedCtr.toFixed(2)}%</td>
      <td>${formatInt(totalClicks)}</td>
      <td>${formatMoney(blendedCpc, 2)}</td>
      <td>${blendedCvr.toFixed(2)}%</td>
      <td>${formatInt(totalConv)} ${unitLabel}</td>
      <td>${formatMoney(blendedCostPerResult, 2)} ${costType}</td>
      <td>${formatMoney(totalRev)}</td>
      <td>${roasOrNote}</td>
    </tr>
  `;
}

export function renderSimulatorHero(out: SimulatorOutputs): string {
  const badgeHtml = out.allGoalsMet
    ? `<span class="status-ok">4 / 4 METAS CUMPLIDAS</span>`
    : `<span class="status-warn">AJUSTAR PARÁMETROS</span>`;
  const meterPct = Math.min(100, Math.max(10, (out.roasBlended / 6.0) * 100));
  const meterColor = out.allGoalsMet ? '#047857' : '#b45309';

  return `
    <div class="forecast-hero-top">
      <div>
        <div class="forecast-kicker">Ventas Totales Estimadas (ROAS Global ${out.roasBlended.toFixed(2)}x)</div>
        <div class="forecast-big-cac">${formatMoney(out.totalRevenue, 0)} MXN</div>
      </div>
      ${badgeHtml}
    </div>
    <div class="forecast-meter">
      <div class="forecast-meter-track">
        <div class="forecast-meter-fill" style="width:${meterPct.toFixed(1)}%;background:${meterColor};"></div>
      </div>
      <div class="forecast-meter-labels">
        <span>Obj. 1: <strong>${formatInt(out.installs)} descargas</strong> (Meta: 1,300)</span>
        <span>Obj. 4: <strong>${formatInt(out.leads)} leads</strong> (Meta: 850)</span>
      </div>
    </div>
    <div class="forecast-sub-row">
      <span>Obj. 2 App: <strong>ROAS ${out.roasApp.toFixed(2)}x</strong> (${formatInt(out.ordersApp)} ped.)</span>
      <span>Obj. 3 Web: <strong>ROAS ${out.roasWeb.toFixed(2)}x</strong> (${formatInt(out.ordersWeb)} ped.)</span>
    </div>
    <div class="forecast-sub-row" style="margin-top:6px;">
      <span>Remarketing Carrito 60D: <strong>${formatInt(out.rmkt60dOrders)} pedidos</strong></span>
      <span>CPA Rmkt 60D: <strong>${formatMoney(out.cpaRmkt60dMxn, 0)} MXN</strong> (ROAS ${out.roasRmkt60d.toFixed(2)}x)</span>
    </div>
    <div style="font-size:12.5px;color:var(--text-secondary);margin-top:8px;">
      <strong>Inversión por Objetivo:</strong> Obj. 1: ${formatMoney(out.budgetObj1)} | Obj. 2: ${formatMoney(out.budgetObj2)} | Obj. 3: ${formatMoney(out.budgetObj3)} | Obj. 4: ${formatMoney(out.budgetObj4)}.
    </div>
  `;
}

export function renderAppShell(): string {
  const summaryRows = OBJECTIVE_GROUPS.map(
    (g) => `
      <tr>
        <td><strong>${g.title}</strong><br/><span class="text-muted">${g.platformsText}</span></td>
        <td>${g.briefMetricName}</td>
        <td><strong>${g.briefTargetLabel}</strong></td>
        <td><strong>${g.sharePct.toFixed(1)}%</strong> (${formatMoney(g.monthlySpendMxn)} MXN)</td>
        <td><strong>${g.projectedResultLabel}</strong></td>
        <td>${g.unitCostSummary}</td>
        <td><span class="status-ok">${g.statusBadge}</span></td>
      </tr>
    `
  ).join('');

  const mediaPlanBody = OBJECTIVE_GROUPS.map((g) => renderObjectiveRows(g)).join('');

  const rmktRows = REMARKETING_60D_SEGMENTS.map(
    (s) => `
      <tr>
        <td><strong>${s.segmentName}</strong></td>
        <td><code>${s.windowLabel}</code></td>
        <td>${s.channels}</td>
        <td>${formatMoney(s.budgetMxn)} MXN</td>
        <td>${s.tactic}</td>
        <td><strong>${formatInt(s.orders)} pedidos</strong></td>
        <td><strong>${formatMoney(s.cpaMxn, 2)} MXN</strong></td>
        <td><span class="status-ok">${s.roas.toFixed(2)}x ROAS</span></td>
      </tr>
    `
  ).join('');

  const kpiCardsHtml = KPI_GROUP_CARDS.map(
    (card) => `
      <div class="panel">
        <h3>${card.objectiveTitle}</h3>
        <p style="font-size:13px;color:var(--text-muted);margin-bottom:8px;">
          <strong>Plataformas:</strong> ${card.platforms}<br/>
          <strong>Resultado:</strong> ${card.targetMeta}
        </p>
        <ul class="styled-list">
          ${card.kpis
            .map(
              (k) =>
                `<li><strong>${k.name}:</strong> <code>${k.estimate}</code>. ${k.howWeAchieveIt}</li>`
            )
            .join('')}
        </ul>
      </div>
    `
  ).join('');

  return `
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="brand">
          <div class="brand-logo">O</div>
          <div>
            <div class="brand-title">Caso Práctico: OutletShop</div>
            <div class="brand-sub">Propuesta de Medios Online | Jorge Gutiérrez</div>
          </div>
        </div>
        <nav class="nav-links" aria-label="Deck Sections">
          <a href="#executive-summary" data-slide="0" class="active">A. Resumen Ejecutivo</a>
          <a href="#media-plan" data-slide="1">B. Estimaciones ($850k)</a>
          <a href="#app-strategy" data-slide="2">C. Estrategia App (Obj. 1 y 2)</a>
          <a href="#web-strategy" data-slide="3">D. Estrategia Web &amp; Rmkt 60D</a>
          <a href="#measurement-kpis" data-slide="4">E. KPIs por Objetivo</a>
        </nav>
      </div>
    </header>

    <main class="container">
      <!-- SLIDE 1: A. RESUMEN EJECUTIVO -->
      <div class="deck-slide active" data-slide="0">
        <section id="executive-summary" class="hero">
          <div class="hero-single">
            <div class="eyebrow">CASO PRÁCTICO ELOGIA | ESTRATEGIA DE MEDIOS ONLINE PARA OUTLETSHOP</div>
            <h1>Estrategia <span class="gradient-text">20% Captación / 80% Ventas</span> para Generar $3.61M MXN (ROAS 6.8 App | ROAS 3.4 Web)</h1>
            <p class="hero-lead">
              Propuesta para distribuir los <strong>$850,000 MXN mensuales</strong> (con AOV actual de <strong>$850 MXN</strong> en App y Sitio Web) enfocada en hombres y mujeres de 18 a 50 años en México interesados en moda, calzado, accesorios, ofertas y compras online.
            </p>
            <div class="hero-cta-row">
              <a href="${GOOGLE_SHEET_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
                Abrir Google Sheet de Estimaciones
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </a>
            </div>
          </div>

          <div class="grid-2" style="margin-top: 24px;">
            <div class="panel panel-accent">
              <h3>1. Captación de Usuarios: 20% ($170,000 MXN)</h3>
              <ul class="styled-list">
                <li><strong>Obj. 1 - Descargas y Engagement App (12% | $102,000 MXN):</strong> En Facebook, Instagram, Google Ads, TikTok y DSP. Genera <strong>2,550 descargas a $40.00 MXN CPI</strong> (superando en +96% la meta de 1,300 descargas) y <strong>1,148 registros en la app</strong> (45% CVR).</li>
                <li><strong>Obj. 4 - Registros en el Sitio Web (8% | $68,000 MXN):</strong> En Google Display, Facebook Ads, Instagram Ads y DSP. Genera <strong>1,236 leads cualificados a $55.02 MXN CPL</strong> (superando en +45% la meta de 850 leads) con 5.00% de conversión de visita a registro.</li>
                <li><strong>Por qué 20% en Captación:</strong> Con $170,000 MXN cubrimos y superamos ampliamente las metas de volumen de descargas y leads, liberando el 80% del presupuesto para maximizar ingresos donde el brief exige ROAS altos.</li>
              </ul>
            </div>
            <div class="panel">
              <h3>2. Generación de Ventas y Remarketing 60D: 80% ($680,000 MXN)</h3>
              <ul class="styled-list">
                <li><strong>Obj. 2 - Promoción de Ventas en App (45% | $382,500 MXN):</strong> En Google Ads, Facebook, Instagram, TikTok y DSP. Cumple el <strong>ROAS 6.80x</strong> generando <strong>$2,601,000 MXN (3,060 pedidos a $125.00 MXN CPA y 2.40% CVR en app)</strong>.</li>
                <li><strong>Obj. 3 - Incentivar Ventas en Sitio Web (35% | $297,500 MXN):</strong> En Google Search Ads, Email Marketing, Facebook y Display. Cumple el <strong>ROAS 3.40x</strong> generando <strong>$1,011,500 MXN (1,190 pedidos a $250.00 MXN CPA global y 1.20% CVR web)</strong>.</li>
                <li><strong>Campaña de Remarketing Carrito Abandonado (Últimos 60 Días):</strong> Integra audiencias que abandonaron el carrito y no compraron en los últimos 60 días (App + Web + Email), recuperando <strong>1,270 pedidos a un CPA de $139.07 MXN (ROAS 6.11x)</strong>.</li>
              </ul>
            </div>
          </div>

          <h3 class="sub-heading" style="margin-top: 24px;">Resultados Esperados (Tabla del Caso Práctico vs. Estimación Propuesta)</h3>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Objetivo y Plataformas</th>
                  <th>Métrica (Brief)</th>
                  <th>Meta (Brief)</th>
                  <th>Presupuesto Asignado</th>
                  <th>Resultado Estimado</th>
                  <th>KPIs Estimados</th>
                  <th>Cumplimiento</th>
                </tr>
              </thead>
              <tbody>
                ${summaryRows}
                <tr class="row-goal">
                  <td><strong>TOTAL MENSUAL OUTLETSHOP</strong></td>
                  <td>Full-Funnel (App + Web)</td>
                  <td><strong>4 Objetivos</strong></td>
                  <td><strong>100.0%</strong> ($850,000 MXN)</td>
                  <td><strong>$3,612,500 MXN en Ventas</strong><br/><span class="text-muted">4,250 pedidos + 2,550 descargas + 1,236 leads</span></td>
                  <td>ROAS Global: <strong>4.25x</strong> | ROAS Ventas: <strong>5.31x</strong><br/>18.68M Impresiones | 293,863 Clics</td>
                  <td><span class="status-ok">4 / 4 Metas Cumplidas</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="assumptions-banner">
            <div class="assumptions-title">Datos Base del Caso Práctico:</div>
            <div class="assumptions-pills">
              <span><strong>Presupuesto Mensual:</strong> $850,000 MXN</span>
              <span><strong>AOV Actual (Web y App):</strong> $850 MXN</span>
              <span><strong>Público Objetivo:</strong> Hombres y Mujeres 18-50 años en México (Moda, Ofertas y Compras Online)</span>
              <span><strong>Relación ROAS / CPA (con AOV $850):</strong> ROAS 6.8 App = $125 CPA | ROAS 3.4 Web = $250 CPA</span>
            </div>
          </div>
        </section>
      </div>

      <!-- SLIDE 2: B. ESTIMACIONES Y PLAN DE MEDIOS -->
      <div class="deck-slide" data-slide="1">
        <section id="media-plan" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCIÓN B | ESTIMACIONES NUMÉRICAS Y PLAN DE MEDIOS ($850,000 MXN)</span>
              <h2>Desglose de Estimaciones por Objetivo y Plataforma</h2>
              <p>Cálculo detallado de inversión, CPM, impresiones, CTR, clics, CPC, tasa de conversión (CVR), volumen de resultados, CPI/CPL/CPA, ingresos (con AOV de $850 MXN) y ROAS.</p>
            </div>
          </div>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Objetivo / Plataforma / Campaña</th>
                  <th>Inversión (MXN)</th>
                  <th>% Total</th>
                  <th>CPM</th>
                  <th>Impresiones</th>
                  <th>CTR</th>
                  <th>Clics</th>
                  <th>CPC</th>
                  <th>CVR</th>
                  <th>Resultados</th>
                  <th>CPI / CPL / CPA</th>
                  <th>Ingresos ($850 AOV)</th>
                  <th>ROAS / KPI</th>
                </tr>
              </thead>
              <tbody>
                ${mediaPlanBody}
                <tr class="row-goal">
                  <td><strong>TOTAL PLAN DE MEDIOS</strong></td>
                  <td><strong>$850,000</strong></td>
                  <td><strong>100.0%</strong></td>
                  <td><strong>$45.51</strong></td>
                  <td><strong>18,676,625</strong></td>
                  <td><strong>1.57%</strong></td>
                  <td><strong>293,863</strong></td>
                  <td><strong>$2.89</strong></td>
                  <td><strong>1.87% (Ventas)</strong></td>
                  <td><strong>4,250 Pedidos</strong></td>
                  <td><strong>$160.00 CPA Ventas</strong></td>
                  <td><strong>$3,612,500</strong></td>
                  <td><strong>ROAS 4.25x</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Simulador de Estimaciones -->
          <div class="grid-2" style="margin-top: 24px;">
            <div class="panel">
              <h3>Racional de las Estimaciones</h3>
              <ul class="styled-list">
                <li><strong>Matemática exacta del ROAS con AOV de $850 MXN:</strong>
                  <br/>- En <strong>App (ROAS 6.8)</strong>: <code>$850 AOV / 6.8 = $125.00 MXN CPA máximo</code>. Con $382,500 MXN generamos <strong>3,060 pedidos ($2,601,000 MXN)</strong>.
                  <br/>- En <strong>Sitio Web (ROAS 3.4)</strong>: <code>$850 AOV / 3.4 = $250.00 MXN CPA máximo</code>. Con $297,500 MXN generamos <strong>1,190 pedidos ($1,011,500 MXN)</strong>.
                </li>
                <li><strong>Benchmarks de México (Retail / Moda):</strong> CPMs entre $30 y $62.50 MXN, CTRs de 0.80% a 2.20%, CPI en App de $40.00 MXN y CPL en Sitio Web de $55.02 MXN.</li>
                <li><strong>Eficiencia por Remarketing 60D:</strong> Las campañas de Carrito Abandonado (60 días sin compra) operan con CVR superior (3.70% en App y 2.62% en Web), reduciendo el CPA promedio y asegurando las metas de ROAS.</li>
              </ul>
            </div>

            <div class="panel panel-accent">
              <div class="forecast-header">
                <div>
                  <h3 style="margin-bottom:4px;">Simulador de Estimaciones (TypeScript)</h3>
                  <p style="font-size:13px;color:var(--text-secondary);">Prueba cambios en presupuesto, split, AOV o CPI:</p>
                </div>
                <div class="preset-row">
                  <button type="button" class="preset-btn active" data-preset="baseline">Propuesta Base ($850k)</button>
                  <button type="button" class="preset-btn" data-preset="aov_boost">Subir AOV a $950</button>
                  <button type="button" class="preset-btn" data-preset="rmkt_focus">+Peso Rmkt 60D</button>
                </div>
              </div>

              <div id="sim-outlet-result" class="forecast-hero"></div>

              <div class="slider-stack">
                <div class="slider-card">
                  <div class="control-label">
                    <span>Presupuesto Mensual (MXN)</span>
                    <strong id="val-out-budget">$850,000</strong>
                  </div>
                  <input type="range" id="inp-out-budget" min="500000" max="1500000" step="25000" value="850000" />
                </div>
                <div class="slider-card">
                  <div class="control-label">
                    <span>Split Captación (Obj. 1+4) vs. Ventas (Obj. 2+3)</span>
                    <strong id="val-out-split">20% Captación / 80% Ventas</strong>
                  </div>
                  <input type="range" id="inp-out-split" min="10" max="35" step="1" value="20" />
                </div>
                <div class="slider-card">
                  <div class="control-label">
                    <span>% de Ventas en Remarketing Carrito 60D</span>
                    <strong id="val-out-rmkt">26% ($176,625 MXN)</strong>
                  </div>
                  <input type="range" id="inp-out-rmkt" min="15" max="45" step="1" value="26" />
                </div>
                <div class="slider-card">
                  <div class="control-label">
                    <span>Ticket Promedio (AOV en MXN)</span>
                    <strong id="val-out-aov">$850</strong>
                  </div>
                  <input type="range" id="inp-out-aov" min="700" max="1150" step="10" value="850" />
                </div>
                <div class="slider-card">
                  <div class="control-label">
                    <span>CPI App (Obj. 1) &amp; CPA App (Obj. 2)</span>
                    <strong id="val-out-cpicpa">$40 CPI | $125 CPA App</strong>
                  </div>
                  <input type="range" id="inp-out-cpi" min="25" max="75" step="1" value="40" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- SLIDE 3: C. ESTRATEGIA APP (OBJETIVOS 1 Y 2) -->
      <div class="deck-slide" data-slide="2">
        <section id="app-strategy" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCIÓN C | ESTRATEGIA PARA LA APLICACIÓN MÓVIL (OBJETIVOS 1 Y 2)</span>
              <h2>1. Descargas y Engagement App + 2. Promoción de Ventas dentro de la App</h2>
              <p>Estrategia en Facebook, Instagram, Google Ads, TikTok y DSP para lograr 2,550 descargas ($40 CPI) y ROAS 6.8x en ventas dentro de la aplicación.</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel panel-accent">
              <h3>1. Campañas de Descargas y Engagement App ($102,000 MXN | 12%)</h3>
              <p><strong>Plataformas:</strong> Facebook, Instagram, Google Ads, TikTok y DSP.</p>
              <ul class="styled-list">
                <li><strong>Objetivo y Meta:</strong> Superar las 1,300 descargas llegando a <strong>2,550 descargas a $40.00 MXN CPI</strong>, asegurando además que el <strong>45% se registre en la app (1,148 registros)</strong>.</li>
                <li><strong>Configuración por Canal:</strong>
                  <br/>- <strong>Google Ads ($40,800):</strong> App Campaigns (UAC) optimizadas a instalación y primer registro en Android e iOS (1,100 descargas a $37.09 CPI).
                  <br/>- <strong>Facebook e Instagram ($35,700):</strong> Campañas de App Promotion segmentadas a Hombres y Mujeres 18-50 en México interesados en calzado, ropa familiar y ofertas (880 descargas a $40.57 CPI).
                  <br/>- <strong>TikTok ($15,300) y DSP ($10,200):</strong> Videos cortos de "Unboxing familiar Outlet" y banners en apps de estilo de vida (570 descargas conjuntas).
                </li>
                <li><strong>Palanca de Engagement (Registro):</strong> Beneficio exclusivo de <em>"$150 MXN de descuento en tu primera compra en la App"</em> que se desbloquea al completar el registro en 1 clic.</li>
              </ul>
            </div>

            <div class="panel">
              <h3>2. Promoción de Ventas dentro de la App ($382,500 MXN | 45%)</h3>
              <p><strong>Plataformas:</strong> Google Ads, Facebook, Instagram, TikTok y DSP.</p>
              <ul class="styled-list">
                <li><strong>Objetivo y Meta:</strong> Alcanzar un <strong>ROAS de 6.80x ($2,601,000 MXN en ventas / 3,060 pedidos)</strong> manteniendo una <strong>CVR en app del 2.40%</strong> y un <strong>CPA de $125.00 MXN</strong>.</li>
                <li><strong>Configuración por Canal:</strong>
                  <br/>- <strong>Google Ads ($130,050):</strong> App Campaigns for Engagement/Action enfocadas en compra in-app con feed de productos (1,045 pedidos, ROAS 6.83x).
                  <br/>- <strong>Facebook e Instagram ($99,450):</strong> Anuncios de catálogo dinámico con Deep Link directo a la prenda o calzado en la app (755 pedidos, ROAS 6.45x).
                  <br/>- <strong>Remarketing Carrito 60D en App ($95,625 en FB/IG + DSP):</strong> Impacta usuarios que agregaron al carrito en la app pero no compraron en los últimos 60 días (850 pedidos a $112.50 CPA, ROAS 7.56x).
                  <br/>- <strong>TikTok ($57,375):</strong> Video Shopping Ads conectados al catálogo in-app (410 pedidos, ROAS 6.07x).
                </li>
                <li><strong>Defensa de AOV ($850 MXN) y Compras Recurrentes (1,285 pedidos):</strong> Barra de envío gratis a partir de $899 MXN para impulsar el ticket promedio, y notificaciones push + remarketing en quincena para generar 42% de recompra.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <!-- SLIDE 4: D. ESTRATEGIA SITIO WEB Y REMARKETING 60D (OBJETIVOS 3 Y 4) -->
      <div class="deck-slide" data-slide="3">
        <section id="web-strategy" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCIÓN D | ESTRATEGIA SITIO WEB (OBJETIVOS 3 Y 4) + REMARKETING CARRITO 60 DÍAS</span>
              <h2>3. Incentivar Ventas en Sitio Web + 4. Incrementar Registros Web</h2>
              <p>Combinación de captura de demanda en Google Search, Email Marketing, Facebook, Instagram, Display y DSP junto con la campaña de Remarketing de Carritos Abandonados (60 días).</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel">
              <h3>3. Incentivar Ventas en el Sitio Web ($297,500 MXN | 35%)</h3>
              <p><strong>Plataformas:</strong> Google Search Ads, Email Marketing, Facebook y Display.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> Lograr <strong>ROAS 3.40x ($1,011,500 MXN / 1,190 pedidos)</strong> con una <strong>tasa de conversión web del 1.20%</strong>.</li>
                <li><strong>Google Search Ads ($133,875 | ROAS 3.65x):</strong> Campañas de búsqueda por marca, categorías de alta intención ("outlet calzado méxico", "tenis en oferta", "ropa para niños") y Shopping, generando <strong>575 pedidos a $232.83 CPA</strong>.</li>
                <li><strong>Facebook Ads Prospección ($82,625):</strong> Campañas de catálogo para atraer nuevos compradores al sitio web (195 pedidos).</li>
                <li><strong>Remarketing Carrito 60D en Facebook, Display y Email ($81,000):</strong> Recupera <strong>420 pedidos a un CPA promedio de remarketing de $192.86 MXN</strong> ($190.67 en Ads y $198.33 en Email Marketing con ROAS de 4.46x y 4.29x).</li>
              </ul>
            </div>

            <div class="panel panel-accent">
              <h3>4. Incrementar Registros en el Sitio Web ($68,000 MXN | 8%)</h3>
              <p><strong>Plataformas:</strong> Google Display, Facebook Ads, Instagram Ads y DSP.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> Superar los 850 leads llegando a <strong>1,236 leads cualificados a un CPL de $55.02 MXN</strong> y una <strong>CVR de visitante a registro del 5.00%</strong>.</li>
                <li><strong>Propuesta de Valor (Lead Magnet):</strong> Registro al <em>"Club OutletShop"</em> ofreciendo un cupón de 15% de descuento adicional en la primera compra y acceso anticipado a ofertas familiares.</li>
                <li><strong>Distribución por Canal:</strong>
                  <br/>- <strong>Facebook Ads ($27,200) e Instagram Ads ($20,400):</strong> Anuncios orientados a conversión en landing de registro (920 leads a $50.37-$53.68 CPL).
                  <br/>- <strong>Google Display ($12,240) y DSP ($8,160):</strong> Segmentación por intención de compra en moda y ofertas online en México (316 leads).
                </li>
                <li><strong>Conexión con Ventas Web:</strong> Todo usuario registrado recibe en automático la secuencia de bienvenida por Email Marketing (Obj. 3) para convertirlo en comprador.</li>
              </ul>
            </div>
          </div>

          <h3 class="sub-heading">Detalle de la Campaña de Remarketing: Carritos Abandonados (Últimos 60 Días sin Compra)</h3>
          <p style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;">
            Audiencia compuesta por usuarios en App y Web que agregaron productos al carrito en los últimos 60 días pero no finalizaron la compra (excluyendo compradores de los últimos 60 días). Cubre 4 quincenas completas en México:
          </p>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Segmento de Carrito Abandonado</th>
                  <th>Ventana de Tiempo</th>
                  <th>Canales Activos</th>
                  <th>Inversión (MXN)</th>
                  <th>Mensaje y Táctica Comercial</th>
                  <th>Pedidos</th>
                  <th>CPA Logrado</th>
                  <th>ROAS</th>
                </tr>
              </thead>
              <tbody>
                ${rmktRows}
                <tr class="row-goal">
                  <td><strong>TOTAL REMARKETING CARRITO 60D</strong></td>
                  <td><strong>1 a 60 Días (Sin Compra)</strong></td>
                  <td><strong>App (FB/IG/DSP) + Web (FB/Display/Email)</strong></td>
                  <td><strong>$176,625 MXN</strong></td>
                  <td><strong>Recuperación omnicanal en 4 quincenas</strong></td>
                  <td><strong>1,270 pedidos</strong></td>
                  <td><strong>$139.07 MXN</strong></td>
                  <td><strong>6.11x ROAS</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- SLIDE 5: E. KPIS POR OBJETIVO -->
      <div class="deck-slide" data-slide="4">
        <section id="measurement-kpis" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCIÓN E | KPIS DEL CASO PRÁCTICO Y PLAN DE CONTROL</span>
              <h2>Cumplimiento de los KPIs Solicitados por Objetivo</h2>
              <p>Resumen de cada KPI requerido en el brief de OutletShop, su estimación en nuestro plan y la táctica puntual para alcanzarlo.</p>
            </div>
          </div>

          <div class="grid-2">
            ${kpiCardsHtml}
          </div>
        </section>
      </div>

      <!-- Deck Slide Navigation Bar -->
      <div class="deck-footer-nav">
        <button id="btn-prev-slide" class="btn btn-secondary">Slide Anterior</button>
        <div id="deck-slide-label" class="deck-slide-indicator">Slide <strong>1 / 5</strong> | A. Resumen Ejecutivo</div>
        <button id="btn-next-slide" class="btn btn-primary">Siguiente Slide</button>
      </div>
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <div>
          <strong>Caso Práctico OutletShop (Elogia)</strong> | por Jorge Gutiérrez (<a href="mailto:jorgeegtzhdz@gmail.com">jorgeegtzhdz@gmail.com</a>)
        </div>
        <div>
          <a href="${GOOGLE_SHEET_URL}" target="_blank" rel="noopener noreferrer">Abrir Google Sheet de Estimaciones</a>
        </div>
      </div>
    </footer>
  `;
}

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
        ? ` <span class="tag tag-purple">RMKT 60D</span>`
        : '';
      const revMain = line.revenueMxn > 0 ? formatMoney(line.revenueMxn) : '-';
      return `
        <tr>
          <td class="campaign-col">${line.name}${rmktBadge}</td>
          <td class="num-col">
            <span class="cell-main">${formatMoney(line.monthlySpendMxn)}</span>
            <span class="cell-sub">${line.sharePct.toFixed(1)}% del total</span>
          </td>
          <td class="num-col">
            <span class="cell-main">${formatInt(line.impressions)}</span>
            <span class="cell-sub">${formatMoney(line.cpmMxn, 2)} CPM</span>
          </td>
          <td class="num-col">
            <span class="cell-main">${formatInt(line.clicks)}</span>
            <span class="cell-sub">${line.ctrPct.toFixed(2)}% CTR | ${formatMoney(line.cpcMxn, 2)} CPC</span>
          </td>
          <td class="num-col">
            <span class="cell-main">${line.cvrPct.toFixed(2)}%</span>
          </td>
          <td class="num-col">
            <span class="cell-main">${formatInt(line.conversions)}</span>
            <span class="cell-sub">${line.conversionUnit}</span>
          </td>
          <td class="num-col">
            <span class="cell-main">${formatMoney(line.costPerResultMxn, 2)}</span>
            <span class="cell-sub">${line.costMetricType}</span>
          </td>
          <td class="num-col">
            <span class="cell-main">${revMain}</span>
            <span class="cell-sub">${line.kpiHighlight}</span>
          </td>
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
  const revSubtotal = totalRev > 0 ? formatMoney(totalRev) : '-';
  const roasOrNote =
    totalRev > 0
      ? `<span class="status-ok">ROAS ${(totalRev / group.monthlySpendMxn).toFixed(2)}</span>`
      : group.id === 'obj1'
      ? '1,148 Reg App (45%)'
      : '1,236 Leads (5.01% CVR)';

  return `
    <tr class="row-anchor">
      <td colspan="8"><strong>${group.title.toUpperCase()} (${group.sharePct.toFixed(1)}% = ${formatMoney(group.monthlySpendMxn)} MXN | Canales: ${group.platformsText} | Meta: ${group.briefTargetLabel})</strong></td>
    </tr>
    ${rowsHtml}
    <tr style="background:${subtotalBg};font-weight:700;">
      <td class="campaign-col">Subtotal ${group.title}</td>
      <td class="num-col">
        <span class="cell-main">${formatMoney(group.monthlySpendMxn)}</span>
        <span class="cell-sub">${group.sharePct.toFixed(1)}% del total</span>
      </td>
      <td class="num-col">
        <span class="cell-main">${formatInt(totalImpr)}</span>
        <span class="cell-sub">${formatMoney(blendedCpm, 2)} CPM</span>
      </td>
      <td class="num-col">
        <span class="cell-main">${formatInt(totalClicks)}</span>
        <span class="cell-sub">${blendedCtr.toFixed(2)}% CTR | ${formatMoney(blendedCpc, 2)} CPC</span>
      </td>
      <td class="num-col">
        <span class="cell-main">${blendedCvr.toFixed(2)}%</span>
      </td>
      <td class="num-col">
        <span class="cell-main">${formatInt(totalConv)}</span>
        <span class="cell-sub">${unitLabel}</span>
      </td>
      <td class="num-col">
        <span class="cell-main">${formatMoney(blendedCostPerResult, 2)}</span>
        <span class="cell-sub">${costType} promedio</span>
      </td>
      <td class="num-col">
        <span class="cell-main">${revSubtotal}</span>
        <span class="cell-sub">${roasOrNote}</span>
      </td>
    </tr>
  `;
}

export function renderSimulatorHero(out: SimulatorOutputs): string {
  const badgeHtml = out.allGoalsMet
    ? `<span class="status-ok">4 / 4 METAS EN RANGO</span>`
    : `<span class="status-warn">REVISAR PARÁMETROS</span>`;
  const meterPct = Math.min(100, Math.max(10, (out.roasBlended / 6.0) * 100));
  const meterColor = out.allGoalsMet ? '#047857' : '#b45309';

  return `
    <div class="forecast-hero-top">
      <div>
        <div class="forecast-kicker">Ventas Mensuales Estimadas (ROAS Global ${out.roasBlended.toFixed(2)})</div>
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
      <span>Obj. 2 App: <strong>ROAS ${out.roasApp.toFixed(2)}</strong> (${formatInt(out.ordersApp)} ped.)</span>
      <span>Obj. 3 Web: <strong>ROAS ${out.roasWeb.toFixed(2)}</strong> (${formatInt(out.ordersWeb)} ped.)</span>
    </div>
    <div class="forecast-sub-row" style="margin-top:6px;">
      <span>Carrito Abandonado 60D: <strong>${formatInt(out.rmkt60dOrders)} pedidos</strong></span>
      <span>CPA Rmkt 60D: <strong>${formatMoney(out.cpaRmkt60dMxn, 0)} MXN</strong> (ROAS ${out.roasRmkt60d.toFixed(2)})</span>
    </div>
    <div style="font-size:12.5px;color:var(--text-secondary);margin-top:8px;">
      <strong>Presupuesto por objetivo:</strong> Obj. 1: ${formatMoney(out.budgetObj1)} | Obj. 2: ${formatMoney(out.budgetObj2)} | Obj. 3: ${formatMoney(out.budgetObj3)} | Obj. 4: ${formatMoney(out.budgetObj4)}.
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
        <td>
          <strong>${g.projectedResultLabel}</strong><br/>
          <span class="text-muted">${g.complianceSubnote}</span>
        </td>
        <td>${g.unitCostSummary}</td>
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
        <td><span class="status-ok">ROAS ${s.roas.toFixed(2)}</span></td>
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
            <div class="brand-sub">Estrategia de Medios Online | Jorge Gutiérrez</div>
          </div>
        </div>
        <nav class="nav-links" aria-label="Deck Sections">
          <a href="#executive-summary" data-slide="0" class="active">A. Resumen</a>
          <a href="#media-plan" data-slide="1">B. Estimaciones ($850k)</a>
          <a href="#app-strategy" data-slide="2">C. Campañas App</a>
          <a href="#web-strategy" data-slide="3">D. Campañas Web y Rmkt 60D</a>
          <a href="#measurement-kpis" data-slide="4">E. KPIs</a>
        </nav>
      </div>
    </header>

    <main class="container">
      <!-- SLIDE 1: A. RESUMEN EJECUTIVO -->
      <div class="deck-slide active" data-slide="0">
        <section id="executive-summary" class="hero">
          <div class="hero-single">
            <div class="eyebrow">CASO PRÁCTICO | ESTRATEGIA DE MEDIOS ONLINE PARA OUTLETSHOP</div>
            <h1>Distribución <span class="gradient-text">20% Captación / 80% Ventas</span> para Llegar a ROAS 6.8 en App y 3.4 en Web</h1>
            <p class="hero-lead">
              OutletShop maneja un presupuesto mensual de <strong>$850,000 MXN</strong> y un ticket promedio (AOV) de <strong>$850 MXN</strong> tanto en web como en app. Como las metas de volumen que pide el ejercicio (1,300 descargas y 850 registros) son relativamente bajas para ese presupuesto, asignamos el <strong>20% ($170,000 MXN)</strong> a captación y concentramos el <strong>80% ($680,000 MXN)</strong> en campañas de venta y remarketing.
            </p>
            <div class="hero-cta-row">
              <a href="${GOOGLE_SHEET_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
                Ver Google Sheet con Estimaciones
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </a>
            </div>
          </div>

          <div class="grid-2" style="margin-top: 24px;">
            <div class="panel panel-accent">
              <h3>1. Captación (20% del presupuesto = $170,000 MXN)</h3>
              <ul class="styled-list">
                <li><strong>Descargas de App (12% | $102,000 MXN):</strong> En México un CPI promedio para retail/moda ronda los $40 MXN. Con este presupuesto cerramos en <strong>2,550 descargas</strong> (casi el doble de las 1,300 que pide la tabla) y <strong>1,148 usuarios registrados dentro de la app</strong>.</li>
                <li><strong>Registros en Sitio Web (8% | $68,000 MXN):</strong> Con un CPL estimado de $55.02 MXN en Facebook, Instagram, Display y DSP, generamos <strong>1,236 leads cualificados</strong> (arriba de los 850 solicitados).</li>
                <li><strong>Por qué no meter más del 20% aquí:</strong> Meter más dinero a instalaciones o registros bajaría el retorno global porque son campañas que no cobran en el momento; con el 20% cumplimos sobrados ambas metas y alimentamos las audiencias de remarketing.</li>
              </ul>
            </div>
            <div class="panel">
              <h3>2. Ventas en App y Web (80% del presupuesto = $680,000 MXN)</h3>
              <ul class="styled-list">
                <li><strong>Ventas dentro de la App (45% | $382,500 MXN):</strong> Con un AOV de $850 MXN, para dar un <strong>ROAS de 6.8</strong> necesitamos que cada pedido en la app cueste en promedio <strong>$125 MXN</strong> (<code>$850 / 6.8 = $125</code>). Eso equivale a <strong>3,060 pedidos y $2,601,000 MXN en ventas</strong>.</li>
                <li><strong>Ventas en el Sitio Web (35% | $297,500 MXN):</strong> Para dar un <strong>ROAS de 3.4</strong> con el mismo ticket de $850 MXN, el CPA web debe quedar en <strong>$250 MXN</strong> (<code>$850 / 3.4 = $250</code>), generando <strong>1,190 pedidos y $1,011,500 MXN en ventas</strong>.</li>
                <li><strong>Remarketing de Carritos Abandonados (60 días):</strong> Tanto en App como en Web incluimos una campaña específica para quienes agregaron productos al carrito pero no compraron en los últimos 60 días ($176,625 MXN en total, recuperando 1,270 pedidos a $139.07 MXN de CPA).</li>
              </ul>
            </div>
          </div>

          <h3 class="sub-heading" style="margin-top: 24px;">Resultados Esperados</h3>
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
                </tr>
              </thead>
              <tbody>
                ${summaryRows}
                <tr class="row-goal">
                  <td><strong>TOTAL MENSUAL OUTLETSHOP</strong></td>
                  <td>App + Sitio Web</td>
                  <td><strong>4 Objetivos</strong></td>
                  <td><strong>100.0%</strong> ($850,000 MXN)</td>
                  <td>
                    <strong>$3,612,500 MXN en Ventas (4,250 pedidos)</strong><br/>
                    <span class="text-muted">Nota: Se cumplen los ROAS de 6.8 (App) y 3.4 (Web) y se superan las metas de descargas (2,550 vs. 1,300) y leads (1,236 vs. 850).</span>
                  </td>
                  <td>ROAS Global: <strong>4.25</strong> | ROAS Ventas: <strong>5.31</strong><br/>18.68M Impresiones | 293,863 Clics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="assumptions-banner">
            <div class="assumptions-title">Datos Base del Ejercicio:</div>
            <div class="assumptions-pills">
              <span><strong>Presupuesto Mensual:</strong> $850,000 MXN</span>
              <span><strong>AOV Actual (Web y App):</strong> $850 MXN</span>
              <span><strong>Público Objetivo:</strong> Hombres y Mujeres 18-50 años en México (Moda, Ofertas y Compras Online)</span>
              <span><strong>CPA Objetivo (con AOV $850):</strong> $125 MXN en App (ROAS 6.8) y $250 MXN en Web (ROAS 3.4)</span>
            </div>
          </div>
        </section>
      </div>

      <!-- SLIDE 2: B. ESTIMACIONES Y PLAN DE MEDIOS -->
      <div class="deck-slide" data-slide="1">
        <section id="media-plan" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCIÓN B | ESTIMACIONES Y DISTRIBUCIÓN DEL PRESUPUESTO ($850,000 MXN)</span>
              <h2>Estimaciones Mensuales por Objetivo y Plataforma</h2>
              <p>Desglose de inversión, impresiones, clics, tasas de conversión, costos por resultado (CPI, CPL, CPA), ventas e ingresos considerando el AOV de $850 MXN.</p>
            </div>
          </div>

          <div class="table-wrap">
            <table class="data-table media-plan-table">
              <thead>
                <tr>
                  <th class="campaign-col">Objetivo / Plataforma / Campaña</th>
                  <th class="num-col">Inversión (MXN)</th>
                  <th class="num-col">Impresiones &amp; CPM</th>
                  <th class="num-col">Clics, CTR &amp; CPC</th>
                  <th class="num-col">CVR</th>
                  <th class="num-col">Resultados</th>
                  <th class="num-col">Costo Unitario</th>
                  <th class="num-col">Ingresos &amp; ROAS</th>
                </tr>
              </thead>
              <tbody>
                ${mediaPlanBody}
                <tr class="row-goal">
                  <td class="campaign-col"><strong>TOTAL PLAN DE MEDIOS</strong></td>
                  <td class="num-col">
                    <span class="cell-main">$850,000</span>
                    <span class="cell-sub">100.0% del total</span>
                  </td>
                  <td class="num-col">
                    <span class="cell-main">18,676,625</span>
                    <span class="cell-sub">$45.51 CPM</span>
                  </td>
                  <td class="num-col">
                    <span class="cell-main">293,863</span>
                    <span class="cell-sub">1.57% CTR | $2.89 CPC</span>
                  </td>
                  <td class="num-col">
                    <span class="cell-main">1.87%</span>
                    <span class="cell-sub">en Ventas</span>
                  </td>
                  <td class="num-col">
                    <span class="cell-main">4,250 pedidos</span>
                    <span class="cell-sub">+2,550 inst. | +1,236 leads</span>
                  </td>
                  <td class="num-col">
                    <span class="cell-main">$160.00</span>
                    <span class="cell-sub">CPA Ventas</span>
                  </td>
                  <td class="num-col">
                    <span class="cell-main">$3,612,500</span>
                    <span class="cell-sub">ROAS Global 4.25</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Simulador de Estimaciones -->
          <div class="grid-2" style="margin-top: 24px;">
            <div class="panel">
              <h3>Cómo construimos las estimaciones</h3>
              <ul class="styled-list">
                <li><strong>Cálculo directo desde el AOV ($850 MXN):</strong>
                  <br/>- En la App nos piden <strong>ROAS 6.8</strong>, lo que obliga a comprar pedidos a <strong>$125 MXN de CPA promedio</strong>. Con $382,500 MXN salen <strong>3,060 pedidos ($2,601,000 MXN)</strong>.
                  <br/>- En el Sitio Web nos piden <strong>ROAS 3.4</strong>, por lo que el CPA promedio debe ser de <strong>$250 MXN</strong>. Con $297,500 MXN salen <strong>1,190 pedidos ($1,011,500 MXN)</strong>.
                </li>
                <li><strong>Costos de mercado en México:</strong> Consideramos CPMs entre $30 y $62.50 MXN (más alto en Google Search por intención de compra y más bajo en TikTok/Display), logrando CPCs alrededor de $2.89 MXN.</li>
                <li><strong>Por qué funciona el CPA en App y Web:</strong> La prospección en frío suele tener CPAs más altos (por ejemplo $423 MXN en Facebook Web), pero al combinarla con Google Search ($232 CPA) y con las campañas de Remarketing de Carritos Abandonados de 60 días ($112.50 CPA en App y $190.67 CPA en Web), el promedio cierra en meta.</li>
              </ul>
            </div>

            <div class="panel panel-accent">
              <div class="forecast-header">
                <div>
                  <h3 style="margin-bottom:4px;">Calculadora de Escenarios (TypeScript)</h3>
                  <p style="font-size:13px;color:var(--text-secondary);">Mueve los valores para ver cómo cambian las metas:</p>
                </div>
                <div class="preset-row">
                  <button type="button" class="preset-btn active" data-preset="baseline">Escenario Base ($850k)</button>
                  <button type="button" class="preset-btn" data-preset="aov_boost">Ticket de $950</button>
                  <button type="button" class="preset-btn" data-preset="rmkt_focus">+Peso a Rmkt 60D</button>
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
              <span class="section-tag">SECCIÓN C | CAMPAÑAS PARA LA APLICACIÓN MÓVIL (OBJETIVOS 1 Y 2)</span>
              <h2>1. Descargas y Engagement App + 2. Promoción de Ventas en App</h2>
              <p>Planteamiento en Facebook, Instagram, Google Ads, TikTok y DSP para cubrir las descargas y alcanzar el ROAS de 6.8 dentro de la aplicación.</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel panel-accent">
              <h3>1. Descargas y Engagement para la Aplicación ($102,000 MXN | 12%)</h3>
              <p><strong>Plataformas:</strong> Facebook, Instagram, Google Ads, TikTok y DSP.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> El brief pide 1,300 descargas. Con $102,000 MXN a un CPI promedio de $40 MXN logramos <strong>2,550 descargas</strong> y <strong>1,148 registros dentro de la app</strong> (45% de los que instalan).</li>
                <li><strong>Rol de cada plataforma:</strong>
                  <br/>- <strong>Google Ads ($40,800):</strong> Campañas UAC enfocadas en usuarios que ya buscan apps de ropa, calzado u ofertas en Play Store y App Store (1,100 descargas a $37.09 CPI).
                  <br/>- <strong>Facebook e Instagram ($35,700):</strong> Campañas de instalación segmentadas a hombres y mujeres de 18 a 50 años en México con interés en calzado, ropa familiar y compras online (880 descargas a $40.57 CPI).
                  <br/>- <strong>TikTok ($15,300) y DSP ($10,200):</strong> Videos cortos mostrando cambios de look o paquetes familiares por menos de $850 MXN y formatos de video en otras apps (570 descargas entre ambos).
                </li>
                <li><strong>Cómo subimos el registro después de descargar:</strong> Damos un cupón de $150 MXN para la primera compra en la app, pero pedimos iniciar sesión con Google, Apple o Facebook en un clic para activarlo.</li>
              </ul>
            </div>

            <div class="panel">
              <h3>2. Promoción de Ventas dentro de la App ($382,500 MXN | 45%)</h3>
              <p><strong>Plataformas:</strong> Google Ads, Facebook, Instagram, TikTok y DSP.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> Llegar a <strong>ROAS 6.80 ($2,601,000 MXN en ventas / 3,060 pedidos)</strong> con una conversión en app del <strong>2.40%</strong> y un CPA de <strong>$125 MXN</strong>.</li>
                <li><strong>Rol de cada plataforma:</strong>
                  <br/>- <strong>Google Ads ($130,050):</strong> UAC optimizado al evento de compra in-app con feed de productos (1,045 pedidos, ROAS 6.83).
                  <br/>- <strong>Facebook e Instagram ($99,450):</strong> Anuncios de catálogo con deep link para que al hacer clic en un par de zapatos se abra directamente ese producto dentro de la app (755 pedidos, ROAS 6.45).
                  <br/>- <strong>Remarketing Carrito 60D en App ($95,625 en FB/IG + DSP):</strong> Campaña dirigida a quienes agregaron al carrito en la app pero no compraron en los últimos 60 días (850 pedidos a $112.50 CPA, ROAS 7.56).
                  <br/>- <strong>TikTok ($57,375):</strong> Anuncios de catálogo en video para usuarios que ya tienen la app instalada (410 pedidos, ROAS 6.07).
                </li>
                <li><strong>Recompras y cuidado del ticket ($850 MXN):</strong> Para no perder AOV en artículos rebajados, ponemos envío gratis a partir de $899 MXN (lo que empuja a sumar un segundo artículo) y trabajamos notificaciones push en quincena para lograr <strong>1,285 compras recurrentes</strong>.</li>
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
              <span class="section-tag">SECCIÓN D | CAMPAÑAS PARA EL SITIO WEB (OBJETIVOS 3 Y 4) Y REMARKETING 60 DÍAS</span>
              <h2>3. Ventas en el Sitio Web + 4. Registros Web + Carritos Abandonados (60 Días)</h2>
              <p>Uso de Google Search, Email Marketing, Facebook, Instagram, Display y DSP para lograr el ROAS de 3.4 en web y captar más de 850 leads cualificados.</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel">
              <h3>3. Incentivar Ventas en el Sitio Web ($297,500 MXN | 35%)</h3>
              <p><strong>Plataformas:</strong> Google Search Ads, Email Marketing, Facebook y Display.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> Cerrar en <strong>ROAS 3.40 ($1,011,500 MXN / 1,190 pedidos)</strong> con una conversión en el sitio del <strong>1.20%</strong>.</li>
                <li><strong>Google Search Ads ($133,875 | ROAS 3.65):</strong> Es el canal más fuerte en web porque captura gente buscando "outlet de calzado", "tenis en oferta" o marcas específicas. Genera <strong>575 pedidos a $232.83 CPA</strong>.</li>
                <li><strong>Facebook Ads Prospección ($82,625):</strong> Campañas de catálogo para llevar tráfico nuevo al sitio web (195 pedidos).</li>
                <li><strong>Remarketing Carrito 60D en Facebook, Display y Email ($81,000):</strong> Recupera a los usuarios que dejaron carrito sin comprar en los últimos 60 días, aportando <strong>420 pedidos con un CPA promedio de remarketing de $192.86 MXN</strong> ($190.67 en pauta y $198.33 en Email Marketing).</li>
              </ul>
            </div>

            <div class="panel panel-accent">
              <h3>4. Incrementar Registros en el Sitio Web ($68,000 MXN | 8%)</h3>
              <p><strong>Plataformas:</strong> Google Display, Facebook Ads, Instagram Ads y DSP.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> El brief pide 850 leads cualificados. Con $68,000 MXN a un CPL de $55.02 MXN proyectamos <strong>1,236 registros completados</strong> convirtiendo al <strong>5.01%</strong> de los visitantes.</li>
                <li><strong>Gancho de registro:</strong> Ofrecer un 15% de descuento adicional en la primera compra al registrarse en el sitio eligiendo qué categoría compran más (Mujer, Hombre o Niños).</li>
                <li><strong>Reparto por canal:</strong>
                  <br/>- <strong>Facebook ($27,200) e Instagram ($20,400):</strong> Llevan el 70% del presupuesto del objetivo porque tienen mejor conversión a formulario (920 leads entre ambos a $50-$54 CPL).
                  <br/>- <strong>Google Display ($12,240) y DSP ($8,160):</strong> Apoyan con audiencias interesadas en moda y ofertas en México (316 leads).
                </li>
                <li><strong>Paso a venta:</strong> En cuanto dejan su correo, entran a los envíos de Email Marketing del Objetivo 3 para usar su cupón.</li>
              </ul>
            </div>
          </div>

          <h3 class="sub-heading">Campaña de Remarketing: Audiencia de Carrito Abandonado (Últimos 60 Días sin Compra)</h3>
          <p style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;">
            En calzado y ropa mucha gente arma su carrito para ver cuánto sale con envío y espera a la quincena para pagar. Usar una ventana de 60 días (excluyendo a quienes ya compraron) nos permite cubrir 4 quincenas seguidas en México:
          </p>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Etapa de la Audiencia (60D)</th>
                  <th>Ventana</th>
                  <th>Canales</th>
                  <th>Inversión (MXN)</th>
                  <th>Qué mostramos en el anuncio</th>
                  <th>Pedidos</th>
                  <th>CPA</th>
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
                  <td><strong>Audiencia acumulada de 60 días excluyendo compradores</strong></td>
                  <td><strong>1,270 pedidos</strong></td>
                  <td><strong>$139.07 MXN</strong></td>
                  <td><strong>ROAS 6.11</strong></td>
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
              <span class="section-tag">SECCIÓN E | KPIS SOLICITADOS EN EL EJERCICIO</span>
              <h2>Desglose de KPIs por Objetivo</h2>
              <p>Valor estimado para cada uno de los indicadores que pide el caso práctico y cómo lo cuidamos en la operación diaria.</p>
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
        <div id="deck-slide-label" class="deck-slide-indicator">Slide <strong>1 / 5</strong> | A. Resumen</div>
        <button id="btn-next-slide" class="btn btn-primary">Siguiente Slide</button>
      </div>
    </main>

    <footer class="footer">
      <div class="container footer-inner">
        <div>
          <strong>Caso Práctico OutletShop</strong> | Jorge Gutiérrez (<a href="mailto:jorgeegtzhdz@gmail.com">jorgeegtzhdz@gmail.com</a>)
        </div>
        <div>
          <a href="${GOOGLE_SHEET_URL}" target="_blank" rel="noopener noreferrer">Abrir Google Sheet de Estimaciones</a>
        </div>
      </div>
    </footer>
  `;
}

import {
  GOOGLE_SHEET_URL,
  KPI_MATRIX_ROWS,
  OBJECTIVE_GROUPS,
  REMARKETING_60D_TIERS,
  WEEKLY_CADENCE
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
        ? ` <span class="tag tag-purple">RMKT 60D CARRITO</span>`
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
          <td><strong>${line.secondaryKpiNote}</strong></td>
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
  const subtotalBg = group.block === 'Captacion (20%)' ? '#eef2ff' : '#ecfdf5';
  const roasOrNote =
    totalRev > 0
      ? `<span class="status-ok">${(totalRev / group.monthlySpendMxn).toFixed(2)}x ROAS</span>`
      : group.id === 'obj1'
      ? '1,148 Reg (45.0%)'
      : '+45% vs Meta (850)';

  return `
    <tr class="row-anchor">
      <td colspan="13"><strong>${group.title.toUpperCase()} (${group.sharePct.toFixed(1)}% Budget = ${formatMoney(group.monthlySpendMxn)} MXN | Meta: ${group.briefTargetLabel})</strong></td>
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
    : `<span class="status-warn">REVISAR PARAMETROS</span>`;
  const meterPct = Math.min(100, Math.max(10, (out.roasBlended / 6.0) * 100));
  const meterColor = out.allGoalsMet ? '#047857' : '#b45309';

  return `
    <div class="forecast-hero-top">
      <div>
        <div class="forecast-kicker">Ingresos Totales Proyectados (ROAS Blended ${out.roasBlended.toFixed(2)}x)</div>
        <div class="forecast-big-cac">${formatMoney(out.totalRevenue, 0)} MXN</div>
      </div>
      ${badgeHtml}
    </div>
    <div class="forecast-meter">
      <div class="forecast-meter-track">
        <div class="forecast-meter-fill" style="width:${meterPct.toFixed(1)}%;background:${meterColor};"></div>
      </div>
      <div class="forecast-meter-labels">
        <span>Obj 1: <strong>${formatInt(out.installs)} installs</strong> (Meta: 1,300)</span>
        <span>Obj 4: <strong>${formatInt(out.leads)} leads</strong> (Meta: 850)</span>
      </div>
    </div>
    <div class="forecast-sub-row">
      <span>ROAS App (Obj 2): <strong>${out.roasApp.toFixed(2)}x</strong> (${formatInt(out.ordersApp)} ped.)</span>
      <span>ROAS Web (Obj 3): <strong>${out.roasWeb.toFixed(2)}x</strong> (${formatInt(out.ordersWeb)} ped.)</span>
    </div>
    <div class="forecast-sub-row" style="margin-top:6px;">
      <span>Rmkt Carrito 60D: <strong>${formatInt(out.rmkt60dOrders)} carritos recuperados</strong></span>
      <span>ROAS Rmkt 60D: <strong>${out.roasRmkt60d.toFixed(2)}x</strong> (${formatMoney(out.cpaRmkt60dMxn, 0)} CPA)</span>
    </div>
    <div style="font-size:12.5px;color:var(--text-secondary);margin-top:8px;">
      <strong>Inversion:</strong> Obj 1: ${formatMoney(out.budgetObj1)} | Obj 2: ${formatMoney(out.budgetObj2)} | Obj 3: ${formatMoney(out.budgetObj3)} | Obj 4: ${formatMoney(out.budgetObj4)} (Incluye <strong>${formatMoney(out.rmkt60dBudgetMxn)}</strong> en Remarketing Carrito 60D).
    </div>
  `;
}

export function renderAppShell(): string {
  const summaryRows = OBJECTIVE_GROUPS.map(
    (g) => `
      <tr>
        <td><strong>${g.title}</strong></td>
        <td>${g.briefMetricName}</td>
        <td><strong>${g.briefTargetLabel}</strong></td>
        <td><strong>${g.sharePct.toFixed(1)}%</strong><br/>${formatMoney(g.monthlySpendMxn)} MXN</td>
        <td><strong>${g.projectedResultLabel}</strong></td>
        <td>${g.unitCostSummary}</td>
        <td><span class="status-ok">${g.statusBadge}</span></td>
      </tr>
    `
  ).join('');

  const mediaPlanBody = OBJECTIVE_GROUPS.map((g) => renderObjectiveRows(g)).join('');

  const rmktTierRows = REMARKETING_60D_TIERS.map(
    (t) => `
      <tr>
        <td><strong>${t.windowLabel}</strong><br/><span class="text-muted">${t.quincenaContext}</span></td>
        <td><strong>${t.budgetShareOfRmktPct}% Rmkt</strong><br/>${formatMoney(t.monthlySpendMxn)} MXN</td>
        <td><strong>Incluye:</strong> <code>${t.inclusionRule}</code><br/><strong>Excluye:</strong> <code>${t.exclusionRule}</code></td>
        <td>${t.channels}<br/><span class="text-muted">${t.creativeMessage}</span></td>
        <td>CVR: <strong>${t.cvrPct.toFixed(2)}%</strong><br/>CPA: <strong>${formatMoney(t.cpaMxn, 2)} MXN</strong></td>
        <td><strong>${formatInt(t.recoveredOrders)} pedidos</strong><br/><span class="status-ok">${formatMoney(t.revenueMxn)} (${t.roas.toFixed(2)}x ROAS)</span></td>
      </tr>
    `
  ).join('');

  const kpiMatrixHtml = KPI_MATRIX_ROWS.map(
    (r) => `
      <tr>
        <td><strong>${r.objectiveLabel}</strong></td>
        <td>${r.kpiList.map((k) => `- ${k}`).join('<br/>')}</td>
        <td>${r.modelProjections.map((m) => `- <strong>${m}</strong>`).join('<br/>')}</td>
        <td>${r.ssotSource}</td>
        <td>${r.optimizationRules.map((o) => `- ${o}`).join('<br/>')}</td>
      </tr>
    `
  ).join('');

  const cadenceHtml = WEEKLY_CADENCE.map(
    (w) => `
      <div class="cadence-day">
        <strong>${w.weekTitle}</strong>
        <span>${w.summary}</span>
      </div>
    `
  ).join('');

  return `
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="brand">
          <div class="brand-logo">O</div>
          <div>
            <div class="brand-title">OutletShop Media Plan <span class="badge-pill">TypeScript App | Caso Elogia</span></div>
            <div class="brand-sub">por Jorge Gutierrez</div>
          </div>
        </div>
        <nav class="nav-links" aria-label="Deck Sections">
          <a href="#executive-summary" data-slide="0" class="active">A. Resumen Ejecutivo</a>
          <a href="#media-plan" data-slide="1">B. Plan de Medios ($850k)</a>
          <a href="#remarketing-60d" data-slide="2">C. Remarketing Carrito 60D</a>
          <a href="#web-simulator" data-slide="3">D. App/Web + Simulador TS</a>
          <a href="#measurement-kpis" data-slide="4">E. Medicion y KPIs</a>
        </nav>
      </div>
    </header>

    <main class="container">
      <!-- SLIDE 1: A. RESUMEN EJECUTIVO -->
      <div class="deck-slide active" data-slide="0">
        <section id="executive-summary" class="hero">
          <div class="hero-single">
            <div class="eyebrow">A. RESUMEN EJECUTIVO | ESTRATEGIA DE MEDIOS ONLINE OUTLETSHOP (MEXICO)</div>
            <h1>Estrategia <span class="gradient-text">20% Captacion / 80% Ventas + Remarketing 60D</span> para Generar $3.61M MXN (ROAS 4.25x)</h1>
            <p class="hero-lead">
              Distribucion estrategica de los <strong>$850,000 MXN mensuales</strong> (AOV de <strong>$850 MXN</strong>) que cumple exactamente el <strong>ROAS 6.8x en App</strong> y <strong>ROAS 3.4x en Web</strong> mediante un motor dedicado de <strong>Remarketing de Carritos Abandonados en los ultimos 60 dias</strong> (excluyendo compradores), mientras sobrecumple la captacion con <strong>2,550 descargas (+96%)</strong> y <strong>1,236 leads cualificados (+45%)</strong>.
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
              <h3>1. Bloque Captacion: 20% Budget ($170,000 MXN)</h3>
              <ul class="styled-list">
                <li><strong>Obj. 1 - Descargas y Engagement App (12% | $102,000 MXN):</strong> Entrega <strong>2,550 descargas</strong> a <strong>$40.00 MXN CPI</strong> (+96% vs. meta de 1,300) y <strong>1,148 registros in-app</strong> (45% CVR).</li>
                <li><strong>Obj. 4 - Registros en Sitio Web (8% | $68,000 MXN):</strong> Entrega <strong>1,236 leads cualificados</strong> a <strong>$55.02 MXN CPL</strong> (+45% vs. meta de 850) con una CVR de visita a registro del <strong>5.00%</strong>.</li>
                <li><strong>Sinergia con Remarketing:</strong> Cada usuario que instala la app o se registra en la web y agrega productos al carrito sin comprar entra inmediatamente a las audiencias de <strong>Remarketing 60D</strong>.</li>
              </ul>
            </div>
            <div class="panel">
              <h3>2. Bloque Ventas + Remarketing 60D: 80% Budget ($680,000 MXN)</h3>
              <ul class="styled-list">
                <li><strong>Obj. 2 - Ventas dentro de la App (45% | $382,500 MXN):</strong> Logra <strong>ROAS 6.80x</strong> ($2,601,000 MXN / <strong>3,060 pedidos</strong> a <strong>$125.00 MXN CPA global</strong>). Incluye <strong>$95,625 MXN</strong> en <strong>Remarketing Carrito Abandonado 60D In-App</strong> (850 pedidos a <strong>$112.50 CPA y 7.56x ROAS</strong>).</li>
                <li><strong>Obj. 3 - Ventas en Sitio Web (35% | $297,500 MXN):</strong> Logra <strong>ROAS 3.40x</strong> ($1,011,500 MXN / <strong>1,190 pedidos</strong> a <strong>$250.00 MXN CPA global</strong>). Incluye <strong>$81,000 MXN</strong> en <strong>Remarketing Carrito Abandonado 60D Web + Email</strong> (420 pedidos a <strong>$192.86 CPA y 4.41x ROAS</strong>).</li>
                <li><strong>Peso del Motor Remarketing 60D:</strong> Con el 20.8% del presupuesto total ($176,625 MXN), recupera <strong>1,270 carritos abandonados</strong> generando <strong>$1,079,500 MXN (ROAS 6.11x)</strong>.</li>
              </ul>
            </div>
          </div>

          <h3 class="sub-heading" style="margin-top: 24px;">Resultados Esperados (Brief Elogia) vs. Proyeccion del Modelo</h3>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Objetivo</th>
                  <th>Metrica Principal</th>
                  <th>Meta del Brief</th>
                  <th>Split &amp; Inversion</th>
                  <th>Proyeccion del Modelo</th>
                  <th>KPIs Clave Logrados</th>
                  <th>Estado vs. Meta</th>
                </tr>
              </thead>
              <tbody>
                ${summaryRows}
                <tr class="row-goal">
                  <td><strong>TOTAL CONSOLIDADO OUTLETSHOP</strong></td>
                  <td>Full-Funnel + Rmkt 60D</td>
                  <td><strong>4 Objetivos</strong></td>
                  <td><strong>100.0%</strong><br/>$850,000 MXN</td>
                  <td><strong>$3,612,500 MXN Ingresos</strong><br/><span class="text-muted">4,250 pedidos + 2,550 installs + 1,236 leads</span></td>
                  <td>ROAS Total: <strong>4.25x</strong> | ROAS Rmkt 60D: <strong>6.11x</strong><br/>1,270 carritos recuperados ($139.07 CPA)</td>
                  <td><span class="status-ok">100% OBJETIVOS SUPERADOS</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- SLIDE 2: B. PLAN DE MEDIOS DETALLADO -->
      <div class="deck-slide" data-slide="1">
        <section id="media-plan" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCION B | PLAN DE MEDIOS Y ESTIMACIONES MATEMATICAS ($850,000 MXN)</span>
              <h2>Desglose Mensual por Objetivo, Plataforma y Campanas de Remarketing 60D</h2>
              <p>Las lineas 2.3, 3.3 y 3.4 corresponden especificamente a las campanas de Remarketing de Carritos Abandonados en los ultimos 60 dias sin compra.</p>
            </div>
          </div>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Objetivo / Plataforma / Campana</th>
                  <th>Inversion (MXN)</th>
                  <th>% Budget</th>
                  <th>CPM</th>
                  <th>Impresiones</th>
                  <th>CTR</th>
                  <th>Clics</th>
                  <th>CPC</th>
                  <th>CVR</th>
                  <th>Conversiones</th>
                  <th>CPI / CPL / CPA</th>
                  <th>Ingresos (MXN)</th>
                  <th>ROAS / Nota</th>
                </tr>
              </thead>
              <tbody>
                ${mediaPlanBody}
                <tr class="row-goal">
                  <td><strong>TOTAL PLAN DE MEDIOS</strong></td>
                  <td><strong>$850,000</strong></td>
                  <td><strong>100.0%</strong></td>
                  <td><strong>$45.44</strong></td>
                  <td><strong>18,708,856</strong></td>
                  <td><strong>1.52%</strong></td>
                  <td><strong>284,791</strong></td>
                  <td><strong>$2.98</strong></td>
                  <td><strong>-</strong></td>
                  <td><strong>4,250 Pedidos</strong></td>
                  <td><strong>$160 CPA Ventas</strong></td>
                  <td><strong>$3,612,500</strong></td>
                  <td><strong>4.25x Blended</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- SLIDE 3: C. MOTOR DE REMARKETING CARRITO ABANDONADO 60 DIAS -->
      <div class="deck-slide" data-slide="2">
        <section id="remarketing-60d" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCION C | ESTRATEGIA DE REMARKETING: CARRITOS ABANDONADOS (ULTIMOS 60 DIAS SIN COMPRA)</span>
              <h2>Arquitectura de Remarketing 60D: Capturando 4 Quincenas en Mexico</h2>
              <p>En moda y calzado en Mexico, el 75% de los carritos se abandonan esperando el pago de quincena (dias 15 y 30). Una ventana de 60 dias cubre 4 ciclos de nomina completos.</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel panel-accent">
              <h3>Regla de Audiencia y Exclusion Estricta (App + Web)</h3>
              <ul class="styled-list">
                <li><strong>Regla de Inclusion (60 Dias):</strong> Usuarios que dispararon <code>af_add_to_cart</code> en la App (MMP SDK) o <code>add_to_cart</code> en el Sitio Web (GA4 / Meta Pixel + CAPI) en los <strong>ultimos 60 dias</strong>.</li>
                <li><strong>Regla de Exclusion en Tiempo Real:</strong> <code>EXCLUDE Purchase (ultimos 60 dias)</code> sincronizado tanto de Web como de App via Server-Side CAPI y MMP Postbacks para nunca perseguir a un usuario que ya compro en el otro canal.</li>
                <li><strong>Presupuesto Asignado:</strong> <strong>$176,625 MXN mensuales</strong> ($95,625 en App + $57,200 en Ads Web + $23,800 en Email CRM = 26% del presupuesto de ventas).</li>
              </ul>
            </div>

            <div class="panel">
              <h3>Por que Resuelve los KPIs del Brief</h3>
              <ul class="styled-list">
                <li><strong>KPI Explicito del Objetivo 3:</strong> El brief pide medir el <em>"Costo por adquisicion (CPA) en campanas de remarketing"</em>. Mientras la prospeccion fria en Web cuesta <strong>$423.72 MXN CPA</strong>, nuestra campana de Remarketing 60D logra <strong>$190.67 MXN CPA en Ads (ROAS 4.46x)</strong> y <strong>$198.33 MXN CPA en Email (ROAS 4.29x)</strong>, promediando <strong>$192.86 MXN CPA</strong>.</li>
                <li><strong>En la App (Objetivo 2):</strong> El Remarketing 60D In-App con <strong>Deferred Deep Linking</strong> directo al carrito pre-cargado convierte al <strong>3.85%</strong> con un <strong>CPA de $112.50 MXN (ROAS 7.56x)</strong>, impulsando el ROAS global de la App a <strong>6.80x</strong>.</li>
              </ul>
            </div>
          </div>

          <h3 class="sub-heading">Segmentacion Escalonada de los 60 Dias (3 Tiers por Recencia y Quincena)</h3>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Ventana de Recencia (60D)</th>
                  <th>Share &amp; Inversion</th>
                  <th>Definicion Tecnica de Audiencia</th>
                  <th>Canales &amp; Mensaje Creativo</th>
                  <th>CVR &amp; CPA Objetivo</th>
                  <th>Pedidos &amp; ROAS</th>
                </tr>
              </thead>
              <tbody>
                ${rmktTierRows}
                <tr class="row-goal">
                  <td><strong>TOTAL REMARKETING CARRITO 60D</strong></td>
                  <td><strong>100% Rmkt</strong><br/>$176,625 MXN</td>
                  <td><strong>AddToCart 1-60D EXCL Purchase 60D</strong><br/>(Omnicanal App + Web)</td>
                  <td>Meta DABA/DPA + Google Display + DSP + Email/Push</td>
                  <td>CVR: <strong>3.06%</strong><br/>CPA: <strong>$139.07 MXN</strong></td>
                  <td><strong>1,270 pedidos</strong><br/><span class="status-ok">$1,079,500 (6.11x ROAS)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- SLIDE 4: D. ESTRATEGIA APP/WEB + SIMULADOR TYPESCRIPT -->
      <div class="deck-slide" data-slide="3">
        <section id="web-simulator" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCION D | ARQUITECTURA FULL-FUNNEL + SIMULADOR INTERACTIVO EN TYPESCRIPT</span>
              <h2>Arquitectura por Canal + Simulador Dinamico de Presupuesto y ROAS</h2>
              <p>Simula en tiempo real el impacto de mover el presupuesto, el AOV, el CPI/CPA y el peso de la campana de Remarketing de Carritos Abandonados 60D.</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel">
              <h3>Arquitectura App (Obj. 1 y 2) &amp; Sitio Web (Obj. 3 y 4)</h3>
              <ul class="styled-list">
                <li><strong>Obj. 1 - Descargas App ($102,000 MXN):</strong> Google UAC Install ($40,800), Meta App Install ($35,700), TikTok UGC ($15,300) y DSP ($10,200). Gancho de <em>"$150 MXN de regalo en tu 1ra compra en App"</em> para lograr <strong>2,550 descargas ($40 CPI)</strong> y <strong>1,148 registros in-app</strong>.</li>
                <li><strong>Obj. 2 - Ventas In-App ($382,500 MXN -> ROAS 6.8x):</strong> Combina Google UAC for Action ($130,050), Meta Advantage+ App ($99,450), TikTok Video Shopping ($57,375) y la campana de <strong>Remarketing Carrito 60D In-App ($95,625)</strong> para generar <strong>3,060 pedidos a $125 CPA</strong>.</li>
                <li><strong>Obj. 3 - Ventas Sitio Web ($297,500 MXN -> ROAS 3.4x):</strong> Google Search Brand + Generic + Shopping ($133,875 a <strong>3.65x ROAS</strong>), Facebook Prospeccion ($82,625) y el motor <strong>Remarketing Carrito 60D Web + Email ($81,000 a $192.86 CPA)</strong> para lograr <strong>1,190 pedidos</strong>.</li>
                <li><strong>Obj. 4 - Registros Sitio Web ($68,000 MXN):</strong> Lead Magnet <em>"Club VIP OutletShop 15% OFF"</em> en Facebook ($27,200), Instagram ($20,400), Display ($12,240) y DSP ($8,160), generando <strong>1,236 leads cualificados a $55.02 CPL</strong>.</li>
              </ul>
            </div>

            <div class="panel panel-accent">
              <div class="forecast-header">
                <div>
                  <h3 style="margin-bottom:4px;">Simulador TypeScript de Medios &amp; Remarketing 60D</h3>
                  <p style="font-size:13px;color:var(--text-secondary);">Mueve los parametros para recalcular los 4 objetivos:</p>
                </div>
                <div class="preset-row">
                  <button type="button" class="preset-btn active" data-preset="baseline">Modelo Base (20/80)</button>
                  <button type="button" class="preset-btn" data-preset="aov_boost">AOV Upsell ($950)</button>
                  <button type="button" class="preset-btn" data-preset="rmkt_aggressive">+Peso Rmkt 60D (35%)</button>
                </div>
              </div>

              <div id="sim-outlet-result" class="forecast-hero"></div>

              <div class="slider-stack">
                <div class="slider-card">
                  <div class="control-label">
                    <span>Presupuesto Mensual Total (MXN)</span>
                    <strong id="val-out-budget">$850,000</strong>
                  </div>
                  <input type="range" id="inp-out-budget" min="500000" max="1500000" step="25000" value="850000" />
                </div>
                <div class="slider-card">
                  <div class="control-label">
                    <span>Split Captacion (Obj 1+4) vs. Ventas (Obj 2+3)</span>
                    <strong id="val-out-split">20% Captacion / 80% Ventas</strong>
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
                    <span>CPI App (Obj. 1) &amp; CPA Base App (Obj. 2)</span>
                    <strong id="val-out-cpicpa">$40 CPI | $125 CPA App</strong>
                  </div>
                  <input type="range" id="inp-out-cpi" min="25" max="75" step="1" value="40" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- SLIDE 5: E. MEDICION, KPIS Y OPTIMIZACION -->
      <div class="deck-slide" data-slide="4">
        <section id="measurement-kpis" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCION E | MATRIZ DE KPIS OBLIGATORIOS, ATRIBUCION Y ROADMAP</span>
              <h2>Control de los 13 KPIs del Brief y Reglas de Optimizacion</h2>
              <p>Gobernanza de datos entre MMP (AppsFlyer/Adjust), Google Analytics 4 (GA4), Meta CAPI y CRM para evitar canibalizacion entre Web y App.</p>
            </div>
          </div>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Objetivo</th>
                  <th>KPI Solicitado en el Brief</th>
                  <th>Estimacion del Plan</th>
                  <th>Fuente de Verdad (SSOT)</th>
                  <th>Regla de Optimizacion / Accion Tactica</th>
                </tr>
              </thead>
              <tbody>
                ${kpiMatrixHtml}
              </tbody>
            </table>
          </div>

          <h3 class="sub-heading">Roadmap Operativo de Ejecucion (Mes 1 - 4 Semanas)</h3>
          <div class="cadence-bar">
            ${cadenceHtml}
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
          <strong>Caso Practico OutletShop (Elogia) - TypeScript Edition</strong> | por Jorge Gutierrez (<a href="mailto:jorgeegtzhdz@gmail.com">jorgeegtzhdz@gmail.com</a>)
        </div>
        <div>
          <a href="${GOOGLE_SHEET_URL}" target="_blank" rel="noopener noreferrer">Abrir Google Sheet de Estimaciones</a>
        </div>
      </div>
    </footer>
  `;
}

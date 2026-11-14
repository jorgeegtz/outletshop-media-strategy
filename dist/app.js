"use strict";
(() => {
  // src/data.ts
  var GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/13xVz5fn7o0RXlFqfymwfAVaJiwahTILCM3aRDT-GaNc/edit";
  var OBJECTIVE_GROUPS = [
    {
      id: "obj1",
      title: "1. Incremento de descargas de app",
      block: "Captacion (20%)",
      sharePct: 12,
      monthlySpendMxn: 102e3,
      briefMetricName: "Costo por instalacion (CPI)",
      briefTargetLabel: "1,300 descargas",
      projectedResultLabel: "2,550 descargas (+ 1,148 registros in-app)",
      unitCostSummary: "CPI: $40.00 MXN | CTR: 1.59% | CVR Descarga: 6.00% | CVR Reg: 45.0%",
      statusBadge: "196% CUMPLIMIENTO (+1,250)",
      ssotSource: "MMP (AppsFlyer / Adjust)",
      lines: [
        {
          id: "1.1",
          objectiveId: "obj1",
          name: "1.1 Google Ads (UAC Install & Engagement)",
          platform: "Google Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 40800,
          sharePct: 4.8,
          cpmMxn: 42,
          impressions: 971429,
          ctrPct: 1.8,
          clicks: 17486,
          cpcMxn: 2.33,
          cvrPct: 6.29,
          conversions: 1100,
          conversionUnit: "installs",
          costPerResultMxn: 37.09,
          costMetricType: "CPI",
          revenueMxn: 0,
          roas: null,
          secondaryKpiNote: "528 Reg (48% CVR)"
        },
        {
          id: "1.2",
          objectiveId: "obj1",
          name: "1.2 Meta Ads (FB + IG App Install Ofertas)",
          platform: "Meta Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 35700,
          sharePct: 4.2,
          cpmMxn: 38,
          impressions: 939474,
          ctrPct: 1.52,
          clicks: 14280,
          cpcMxn: 2.5,
          cvrPct: 6.16,
          conversions: 880,
          conversionUnit: "installs",
          costPerResultMxn: 40.57,
          costMetricType: "CPI",
          revenueMxn: 0,
          roas: null,
          secondaryKpiNote: "396 Reg (45% CVR)"
        },
        {
          id: "1.3",
          objectiveId: "obj1",
          name: "1.3 TikTok Ads (App Install UGC Moda Familiar)",
          platform: "TikTok Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 15300,
          sharePct: 1.8,
          cpmMxn: 32,
          impressions: 478125,
          ctrPct: 1.45,
          clicks: 6933,
          cpcMxn: 2.21,
          cvrPct: 5.63,
          conversions: 390,
          conversionUnit: "installs",
          costPerResultMxn: 39.23,
          costMetricType: "CPI",
          revenueMxn: 0,
          roas: null,
          secondaryKpiNote: "156 Reg (40% CVR)"
        },
        {
          id: "1.4",
          objectiveId: "obj1",
          name: "1.4 Programmatic DSP (In-App Video & Reach)",
          platform: "Programmatic DSP",
          isRemarketing60d: false,
          monthlySpendMxn: 10200,
          sharePct: 1.2,
          cpmMxn: 36.3,
          impressions: 280992,
          ctrPct: 1.35,
          clicks: 3793,
          cpcMxn: 2.69,
          cvrPct: 4.74,
          conversions: 180,
          conversionUnit: "installs",
          costPerResultMxn: 56.67,
          costMetricType: "CPI",
          revenueMxn: 0,
          roas: null,
          secondaryKpiNote: "68 Reg (38% CVR)"
        }
      ]
    },
    {
      id: "obj2",
      title: "2. Incremento de ventas en app",
      block: "Ventas (80%)",
      sharePct: 45,
      monthlySpendMxn: 382500,
      briefMetricName: "Tasa de conversion en app",
      briefTargetLabel: "ROAS 6.8",
      projectedResultLabel: "ROAS 6.80x ($2,601,000 MXN / 3,060 pedidos)",
      unitCostSummary: "CVR App: 2.40% | CPA Global: $125.00 | CPA Rmkt 60D: $112.50 MXN",
      statusBadge: "META EXACTA (ROAS 6.80x)",
      ssotSource: "MMP + In-App SDK Events",
      lines: [
        {
          id: "2.1",
          objectiveId: "obj2",
          name: "2.1 Google Ads (UAC for Action - In-App Purchase)",
          platform: "Google Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 130050,
          sharePct: 15.3,
          cpmMxn: 48,
          impressions: 2709375,
          ctrPct: 1.85,
          clicks: 50123,
          cpcMxn: 2.59,
          cvrPct: 2.09,
          conversions: 1045,
          conversionUnit: "pedidos",
          costPerResultMxn: 124.45,
          costMetricType: "CPA",
          revenueMxn: 888250,
          roas: 6.83,
          secondaryKpiNote: "6.83x ROAS"
        },
        {
          id: "2.2",
          objectiveId: "obj2",
          name: "2.2 Meta Ads (FB + IG Advantage+ App Sales)",
          platform: "Meta Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 99450,
          sharePct: 11.7,
          cpmMxn: 46.29,
          impressions: 2148412,
          ctrPct: 1.65,
          clicks: 35449,
          cpcMxn: 2.81,
          cvrPct: 2.13,
          conversions: 755,
          conversionUnit: "pedidos",
          costPerResultMxn: 131.72,
          costMetricType: "CPA",
          revenueMxn: 641750,
          roas: 6.45,
          secondaryKpiNote: "6.45x ROAS"
        },
        {
          id: "2.3",
          objectiveId: "obj2",
          name: "2.3 Remarketing Carrito Abandonado 60D App (Meta DABA + DSP)",
          platform: "Meta Ads",
          isRemarketing60d: true,
          monthlySpendMxn: 95625,
          sharePct: 11.3,
          cpmMxn: 50,
          impressions: 1912500,
          ctrPct: 1.15,
          clicks: 22078,
          cpcMxn: 4.33,
          cvrPct: 3.85,
          conversions: 850,
          conversionUnit: "pedidos",
          costPerResultMxn: 112.5,
          costMetricType: "CPA",
          revenueMxn: 722500,
          roas: 7.56,
          secondaryKpiNote: "7.56x ROAS (Rmkt 60D)"
        },
        {
          id: "2.4",
          objectiveId: "obj2",
          name: "2.4 TikTok Ads (In-App Catalog & Video Shopping)",
          platform: "TikTok Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 57375,
          sharePct: 6.8,
          cpmMxn: 42,
          impressions: 1366071,
          ctrPct: 1.45,
          clicks: 19808,
          cpcMxn: 2.9,
          cvrPct: 2.07,
          conversions: 410,
          conversionUnit: "pedidos",
          costPerResultMxn: 139.94,
          costMetricType: "CPA",
          revenueMxn: 348500,
          roas: 6.07,
          secondaryKpiNote: "6.07x ROAS"
        }
      ]
    },
    {
      id: "obj3",
      title: "3. Incremento de ventas en sitio web",
      block: "Ventas (80%)",
      sharePct: 35,
      monthlySpendMxn: 297500,
      briefMetricName: "Tasa de conversion en sitio web",
      briefTargetLabel: "ROAS 3.4",
      projectedResultLabel: "ROAS 3.40x ($1,011,500 MXN / 1,190 pedidos)",
      unitCostSummary: "CVR Web: 1.20% | ROAS Google: 3.65x | CPA Rmkt 60D: $192.86 MXN",
      statusBadge: "META EXACTA (ROAS 3.40x)",
      ssotSource: "GA4 + Google Ads / Meta CAPI",
      lines: [
        {
          id: "3.1",
          objectiveId: "obj3",
          name: "3.1 Google Search Ads (Brand + Generic Ofertas + Shopping)",
          platform: "Google Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 133875,
          sharePct: 15.8,
          cpmMxn: 65,
          impressions: 2059615,
          ctrPct: 2.3,
          clicks: 47371,
          cpcMxn: 2.83,
          cvrPct: 1.21,
          conversions: 575,
          conversionUnit: "pedidos",
          costPerResultMxn: 232.83,
          costMetricType: "CPA",
          revenueMxn: 488750,
          roas: 3.65,
          secondaryKpiNote: "3.65x ROAS"
        },
        {
          id: "3.2",
          objectiveId: "obj3",
          name: "3.2 Facebook Ads (Advantage+ Shopping Web - Prospeccion)",
          platform: "Meta Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 82625,
          sharePct: 9.7,
          cpmMxn: 42,
          impressions: 1967262,
          ctrPct: 1.64,
          clicks: 32298,
          cpcMxn: 2.56,
          cvrPct: 0.6,
          conversions: 195,
          conversionUnit: "pedidos",
          costPerResultMxn: 423.72,
          costMetricType: "CPA",
          revenueMxn: 165750,
          roas: 2.01,
          secondaryKpiNote: "2.01x ROAS (Frio)"
        },
        {
          id: "3.3",
          objectiveId: "obj3",
          name: "3.3 Remarketing Carrito Abandonado 60D Web (FB DPA + Display)",
          platform: "Meta Ads",
          isRemarketing60d: true,
          monthlySpendMxn: 57200,
          sharePct: 6.7,
          cpmMxn: 36,
          impressions: 1588889,
          ctrPct: 0.71,
          clicks: 11321,
          cpcMxn: 5.05,
          cvrPct: 2.65,
          conversions: 300,
          conversionUnit: "pedidos",
          costPerResultMxn: 190.67,
          costMetricType: "CPA",
          revenueMxn: 255e3,
          roas: 4.46,
          secondaryKpiNote: "4.46x ROAS (Rmkt 60D)"
        },
        {
          id: "3.4",
          objectiveId: "obj3",
          name: "3.4 Email Marketing Rmkt 60D (Flujos Carrito 60D & Leads)",
          platform: "Email Marketing",
          isRemarketing60d: true,
          monthlySpendMxn: 23800,
          sharePct: 2.8,
          cpmMxn: 59.69,
          impressions: 398748,
          ctrPct: 2.05,
          clicks: 8174,
          cpcMxn: 2.91,
          cvrPct: 1.47,
          conversions: 120,
          conversionUnit: "pedidos",
          costPerResultMxn: 198.33,
          costMetricType: "CPA",
          revenueMxn: 102e3,
          roas: 4.29,
          secondaryKpiNote: "4.29x ROAS (Rmkt CRM)"
        }
      ]
    },
    {
      id: "obj4",
      title: "4. Incremento de registros en sitio",
      block: "Captacion (20%)",
      sharePct: 8,
      monthlySpendMxn: 68e3,
      briefMetricName: "Costo por registro (CPL)",
      briefTargetLabel: "850 leads cualificados",
      projectedResultLabel: "1,236 leads cualificados (24,738 visitas a landing)",
      unitCostSummary: "CPL: $55.02 MXN | CVR Visitantes a Registro: 5.00%",
      statusBadge: "145% CUMPLIMIENTO (+386)",
      ssotSource: "GA4 + CRM / Plataforma Email",
      lines: [
        {
          id: "4.1",
          objectiveId: "obj4",
          name: "4.1 Facebook Ads (Lead Ads + Club Outlet 15% OFF)",
          platform: "Meta Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 27200,
          sharePct: 3.2,
          cpmMxn: 38,
          impressions: 715789,
          ctrPct: 1.45,
          clicks: 10379,
          cpcMxn: 2.62,
          cvrPct: 5.2,
          conversions: 540,
          conversionUnit: "leads",
          costPerResultMxn: 50.37,
          costMetricType: "CPL",
          revenueMxn: 0,
          roas: null,
          secondaryKpiNote: "Lead Cualificado"
        },
        {
          id: "4.2",
          objectiveId: "obj4",
          name: "4.2 Instagram Ads (Reels/Stories Lead Magnet Moda Familiar)",
          platform: "Meta Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 20400,
          sharePct: 2.4,
          cpmMxn: 37,
          impressions: 551351,
          ctrPct: 1.35,
          clicks: 7443,
          cpcMxn: 2.74,
          cvrPct: 5.11,
          conversions: 380,
          conversionUnit: "leads",
          costPerResultMxn: 53.68,
          costMetricType: "CPL",
          revenueMxn: 0,
          roas: null,
          secondaryKpiNote: "Lead Cualificado"
        },
        {
          id: "4.3",
          objectiveId: "obj4",
          name: "4.3 Google Display (Custom Intent Moda, Calzado y Ofertas)",
          platform: "Google Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 12240,
          sharePct: 1.4,
          cpmMxn: 32,
          impressions: 382500,
          ctrPct: 1.12,
          clicks: 4284,
          cpcMxn: 2.86,
          cvrPct: 4.67,
          conversions: 200,
          conversionUnit: "leads",
          costPerResultMxn: 61.2,
          costMetricType: "CPL",
          revenueMxn: 0,
          roas: null,
          secondaryKpiNote: "Lead Cualificado"
        },
        {
          id: "4.4",
          objectiveId: "obj4",
          name: "4.4 Programmatic DSP (Contextual & Lookalike Compradores MX)",
          platform: "Programmatic DSP",
          isRemarketing60d: false,
          monthlySpendMxn: 8160,
          sharePct: 1,
          cpmMxn: 34.11,
          impressions: 239226,
          ctrPct: 1.1,
          clicks: 2631,
          cpcMxn: 3.1,
          cvrPct: 4.43,
          conversions: 116,
          conversionUnit: "leads",
          costPerResultMxn: 70.34,
          costMetricType: "CPL",
          revenueMxn: 0,
          roas: null,
          secondaryKpiNote: "Lead Cualificado"
        }
      ]
    }
  ];
  var REMARKETING_60D_TIERS = [
    {
      windowLabel: "Tier 1: Dias 1 a 7 (Urgencia de Stock y Talla)",
      quincenaContext: "Intencion Inmediata (Misma Quincena)",
      budgetShareOfRmktPct: 45,
      monthlySpendMxn: 79481,
      inclusionRule: "AddToCart ultimos 7 dias (App + Web)",
      exclusionRule: "Purchase ultimos 60 dias (CAPI + MMP en tiempo real)",
      channels: "Meta DABA / DPA + Push In-App + Email Carrito (1h, 24h, 48h)",
      creativeMessage: 'Carrusel dinamico con el calzado/prenda exacta del carrito: "Quedan pocos pares en tu talla - Reserva tu carrito hoy".',
      cvrPct: 4.1,
      recoveredOrders: 635,
      cpaMxn: 125.17,
      revenueMxn: 539750,
      roas: 6.79
    },
    {
      windowLabel: "Tier 2: Dias 8 a 30 (Desbloqueo en Quincena 1 y 2)",
      quincenaContext: "Efecto Quincena MX (Dias 15 y 30 del mes)",
      budgetShareOfRmktPct: 35,
      monthlySpendMxn: 61819,
      inclusionRule: "AddToCart 8-30 dias atras",
      exclusionRule: "AddToCart 1-7d + Purchase ultimos 60 dias",
      channels: "Meta DPA/DABA + Google Display Dynamic + DSP Retargeting",
      creativeMessage: 'Incentivo desbloqueador sincronizado con pago de nomina: "Tu carrito sigue disponible + Envio Gratis o 10% OFF extra por 48h".',
      cvrPct: 2.85,
      recoveredOrders: 425,
      cpaMxn: 145.46,
      revenueMxn: 361250,
      roas: 5.84
    },
    {
      windowLabel: "Tier 3: Dias 31 a 60 (Reactivacion de Carrito Historico)",
      quincenaContext: "Quincenas 3 y 4 (Ultima ventana antes de expirar)",
      budgetShareOfRmktPct: 20,
      monthlySpendMxn: 35325,
      inclusionRule: "AddToCart 31-60 dias atras",
      exclusionRule: "AddToCart 1-30d + Purchase ultimos 60 dias",
      channels: "Facebook/IG Catalog + Email Reactivacion + DSP Cross-Sell",
      creativeMessage: 'Si la talla original se agoto, el feed dinamico muestra sustitutos de la misma talla y categoria con "Liquidacion Final Outlet hasta 60% OFF".',
      cvrPct: 1.95,
      recoveredOrders: 210,
      cpaMxn: 168.21,
      revenueMxn: 178500,
      roas: 5.05
    }
  ];
  var KPI_MATRIX_ROWS = [
    {
      objectiveLabel: "1. Descargas App",
      kpiList: [
        "Tasa de clics en anuncios (CTR)",
        "Tasa de conversion de descargas",
        "Tasa de conversion en registros app",
        "Costo por instalacion (CPI)"
      ],
      modelProjections: [
        "CTR: 1.59% (42,492 clics)",
        "CVR Descarga: 6.00% (2,550 installs)",
        "CVR Registro App: 45.0% (1,148 reg)",
        "CPI Blended: $40.00 MXN (Meta: 1,300)"
      ],
      ssotSource: "MMP (AppsFlyer / Adjust) + Consolas App Store / Play Store",
      optimizationRules: [
        "Pausar anuncios con CTR < 1.0% tras 3,000 impresiones.",
        "Si CPI supera $52 MXN en un ad set tras $1,500 MXN de gasto, rotar presupuesto a Google UAC y Meta ganadores.",
        "Incentivar registro in-app con cupon bloqueado hasta login."
      ]
    },
    {
      objectiveLabel: "2. Ventas en App (ROAS 6.8)",
      kpiList: [
        "Valor promedio de pedido (AOV) app",
        "Tasa de conversion usuarios activos",
        "Numero de compras recurrentes"
      ],
      modelProjections: [
        "AOV Base: $850 MXN (Upsell a $950)",
        "CVR Usuarios Activos: 2.40% (3.85% en Rmkt 60D)",
        "Compras Recurrentes y Rmkt: 1,285 (42%)",
        "ROAS Logrado: 6.80x ($125 CPA Global | $112.50 CPA Rmkt 60D)"
      ],
      ssotSource: "MMP In-App Events (af_add_to_cart, af_purchase) + Backend App",
      optimizationRules: [
        "Deep linking obligatorio al carrito o producto exacto en la campana de Carrito Abandonado 60D.",
        "Exclusion automatica en tiempo real (MMP Postback) de cualquier usuario que dispare af_purchase en los ultimos 60 dias.",
        'Barra de "Envio Gratis desde $899 MXN" en carrito para subir AOV.'
      ]
    },
    {
      objectiveLabel: "3. Ventas Sitio Web (ROAS 3.4)",
      kpiList: [
        "Tasa de conversion en sitio web",
        "ROAS en Google Ads",
        "CPA en campanas de remarketing (Carrito 60D)"
      ],
      modelProjections: [
        "CVR Sitio Web: 1.20% (2.65% en Rmkt 60D)",
        "ROAS Google Search: 3.65x",
        "CPA Remarketing 60D: $192.86 MXN ($190.67 Ads | $198.33 Email)",
        "ROAS Web Total: 3.40x ($250 CPA Global)"
      ],
      ssotSource: "GA4 + Google Ads + Meta CAPI + Plataforma Email",
      optimizationRules: [
        "Segmentar la audiencia add_to_cart 60D (excluyendo purchase 60D) en 3 ventanas (1-7d, 8-30d, 31-60d) alineadas con las 4 quincenas en Mexico.",
        "Excluir en campanas Web a usuarios que ya compraron en la App (via listas CAPI/MMP) para evitar desperdicio.",
        "Excluir SKUs con menos de 60% de tallas en stock del feed de Shopping y DPA."
      ]
    },
    {
      objectiveLabel: "4. Registros Web",
      kpiList: [
        "CVR de visitantes en registros",
        "Numero de registros completados",
        "Costo por lead (CPL)"
      ],
      modelProjections: [
        "CVR Visitantes a Registro: 5.00%",
        "Registros Completados: 1,236 leads",
        "CPL Blended: $55.02 MXN (Meta: 850)"
      ],
      ssotSource: "GA4 (complete_registration) + CRM / Email",
      optimizationRules: [
        "Disparo automatico del correo #1 (cupon 15% OFF) en <2 minutos tras el registro.",
        "Si el lead registrado agrega productos al carrito y no compra, ingresa automaticamente al flujo de Remarketing 60D.",
        "Pausar emplazamientos de Display/DSP con CPL > $75 MXN."
      ]
    }
  ];
  var WEEKLY_CADENCE = [
    {
      weekTitle: "Semana 1: Tracking & Audiencias 60D",
      summary: "Auditoria MMP SDK, GA4, Meta CAPI y creacion de las audiencias retrospectivas de Carrito Abandonado 60D (excluyendo compradores 60D) en App y Web."
    },
    {
      weekTitle: "Semana 2: Traccion & Quincena 1",
      summary: "Escalamiento de Obj. 1 ($40 CPI) y Obj. 4 ($55 CPL). Activacion del Tier 1 y Tier 2 de Remarketing Carrito 60D coincidiendo con la primera quincena del mes."
    },
    {
      weekTitle: "Semana 3: Optimizacion ROAS & Tallas",
      summary: "Rebalanceo hacia SKUs con >70% de tallas disponibles. Ajuste de frecuencia en el Tier 3 (31-60d) para sostener ROAS 6.8x en App y 3.4x en Web."
    },
    {
      weekTitle: "Semana 4: Quincena 2 & Cierre Mensual",
      summary: "Push + Blast de Remarketing 60D de fin de mes para recuperar 1,270 carritos ($1.08M MXN) y cerrar el mes en 4,250 pedidos totales ($3.61M MXN)."
    }
  ];
  var SIMULATOR_PRESETS = {
    baseline: {
      totalBudgetMxn: 85e4,
      captacionSharePct: 20,
      aovMxn: 850,
      cpiMxn: 40,
      cpaAppMxn: 125,
      rmkt60dShareOfSalesPct: 26
    },
    aov_boost: {
      totalBudgetMxn: 85e4,
      captacionSharePct: 20,
      aovMxn: 950,
      cpiMxn: 40,
      cpaAppMxn: 125,
      rmkt60dShareOfSalesPct: 26
    },
    rmkt_aggressive: {
      totalBudgetMxn: 85e4,
      captacionSharePct: 20,
      aovMxn: 850,
      cpiMxn: 40,
      cpaAppMxn: 118,
      rmkt60dShareOfSalesPct: 35
    }
  };

  // src/render.ts
  function formatMoney(amount, decimals = 0) {
    return "$" + amount.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }
  function formatInt(amount) {
    return Math.round(amount).toLocaleString("en-US");
  }
  function renderObjectiveRows(group) {
    const rowsHtml = group.lines.map((line) => {
      const rmktBadge = line.isRemarketing60d ? ` <span class="tag tag-purple">RMKT 60D CARRITO</span>` : "";
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
    }).join("");
    const totalImpr = group.lines.reduce((acc, l) => acc + l.impressions, 0);
    const totalClicks = group.lines.reduce((acc, l) => acc + l.clicks, 0);
    const totalConv = group.lines.reduce((acc, l) => acc + l.conversions, 0);
    const totalRev = group.lines.reduce((acc, l) => acc + l.revenueMxn, 0);
    const blendedCpm = group.monthlySpendMxn / totalImpr * 1e3;
    const blendedCtr = totalClicks / totalImpr * 100;
    const blendedCpc = group.monthlySpendMxn / totalClicks;
    const blendedCvr = totalConv / totalClicks * 100;
    const blendedCostPerResult = group.monthlySpendMxn / totalConv;
    const costType = group.lines[0].costMetricType;
    const unitLabel = group.lines[0].conversionUnit;
    const subtotalBg = group.block === "Captacion (20%)" ? "#eef2ff" : "#ecfdf5";
    const roasOrNote = totalRev > 0 ? `<span class="status-ok">${(totalRev / group.monthlySpendMxn).toFixed(2)}x ROAS</span>` : group.id === "obj1" ? "1,148 Reg (45.0%)" : "+45% vs Meta (850)";
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
  function renderSimulatorHero(out) {
    const badgeHtml = out.allGoalsMet ? `<span class="status-ok">4 / 4 METAS CUMPLIDAS</span>` : `<span class="status-warn">REVISAR PARAMETROS</span>`;
    const meterPct = Math.min(100, Math.max(10, out.roasBlended / 6 * 100));
    const meterColor = out.allGoalsMet ? "#047857" : "#b45309";
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
  function renderAppShell() {
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
    ).join("");
    const mediaPlanBody = OBJECTIVE_GROUPS.map((g) => renderObjectiveRows(g)).join("");
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
    ).join("");
    const kpiMatrixHtml = KPI_MATRIX_ROWS.map(
      (r) => `
      <tr>
        <td><strong>${r.objectiveLabel}</strong></td>
        <td>${r.kpiList.map((k) => `- ${k}`).join("<br/>")}</td>
        <td>${r.modelProjections.map((m) => `- <strong>${m}</strong>`).join("<br/>")}</td>
        <td>${r.ssotSource}</td>
        <td>${r.optimizationRules.map((o) => `- ${o}`).join("<br/>")}</td>
      </tr>
    `
    ).join("");
    const cadenceHtml = WEEKLY_CADENCE.map(
      (w) => `
      <div class="cadence-day">
        <strong>${w.weekTitle}</strong>
        <span>${w.summary}</span>
      </div>
    `
    ).join("");
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

  // src/simulator.ts
  function calculateMediaSimulation(inputs) {
    const {
      totalBudgetMxn,
      captacionSharePct,
      aovMxn,
      cpiMxn,
      cpaAppMxn,
      rmkt60dShareOfSalesPct
    } = inputs;
    const captShare = captacionSharePct / 100;
    const salesShare = 1 - captShare;
    const budgetObj1 = totalBudgetMxn * captShare * 0.6;
    const budgetObj4 = totalBudgetMxn * captShare * 0.4;
    const totalSalesBudget = totalBudgetMxn * salesShare;
    const budgetObj2 = totalSalesBudget * 0.5625;
    const budgetObj3 = totalSalesBudget * 0.4375;
    const rmktDelta = (rmkt60dShareOfSalesPct - 26) / 100;
    const efficiencyFactor = 1 - rmktDelta * 0.18;
    const effectiveCpaApp = Math.max(90, cpaAppMxn * efficiencyFactor);
    const effectiveCpaWeb = effectiveCpaApp * 2;
    const cplMxn = Math.round(cpiMxn * 1.3755 * 100) / 100;
    const installs = budgetObj1 / cpiMxn;
    const inAppRegistrations = installs * 0.45;
    const leads = budgetObj4 / cplMxn;
    const ordersApp = budgetObj2 / effectiveCpaApp;
    const ordersWeb = budgetObj3 / effectiveCpaWeb;
    const totalOrders = ordersApp + ordersWeb;
    const rmkt60dBudgetMxn = totalSalesBudget * (rmkt60dShareOfSalesPct / 100);
    const cpaRmkt60dMxn = effectiveCpaApp * 1.1126;
    const rmkt60dOrders = rmkt60dBudgetMxn / cpaRmkt60dMxn;
    const rmkt60dRevenue = rmkt60dOrders * aovMxn;
    const roasRmkt60d = rmkt60dBudgetMxn > 0 ? rmkt60dRevenue / rmkt60dBudgetMxn : 0;
    const revenueApp = ordersApp * aovMxn;
    const revenueWeb = ordersWeb * aovMxn;
    const totalRevenue = revenueApp + revenueWeb;
    const roasApp = budgetObj2 > 0 ? revenueApp / budgetObj2 : 0;
    const roasWeb = budgetObj3 > 0 ? revenueWeb / budgetObj3 : 0;
    const roasBlended = totalBudgetMxn > 0 ? totalRevenue / totalBudgetMxn : 0;
    const allGoalsMet = Math.round(installs) >= 1300 && Math.round(leads) >= 850 && Number(roasApp.toFixed(2)) >= 6.8 && Number(roasWeb.toFixed(2)) >= 3.4;
    return {
      budgetObj1,
      budgetObj2,
      budgetObj3,
      budgetObj4,
      rmkt60dBudgetMxn,
      installs,
      inAppRegistrations,
      leads,
      ordersApp,
      ordersWeb,
      rmkt60dOrders,
      totalOrders,
      revenueApp,
      revenueWeb,
      rmkt60dRevenue,
      totalRevenue,
      roasApp,
      roasWeb,
      roasRmkt60d,
      roasBlended,
      cplMxn,
      cpaWebMxn: effectiveCpaWeb,
      cpaRmkt60dMxn,
      allGoalsMet
    };
  }

  // src/main.ts
  function initApp() {
    const root = document.getElementById("app-root");
    if (!root) return;
    root.innerHTML = renderAppShell();
    const inpBudget = document.getElementById("inp-out-budget");
    const inpSplit = document.getElementById("inp-out-split");
    const inpRmkt = document.getElementById("inp-out-rmkt");
    const inpAov = document.getElementById("inp-out-aov");
    const inpCpi = document.getElementById("inp-out-cpi");
    const valBudget = document.getElementById("val-out-budget");
    const valSplit = document.getElementById("val-out-split");
    const valRmkt = document.getElementById("val-out-rmkt");
    const valAov = document.getElementById("val-out-aov");
    const valCpiCpa = document.getElementById("val-out-cpicpa");
    const simResult = document.getElementById("sim-outlet-result");
    let currentCpaAppBase = 125;
    function readInputs() {
      return {
        totalBudgetMxn: inpBudget ? Number(inpBudget.value) : 85e4,
        captacionSharePct: inpSplit ? Number(inpSplit.value) : 20,
        rmkt60dShareOfSalesPct: inpRmkt ? Number(inpRmkt.value) : 26,
        aovMxn: inpAov ? Number(inpAov.value) : 850,
        cpiMxn: inpCpi ? Number(inpCpi.value) : 40,
        cpaAppMxn: currentCpaAppBase
      };
    }
    function refreshSimulator() {
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
      document.querySelectorAll(".preset-btn[data-preset]")
    );
    presetButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.preset;
        if (!key || !SIMULATOR_PRESETS[key]) return;
        const preset = SIMULATOR_PRESETS[key];
        if (inpBudget) inpBudget.value = String(preset.totalBudgetMxn);
        if (inpSplit) inpSplit.value = String(preset.captacionSharePct);
        if (inpRmkt) inpRmkt.value = String(preset.rmkt60dShareOfSalesPct);
        if (inpAov) inpAov.value = String(preset.aovMxn);
        if (inpCpi) inpCpi.value = String(preset.cpiMxn);
        currentCpaAppBase = preset.cpaAppMxn;
        presetButtons.forEach((b) => b.classList.toggle("active", b === btn));
        refreshSimulator();
      });
    });
    [inpBudget, inpSplit, inpRmkt, inpAov, inpCpi].forEach((inputEl) => {
      if (!inputEl) return;
      inputEl.addEventListener("input", () => {
        presetButtons.forEach((b) => b.classList.remove("active"));
        refreshSimulator();
      });
    });
    refreshSimulator();
    const slides = Array.from(document.querySelectorAll(".deck-slide"));
    const navLinks = Array.from(document.querySelectorAll(".nav-links a[data-slide]"));
    const btnPrev = document.getElementById("btn-prev-slide");
    const btnNext = document.getElementById("btn-next-slide");
    const slideLabel = document.getElementById("deck-slide-label");
    const slideNames = [
      "A. Resumen Ejecutivo",
      "B. Plan de Medios ($850k)",
      "C. Remarketing Carrito 60D",
      "D. App/Web + Simulador TS",
      "E. Medicion y KPIs"
    ];
    let currentSlide = 0;
    function showSlide(index, scrollTop = true) {
      if (index < 0 || index >= slides.length) return;
      currentSlide = index;
      slides.forEach((s, i) => {
        s.classList.toggle("active", i === currentSlide);
      });
      navLinks.forEach((link) => {
        const target = Number(link.dataset.slide);
        link.classList.toggle("active", target === currentSlide);
      });
      if (slideLabel) {
        slideLabel.innerHTML = `Slide <strong>${currentSlide + 1} / ${slides.length}</strong> | ${slideNames[currentSlide]}`;
      }
      if (btnPrev) btnPrev.disabled = currentSlide === 0;
      if (btnNext) btnNext.disabled = currentSlide === slides.length - 1;
      if (scrollTop) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        showSlide(Number(link.dataset.slide));
      });
    });
    if (btnPrev) btnPrev.addEventListener("click", () => showSlide(currentSlide - 1));
    if (btnNext) btnNext.addEventListener("click", () => showSlide(currentSlide + 1));
    document.addEventListener("keydown", (e) => {
      if (document.activeElement && document.activeElement.tagName === "INPUT") return;
      if (e.key === "ArrowRight") showSlide(currentSlide + 1);
      if (e.key === "ArrowLeft") showSlide(currentSlide - 1);
    });
    const hashMap = {
      "#executive-summary": 0,
      "#media-plan": 1,
      "#remarketing-60d": 2,
      "#web-simulator": 3,
      "#measurement-kpis": 4
    };
    if (window.location.hash && hashMap[window.location.hash] !== void 0) {
      showSlide(hashMap[window.location.hash], false);
    } else {
      showSlide(0, false);
    }
  }
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initApp);
    } else {
      initApp();
    }
  }
})();

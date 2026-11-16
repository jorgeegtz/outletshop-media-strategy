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
          name: "1.1 Google Ads (UAC Install & Engagement - Android + iOS)",
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
          name: "1.2 Meta Ads (2 CBOs Separadas: Android 65% + iOS 35%)",
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
          name: "2.2 Meta Ads (Smart Ads CBO BAU 85% + Testing CBO/ABO 15%)",
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
          name: "3.2 Facebook Ads (Smart Ads CBO BAU 85% + Testing 15%)",
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
  var CREATIVE_DECISION_GATES = [
    {
      title: "Gate 1: >= 2,000 Impresiones | Filtro Temprano de Hook",
      ruleText: 'Regla: Hook Rate (3s) < 25% Y Outbound CTR < 0.8% -> PAUSAR via Meta Rule / MCP. AI etiqueta "Weak Hook" para reescribir los primeros 3 segundos.',
      isWin: false
    },
    {
      title: "Gate 2: $125-$185 MXN Gasto (1x-1.5x CPA App) | Filtro de Intencion",
      ruleText: "Regla: 0 AddToCart / Registros -> PAUSAR. Excepcion de paciencia: si Hook Rate > 35% y Hold Rate > 15%, permitir hasta 2x CPA ($250 MXN) antes de cortar.",
      isWin: false
    },
    {
      title: "Gate 3: $250-$310 MXN Gasto (2x-2.5x CPA) | Hard Stop-Loss",
      ruleText: "Regla: 0 Compras a $250 MXN en App ($500 MXN en Web) O CPA > 2x objetivo -> HARD KILL automatico via Meta Rule / MCP.",
      isWin: false
    },
    {
      title: "Gate 4: Dias 5-7 | Graduacion de Ganadores via Post ID",
      ruleText: "Regla: ROAS >= 6.8x en App (CPA <= $125) o ROAS >= 3.4x en Web (CPA <= $250) -> GANADOR. Graduar via Post ID hacia BAU Smart Ads CBO sin resetear el aprendizaje.",
      isWin: true
    }
  ];
  var AI_WORKFLOW_LAYERS = [
    {
      layerName: "1. Automatizacion en Plataformas",
      subLabel: "(Smart Ads CBO, UAC & Advantage+)",
      aiRole: [
        "Distribucion dinamica de presupuesto entre los 4 Concept Ad Groups dentro del BAU Smart Ads CBO.",
        "Entrega liquida en Advantage+ Placements y Google UAC (separando CBO Android 65% e iOS 35%).",
        "Enriquecimiento de senales server-side via Meta CAPI y MMP Postbacks."
      ],
      humanRole: [
        "Atribucion y Exclusiones: Fijar ventana 7DC y excluir en tiempo real compradores de los ultimos 60 dias (Purchase 60D) en App y Web.",
        "Pacing Basado en Resultados: El humano controla el paso de Warmup (Dias 1-5) a BAU (Dia 6+) y la regla de escalar +20% cada 72h."
      ]
    },
    {
      layerName: "2. Testing Creativo y Control de Fatiga",
      subLabel: "(Meta MCP + Reglas Automatizadas)",
      aiRole: [
        "Ejecuta los cortes de stop-loss en la campana de Testing (10-15% del budget) en los Gates 1, 2 y 3.",
        "Detecta fatiga creativa cuando el CPA en L3 / L5 / L7 sube de forma consecutiva Y el CPC supera el promedio de la cuenta.",
        "Mineria de hooks e iteracion de guiones UGC familiares con IA."
      ],
      humanRole: [
        "Consistencia de Precios y Stock: Verificar que las ofertas y tallas anunciadas coincidan 100% con el inventario real de OutletShop.",
        "Direccion Creativa: Decidir que angulos ganadores reciben nuevas grabaciones con creadores y sesiones de catalogo."
      ]
    },
    {
      layerName: "3. Forecast 90D y Reporte Diario Slack",
      subLabel: "(Pipeline Automatizado MMP + GA4 + Meta)",
      aiRole: [
        "Extrae cada manana el gasto de Meta/Google/TikTok/DSP + CVR rolling de 90 dias y tasa de devolucion/cancelacion desde MMP y GA4.",
        "Publica automaticamente en Slack el Daily Performance & Projected ROAS Report (Yesterday, L3 y L7)."
      ],
      humanRole: [
        "Diagnostico de Causa Raiz: Distinguir entre fatiga creativa real y fallos tecnicos (pasarela de pago, caida de Deep Links o quiebre de tallas clave) antes de tocar presupuestos."
      ]
    }
  ];
  var DAILY_REPORT_SAMPLE = [
    {
      windowLabel: "Dia 12 (Ayer)",
      spendMxn: "$28,500",
      installsAndCpi: "92 ($38.50 CPI)",
      leadsAndCpl: "44 ($52.80 CPL)",
      appOrdersAndCpa: "108 ($121.10 CPA)",
      appRoas: "7.02x",
      webOrdersAndCpa: "41 ($244.00 CPA)",
      webRoas: "3.48x",
      rmkt60dCpa: "$134.20 (6.33x)",
      statusType: "ok"
    },
    {
      windowLabel: "L3 Dias (Prom/d)",
      spendMxn: "$28,333",
      installsAndCpi: "86 ($39.80 CPI)",
      leadsAndCpl: "42 ($54.50 CPL)",
      appOrdersAndCpa: "102 ($124.80 CPA)",
      appRoas: "6.81x",
      webOrdersAndCpa: "40 ($249.50 CPA)",
      webRoas: "3.41x",
      rmkt60dCpa: "$138.90 (6.12x)",
      statusType: "ok"
    },
    {
      windowLabel: "L7 Dias (Prom/d)",
      spendMxn: "$26,400",
      installsAndCpi: "79 ($41.60 CPI)",
      leadsAndCpl: "38 ($56.90 CPL)",
      appOrdersAndCpa: "91 ($129.40 CPA)",
      appRoas: "6.57x",
      webOrdersAndCpa: "36 ($258.10 CPA)",
      webRoas: "3.29x",
      rmkt60dCpa: "$144.50 (5.88x)",
      statusType: "warn"
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
        "Separar campanas CBO por sistema operativo (65% Android / 35% iOS) para evitar que Android acapare la entrega por menor CPM.",
        "Pausar via Meta MCP anuncios con Hook Rate < 25% y CTR < 0.8% tras 2,000 impresiones.",
        "Incentivar registro in-app con cupon de bienvenida bloqueado hasta completar login."
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
        "Escalar presupuesto BAU +20% cada 72h unicamente cuando el CPA in-app se mantenga <= $125 MXN y el modelo 90D proyecte ROAS >= 6.8x.",
        "Pausar Post IDs fatigados cuando el CPA suba en L3/L5/L7 Y el CPC supere el promedio de la cuenta.",
        "Deep linking obligatorio al carrito pre-cargado en la campana de Carrito Abandonado 60D."
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
        "Excluir en campanas Web a usuarios que ya compraron en la App (via listas CAPI/MMP) para evitar canibalizacion.",
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
      weekTitle: "Lunes",
      summary: "Conciliar el modelo forecast 90D de MMP/GA4 vs. cohortes reales. Aplicar +20% / 72h en BAU CBO si CPA App <= $125 y CPA Web <= $250."
    },
    {
      weekTitle: "Martes",
      summary: "Lanzar nuevas variaciones de concepto en la campana de Testing (10-15% budget); graduar Post IDs ganadores hacia BAU Smart Ads CBO."
    },
    {
      weekTitle: "Miercoles",
      summary: "Revisar cortes automaticos de Meta MCP (Gates de $125-$250 MXN) y entregar briefs de iteracion de hooks 0-3s."
    },
    {
      weekTitle: "Jueves",
      summary: "Auditar tendencias de CPA en L3/L5/L7 + CPC vs. promedio de cuenta; pausar Post IDs fatigados y verificar stock de tallas en el feed."
    },
    {
      weekTitle: "Viernes",
      summary: "Verificar pacing de fin de semana/quincena, salud de audiencias de Carrito Abandonado 60D y alertas del reporte diario en Slack."
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
      <strong>Siguiente Paso:</strong> ${out.allGoalsMet ? "Escalar +20% cada 72h en campanas BAU CBO que sostengan CPA App <= $125 y CPA Web <= $250." : "Pausar Post IDs con tendencia L3/L5/L7 negativa y rotar presupuesto hacia Remarketing 60D y Google Search."}
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
    const gatesHtml = CREATIVE_DECISION_GATES.map(
      (g) => `
      <div class="gate-item ${g.isWin ? "gate-win" : "gate-kill"}">
        <div class="gate-header"><strong>${g.title}</strong></div>
        <p>${g.ruleText}</p>
      </div>
    `
    ).join("");
    const aiLayersHtml = AI_WORKFLOW_LAYERS.map(
      (layer) => `
      <tr>
        <td><strong>${layer.layerName}</strong><br/><span class="text-muted">${layer.subLabel}</span></td>
        <td>${layer.aiRole.map((item) => `- ${item}`).join("<br/>")}</td>
        <td>${layer.humanRole.map((item) => `- ${item}`).join("<br/>")}</td>
      </tr>
    `
    ).join("");
    const dailyReportHtml = DAILY_REPORT_SAMPLE.map(
      (row) => `
      <tr>
        <td><strong>${row.windowLabel}</strong></td>
        <td>${row.spendMxn}</td>
        <td>${row.installsAndCpi}</td>
        <td>${row.leadsAndCpl}</td>
        <td>${row.appOrdersAndCpa}</td>
        <td><span class="${row.statusType === "ok" ? "status-ok" : "status-warn"}">${row.appRoas}</span></td>
        <td>${row.webOrdersAndCpa}</td>
        <td><span class="${row.statusType === "ok" ? "status-ok" : "status-warn"}">${row.webRoas}</span></td>
        <td>${row.rmkt60dCpa}</td>
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
            <div class="brand-title">OutletShop Assessment</div>
            <div class="brand-sub">by Jorge Gutierrez</div>
          </div>
        </div>
        <nav class="nav-links" aria-label="Deck Sections">
          <a href="#executive-summary" data-slide="0" class="active">A. Resumen Ejecutivo</a>
          <a href="#media-plan" data-slide="1">B. Estructura &amp; Plan ($850k)</a>
          <a href="#remarketing-60d" data-slide="2">C. Rmkt 60D &amp; Sistema Creativo</a>
          <a href="#web-simulator" data-slide="3">D. Medicion 90D &amp; Simulador</a>
          <a href="#measurement-kpis" data-slide="4">E. AI Workflow &amp; Reporte Diario</a>
        </nav>
      </div>
    </header>

    <main class="container">
      <!-- SLIDE 1: A. RESUMEN EJECUTIVO -->
      <div class="deck-slide active" data-slide="0">
        <section id="executive-summary" class="hero">
          <div class="hero-single">
            <div class="eyebrow">A. RESUMEN EJECUTIVO | SISTEMA DE MEDIOS BASADO EN RESULTADOS PARA OUTLETSHOP</div>
            <h1>Sistema Full-Funnel <span class="gradient-text">20% Captacion / 80% Ventas + Remarketing 60D</span> para Escalar a ROAS 6.8x App y 3.4x Web</h1>
            <p class="hero-lead">
              En lugar de quemar los $850,000 MXN desde el Dia 1 sin senal, este sistema arranca con un Warmup controlado (Dias 1-5), protege el capital con stop-losses automaticos via Meta MCP, recupera carritos abandonados de los ultimos 60 dias (4 quincenas en Mexico) y escala presupuestos +20% cada 72 horas solo cuando el CPA y el ROAS cumplen meta.
            </p>
            <div class="hero-cta-row">
              <a href="${GOOGLE_SHEET_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
                Abrir Google Sheet Ejecutivo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </a>
            </div>
          </div>

          <div class="grid-2" style="margin-top: 24px;">
            <div class="panel panel-accent">
              <h3>1. Estructura de Cuenta y Pacing Basado en Resultados</h3>
              <ul class="styled-list">
                <li><strong>Warmup (Dias 1-5):</strong> Arranque controlado en <code>Descargas + Registro</code> (2 campanas CBO separadas por OS: 65% Android / 35% iOS) y <code>Leads Web</code> para construir senal sin desperdiciar presupuesto.</li>
                <li><strong>Motor BAU (Dia 6+):</strong> 85-90% del presupuesto de ventas en Smart Ads CBO (4 Concept Ad Groups) + Google UAC/Search, apuntando a <strong>$125 CPA en App (ROAS 6.8x)</strong> y <strong>$250 CPA en Web (ROAS 3.4x)</strong>.</li>
                <li><strong>Que Esperar:</strong> Escalamiento controlado de <strong>+20% cada 72h</strong> manteniendo el split 20% Captacion ($170k) / 80% Ventas ($680k).</li>
              </ul>
            </div>
            <div class="panel">
              <h3>2. Testing Creativo (10-15%) y Control de Fatiga</h3>
              <ul class="styled-list">
                <li><strong>Pool de Testing (10-15% del Spend):</strong> Campana separada con 10-15 videos prioritarios/semana agrupados por concepto + experimento <strong>CBO vs. ABO</strong> para validar entrega justa.</li>
                <li><strong>Kill Gates Automatizados:</strong> Reglas en Meta / MCP pausan hooks debiles a las 2,000 impresiones y cortan anuncios sin conversion entre 1x y 2x CPA ($125-$250 MXN).</li>
                <li><strong>Que Esperar:</strong> Deteccion temprana de fatiga monitoreando <strong>tendencias L3/L5/L7 de CPA + CPC &gt; promedio de cuenta</strong> antes de que caiga el ROAS.</li>
              </ul>
            </div>
            <div class="panel">
              <h3>3. Remarketing Carrito 60D y Medicion (Forecast 90D)</h3>
              <ul class="styled-list">
                <li><strong>Audiencia Carrito Abandonado 60D:</strong> Captura usuarios con <code>AddToCart</code> en los ultimos 60 dias excluyendo <code>Purchase 60D</code> (cubriendo 4 quincenas en Mexico), recuperando <strong>1,270 pedidos a $139.07 CPA (ROAS 6.11x)</strong>.</li>
                <li><strong>Modelo Forecast 90D:</strong> Cruza el CVR rolling de 90 dias y tasa de devoluciones desde MMP + GA4 para proyectar el ROAS y LTV de recompra el mismo dia.</li>
                <li><strong>Que Esperar:</strong> Visibilidad intraday de si el gasto de hoy cumple con el ROAS 6.8x en App y 3.4x en Web.</li>
              </ul>
            </div>
            <div class="panel panel-accent">
              <h3>4. AI en el Workflow y Resultado a 30 Dias</h3>
              <ul class="styled-list">
                <li><strong>Operacion Automatizada:</strong> Meta MCP ejecuta cortes de stop-loss/fatiga y publica cada manana en Slack el <strong>Daily Performance Report</strong> (Ayer, L3 y L7: Gasto, CPI, CPL, CPA Rmkt 60D y ROAS).</li>
                <li><strong>Gobernanza Humana:</strong> 100% control humano en exclusiones de compradores (CAPI/MMP), validacion de stock de tallas y aprobacion de saltos de presupuesto.</li>
                <li><strong>Que Esperar:</strong> Cierre mensual con <strong>$3,612,500 MXN en ingresos (ROAS 4.25x blended)</strong>, <strong>2,550 descargas</strong> y <strong>1,236 leads cualificados</strong>.</li>
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

          <div class="assumptions-banner">
            <div class="assumptions-title">Supuestos Base del Modelo (Alineados con Google Sheet):</div>
            <div class="assumptions-pills">
              <span><strong>Atribucion:</strong> 7-Day Click (7DC) + MMP (AppsFlyer/Adjust) + GA4</span>
              <span><strong>OS Split App:</strong> 65% Android / 35% iOS (2 CBOs Separadas)</span>
              <span><strong>Budget Split:</strong> 20% Captacion / 80% Ventas (85-90% BAU Scale / 10-15% Testing)</span>
              <span><strong>Reverse-Funnel Targets:</strong> AOV $850 | $125 CPA App (6.8x) | $250 CPA Web (3.4x) | $40 CPI | $55 CPL</span>
            </div>
          </div>
        </section>
      </div>

      <!-- SLIDE 2: B. PLAN DE MEDIOS DETALLADO -->
      <div class="deck-slide" data-slide="1">
        <section id="media-plan" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCION B | ESTRUCTURA DE CUENTA Y PLAN DE MEDIOS ($850,000 MXN)</span>
              <h2>Desglose Mensual por Objetivo, Plataforma y Campanas de Remarketing 60D</h2>
              <p>Estructura con separacion por OS en App (Android 65% / iOS 35%), division 85-90% BAU Scale vs. 10-15% Testing y lineas dedicadas de Remarketing Carrito 60D (2.3, 3.3 y 3.4).</p>
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

          <h3 class="sub-heading">Cuando Cambiamos de Fase y Escalamos (Pacing Mensual)</h3>
          <div class="timeline-grid">
            <div class="timeline-step">
              <div class="step-badge">DIAS 1-5 | WARMUP DE SENAL</div>
              <h4>Captacion + Feed Setup ($15,000/d Total)</h4>
              <p>Arrancamos las 2 CBOs de App Install (Android + iOS), Leads Web (Club Outlet) y Search Brand/Generic para poblar las audiencias de <code>AddToCart</code> y <code>Registrations</code>.</p>
              <div class="trigger-pill"><strong>Trigger:</strong> Pasar a escala BAU en Dia 6 tras validar +350 descargas, +200 leads y tracking CAPI/MMP sin discrepancia.</div>
            </div>
            <div class="timeline-step">
              <div class="step-badge">DIA 6+ | ESCALA BASADA EN RESULTADOS</div>
              <h4>Smart Ads CBO BAU (85-90% Scale / 10-15% Test)</h4>
              <p>Activamos el motor completo de Ventas App (ROAS 6.8x) y Ventas Web (ROAS 3.4x) junto con el experimento paralelo <strong>CBO vs. ABO</strong> en Testing.</p>
              <div class="trigger-pill"><strong>Trigger:</strong> Escalar +20% cada 72h hacia el tope de $850k solo si CPA App &lt;= $125 y CPA Web &lt;= $250.</div>
            </div>
            <div class="timeline-step">
              <div class="step-badge">DIAS 14-16 Y 28-30 | PICOS DE QUINCENA</div>
              <h4>Empuje Remarketing Carrito 60D ($176.6k/mes)</h4>
              <p>En dias de pago de nomina en Mexico, incrementamos la puja en las audiencias de Carrito Abandonado 60D (App + Web + Email) para capturar los 1,270 pedidos recuperados.</p>
              <div class="trigger-pill"><strong>Guardrail:</strong> Exclusion automatica en tiempo real de cualquier comprador de los ultimos 60 dias (<code>Purchase 60D</code>).</div>
            </div>
          </div>
        </section>
      </div>

      <!-- SLIDE 3: C. REMARKETING 60D Y SISTEMA CREATIVO -->
      <div class="deck-slide" data-slide="2">
        <section id="remarketing-60d" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCION C | REMARKETING CARRITO ABANDONADO 60D + SISTEMA DE TESTING CREATIVO</span>
              <h2>Motor de Remarketing 60D (4 Quincenas) y Arbol de Decision Creativo</h2>
              <p>Recuperacion de carritos abandonados en los ultimos 60 dias sin compra ($176,625 MXN -> ROAS 6.11x) combinada con testing creativo (10-15% del spend), reglas Meta MCP y control de fatiga L3/L5/L7.</p>
            </div>
          </div>

          <h3 class="sub-heading" style="margin-top: 8px;">1. Segmentacion de Carritos Abandonados en los Ultimos 60 Dias (Excluyendo Compradores)</h3>
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

          <div class="grid-2" style="margin-top: 24px;">
            <div class="panel">
              <h3>2. Campana Separada de Testing Creativo (10-15% del Presupuesto)</h3>
              <p>Todo creativo nuevo entra en una campana de Testing separada para no desestabilizar el aprendizaje del BAU Smart Ads CBO.</p>
              <ul class="styled-list">
                <li><strong>Balance Presupuesto vs. Volumen:</strong> Con el 10-15% del presupuesto (~$20,000-$28,000 MXN/semana), no lanzamos 50 anuncios a la vez sin gasto suficiente. Probamos <strong>10-15 videos/carruseles prioritarios por semana (3 conceptos)</strong> para que cada variacion reciba al menos 2x CPA de prueba.</li>
                <li><strong>Agrupacion por Concepto:</strong> 4-5 variaciones de hook (0-3s) comparten un mismo Concept Ad Group (ej. <em>"Unboxing Familiar $850"</em>, <em>"Liquidacion Calzado Ninos"</em>, <em>"Pares de Marca a Mitad de Precio"</em>).</li>
                <li><strong>Experimento CBO vs. ABO:</strong> Ejecutamos un split controlado para validar si ABO entrega una lectura inicial mas justa a nuevos hooks que CBO.</li>
              </ul>
            </div>

            <div class="panel">
              <h3>Arbol de Decision Automatizado (Meta Rules + AI / Meta MCP)</h3>
              <div class="gate-list">
                ${gatesHtml}
              </div>
            </div>
          </div>

          <div class="grid-3" style="margin-top: 18px;">
            <div class="mini-card">
              <h4>1. Como Graduan los Ganadores</h4>
              <p>Extraemos el <strong>Meta Post ID</strong> ganador y lo duplicamos dentro del BAU Smart Ads CBO sin editar el anuncio, preservando el social proof (comentarios/likes) y evitando resetear la fase de aprendizaje.</p>
            </div>
            <div class="mini-card">
              <h4>2. Como Escalamos Ganadores</h4>
              <p><strong>Vertical:</strong> Subimos el presupuesto BAU CBO un <strong>+20% cada 72h</strong> solo si el CPA App se mantiene &lt;= $125 MXN (ROAS 6.8x) y el CPA Web &lt;= $250 MXN (ROAS 3.4x).<br/>
              <strong>Horizontal:</strong> Cada ganador dispara 3-5 nuevos hooks de 0-3s y versiones para Reels/TikTok.</p>
            </div>
            <div class="mini-card">
              <h4>3. Fatiga Creativa (Tendencia L3 / L5 / L7)</h4>
              <p><strong>Trigger:</strong> Monitoreamos la tendencia rolling de <strong>CPA en L3, L5 y L7</strong> junto con el CPC. Si el CPA sube consecutivamente en L3/L5/L7 Y el <strong>CPC del anuncio supera el promedio de la cuenta</strong>, pausamos el Post ID via Meta MCP y rotamos variantes frescas.</p>
            </div>
          </div>
        </section>
      </div>

      <!-- SLIDE 4: D. MEDICION 90D + SIMULADOR TYPESCRIPT -->
      <div class="deck-slide" data-slide="3">
        <section id="web-simulator" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCION D | MODELO FORECAST 90 DIAS, ATRIBUCION HOLISTICA Y SIMULADOR TS</span>
              <h2>Medicion: Forecast Rolling de 90 Dias + Simulador Financiero en Vivo</h2>
              <p>Como proyectamos el ROAS y el LTV de recompra el mismo dia unificando MMP (AppsFlyer/Adjust), GA4, Meta CAPI y CRM.</p>
            </div>
          </div>

          <div class="callout-box callout-warning">
            <strong>Por que Usamos un Forecast de 90 Dias en lugar de Esperar al Cierre de Mes:</strong> Muchos usuarios que descargan la App (Obj. 1), dejan su correo en el Club Outlet (Obj. 4) o agregan al carrito tardan entre 7 y 30 dias (hasta la siguiente quincena) en completar su compra. Evaluar campanas solo con compras de Dia 0 subestima el ROAS real. Nuestro modelo diario proyecta el cierre de cada cohorte desde el Dia 1.
          </div>

          <div class="grid-2" style="margin-top: 20px;">
            <div class="panel">
              <h3>Modelo Automatizado de Forecast Rolling (90D)</h3>
              <p>Cada manana extraemos los ultimos <strong>90 dias de conversiones</strong> de nuestro MMP y GA4 para calcular el CVR rolling real (Install-a-Compra, Lead-a-Compra y Carrito-a-Compra) y lo aplicamos al gasto en vivo de hoy:</p>
              <div class="formula-display">
                <code>Pedidos Proyectados Hoy = (Visitas + Carritos 60D) x CVR Rolling 90D x Ajuste Devoluciones</code><br/>
                <code>ROAS Proyectado Hoy = (Pedidos Proyectados x AOV $850) / Gasto de Hoy</code>
              </div>
              <ul class="styled-list">
                <li><strong>Paso 1 (CVR Rolling 90D por Canal):</strong> Benchmark diario desde MMP (2.40% CVR en App) y GA4 (1.20% CVR en Web; 3.06% en Remarketing Carrito 60D).</li>
                <li><strong>Paso 2 (Ajuste por Cancelacion / Devolucion de Talla):</strong> Descuenta el % historico de cambios o devoluciones en calzado/ropa para que el ROAS proyectado refleje ingreso neto real.</li>
                <li><strong>Paso 3 (Extension de LTV y Recompra):</strong> Rastrea la tasa de segunda compra a 30-60 dias (las <strong>1,285 compras recurrentes en App</strong>) para escalar las campanas que traen clientes repetitivos.</li>
              </ul>
            </div>

            <div class="panel panel-accent">
              <div class="forecast-header">
                <div>
                  <h3 style="margin-bottom:4px;">Simulador TypeScript de Medios &amp; Remarketing 60D</h3>
                  <p style="font-size:13px;color:var(--text-secondary);">Simula presupuesto, split, AOV y peso de Remarketing 60D:</p>
                </div>
                <div class="preset-row">
                  <button type="button" class="preset-btn active" data-preset="baseline">Modelo Base ($850k)</button>
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

          <h3 class="sub-heading">Stack Holistico de Datos: MMP + Plataformas de Medios + Backend CRM</h3>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Fuente de Datos</th>
                  <th>Rol en la Medicion</th>
                  <th>Decisiones que Gobierna</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. MMP (AppsFlyer / Adjust + SKAN 4.0)</strong><br/><span class="text-muted">(Fuente Primaria para App: Obj. 1 y Obj. 2)</span></td>
                  <td>Mide cohortes por fecha de instalacion, CPI real ($40 MXN), registro in-app (45%), compras recurrentes (1,285) y deduplica Meta vs. Google UAC vs. TikTok vs. DSP.</td>
                  <td>
                    - Alimenta el modelo diario de Forecast 90D para la App<br/>
                    - Valida el ROAS 6.8x por sistema operativo (Android vs. iOS)<br/>
                    - Autoriza el escalamiento de +20% cada 72h en BAU App
                  </td>
                </tr>
                <tr>
                  <td><strong>2. Meta Ads, Google Ads &amp; TikTok (Pixel + CAPI)</strong><br/><span class="text-muted">(Senal Intraday de Medios y Creatividad)</span></td>
                  <td>Entrega gasto en tiempo real, CPM, CTR, CPC, Hook Rate (3s), tamanos de audiencia de Carrito Abandonado 60D y conversiones en ventana 7DC.</td>
                  <td>
                    - Dispara las reglas automaticas de stop-loss (Gates 1, 2 y 3)<br/>
                    - Detecta fatiga creativa (tendencia L3/L5/L7 + CPC &gt; promedio)<br/>
                    - Sincroniza la exclusion automatica de compradores (<code>Purchase 60D</code>)
                  </td>
                </tr>
                <tr>
                  <td><strong>3. Vista Holistica (MMP + GA4 + Backend/CRM Unidos)</strong><br/><span class="text-muted">(Capa Operativa Unificada)</span></td>
                  <td>Une las cohortes de MMP y GA4 con el desglose creativo de Meta/Google y los flujos de Email Marketing.</td>
                  <td>
                    - Muestra con exactitud que <strong>creativos, categorias de calzado/ropa y ventanas de remarketing 60D</strong> generan clientes recurrentes y margen neto real
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <!-- SLIDE 5: E. AI EN EL WORKFLOW, REPORTE DIARIO Y KPIS -->
      <div class="deck-slide" data-slide="4">
        <section id="measurement-kpis" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCION E | AI EN EL WORKFLOW, REPORTE DIARIO SLACK Y MATRIZ DE KPIS</span>
              <h2>AI en el Workflow, Gobernanza Humana y Reporte Diario Automatizado</h2>
              <p>Donde la IA y Meta MCP automatizan la ejecucion y el reporte diario, y donde el humano mantiene el control estricto del capital y la atribucion.</p>
            </div>
          </div>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Capa del Workflow</th>
                  <th>Donde Corren la IA y la Automatizacion</th>
                  <th>Donde el Humano Mantiene el Control y Por Que</th>
                </tr>
              </thead>
              <tbody>
                ${aiLayersHtml}
              </tbody>
            </table>
          </div>

          <h3 class="sub-heading">Reporte Diario Automatizado de Performance en Slack (Meta/Google + MMP/GA4 90D Forecast)</h3>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Fecha / Ventana</th>
                  <th>Gasto Total</th>
                  <th>Descargas (CPI)</th>
                  <th>Leads Web (CPL)</th>
                  <th>Pedidos App (CPA)</th>
                  <th>ROAS App (Meta 6.8x)</th>
                  <th>Pedidos Web (CPA)</th>
                  <th>ROAS Web (Meta 3.4x)</th>
                  <th>CPA Rmkt 60D (ROAS)</th>
                </tr>
              </thead>
              <tbody>
                ${dailyReportHtml}
              </tbody>
            </table>
          </div>

          <h3 class="sub-heading">Matriz de Control de los 13 KPIs Obligatorios del Brief</h3>
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

          <h3 class="sub-heading">Cadencia Operativa Semanal (Lunes a Viernes)</h3>
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
          <strong>OutletShop Assessment</strong> | by Jorge Gutierrez (<a href="mailto:jorgeegtzhdz@gmail.com">jorgeegtzhdz@gmail.com</a>)
        </div>
        <div>
          <a href="${GOOGLE_SHEET_URL}" target="_blank" rel="noopener noreferrer">Abrir Google Sheet Ejecutivo</a>
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
      "B. Estructura & Plan ($850k)",
      "C. Rmkt 60D & Sistema Creativo",
      "D. Medicion 90D & Simulador",
      "E. AI Workflow & Reporte Diario"
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

import {
  AiWorkflowLayer,
  DailyReportRow,
  DecisionGate,
  KpiRow,
  ObjectiveGroup,
  PresetKey,
  Remarketing60dTier,
  SimulatorInputs,
  WeeklyCadenceStep
} from './types';

export const GOOGLE_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/13xVz5fn7o0RXlFqfymwfAVaJiwahTILCM3aRDT-GaNc/edit';

export const OBJECTIVE_GROUPS: ObjectiveGroup[] = [
  {
    id: 'obj1',
    title: '1. Incremento de descargas de app',
    block: 'Captacion (20%)',
    sharePct: 12.0,
    monthlySpendMxn: 102000,
    briefMetricName: 'Costo por instalacion (CPI)',
    briefTargetLabel: '1,300 descargas',
    projectedResultLabel: '2,550 descargas (+ 1,148 registros in-app)',
    unitCostSummary: 'CPI: $40.00 MXN | CTR: 1.59% | CVR Descarga: 6.00% | CVR Reg: 45.0%',
    statusBadge: '196% CUMPLIMIENTO (+1,250)',
    ssotSource: 'MMP (AppsFlyer / Adjust)',
    lines: [
      {
        id: '1.1',
        objectiveId: 'obj1',
        name: '1.1 Google Ads (UAC Install & Engagement - Android + iOS)',
        platform: 'Google Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 40800,
        sharePct: 4.8,
        cpmMxn: 42.0,
        impressions: 971429,
        ctrPct: 1.8,
        clicks: 17486,
        cpcMxn: 2.33,
        cvrPct: 6.29,
        conversions: 1100,
        conversionUnit: 'installs',
        costPerResultMxn: 37.09,
        costMetricType: 'CPI',
        revenueMxn: 0,
        roas: null,
        secondaryKpiNote: '528 Reg (48% CVR)'
      },
      {
        id: '1.2',
        objectiveId: 'obj1',
        name: '1.2 Meta Ads (2 CBOs Separadas: Android 65% + iOS 35%)',
        platform: 'Meta Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 35700,
        sharePct: 4.2,
        cpmMxn: 38.0,
        impressions: 939474,
        ctrPct: 1.52,
        clicks: 14280,
        cpcMxn: 2.5,
        cvrPct: 6.16,
        conversions: 880,
        conversionUnit: 'installs',
        costPerResultMxn: 40.57,
        costMetricType: 'CPI',
        revenueMxn: 0,
        roas: null,
        secondaryKpiNote: '396 Reg (45% CVR)'
      },
      {
        id: '1.3',
        objectiveId: 'obj1',
        name: '1.3 TikTok Ads (App Install UGC Moda Familiar)',
        platform: 'TikTok Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 15300,
        sharePct: 1.8,
        cpmMxn: 32.0,
        impressions: 478125,
        ctrPct: 1.45,
        clicks: 6933,
        cpcMxn: 2.21,
        cvrPct: 5.63,
        conversions: 390,
        conversionUnit: 'installs',
        costPerResultMxn: 39.23,
        costMetricType: 'CPI',
        revenueMxn: 0,
        roas: null,
        secondaryKpiNote: '156 Reg (40% CVR)'
      },
      {
        id: '1.4',
        objectiveId: 'obj1',
        name: '1.4 Programmatic DSP (In-App Video & Reach)',
        platform: 'Programmatic DSP',
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
        conversionUnit: 'installs',
        costPerResultMxn: 56.67,
        costMetricType: 'CPI',
        revenueMxn: 0,
        roas: null,
        secondaryKpiNote: '68 Reg (38% CVR)'
      }
    ]
  },
  {
    id: 'obj2',
    title: '2. Incremento de ventas en app',
    block: 'Ventas (80%)',
    sharePct: 45.0,
    monthlySpendMxn: 382500,
    briefMetricName: 'Tasa de conversion en app',
    briefTargetLabel: 'ROAS 6.8',
    projectedResultLabel: 'ROAS 6.80x ($2,601,000 MXN / 3,060 pedidos)',
    unitCostSummary: 'CVR App: 2.40% | CPA Global: $125.00 | CPA Rmkt 60D: $112.50 MXN',
    statusBadge: 'META EXACTA (ROAS 6.80x)',
    ssotSource: 'MMP + In-App SDK Events',
    lines: [
      {
        id: '2.1',
        objectiveId: 'obj2',
        name: '2.1 Google Ads (UAC for Action - In-App Purchase)',
        platform: 'Google Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 130050,
        sharePct: 15.3,
        cpmMxn: 48.0,
        impressions: 2709375,
        ctrPct: 1.85,
        clicks: 50123,
        cpcMxn: 2.59,
        cvrPct: 2.09,
        conversions: 1045,
        conversionUnit: 'pedidos',
        costPerResultMxn: 124.45,
        costMetricType: 'CPA',
        revenueMxn: 888250,
        roas: 6.83,
        secondaryKpiNote: '6.83x ROAS'
      },
      {
        id: '2.2',
        objectiveId: 'obj2',
        name: '2.2 Meta Ads (Smart Ads CBO BAU 85% + Testing CBO/ABO 15%)',
        platform: 'Meta Ads',
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
        conversionUnit: 'pedidos',
        costPerResultMxn: 131.72,
        costMetricType: 'CPA',
        revenueMxn: 641750,
        roas: 6.45,
        secondaryKpiNote: '6.45x ROAS'
      },
      {
        id: '2.3',
        objectiveId: 'obj2',
        name: '2.3 Remarketing Carrito Abandonado 60D App (Meta DABA + DSP)',
        platform: 'Meta Ads',
        isRemarketing60d: true,
        monthlySpendMxn: 95625,
        sharePct: 11.3,
        cpmMxn: 50.0,
        impressions: 1912500,
        ctrPct: 1.15,
        clicks: 22078,
        cpcMxn: 4.33,
        cvrPct: 3.85,
        conversions: 850,
        conversionUnit: 'pedidos',
        costPerResultMxn: 112.5,
        costMetricType: 'CPA',
        revenueMxn: 722500,
        roas: 7.56,
        secondaryKpiNote: '7.56x ROAS (Rmkt 60D)'
      },
      {
        id: '2.4',
        objectiveId: 'obj2',
        name: '2.4 TikTok Ads (In-App Catalog & Video Shopping)',
        platform: 'TikTok Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 57375,
        sharePct: 6.8,
        cpmMxn: 42.0,
        impressions: 1366071,
        ctrPct: 1.45,
        clicks: 19808,
        cpcMxn: 2.9,
        cvrPct: 2.07,
        conversions: 410,
        conversionUnit: 'pedidos',
        costPerResultMxn: 139.94,
        costMetricType: 'CPA',
        revenueMxn: 348500,
        roas: 6.07,
        secondaryKpiNote: '6.07x ROAS'
      }
    ]
  },
  {
    id: 'obj3',
    title: '3. Incremento de ventas en sitio web',
    block: 'Ventas (80%)',
    sharePct: 35.0,
    monthlySpendMxn: 297500,
    briefMetricName: 'Tasa de conversion en sitio web',
    briefTargetLabel: 'ROAS 3.4',
    projectedResultLabel: 'ROAS 3.40x ($1,011,500 MXN / 1,190 pedidos)',
    unitCostSummary: 'CVR Web: 1.20% | ROAS Google: 3.65x | CPA Rmkt 60D: $192.86 MXN',
    statusBadge: 'META EXACTA (ROAS 3.40x)',
    ssotSource: 'GA4 + Google Ads / Meta CAPI',
    lines: [
      {
        id: '3.1',
        objectiveId: 'obj3',
        name: '3.1 Google Search Ads (Brand + Generic Ofertas + Shopping)',
        platform: 'Google Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 133875,
        sharePct: 15.8,
        cpmMxn: 65.0,
        impressions: 2059615,
        ctrPct: 2.3,
        clicks: 47371,
        cpcMxn: 2.83,
        cvrPct: 1.21,
        conversions: 575,
        conversionUnit: 'pedidos',
        costPerResultMxn: 232.83,
        costMetricType: 'CPA',
        revenueMxn: 488750,
        roas: 3.65,
        secondaryKpiNote: '3.65x ROAS'
      },
      {
        id: '3.2',
        objectiveId: 'obj3',
        name: '3.2 Facebook Ads (Smart Ads CBO BAU 85% + Testing 15%)',
        platform: 'Meta Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 82625,
        sharePct: 9.7,
        cpmMxn: 42.0,
        impressions: 1967262,
        ctrPct: 1.64,
        clicks: 32298,
        cpcMxn: 2.56,
        cvrPct: 0.6,
        conversions: 195,
        conversionUnit: 'pedidos',
        costPerResultMxn: 423.72,
        costMetricType: 'CPA',
        revenueMxn: 165750,
        roas: 2.01,
        secondaryKpiNote: '2.01x ROAS (Frio)'
      },
      {
        id: '3.3',
        objectiveId: 'obj3',
        name: '3.3 Remarketing Carrito Abandonado 60D Web (FB DPA + Display)',
        platform: 'Meta Ads',
        isRemarketing60d: true,
        monthlySpendMxn: 57200,
        sharePct: 6.7,
        cpmMxn: 36.0,
        impressions: 1588889,
        ctrPct: 0.71,
        clicks: 11321,
        cpcMxn: 5.05,
        cvrPct: 2.65,
        conversions: 300,
        conversionUnit: 'pedidos',
        costPerResultMxn: 190.67,
        costMetricType: 'CPA',
        revenueMxn: 255000,
        roas: 4.46,
        secondaryKpiNote: '4.46x ROAS (Rmkt 60D)'
      },
      {
        id: '3.4',
        objectiveId: 'obj3',
        name: '3.4 Email Marketing Rmkt 60D (Flujos Carrito 60D & Leads)',
        platform: 'Email Marketing',
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
        conversionUnit: 'pedidos',
        costPerResultMxn: 198.33,
        costMetricType: 'CPA',
        revenueMxn: 102000,
        roas: 4.29,
        secondaryKpiNote: '4.29x ROAS (Rmkt CRM)'
      }
    ]
  },
  {
    id: 'obj4',
    title: '4. Incremento de registros en sitio',
    block: 'Captacion (20%)',
    sharePct: 8.0,
    monthlySpendMxn: 68000,
    briefMetricName: 'Costo por registro (CPL)',
    briefTargetLabel: '850 leads cualificados',
    projectedResultLabel: '1,236 leads cualificados (24,738 visitas a landing)',
    unitCostSummary: 'CPL: $55.02 MXN | CVR Visitantes a Registro: 5.00%',
    statusBadge: '145% CUMPLIMIENTO (+386)',
    ssotSource: 'GA4 + CRM / Plataforma Email',
    lines: [
      {
        id: '4.1',
        objectiveId: 'obj4',
        name: '4.1 Facebook Ads (Lead Ads + Club Outlet 15% OFF)',
        platform: 'Meta Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 27200,
        sharePct: 3.2,
        cpmMxn: 38.0,
        impressions: 715789,
        ctrPct: 1.45,
        clicks: 10379,
        cpcMxn: 2.62,
        cvrPct: 5.2,
        conversions: 540,
        conversionUnit: 'leads',
        costPerResultMxn: 50.37,
        costMetricType: 'CPL',
        revenueMxn: 0,
        roas: null,
        secondaryKpiNote: 'Lead Cualificado'
      },
      {
        id: '4.2',
        objectiveId: 'obj4',
        name: '4.2 Instagram Ads (Reels/Stories Lead Magnet Moda Familiar)',
        platform: 'Meta Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 20400,
        sharePct: 2.4,
        cpmMxn: 37.0,
        impressions: 551351,
        ctrPct: 1.35,
        clicks: 7443,
        cpcMxn: 2.74,
        cvrPct: 5.11,
        conversions: 380,
        conversionUnit: 'leads',
        costPerResultMxn: 53.68,
        costMetricType: 'CPL',
        revenueMxn: 0,
        roas: null,
        secondaryKpiNote: 'Lead Cualificado'
      },
      {
        id: '4.3',
        objectiveId: 'obj4',
        name: '4.3 Google Display (Custom Intent Moda, Calzado y Ofertas)',
        platform: 'Google Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 12240,
        sharePct: 1.4,
        cpmMxn: 32.0,
        impressions: 382500,
        ctrPct: 1.12,
        clicks: 4284,
        cpcMxn: 2.86,
        cvrPct: 4.67,
        conversions: 200,
        conversionUnit: 'leads',
        costPerResultMxn: 61.2,
        costMetricType: 'CPL',
        revenueMxn: 0,
        roas: null,
        secondaryKpiNote: 'Lead Cualificado'
      },
      {
        id: '4.4',
        objectiveId: 'obj4',
        name: '4.4 Programmatic DSP (Contextual & Lookalike Compradores MX)',
        platform: 'Programmatic DSP',
        isRemarketing60d: false,
        monthlySpendMxn: 8160,
        sharePct: 1.0,
        cpmMxn: 34.11,
        impressions: 239226,
        ctrPct: 1.1,
        clicks: 2631,
        cpcMxn: 3.1,
        cvrPct: 4.43,
        conversions: 116,
        conversionUnit: 'leads',
        costPerResultMxn: 70.34,
        costMetricType: 'CPL',
        revenueMxn: 0,
        roas: null,
        secondaryKpiNote: 'Lead Cualificado'
      }
    ]
  }
];

export const REMARKETING_60D_TIERS: Remarketing60dTier[] = [
  {
    windowLabel: 'Tier 1: Dias 1 a 7 (Urgencia de Stock y Talla)',
    quincenaContext: 'Intencion Inmediata (Misma Quincena)',
    budgetShareOfRmktPct: 45,
    monthlySpendMxn: 79481,
    inclusionRule: 'AddToCart ultimos 7 dias (App + Web)',
    exclusionRule: 'Purchase ultimos 60 dias (CAPI + MMP en tiempo real)',
    channels: 'Meta DABA / DPA + Push In-App + Email Carrito (1h, 24h, 48h)',
    creativeMessage:
      'Carrusel dinamico con el calzado/prenda exacta del carrito: "Quedan pocos pares en tu talla - Reserva tu carrito hoy".',
    cvrPct: 4.1,
    recoveredOrders: 635,
    cpaMxn: 125.17,
    revenueMxn: 539750,
    roas: 6.79
  },
  {
    windowLabel: 'Tier 2: Dias 8 a 30 (Desbloqueo en Quincena 1 y 2)',
    quincenaContext: 'Efecto Quincena MX (Dias 15 y 30 del mes)',
    budgetShareOfRmktPct: 35,
    monthlySpendMxn: 61819,
    inclusionRule: 'AddToCart 8-30 dias atras',
    exclusionRule: 'AddToCart 1-7d + Purchase ultimos 60 dias',
    channels: 'Meta DPA/DABA + Google Display Dynamic + DSP Retargeting',
    creativeMessage:
      'Incentivo desbloqueador sincronizado con pago de nomina: "Tu carrito sigue disponible + Envio Gratis o 10% OFF extra por 48h".',
    cvrPct: 2.85,
    recoveredOrders: 425,
    cpaMxn: 145.46,
    revenueMxn: 361250,
    roas: 5.84
  },
  {
    windowLabel: 'Tier 3: Dias 31 a 60 (Reactivacion de Carrito Historico)',
    quincenaContext: 'Quincenas 3 y 4 (Ultima ventana antes de expirar)',
    budgetShareOfRmktPct: 20,
    monthlySpendMxn: 35325,
    inclusionRule: 'AddToCart 31-60 dias atras',
    exclusionRule: 'AddToCart 1-30d + Purchase ultimos 60 dias',
    channels: 'Facebook/IG Catalog + Email Reactivacion + DSP Cross-Sell',
    creativeMessage:
      'Si la talla original se agoto, el feed dinamico muestra sustitutos de la misma talla y categoria con "Liquidacion Final Outlet hasta 60% OFF".',
    cvrPct: 1.95,
    recoveredOrders: 210,
    cpaMxn: 168.21,
    revenueMxn: 178500,
    roas: 5.05
  }
];

export const CREATIVE_DECISION_GATES: DecisionGate[] = [
  {
    title: 'Gate 1: >= 2,000 Impresiones | Filtro Temprano de Hook',
    ruleText:
      'Regla: Hook Rate (3s) < 25% Y Outbound CTR < 0.8% -> PAUSAR via Meta Rule / MCP. AI etiqueta "Weak Hook" para reescribir los primeros 3 segundos.',
    isWin: false
  },
  {
    title: 'Gate 2: $125-$185 MXN Gasto (1x-1.5x CPA App) | Filtro de Intencion',
    ruleText:
      'Regla: 0 AddToCart / Registros -> PAUSAR. Excepcion de paciencia: si Hook Rate > 35% y Hold Rate > 15%, permitir hasta 2x CPA ($250 MXN) antes de cortar.',
    isWin: false
  },
  {
    title: 'Gate 3: $250-$310 MXN Gasto (2x-2.5x CPA) | Hard Stop-Loss',
    ruleText:
      'Regla: 0 Compras a $250 MXN en App ($500 MXN en Web) O CPA > 2x objetivo -> HARD KILL automatico via Meta Rule / MCP.',
    isWin: false
  },
  {
    title: 'Gate 4: Dias 5-7 | Graduacion de Ganadores via Post ID',
    ruleText:
      'Regla: ROAS >= 6.8x en App (CPA <= $125) o ROAS >= 3.4x en Web (CPA <= $250) -> GANADOR. Graduar via Post ID hacia BAU Smart Ads CBO sin resetear el aprendizaje.',
    isWin: true
  }
];

export const AI_WORKFLOW_LAYERS: AiWorkflowLayer[] = [
  {
    layerName: '1. Automatizacion en Plataformas',
    subLabel: '(Smart Ads CBO, UAC & Advantage+)',
    aiRole: [
      'Distribucion dinamica de presupuesto entre los 4 Concept Ad Groups dentro del BAU Smart Ads CBO.',
      'Entrega liquida en Advantage+ Placements y Google UAC (separando CBO Android 65% e iOS 35%).',
      'Enriquecimiento de senales server-side via Meta CAPI y MMP Postbacks.'
    ],
    humanRole: [
      'Atribucion y Exclusiones: Fijar ventana 7DC y excluir en tiempo real compradores de los ultimos 60 dias (Purchase 60D) en App y Web.',
      'Pacing Basado en Resultados: El humano controla el paso de Warmup (Dias 1-5) a BAU (Dia 6+) y la regla de escalar +20% cada 72h.'
    ]
  },
  {
    layerName: '2. Testing Creativo y Control de Fatiga',
    subLabel: '(Meta MCP + Reglas Automatizadas)',
    aiRole: [
      'Ejecuta los cortes de stop-loss en la campana de Testing (10-15% del budget) en los Gates 1, 2 y 3.',
      'Detecta fatiga creativa cuando el CPA en L3 / L5 / L7 sube de forma consecutiva Y el CPC supera el promedio de la cuenta.',
      'Mineria de hooks e iteracion de guiones UGC familiares con IA.'
    ],
    humanRole: [
      'Consistencia de Precios y Stock: Verificar que las ofertas y tallas anunciadas coincidan 100% con el inventario real de OutletShop.',
      'Direccion Creativa: Decidir que angulos ganadores reciben nuevas grabaciones con creadores y sesiones de catalogo.'
    ]
  },
  {
    layerName: '3. Forecast 90D y Reporte Diario Slack',
    subLabel: '(Pipeline Automatizado MMP + GA4 + Meta)',
    aiRole: [
      'Extrae cada manana el gasto de Meta/Google/TikTok/DSP + CVR rolling de 90 dias y tasa de devolucion/cancelacion desde MMP y GA4.',
      'Publica automaticamente en Slack el Daily Performance & Projected ROAS Report (Yesterday, L3 y L7).'
    ],
    humanRole: [
      'Diagnostico de Causa Raiz: Distinguir entre fatiga creativa real y fallos tecnicos (pasarela de pago, caida de Deep Links o quiebre de tallas clave) antes de tocar presupuestos.'
    ]
  }
];

export const DAILY_REPORT_SAMPLE: DailyReportRow[] = [
  {
    windowLabel: 'Dia 12 (Ayer)',
    spendMxn: '$28,500',
    installsAndCpi: '92 ($38.50 CPI)',
    leadsAndCpl: '44 ($52.80 CPL)',
    appOrdersAndCpa: '108 ($121.10 CPA)',
    appRoas: '7.02x',
    webOrdersAndCpa: '41 ($244.00 CPA)',
    webRoas: '3.48x',
    rmkt60dCpa: '$134.20 (6.33x)',
    statusType: 'ok'
  },
  {
    windowLabel: 'L3 Dias (Prom/d)',
    spendMxn: '$28,333',
    installsAndCpi: '86 ($39.80 CPI)',
    leadsAndCpl: '42 ($54.50 CPL)',
    appOrdersAndCpa: '102 ($124.80 CPA)',
    appRoas: '6.81x',
    webOrdersAndCpa: '40 ($249.50 CPA)',
    webRoas: '3.41x',
    rmkt60dCpa: '$138.90 (6.12x)',
    statusType: 'ok'
  },
  {
    windowLabel: 'L7 Dias (Prom/d)',
    spendMxn: '$26,400',
    installsAndCpi: '79 ($41.60 CPI)',
    leadsAndCpl: '38 ($56.90 CPL)',
    appOrdersAndCpa: '91 ($129.40 CPA)',
    appRoas: '6.57x',
    webOrdersAndCpa: '36 ($258.10 CPA)',
    webRoas: '3.29x',
    rmkt60dCpa: '$144.50 (5.88x)',
    statusType: 'warn'
  }
];

export const KPI_MATRIX_ROWS: KpiRow[] = [
  {
    objectiveLabel: '1. Descargas App',
    kpiList: [
      'Tasa de clics en anuncios (CTR)',
      'Tasa de conversion de descargas',
      'Tasa de conversion en registros app',
      'Costo por instalacion (CPI)'
    ],
    modelProjections: [
      'CTR: 1.59% (42,492 clics)',
      'CVR Descarga: 6.00% (2,550 installs)',
      'CVR Registro App: 45.0% (1,148 reg)',
      'CPI Blended: $40.00 MXN (Meta: 1,300)'
    ],
    ssotSource: 'MMP (AppsFlyer / Adjust) + Consolas App Store / Play Store',
    optimizationRules: [
      'Separar campanas CBO por sistema operativo (65% Android / 35% iOS) para evitar que Android acapare la entrega por menor CPM.',
      'Pausar via Meta MCP anuncios con Hook Rate < 25% y CTR < 0.8% tras 2,000 impresiones.',
      'Incentivar registro in-app con cupon de bienvenida bloqueado hasta completar login.'
    ]
  },
  {
    objectiveLabel: '2. Ventas en App (ROAS 6.8)',
    kpiList: [
      'Valor promedio de pedido (AOV) app',
      'Tasa de conversion usuarios activos',
      'Numero de compras recurrentes'
    ],
    modelProjections: [
      'AOV Base: $850 MXN (Upsell a $950)',
      'CVR Usuarios Activos: 2.40% (3.85% en Rmkt 60D)',
      'Compras Recurrentes y Rmkt: 1,285 (42%)',
      'ROAS Logrado: 6.80x ($125 CPA Global | $112.50 CPA Rmkt 60D)'
    ],
    ssotSource: 'MMP In-App Events (af_add_to_cart, af_purchase) + Backend App',
    optimizationRules: [
      'Escalar presupuesto BAU +20% cada 72h unicamente cuando el CPA in-app se mantenga <= $125 MXN y el modelo 90D proyecte ROAS >= 6.8x.',
      'Pausar Post IDs fatigados cuando el CPA suba en L3/L5/L7 Y el CPC supere el promedio de la cuenta.',
      'Deep linking obligatorio al carrito pre-cargado en la campana de Carrito Abandonado 60D.'
    ]
  },
  {
    objectiveLabel: '3. Ventas Sitio Web (ROAS 3.4)',
    kpiList: [
      'Tasa de conversion en sitio web',
      'ROAS en Google Ads',
      'CPA en campanas de remarketing (Carrito 60D)'
    ],
    modelProjections: [
      'CVR Sitio Web: 1.20% (2.65% en Rmkt 60D)',
      'ROAS Google Search: 3.65x',
      'CPA Remarketing 60D: $192.86 MXN ($190.67 Ads | $198.33 Email)',
      'ROAS Web Total: 3.40x ($250 CPA Global)'
    ],
    ssotSource: 'GA4 + Google Ads + Meta CAPI + Plataforma Email',
    optimizationRules: [
      'Segmentar la audiencia add_to_cart 60D (excluyendo purchase 60D) en 3 ventanas (1-7d, 8-30d, 31-60d) alineadas con las 4 quincenas en Mexico.',
      'Excluir en campanas Web a usuarios que ya compraron en la App (via listas CAPI/MMP) para evitar canibalizacion.',
      'Excluir SKUs con menos de 60% de tallas en stock del feed de Shopping y DPA.'
    ]
  },
  {
    objectiveLabel: '4. Registros Web',
    kpiList: [
      'CVR de visitantes en registros',
      'Numero de registros completados',
      'Costo por lead (CPL)'
    ],
    modelProjections: [
      'CVR Visitantes a Registro: 5.00%',
      'Registros Completados: 1,236 leads',
      'CPL Blended: $55.02 MXN (Meta: 850)'
    ],
    ssotSource: 'GA4 (complete_registration) + CRM / Email',
    optimizationRules: [
      'Disparo automatico del correo #1 (cupon 15% OFF) en <2 minutos tras el registro.',
      'Si el lead registrado agrega productos al carrito y no compra, ingresa automaticamente al flujo de Remarketing 60D.',
      'Pausar emplazamientos de Display/DSP con CPL > $75 MXN.'
    ]
  }
];

export const WEEKLY_CADENCE: WeeklyCadenceStep[] = [
  {
    weekTitle: 'Lunes',
    summary:
      'Conciliar el modelo forecast 90D de MMP/GA4 vs. cohortes reales. Aplicar +20% / 72h en BAU CBO si CPA App <= $125 y CPA Web <= $250.'
  },
  {
    weekTitle: 'Martes',
    summary:
      'Lanzar nuevas variaciones de concepto en la campana de Testing (10-15% budget); graduar Post IDs ganadores hacia BAU Smart Ads CBO.'
  },
  {
    weekTitle: 'Miercoles',
    summary:
      'Revisar cortes automaticos de Meta MCP (Gates de $125-$250 MXN) y entregar briefs de iteracion de hooks 0-3s.'
  },
  {
    weekTitle: 'Jueves',
    summary:
      'Auditar tendencias de CPA en L3/L5/L7 + CPC vs. promedio de cuenta; pausar Post IDs fatigados y verificar stock de tallas en el feed.'
  },
  {
    weekTitle: 'Viernes',
    summary:
      'Verificar pacing de fin de semana/quincena, salud de audiencias de Carrito Abandonado 60D y alertas del reporte diario en Slack.'
  }
];

export const SIMULATOR_PRESETS: Record<PresetKey, SimulatorInputs> = {
  baseline: {
    totalBudgetMxn: 850000,
    captacionSharePct: 20,
    aovMxn: 850,
    cpiMxn: 40,
    cpaAppMxn: 125,
    rmkt60dShareOfSalesPct: 26
  },
  aov_boost: {
    totalBudgetMxn: 850000,
    captacionSharePct: 20,
    aovMxn: 950,
    cpiMxn: 40,
    cpaAppMxn: 125,
    rmkt60dShareOfSalesPct: 26
  },
  rmkt_aggressive: {
    totalBudgetMxn: 850000,
    captacionSharePct: 20,
    aovMxn: 850,
    cpiMxn: 40,
    cpaAppMxn: 118,
    rmkt60dShareOfSalesPct: 35
  }
};

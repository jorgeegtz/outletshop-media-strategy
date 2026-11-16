import {
  KpiGroupCard,
  ObjectiveGroup,
  PresetKey,
  Remarketing60dSegment,
  SimulatorInputs
} from './types';

export const GOOGLE_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/13xVz5fn7o0RXlFqfymwfAVaJiwahTILCM3aRDT-GaNc/edit';

export const OBJECTIVE_GROUPS: ObjectiveGroup[] = [
  {
    id: 'obj1',
    title: '1. Incremento de descargas de app',
    block: 'Captación (20%)',
    platformsText: 'Facebook, Instagram, Google Ads, TikTok y DSP',
    sharePct: 12.0,
    monthlySpendMxn: 102000,
    briefMetricName: 'Costo por instalación (CPI)',
    briefTargetLabel: '1,300 descargas',
    projectedResultLabel: '2,550 descargas (+ 1,148 registros app)',
    unitCostSummary: '$40.00 MXN CPI | 1.59% CTR | 6.00% CVR Descarga | 45.0% CVR Reg',
    statusBadge: '196% vs. Meta (+1,250)',
    lines: [
      {
        id: '1.1',
        objectiveId: 'obj1',
        name: '1.1 Google Ads (App Campaigns - Descargas)',
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
        conversionUnit: 'descargas',
        costPerResultMxn: 37.09,
        costMetricType: 'CPI',
        revenueMxn: 0,
        roas: null,
        kpiHighlight: '528 Reg App (48% CVR)'
      },
      {
        id: '1.2',
        objectiveId: 'obj1',
        name: '1.2 Facebook & Instagram Ads (App Install)',
        platform: 'Facebook + Instagram',
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
        conversionUnit: 'descargas',
        costPerResultMxn: 40.57,
        costMetricType: 'CPI',
        revenueMxn: 0,
        roas: null,
        kpiHighlight: '396 Reg App (45% CVR)'
      },
      {
        id: '1.3',
        objectiveId: 'obj1',
        name: '1.3 TikTok Ads (App Install Ofertas Moda)',
        platform: 'TikTok',
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
        conversionUnit: 'descargas',
        costPerResultMxn: 39.23,
        costMetricType: 'CPI',
        revenueMxn: 0,
        roas: null,
        kpiHighlight: '156 Reg App (40% CVR)'
      },
      {
        id: '1.4',
        objectiveId: 'obj1',
        name: '1.4 DSP Programático (In-App Reach & Video)',
        platform: 'DSP',
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
        conversionUnit: 'descargas',
        costPerResultMxn: 56.67,
        costMetricType: 'CPI',
        revenueMxn: 0,
        roas: null,
        kpiHighlight: '68 Reg App (38% CVR)'
      }
    ]
  },
  {
    id: 'obj2',
    title: '2. Incremento de ventas en app',
    block: 'Ventas (80%)',
    platformsText: 'Google Ads, Facebook, Instagram, TikTok y DSP',
    sharePct: 45.0,
    monthlySpendMxn: 382500,
    briefMetricName: 'Tasa de conversión en app',
    briefTargetLabel: 'ROAS 6.8',
    projectedResultLabel: 'ROAS 6.80x ($2,601,000 MXN / 3,060 pedidos)',
    unitCostSummary: '2.40% CVR App | $125.00 CPA | AOV $850 | 1,285 Recompras',
    statusBadge: 'Meta Exacta (ROAS 6.80x)',
    lines: [
      {
        id: '2.1',
        objectiveId: 'obj2',
        name: '2.1 Google Ads (App Campaigns for Engagement / Ventas)',
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
        kpiHighlight: 'ROAS 6.83x'
      },
      {
        id: '2.2',
        objectiveId: 'obj2',
        name: '2.2 Facebook & Instagram Ads (Catálogo In-App)',
        platform: 'Facebook + Instagram',
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
        kpiHighlight: 'ROAS 6.45x'
      },
      {
        id: '2.3',
        objectiveId: 'obj2',
        name: '2.3 Remarketing Carrito 60D In-App (FB/IG + DSP Deep Link)',
        platform: 'FB/IG + DSP',
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
        kpiHighlight: 'ROAS 7.56x (Rmkt 60D)'
      },
      {
        id: '2.4',
        objectiveId: 'obj2',
        name: '2.4 TikTok Ads (In-App Video Shopping & Catálogo)',
        platform: 'TikTok',
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
        kpiHighlight: 'ROAS 6.07x'
      }
    ]
  },
  {
    id: 'obj3',
    title: '3. Incremento de ventas en sitio web',
    block: 'Ventas (80%)',
    platformsText: 'Google Search Ads, Email Marketing, Facebook y Display',
    sharePct: 35.0,
    monthlySpendMxn: 297500,
    briefMetricName: 'Tasa de conversión en sitio web',
    briefTargetLabel: 'ROAS 3.4',
    projectedResultLabel: 'ROAS 3.40x ($1,011,500 MXN / 1,190 pedidos)',
    unitCostSummary: '1.20% CVR Web | ROAS Google: 3.65x | CPA Rmkt 60D: $192.86',
    statusBadge: 'Meta Exacta (ROAS 3.40x)',
    lines: [
      {
        id: '3.1',
        objectiveId: 'obj3',
        name: '3.1 Google Search Ads (Brand + Genérico Ofertas + Shopping)',
        platform: 'Google Search Ads',
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
        kpiHighlight: 'ROAS 3.65x'
      },
      {
        id: '3.2',
        objectiveId: 'obj3',
        name: '3.2 Facebook Ads (Catálogo Ventas Web - Prospección)',
        platform: 'Facebook',
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
        kpiHighlight: 'ROAS 2.01x'
      },
      {
        id: '3.3',
        objectiveId: 'obj3',
        name: '3.3 Remarketing Carrito 60D Web (Facebook DPA + Display)',
        platform: 'Facebook + Display',
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
        kpiHighlight: 'ROAS 4.46x (Rmkt 60D)'
      },
      {
        id: '3.4',
        objectiveId: 'obj3',
        name: '3.4 Email Marketing (Carrito Abandonado 60D & Leads)',
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
        kpiHighlight: 'ROAS 4.29x (Rmkt Email)'
      }
    ]
  },
  {
    id: 'obj4',
    title: '4. Incremento de registros en sitio',
    block: 'Captación (20%)',
    platformsText: 'Google Display, Facebook Ads, Instagram Ads, DSP',
    sharePct: 8.0,
    monthlySpendMxn: 68000,
    briefMetricName: 'Costo por registro (CPL)',
    briefTargetLabel: '850 leads cualificados',
    projectedResultLabel: '1,236 leads cualificados (24,738 visitas)',
    unitCostSummary: '$55.02 MXN CPL | 5.00% CVR Visitantes a Registro',
    statusBadge: '145% vs. Meta (+386)',
    lines: [
      {
        id: '4.1',
        objectiveId: 'obj4',
        name: '4.1 Facebook Ads (Lead Generation & Club Outlet 15% OFF)',
        platform: 'Facebook Ads',
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
        kpiHighlight: '540 Leads ($50.37 CPL)'
      },
      {
        id: '4.2',
        objectiveId: 'obj4',
        name: '4.2 Instagram Ads (Stories/Reels Registro Moda Familiar)',
        platform: 'Instagram Ads',
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
        kpiHighlight: '380 Leads ($53.68 CPL)'
      },
      {
        id: '4.3',
        objectiveId: 'obj4',
        name: '4.3 Google Display (Audiencias In-Market Calzado y Ofertas)',
        platform: 'Google Display',
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
        kpiHighlight: '200 Leads ($61.20 CPL)'
      },
      {
        id: '4.4',
        objectiveId: 'obj4',
        name: '4.4 DSP Programático (Segmentación Contextual Moda/Retail)',
        platform: 'DSP',
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
        kpiHighlight: '116 Leads ($70.34 CPL)'
      }
    ]
  }
];

export const REMARKETING_60D_SEGMENTS: Remarketing60dSegment[] = [
  {
    segmentName: '1. Carrito Abandonado Reciente (Alta Urgencia)',
    windowLabel: 'Días 1 a 7 sin compra',
    channels: 'Facebook/IG DPA + Google Display + Email (1h, 24h, 48h)',
    budgetMxn: 79481,
    tactic: 'Recordatorio dinámico con la prenda/calzado exacto y aviso de "Últimos pares en tu talla".',
    orders: 635,
    cpaMxn: 125.17,
    roas: 6.79
  },
  {
    segmentName: '2. Carrito en Quincena (Desbloqueo por Nómina)',
    windowLabel: 'Días 8 a 30 sin compra',
    channels: 'Facebook/IG + Display + DSP + Email Quincena',
    budgetMxn: 61819,
    tactic: 'Activación en días 15 y 30 del mes con "Envío Gratis hoy o 10% OFF extra para cerrar tu carrito".',
    orders: 425,
    cpaMxn: 145.46,
    roas: 5.84
  },
  {
    segmentName: '3. Reactivación de Carrito Histórico',
    windowLabel: 'Días 31 a 60 sin compra',
    channels: 'Facebook/IG Catálogo + DSP + Email Reactivación',
    budgetMxn: 35325,
    tactic: 'Muestra productos sustitutos de la misma talla/categoría con descuento final Outlet antes de salir de la ventana de 60 días.',
    orders: 210,
    cpaMxn: 168.21,
    roas: 5.05
  }
];

export const KPI_GROUP_CARDS: KpiGroupCard[] = [
  {
    objectiveTitle: '1. Campañas de Descargas y Engagement App',
    platforms: 'Facebook, Instagram, Google Ads, TikTok y DSP',
    targetMeta: 'Meta: 1,300 descargas -> Logrado: 2,550 descargas ($102,000 MXN)',
    kpis: [
      {
        name: 'Tasa de clics en anuncios de descarga (CTR)',
        estimate: '1.59% promedio (42,492 clics)',
        howWeAchieveIt: 'Videos cortos en TikTok/Reels y Google UAC mostrando descuentos reales por categoría familiar.'
      },
      {
        name: 'Tasa de conversión de descargas (Click-to-Install)',
        estimate: '6.00% (2,550 descargas)',
        howWeAchieveIt: 'Fichas de App Store y Google Play optimizadas con capturas de ofertas y calificaciones.'
      },
      {
        name: 'Tasa de conversión en registros de la app',
        estimate: '45.0% (1,148 registros in-app)',
        howWeAchieveIt: 'Login social en 1 clic e incentivo de $150 MXN en primera compra al registrarse en la app.'
      },
      {
        name: 'Costo por instalación (CPI)',
        estimate: '$40.00 MXN promedio',
        howWeAchieveIt: 'Concentrar 75% del presupuesto del objetivo en Google UAC ($37.09 CPI) y Meta ($40.57 CPI).'
      }
    ]
  },
  {
    objectiveTitle: '2. Promoción de Ventas dentro de la App',
    platforms: 'Google Ads, Facebook, Instagram, TikTok y DSP',
    targetMeta: 'Meta: ROAS 6.8 -> Logrado: ROAS 6.80x ($2,601,000 MXN con $382,500 MXN)',
    kpis: [
      {
        name: 'Valor promedio de pedido (AOV) en la app',
        estimate: '$850 MXN base (meta operativa $950 MXN)',
        howWeAchieveIt: 'Packs familiares y barra de "Envío Gratis en compras mayores a $899 MXN" en el carrito.'
      },
      {
        name: 'Tasa de conversión de usuarios activos en la app',
        estimate: '2.40% global (3.85% en Remarketing 60D)',
        howWeAchieveIt: 'Deep linking directo al producto o carrito abandonado (nunca al home genérico).'
      },
      {
        name: 'Número de compras recurrentes',
        estimate: '1,285 pedidos recurrentes (42% del total app)',
        howWeAchieveIt: 'Audiencias de compradores previos y carritos abandonados (1-60 días) impactados en quincena.'
      }
    ]
  },
  {
    objectiveTitle: '3. Incentivar Ventas en el Sitio Web',
    platforms: 'Google Search Ads, Email Marketing, Facebook y Display',
    targetMeta: 'Meta: ROAS 3.4 -> Logrado: ROAS 3.40x ($1,011,500 MXN con $297,500 MXN)',
    kpis: [
      {
        name: 'Tasa de conversión en el sitio web (CVR Web)',
        estimate: '1.20% global (2.65% en Remarketing 60D)',
        howWeAchieveIt: 'Tráfico de alta intención en Search y checkout ágil con métodos de pago locales.'
      },
      {
        name: 'Retorno sobre inversión publicitaria (ROAS) en Google Ads',
        estimate: '3.65x en Google Search Ads',
        howWeAchieveIt: 'Separación de campañas Brand, Genérico de ofertas ("outlet calzado") y Shopping con filtro de stock.'
      },
      {
        name: 'Costo por adquisición (CPA) en campañas de remarketing',
        estimate: '$192.86 MXN CPA ($190.67 Ads | $198.33 Email)',
        howWeAchieveIt: 'Campaña dedicada a usuarios que abandonaron el carrito sin comprar en los últimos 60 días.'
      }
    ]
  },
  {
    objectiveTitle: '4. Incrementar Registros en el Sitio Web',
    platforms: 'Google Display, Facebook Ads, Instagram Ads, DSP',
    targetMeta: 'Meta: 850 leads cualificados -> Logrado: 1,236 leads ($68,000 MXN)',
    kpis: [
      {
        name: 'Tasa de conversión de visitantes en registros',
        estimate: '5.00% (1,236 registros de 24,738 visitas)',
        howWeAchieveIt: 'Landing dedicada "Club OutletShop" con 15% OFF adicional en la primera compra.'
      },
      {
        name: 'Número de registros completados',
        estimate: '1,236 leads cualificados (+45% vs. meta)',
        howWeAchieveIt: 'Formulario corto (correo, WhatsApp y categoría de interés: Mujer, Hombre, Niños).'
      },
      {
        name: 'Costo por lead (CPL)',
        estimate: '$55.02 MXN promedio',
        howWeAchieveIt: '70% del presupuesto en Facebook e Instagram Lead/Conversion Ads ($50-$53 CPL) + 30% en Display/DSP.'
      }
    ]
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
  rmkt_focus: {
    totalBudgetMxn: 850000,
    captacionSharePct: 20,
    aovMxn: 850,
    cpiMxn: 40,
    cpaAppMxn: 118,
    rmkt60dShareOfSalesPct: 35
  }
};

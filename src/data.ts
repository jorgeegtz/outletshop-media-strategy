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
    projectedResultLabel: '2,550 descargas (+ 1,148 registros en app)',
    complianceSubnote: 'Nota: +96% vs. las 1,300 pedidas en el brief',
    unitCostSummary: '$40.00 MXN CPI | 1.55% CTR | 6.02% CVR Descarga | 45.0% CVR Reg',
    lines: [
      {
        id: '1.1',
        objectiveId: 'obj1',
        name: '1.1 Google Ads (UAC Descargas)',
        platform: 'Google Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 40800,
        sharePct: 4.8,
        cpmMxn: 40.0,
        impressions: 1020000,
        ctrPct: 1.75,
        clicks: 17850,
        cpcMxn: 2.29,
        cvrPct: 6.16,
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
        name: '1.2 Facebook e Instagram (App Install)',
        platform: 'Facebook + Instagram',
        isRemarketing60d: false,
        monthlySpendMxn: 35700,
        sharePct: 4.2,
        cpmMxn: 37.5,
        impressions: 952000,
        ctrPct: 1.5,
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
        name: '1.3 TikTok Ads (App Install)',
        platform: 'TikTok',
        isRemarketing60d: false,
        monthlySpendMxn: 15300,
        sharePct: 1.8,
        cpmMxn: 30.0,
        impressions: 510000,
        ctrPct: 1.4,
        clicks: 7140,
        cpcMxn: 2.14,
        cvrPct: 5.46,
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
        name: '1.4 DSP (In-App Video & Banners)',
        platform: 'DSP',
        isRemarketing60d: false,
        monthlySpendMxn: 10200,
        sharePct: 1.2,
        cpmMxn: 40.0,
        impressions: 255000,
        ctrPct: 1.2,
        clicks: 3060,
        cpcMxn: 3.33,
        cvrPct: 5.88,
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
    projectedResultLabel: 'ROAS 6.80 ($2,601,000 MXN / 3,060 pedidos)',
    complianceSubnote: 'Nota: Cumple el ROAS 6.8 con CPA promedio de $125 MXN',
    unitCostSummary: '2.40% CVR App | $125.00 CPA | AOV $850 | 1,285 Recompras',
    lines: [
      {
        id: '2.1',
        objectiveId: 'obj2',
        name: '2.1 Google Ads (UAC Ventas In-App)',
        platform: 'Google Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 130050,
        sharePct: 15.3,
        cpmMxn: 50.0,
        impressions: 2601000,
        ctrPct: 1.9,
        clicks: 49419,
        cpcMxn: 2.63,
        cvrPct: 2.11,
        conversions: 1045,
        conversionUnit: 'pedidos',
        costPerResultMxn: 124.45,
        costMetricType: 'CPA',
        revenueMxn: 888250,
        roas: 6.83,
        kpiHighlight: 'ROAS 6.83'
      },
      {
        id: '2.2',
        objectiveId: 'obj2',
        name: '2.2 Facebook e Instagram (Catálogo In-App)',
        platform: 'Facebook + Instagram',
        isRemarketing60d: false,
        monthlySpendMxn: 99450,
        sharePct: 11.7,
        cpmMxn: 45.0,
        impressions: 2210000,
        ctrPct: 1.6,
        clicks: 35360,
        cpcMxn: 2.81,
        cvrPct: 2.14,
        conversions: 755,
        conversionUnit: 'pedidos',
        costPerResultMxn: 131.72,
        costMetricType: 'CPA',
        revenueMxn: 641750,
        roas: 6.45,
        kpiHighlight: 'ROAS 6.45'
      },
      {
        id: '2.3',
        objectiveId: 'obj2',
        name: '2.3 Remarketing Carrito 60D App (FB/IG + DSP)',
        platform: 'FB/IG + DSP',
        isRemarketing60d: true,
        monthlySpendMxn: 95625,
        sharePct: 11.3,
        cpmMxn: 50.0,
        impressions: 1912500,
        ctrPct: 1.2,
        clicks: 22950,
        cpcMxn: 4.17,
        cvrPct: 3.7,
        conversions: 850,
        conversionUnit: 'pedidos',
        costPerResultMxn: 112.5,
        costMetricType: 'CPA',
        revenueMxn: 722500,
        roas: 7.56,
        kpiHighlight: 'ROAS 7.56 (Rmkt 60D)'
      },
      {
        id: '2.4',
        objectiveId: 'obj2',
        name: '2.4 TikTok Ads (Catálogo & Video Shopping)',
        platform: 'TikTok',
        isRemarketing60d: false,
        monthlySpendMxn: 57375,
        sharePct: 6.8,
        cpmMxn: 45.0,
        impressions: 1275000,
        ctrPct: 1.56,
        clicks: 19890,
        cpcMxn: 2.88,
        cvrPct: 2.06,
        conversions: 410,
        conversionUnit: 'pedidos',
        costPerResultMxn: 139.94,
        costMetricType: 'CPA',
        revenueMxn: 348500,
        roas: 6.07,
        kpiHighlight: 'ROAS 6.07'
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
    projectedResultLabel: 'ROAS 3.40 ($1,011,500 MXN / 1,190 pedidos)',
    complianceSubnote: 'Nota: Cumple el ROAS 3.4 con CPA web de $250 ($192.86 en Rmkt)',
    unitCostSummary: '1.20% CVR Web | ROAS Google: 3.65 | CPA Rmkt 60D: $192.86',
    lines: [
      {
        id: '3.1',
        objectiveId: 'obj3',
        name: '3.1 Google Search Ads (Brand + Genérico + Shopping)',
        platform: 'Google Search Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 133875,
        sharePct: 15.8,
        cpmMxn: 62.5,
        impressions: 2142000,
        ctrPct: 2.2,
        clicks: 47124,
        cpcMxn: 2.84,
        cvrPct: 1.22,
        conversions: 575,
        conversionUnit: 'pedidos',
        costPerResultMxn: 232.83,
        costMetricType: 'CPA',
        revenueMxn: 488750,
        roas: 3.65,
        kpiHighlight: 'ROAS 3.65'
      },
      {
        id: '3.2',
        objectiveId: 'obj3',
        name: '3.2 Facebook Ads (Catálogo Web - Prospección)',
        platform: 'Facebook',
        isRemarketing60d: false,
        monthlySpendMxn: 82625,
        sharePct: 9.7,
        cpmMxn: 40.0,
        impressions: 2065625,
        ctrPct: 1.6,
        clicks: 33050,
        cpcMxn: 2.5,
        cvrPct: 0.59,
        conversions: 195,
        conversionUnit: 'pedidos',
        costPerResultMxn: 423.72,
        costMetricType: 'CPA',
        revenueMxn: 165750,
        roas: 2.01,
        kpiHighlight: 'ROAS 2.01'
      },
      {
        id: '3.3',
        objectiveId: 'obj3',
        name: '3.3 Remarketing Carrito 60D Web (Facebook DPA + Display)',
        platform: 'Facebook + Display',
        isRemarketing60d: true,
        monthlySpendMxn: 57200,
        sharePct: 6.7,
        cpmMxn: 40.0,
        impressions: 1430000,
        ctrPct: 0.8,
        clicks: 11440,
        cpcMxn: 5.0,
        cvrPct: 2.62,
        conversions: 300,
        conversionUnit: 'pedidos',
        costPerResultMxn: 190.67,
        costMetricType: 'CPA',
        revenueMxn: 255000,
        roas: 4.46,
        kpiHighlight: 'ROAS 4.46 (Rmkt 60D)'
      },
      {
        id: '3.4',
        objectiveId: 'obj3',
        name: '3.4 Email Marketing (Carrito 60D y Bienvenida)',
        platform: 'Email Marketing',
        isRemarketing60d: true,
        monthlySpendMxn: 23800,
        sharePct: 2.8,
        cpmMxn: 50.0,
        impressions: 476000,
        ctrPct: 1.6,
        clicks: 7616,
        cpcMxn: 3.13,
        cvrPct: 1.58,
        conversions: 120,
        conversionUnit: 'pedidos',
        costPerResultMxn: 198.33,
        costMetricType: 'CPA',
        revenueMxn: 102000,
        roas: 4.29,
        kpiHighlight: 'ROAS 4.29 (Email)'
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
    projectedResultLabel: '1,236 leads cualificados (24,684 visitas)',
    complianceSubnote: 'Nota: +45% vs. los 850 leads pedidos en el brief',
    unitCostSummary: '$55.02 MXN CPL | 5.01% CVR Visitantes a Registro',
    lines: [
      {
        id: '4.1',
        objectiveId: 'obj4',
        name: '4.1 Facebook Ads (Registro Web - Cupón 1ra Compra)',
        platform: 'Facebook Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 27200,
        sharePct: 3.2,
        cpmMxn: 40.0,
        impressions: 680000,
        ctrPct: 1.5,
        clicks: 10200,
        cpcMxn: 2.67,
        cvrPct: 5.29,
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
        name: '4.2 Instagram Ads (Stories y Reels Registro)',
        platform: 'Instagram Ads',
        isRemarketing60d: false,
        monthlySpendMxn: 20400,
        sharePct: 2.4,
        cpmMxn: 40.0,
        impressions: 510000,
        ctrPct: 1.5,
        clicks: 7650,
        cpcMxn: 2.67,
        cvrPct: 4.97,
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
        name: '4.3 Google Display (In-Market Calzado y Ropa)',
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
        name: '4.4 DSP (Audiencias de Moda y Ofertas)',
        platform: 'DSP',
        isRemarketing60d: false,
        monthlySpendMxn: 8160,
        sharePct: 1.0,
        cpmMxn: 32.0,
        impressions: 255000,
        ctrPct: 1.0,
        clicks: 2550,
        cpcMxn: 3.2,
        cvrPct: 4.55,
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
    segmentName: '1. Abandono reciente (1 a 7 días)',
    windowLabel: '1-7 días sin compra',
    channels: 'FB/IG DPA + Display + Email (1h, 24h y 48h)',
    budgetMxn: 79481,
    tactic: 'Muestra el par o prenda exacta que dejaron en el carrito avisando si quedan pocas piezas en su número.',
    orders: 635,
    cpaMxn: 125.17,
    roas: 6.79
  },
  {
    segmentName: '2. Corte de quincena (8 a 30 días)',
    windowLabel: '8-30 días sin compra',
    channels: 'FB/IG + Display + DSP + Email en días 15 y 30',
    budgetMxn: 61819,
    tactic: 'Subimos puja en días de pago de nómina con envío gratis o 10% adicional para destrabar el carrito.',
    orders: 425,
    cpaMxn: 145.46,
    roas: 5.84
  },
  {
    segmentName: '3. Carritos de 1 a 2 meses (31 a 60 días)',
    windowLabel: '31-60 días sin compra',
    channels: 'Catálogo FB/IG + DSP + Email de liquidación',
    budgetMxn: 35325,
    tactic: 'En outlet las tallas vuelan; después de 30 días mostramos modelos similares disponibles en esa misma talla.',
    orders: 210,
    cpaMxn: 168.21,
    roas: 5.05
  }
];

export const KPI_GROUP_CARDS: KpiGroupCard[] = [
  {
    objectiveTitle: '1. Campañas de Descargas y Engagement App',
    platforms: 'Facebook, Instagram, Google Ads, TikTok y DSP',
    targetMeta: 'Meta brief: 1,300 descargas | Estimación: 2,550 descargas ($102,000 MXN)',
    kpis: [
      {
        name: 'Tasa de clics en anuncios de descarga (CTR)',
        estimate: '1.55% (42,330 clics)',
        howWeAchieveIt: 'Anuncios verticales en Reels, TikTok y UAC mostrando precios finales de outlet desde el primer segundo.'
      },
      {
        name: 'Tasa de conversión de descargas',
        estimate: '6.02% (2,550 descargas)',
        howWeAchieveIt: 'Alinear lo que promete el anuncio con las primeras capturas de pantalla en Play Store y App Store.'
      },
      {
        name: 'Tasa de conversión en registros de la app',
        estimate: '45.02% (1,148 registros)',
        howWeAchieveIt: 'Pedir el registro con Google/Apple/FB al abrir la app a cambio de activar el cupón de primera compra.'
      },
      {
        name: 'Costo por instalación (CPI)',
        estimate: '$40.00 MXN promedio',
        howWeAchieveIt: 'El 75% del presupuesto va a Google UAC ($37.09) y Meta ($40.57), dejando TikTok y DSP como apoyo de alcance.'
      }
    ]
  },
  {
    objectiveTitle: '2. Promoción de Ventas dentro de la App',
    platforms: 'Google Ads, Facebook, Instagram, TikTok y DSP',
    targetMeta: 'Meta brief: ROAS 6.8 | Estimación: ROAS 6.80 ($2,601,000 MXN con $382,500 MXN)',
    kpis: [
      {
        name: 'Valor promedio de pedido (AOV) en la app',
        estimate: '$850 MXN actual (buscando subir a $950)',
        howWeAchieveIt: 'Poner el envío gratis en $899 MXN (apenas $49 arriba del ticket actual) para que agreguen un accesorio o calcetines.'
      },
      {
        name: 'Tasa de conversión de usuarios activos en la app',
        estimate: '2.40% general (3.70% en carrito abandonado)',
        howWeAchieveIt: 'Usar deep links en todos los anuncios de catálogo para que el clic abra directo el producto en la app.'
      },
      {
        name: 'Número de compras recurrentes',
        estimate: '1,285 pedidos (42% de las ventas en app)',
        howWeAchieveIt: 'Re-impactar en cada quincena a quienes ya compraron o dejaron carrito en los últimos 60 días.'
      }
    ]
  },
  {
    objectiveTitle: '3. Incentivar Ventas en el Sitio Web',
    platforms: 'Google Search Ads, Email Marketing, Facebook y Display',
    targetMeta: 'Meta brief: ROAS 3.4 | Estimación: ROAS 3.40 ($1,011,500 MXN con $297,500 MXN)',
    kpis: [
      {
        name: 'Tasa de conversión en el sitio web',
        estimate: '1.20% general (2.62% en remarketing)',
        howWeAchieveIt: 'Filtrar en el feed de Shopping y Meta los modelos que ya no tengan tallas medias disponibles.'
      },
      {
        name: 'Retorno sobre inversión publicitaria (ROAS) en Google Ads',
        estimate: '3.65 en Google Search Ads',
        howWeAchieveIt: 'Separar campaña de Marca, búsqueda genérica de ofertas ("tenis en oferta", "outlet calzado") y Shopping.'
      },
      {
        name: 'Costo por adquisición (CPA) en campañas de remarketing',
        estimate: '$192.86 MXN ($190.67 en Ads y $198.33 en Email)',
        howWeAchieveIt: 'Audiencia de carritos abandonados de los últimos 60 días excluyendo a quienes ya compraron.'
      }
    ]
  },
  {
    objectiveTitle: '4. Incrementar Registros en el Sitio Web',
    platforms: 'Google Display, Facebook Ads, Instagram Ads, DSP',
    targetMeta: 'Meta brief: 850 leads | Estimación: 1,236 leads cualificados ($68,000 MXN)',
    kpis: [
      {
        name: 'Tasa de conversión de visitantes en registros',
        estimate: '5.01% (1,236 registros de 24,684 visitas)',
        howWeAchieveIt: 'Landing sencilla con 15% de descuento en primera compra al dejar correo y categoría que buscan (Mujer, Hombre o Niños).'
      },
      {
        name: 'Número de registros completados',
        estimate: '1,236 leads cualificados',
        howWeAchieveIt: 'Conectar el formulario directo a la herramienta de Email Marketing para enviar el cupón al instante.'
      },
      {
        name: 'Costo por lead (CPL)',
        estimate: '$55.02 MXN promedio',
        howWeAchieveIt: 'Concentrar el 70% en Facebook e Instagram ($50-$54 CPL) y 30% en Display y DSP para cuidar el costo.'
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

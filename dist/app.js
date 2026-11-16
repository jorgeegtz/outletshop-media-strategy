"use strict";
(() => {
  // src/data.ts
  var GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/13xVz5fn7o0RXlFqfymwfAVaJiwahTILCM3aRDT-GaNc/edit";
  var OBJECTIVE_GROUPS = [
    {
      id: "obj1",
      title: "1. Incremento de descargas de app",
      block: "Captaci\xF3n (20%)",
      platformsText: "Facebook, Instagram, Google Ads, TikTok y DSP",
      sharePct: 12,
      monthlySpendMxn: 102e3,
      briefMetricName: "Costo por instalaci\xF3n (CPI)",
      briefTargetLabel: "1,300 descargas",
      projectedResultLabel: "2,550 descargas (+ 1,148 registros en app)",
      complianceSubnote: "Nota: +96% vs. las 1,300 pedidas en el brief",
      unitCostSummary: "$40.00 MXN CPI | 1.55% CTR | 6.02% CVR Descarga | 45.0% CVR Reg",
      lines: [
        {
          id: "1.1",
          objectiveId: "obj1",
          name: "1.1 Google Ads (UAC Descargas)",
          platform: "Google Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 40800,
          sharePct: 4.8,
          cpmMxn: 40,
          impressions: 102e4,
          ctrPct: 1.75,
          clicks: 17850,
          cpcMxn: 2.29,
          cvrPct: 6.16,
          conversions: 1100,
          conversionUnit: "descargas",
          costPerResultMxn: 37.09,
          costMetricType: "CPI",
          revenueMxn: 0,
          roas: null,
          kpiHighlight: "528 Reg App (48% CVR)"
        },
        {
          id: "1.2",
          objectiveId: "obj1",
          name: "1.2 Facebook e Instagram (App Install)",
          platform: "Facebook + Instagram",
          isRemarketing60d: false,
          monthlySpendMxn: 35700,
          sharePct: 4.2,
          cpmMxn: 37.5,
          impressions: 952e3,
          ctrPct: 1.5,
          clicks: 14280,
          cpcMxn: 2.5,
          cvrPct: 6.16,
          conversions: 880,
          conversionUnit: "descargas",
          costPerResultMxn: 40.57,
          costMetricType: "CPI",
          revenueMxn: 0,
          roas: null,
          kpiHighlight: "396 Reg App (45% CVR)"
        },
        {
          id: "1.3",
          objectiveId: "obj1",
          name: "1.3 TikTok Ads (App Install)",
          platform: "TikTok",
          isRemarketing60d: false,
          monthlySpendMxn: 15300,
          sharePct: 1.8,
          cpmMxn: 30,
          impressions: 51e4,
          ctrPct: 1.4,
          clicks: 7140,
          cpcMxn: 2.14,
          cvrPct: 5.46,
          conversions: 390,
          conversionUnit: "descargas",
          costPerResultMxn: 39.23,
          costMetricType: "CPI",
          revenueMxn: 0,
          roas: null,
          kpiHighlight: "156 Reg App (40% CVR)"
        },
        {
          id: "1.4",
          objectiveId: "obj1",
          name: "1.4 DSP (In-App Video & Banners)",
          platform: "DSP",
          isRemarketing60d: false,
          monthlySpendMxn: 10200,
          sharePct: 1.2,
          cpmMxn: 40,
          impressions: 255e3,
          ctrPct: 1.2,
          clicks: 3060,
          cpcMxn: 3.33,
          cvrPct: 5.88,
          conversions: 180,
          conversionUnit: "descargas",
          costPerResultMxn: 56.67,
          costMetricType: "CPI",
          revenueMxn: 0,
          roas: null,
          kpiHighlight: "68 Reg App (38% CVR)"
        }
      ]
    },
    {
      id: "obj2",
      title: "2. Incremento de ventas en app",
      block: "Ventas (80%)",
      platformsText: "Google Ads, Facebook, Instagram, TikTok y DSP",
      sharePct: 45,
      monthlySpendMxn: 382500,
      briefMetricName: "Tasa de conversi\xF3n en app",
      briefTargetLabel: "ROAS 6.8",
      projectedResultLabel: "ROAS 6.80 ($2,601,000 MXN / 3,060 pedidos)",
      complianceSubnote: "Nota: Cumple el ROAS 6.8 con CPA promedio de $125 MXN",
      unitCostSummary: "2.40% CVR App | $125.00 CPA | AOV $850 | 1,285 Recompras",
      lines: [
        {
          id: "2.1",
          objectiveId: "obj2",
          name: "2.1 Google Ads (UAC Ventas In-App)",
          platform: "Google Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 130050,
          sharePct: 15.3,
          cpmMxn: 50,
          impressions: 2601e3,
          ctrPct: 1.9,
          clicks: 49419,
          cpcMxn: 2.63,
          cvrPct: 2.11,
          conversions: 1045,
          conversionUnit: "pedidos",
          costPerResultMxn: 124.45,
          costMetricType: "CPA",
          revenueMxn: 888250,
          roas: 6.83,
          kpiHighlight: "ROAS 6.83"
        },
        {
          id: "2.2",
          objectiveId: "obj2",
          name: "2.2 Facebook e Instagram (Cat\xE1logo In-App)",
          platform: "Facebook + Instagram",
          isRemarketing60d: false,
          monthlySpendMxn: 99450,
          sharePct: 11.7,
          cpmMxn: 45,
          impressions: 221e4,
          ctrPct: 1.6,
          clicks: 35360,
          cpcMxn: 2.81,
          cvrPct: 2.14,
          conversions: 755,
          conversionUnit: "pedidos",
          costPerResultMxn: 131.72,
          costMetricType: "CPA",
          revenueMxn: 641750,
          roas: 6.45,
          kpiHighlight: "ROAS 6.45"
        },
        {
          id: "2.3",
          objectiveId: "obj2",
          name: "2.3 Remarketing Carrito 60D App (FB/IG + DSP)",
          platform: "FB/IG + DSP",
          isRemarketing60d: true,
          monthlySpendMxn: 95625,
          sharePct: 11.3,
          cpmMxn: 50,
          impressions: 1912500,
          ctrPct: 1.2,
          clicks: 22950,
          cpcMxn: 4.17,
          cvrPct: 3.7,
          conversions: 850,
          conversionUnit: "pedidos",
          costPerResultMxn: 112.5,
          costMetricType: "CPA",
          revenueMxn: 722500,
          roas: 7.56,
          kpiHighlight: "ROAS 7.56 (Rmkt 60D)"
        },
        {
          id: "2.4",
          objectiveId: "obj2",
          name: "2.4 TikTok Ads (Cat\xE1logo & Video Shopping)",
          platform: "TikTok",
          isRemarketing60d: false,
          monthlySpendMxn: 57375,
          sharePct: 6.8,
          cpmMxn: 45,
          impressions: 1275e3,
          ctrPct: 1.56,
          clicks: 19890,
          cpcMxn: 2.88,
          cvrPct: 2.06,
          conversions: 410,
          conversionUnit: "pedidos",
          costPerResultMxn: 139.94,
          costMetricType: "CPA",
          revenueMxn: 348500,
          roas: 6.07,
          kpiHighlight: "ROAS 6.07"
        }
      ]
    },
    {
      id: "obj3",
      title: "3. Incremento de ventas en sitio web",
      block: "Ventas (80%)",
      platformsText: "Google Search Ads, Email Marketing, Facebook y Display",
      sharePct: 35,
      monthlySpendMxn: 297500,
      briefMetricName: "Tasa de conversi\xF3n en sitio web",
      briefTargetLabel: "ROAS 3.4",
      projectedResultLabel: "ROAS 3.40 ($1,011,500 MXN / 1,190 pedidos)",
      complianceSubnote: "Nota: Cumple el ROAS 3.4 con CPA web de $250 ($192.86 en Rmkt)",
      unitCostSummary: "1.20% CVR Web | ROAS Google: 3.65 | CPA Rmkt 60D: $192.86",
      lines: [
        {
          id: "3.1",
          objectiveId: "obj3",
          name: "3.1 Google Search Ads (Brand + Gen\xE9rico + Shopping)",
          platform: "Google Search Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 133875,
          sharePct: 15.8,
          cpmMxn: 62.5,
          impressions: 2142e3,
          ctrPct: 2.2,
          clicks: 47124,
          cpcMxn: 2.84,
          cvrPct: 1.22,
          conversions: 575,
          conversionUnit: "pedidos",
          costPerResultMxn: 232.83,
          costMetricType: "CPA",
          revenueMxn: 488750,
          roas: 3.65,
          kpiHighlight: "ROAS 3.65"
        },
        {
          id: "3.2",
          objectiveId: "obj3",
          name: "3.2 Facebook Ads (Cat\xE1logo Web - Prospecci\xF3n)",
          platform: "Facebook",
          isRemarketing60d: false,
          monthlySpendMxn: 82625,
          sharePct: 9.7,
          cpmMxn: 40,
          impressions: 2065625,
          ctrPct: 1.6,
          clicks: 33050,
          cpcMxn: 2.5,
          cvrPct: 0.59,
          conversions: 195,
          conversionUnit: "pedidos",
          costPerResultMxn: 423.72,
          costMetricType: "CPA",
          revenueMxn: 165750,
          roas: 2.01,
          kpiHighlight: "ROAS 2.01"
        },
        {
          id: "3.3",
          objectiveId: "obj3",
          name: "3.3 Remarketing Carrito 60D Web (Facebook DPA + Display)",
          platform: "Facebook + Display",
          isRemarketing60d: true,
          monthlySpendMxn: 57200,
          sharePct: 6.7,
          cpmMxn: 40,
          impressions: 143e4,
          ctrPct: 0.8,
          clicks: 11440,
          cpcMxn: 5,
          cvrPct: 2.62,
          conversions: 300,
          conversionUnit: "pedidos",
          costPerResultMxn: 190.67,
          costMetricType: "CPA",
          revenueMxn: 255e3,
          roas: 4.46,
          kpiHighlight: "ROAS 4.46 (Rmkt 60D)"
        },
        {
          id: "3.4",
          objectiveId: "obj3",
          name: "3.4 Email Marketing (Carrito 60D y Bienvenida)",
          platform: "Email Marketing",
          isRemarketing60d: true,
          monthlySpendMxn: 23800,
          sharePct: 2.8,
          cpmMxn: 50,
          impressions: 476e3,
          ctrPct: 1.6,
          clicks: 7616,
          cpcMxn: 3.13,
          cvrPct: 1.58,
          conversions: 120,
          conversionUnit: "pedidos",
          costPerResultMxn: 198.33,
          costMetricType: "CPA",
          revenueMxn: 102e3,
          roas: 4.29,
          kpiHighlight: "ROAS 4.29 (Email)"
        }
      ]
    },
    {
      id: "obj4",
      title: "4. Incremento de registros en sitio",
      block: "Captaci\xF3n (20%)",
      platformsText: "Google Display, Facebook Ads, Instagram Ads, DSP",
      sharePct: 8,
      monthlySpendMxn: 68e3,
      briefMetricName: "Costo por registro (CPL)",
      briefTargetLabel: "850 leads cualificados",
      projectedResultLabel: "1,236 leads cualificados (24,684 visitas)",
      complianceSubnote: "Nota: +45% vs. los 850 leads pedidos en el brief",
      unitCostSummary: "$55.02 MXN CPL | 5.01% CVR Visitantes a Registro",
      lines: [
        {
          id: "4.1",
          objectiveId: "obj4",
          name: "4.1 Facebook Ads (Registro Web - Cup\xF3n 1ra Compra)",
          platform: "Facebook Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 27200,
          sharePct: 3.2,
          cpmMxn: 40,
          impressions: 68e4,
          ctrPct: 1.5,
          clicks: 10200,
          cpcMxn: 2.67,
          cvrPct: 5.29,
          conversions: 540,
          conversionUnit: "leads",
          costPerResultMxn: 50.37,
          costMetricType: "CPL",
          revenueMxn: 0,
          roas: null,
          kpiHighlight: "540 Leads ($50.37 CPL)"
        },
        {
          id: "4.2",
          objectiveId: "obj4",
          name: "4.2 Instagram Ads (Stories y Reels Registro)",
          platform: "Instagram Ads",
          isRemarketing60d: false,
          monthlySpendMxn: 20400,
          sharePct: 2.4,
          cpmMxn: 40,
          impressions: 51e4,
          ctrPct: 1.5,
          clicks: 7650,
          cpcMxn: 2.67,
          cvrPct: 4.97,
          conversions: 380,
          conversionUnit: "leads",
          costPerResultMxn: 53.68,
          costMetricType: "CPL",
          revenueMxn: 0,
          roas: null,
          kpiHighlight: "380 Leads ($53.68 CPL)"
        },
        {
          id: "4.3",
          objectiveId: "obj4",
          name: "4.3 Google Display (In-Market Calzado y Ropa)",
          platform: "Google Display",
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
          kpiHighlight: "200 Leads ($61.20 CPL)"
        },
        {
          id: "4.4",
          objectiveId: "obj4",
          name: "4.4 DSP (Audiencias de Moda y Ofertas)",
          platform: "DSP",
          isRemarketing60d: false,
          monthlySpendMxn: 8160,
          sharePct: 1,
          cpmMxn: 32,
          impressions: 255e3,
          ctrPct: 1,
          clicks: 2550,
          cpcMxn: 3.2,
          cvrPct: 4.55,
          conversions: 116,
          conversionUnit: "leads",
          costPerResultMxn: 70.34,
          costMetricType: "CPL",
          revenueMxn: 0,
          roas: null,
          kpiHighlight: "116 Leads ($70.34 CPL)"
        }
      ]
    }
  ];
  var REMARKETING_60D_SEGMENTS = [
    {
      segmentName: "1. Abandono reciente (1 a 7 d\xEDas)",
      windowLabel: "1-7 d\xEDas sin compra",
      channels: "FB/IG DPA + Display + Email (1h, 24h y 48h)",
      budgetMxn: 79481,
      tactic: "Muestra el par o prenda exacta que dejaron en el carrito avisando si quedan pocas piezas en su n\xFAmero.",
      orders: 635,
      cpaMxn: 125.17,
      roas: 6.79
    },
    {
      segmentName: "2. Corte de quincena (8 a 30 d\xEDas)",
      windowLabel: "8-30 d\xEDas sin compra",
      channels: "FB/IG + Display + DSP + Email en d\xEDas 15 y 30",
      budgetMxn: 61819,
      tactic: "Subimos puja en d\xEDas de pago de n\xF3mina con env\xEDo gratis o 10% adicional para destrabar el carrito.",
      orders: 425,
      cpaMxn: 145.46,
      roas: 5.84
    },
    {
      segmentName: "3. Carritos de 1 a 2 meses (31 a 60 d\xEDas)",
      windowLabel: "31-60 d\xEDas sin compra",
      channels: "Cat\xE1logo FB/IG + DSP + Email de liquidaci\xF3n",
      budgetMxn: 35325,
      tactic: "En outlet las tallas vuelan; despu\xE9s de 30 d\xEDas mostramos modelos similares disponibles en esa misma talla.",
      orders: 210,
      cpaMxn: 168.21,
      roas: 5.05
    }
  ];
  var KPI_GROUP_CARDS = [
    {
      objectiveTitle: "1. Campa\xF1as de Descargas y Engagement App",
      platforms: "Facebook, Instagram, Google Ads, TikTok y DSP",
      targetMeta: "Meta brief: 1,300 descargas | Estimaci\xF3n: 2,550 descargas ($102,000 MXN)",
      kpis: [
        {
          name: "Tasa de clics en anuncios de descarga (CTR)",
          estimate: "1.55% (42,330 clics)",
          howWeAchieveIt: "Anuncios verticales en Reels, TikTok y UAC mostrando precios finales de outlet desde el primer segundo."
        },
        {
          name: "Tasa de conversi\xF3n de descargas",
          estimate: "6.02% (2,550 descargas)",
          howWeAchieveIt: "Alinear lo que promete el anuncio con las primeras capturas de pantalla en Play Store y App Store."
        },
        {
          name: "Tasa de conversi\xF3n en registros de la app",
          estimate: "45.02% (1,148 registros)",
          howWeAchieveIt: "Pedir el registro con Google/Apple/FB al abrir la app a cambio de activar el cup\xF3n de primera compra."
        },
        {
          name: "Costo por instalaci\xF3n (CPI)",
          estimate: "$40.00 MXN promedio",
          howWeAchieveIt: "El 75% del presupuesto va a Google UAC ($37.09) y Meta ($40.57), dejando TikTok y DSP como apoyo de alcance."
        }
      ]
    },
    {
      objectiveTitle: "2. Promoci\xF3n de Ventas dentro de la App",
      platforms: "Google Ads, Facebook, Instagram, TikTok y DSP",
      targetMeta: "Meta brief: ROAS 6.8 | Estimaci\xF3n: ROAS 6.80 ($2,601,000 MXN con $382,500 MXN)",
      kpis: [
        {
          name: "Valor promedio de pedido (AOV) en la app",
          estimate: "$850 MXN actual (buscando subir a $950)",
          howWeAchieveIt: "Poner el env\xEDo gratis en $899 MXN (apenas $49 arriba del ticket actual) para que agreguen un accesorio o calcetines."
        },
        {
          name: "Tasa de conversi\xF3n de usuarios activos en la app",
          estimate: "2.40% general (3.70% en carrito abandonado)",
          howWeAchieveIt: "Usar deep links en todos los anuncios de cat\xE1logo para que el clic abra directo el producto en la app."
        },
        {
          name: "N\xFAmero de compras recurrentes",
          estimate: "1,285 pedidos (42% de las ventas en app)",
          howWeAchieveIt: "Re-impactar en cada quincena a quienes ya compraron o dejaron carrito en los \xFAltimos 60 d\xEDas."
        }
      ]
    },
    {
      objectiveTitle: "3. Incentivar Ventas en el Sitio Web",
      platforms: "Google Search Ads, Email Marketing, Facebook y Display",
      targetMeta: "Meta brief: ROAS 3.4 | Estimaci\xF3n: ROAS 3.40 ($1,011,500 MXN con $297,500 MXN)",
      kpis: [
        {
          name: "Tasa de conversi\xF3n en el sitio web",
          estimate: "1.20% general (2.62% en remarketing)",
          howWeAchieveIt: "Filtrar en el feed de Shopping y Meta los modelos que ya no tengan tallas medias disponibles."
        },
        {
          name: "Retorno sobre inversi\xF3n publicitaria (ROAS) en Google Ads",
          estimate: "3.65 en Google Search Ads",
          howWeAchieveIt: 'Separar campa\xF1a de Marca, b\xFAsqueda gen\xE9rica de ofertas ("tenis en oferta", "outlet calzado") y Shopping.'
        },
        {
          name: "Costo por adquisici\xF3n (CPA) en campa\xF1as de remarketing",
          estimate: "$192.86 MXN ($190.67 en Ads y $198.33 en Email)",
          howWeAchieveIt: "Audiencia de carritos abandonados de los \xFAltimos 60 d\xEDas excluyendo a quienes ya compraron."
        }
      ]
    },
    {
      objectiveTitle: "4. Incrementar Registros en el Sitio Web",
      platforms: "Google Display, Facebook Ads, Instagram Ads, DSP",
      targetMeta: "Meta brief: 850 leads | Estimaci\xF3n: 1,236 leads cualificados ($68,000 MXN)",
      kpis: [
        {
          name: "Tasa de conversi\xF3n de visitantes en registros",
          estimate: "5.01% (1,236 registros de 24,684 visitas)",
          howWeAchieveIt: "Landing sencilla con 15% de descuento en primera compra al dejar correo y categor\xEDa que buscan (Mujer, Hombre o Ni\xF1os)."
        },
        {
          name: "N\xFAmero de registros completados",
          estimate: "1,236 leads cualificados",
          howWeAchieveIt: "Conectar el formulario directo a la herramienta de Email Marketing para enviar el cup\xF3n al instante."
        },
        {
          name: "Costo por lead (CPL)",
          estimate: "$55.02 MXN promedio",
          howWeAchieveIt: "Concentrar el 70% en Facebook e Instagram ($50-$54 CPL) y 30% en Display y DSP para cuidar el costo."
        }
      ]
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
    rmkt_focus: {
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
      const rmktBadge = line.isRemarketing60d ? ` <span class="tag tag-purple">RMKT 60D</span>` : "";
      const revMain = line.revenueMxn > 0 ? formatMoney(line.revenueMxn) : "-";
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
    const subtotalBg = group.block === "Captaci\xF3n (20%)" ? "#eef2ff" : "#ecfdf5";
    const revSubtotal = totalRev > 0 ? formatMoney(totalRev) : "-";
    const roasOrNote = totalRev > 0 ? `<span class="status-ok">ROAS ${(totalRev / group.monthlySpendMxn).toFixed(2)}</span>` : group.id === "obj1" ? "1,148 Reg App (45%)" : "1,236 Leads (5.01% CVR)";
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
  function renderSimulatorHero(out) {
    const badgeHtml = out.allGoalsMet ? `<span class="status-ok">4 / 4 METAS EN RANGO</span>` : `<span class="status-warn">REVISAR PAR\xC1METROS</span>`;
    const meterPct = Math.min(100, Math.max(10, out.roasBlended / 6 * 100));
    const meterColor = out.allGoalsMet ? "#047857" : "#b45309";
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
  function renderAppShell() {
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
    ).join("");
    const mediaPlanBody = OBJECTIVE_GROUPS.map((g) => renderObjectiveRows(g)).join("");
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
    ).join("");
    const kpiCardsHtml = KPI_GROUP_CARDS.map(
      (card) => `
      <div class="panel">
        <h3>${card.objectiveTitle}</h3>
        <p style="font-size:13px;color:var(--text-muted);margin-bottom:8px;">
          <strong>Plataformas:</strong> ${card.platforms}<br/>
          <strong>Resultado:</strong> ${card.targetMeta}
        </p>
        <ul class="styled-list">
          ${card.kpis.map(
        (k) => `<li><strong>${k.name}:</strong> <code>${k.estimate}</code>. ${k.howWeAchieveIt}</li>`
      ).join("")}
        </ul>
      </div>
    `
    ).join("");
    return `
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="brand">
          <div class="brand-logo">O</div>
          <div>
            <div class="brand-title">Caso Pr\xE1ctico: OutletShop</div>
            <div class="brand-sub">Estrategia de Medios Online | Jorge Guti\xE9rrez</div>
          </div>
        </div>
        <nav class="nav-links" aria-label="Deck Sections">
          <a href="#executive-summary" data-slide="0" class="active">A. Resumen</a>
          <a href="#media-plan" data-slide="1">B. Estimaciones ($850k)</a>
          <a href="#app-strategy" data-slide="2">C. Campa\xF1as App</a>
          <a href="#web-strategy" data-slide="3">D. Campa\xF1as Web y Rmkt 60D</a>
          <a href="#measurement-kpis" data-slide="4">E. KPIs</a>
        </nav>
      </div>
    </header>

    <main class="container">
      <!-- SLIDE 1: A. RESUMEN EJECUTIVO -->
      <div class="deck-slide active" data-slide="0">
        <section id="executive-summary" class="hero">
          <div class="hero-single">
            <div class="eyebrow">CASO PR\xC1CTICO | ESTRATEGIA DE MEDIOS ONLINE PARA OUTLETSHOP</div>
            <h1>Distribuci\xF3n <span class="gradient-text">20% Captaci\xF3n / 80% Ventas</span> para Llegar a ROAS 6.8 en App y 3.4 en Web</h1>
            <p class="hero-lead">
              OutletShop maneja un presupuesto mensual de <strong>$850,000 MXN</strong> y un ticket promedio (AOV) de <strong>$850 MXN</strong> tanto en web como en app. Como las metas de volumen que pide el ejercicio (1,300 descargas y 850 registros) son relativamente bajas para ese presupuesto, asignamos el <strong>20% ($170,000 MXN)</strong> a captaci\xF3n y concentramos el <strong>80% ($680,000 MXN)</strong> en campa\xF1as de venta y remarketing.
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
              <h3>1. Captaci\xF3n (20% del presupuesto = $170,000 MXN)</h3>
              <ul class="styled-list">
                <li><strong>Descargas de App (12% | $102,000 MXN):</strong> En M\xE9xico un CPI promedio para retail/moda ronda los $40 MXN. Con este presupuesto cerramos en <strong>2,550 descargas</strong> (casi el doble de las 1,300 que pide la tabla) y <strong>1,148 usuarios registrados dentro de la app</strong>.</li>
                <li><strong>Registros en Sitio Web (8% | $68,000 MXN):</strong> Con un CPL estimado de $55.02 MXN en Facebook, Instagram, Display y DSP, generamos <strong>1,236 leads cualificados</strong> (arriba de los 850 solicitados).</li>
                <li><strong>Por qu\xE9 no meter m\xE1s del 20% aqu\xED:</strong> Meter m\xE1s dinero a instalaciones o registros bajar\xEDa el retorno global porque son campa\xF1as que no cobran en el momento; con el 20% cumplimos sobrados ambas metas y alimentamos las audiencias de remarketing.</li>
              </ul>
            </div>
            <div class="panel">
              <h3>2. Ventas en App y Web (80% del presupuesto = $680,000 MXN)</h3>
              <ul class="styled-list">
                <li><strong>Ventas dentro de la App (45% | $382,500 MXN):</strong> Con un AOV de $850 MXN, para dar un <strong>ROAS de 6.8</strong> necesitamos que cada pedido en la app cueste en promedio <strong>$125 MXN</strong> (<code>$850 / 6.8 = $125</code>). Eso equivale a <strong>3,060 pedidos y $2,601,000 MXN en ventas</strong>.</li>
                <li><strong>Ventas en el Sitio Web (35% | $297,500 MXN):</strong> Para dar un <strong>ROAS de 3.4</strong> con el mismo ticket de $850 MXN, el CPA web debe quedar en <strong>$250 MXN</strong> (<code>$850 / 3.4 = $250</code>), generando <strong>1,190 pedidos y $1,011,500 MXN en ventas</strong>.</li>
                <li><strong>Remarketing de Carritos Abandonados (60 d\xEDas):</strong> Tanto en App como en Web incluimos una campa\xF1a espec\xEDfica para quienes agregaron productos al carrito pero no compraron en los \xFAltimos 60 d\xEDas ($176,625 MXN en total, recuperando 1,270 pedidos a $139.07 MXN de CPA).</li>
              </ul>
            </div>
          </div>

          <h3 class="sub-heading" style="margin-top: 24px;">Resultados Esperados</h3>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Objetivo y Plataformas</th>
                  <th>M\xE9trica (Brief)</th>
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
              <span><strong>P\xFAblico Objetivo:</strong> Hombres y Mujeres 18-50 a\xF1os en M\xE9xico (Moda, Ofertas y Compras Online)</span>
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
              <span class="section-tag">SECCI\xD3N B | ESTIMACIONES Y DISTRIBUCI\xD3N DEL PRESUPUESTO ($850,000 MXN)</span>
              <h2>Estimaciones Mensuales por Objetivo y Plataforma</h2>
              <p>Desglose de inversi\xF3n, impresiones, clics, tasas de conversi\xF3n, costos por resultado (CPI, CPL, CPA), ventas e ingresos considerando el AOV de $850 MXN.</p>
            </div>
          </div>

          <div class="table-wrap">
            <table class="data-table media-plan-table">
              <thead>
                <tr>
                  <th class="campaign-col">Objetivo / Plataforma / Campa\xF1a</th>
                  <th class="num-col">Inversi\xF3n (MXN)</th>
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
              <h3>C\xF3mo construimos las estimaciones</h3>
              <ul class="styled-list">
                <li><strong>C\xE1lculo directo desde el AOV ($850 MXN):</strong>
                  <br/>- En la App nos piden <strong>ROAS 6.8</strong>, lo que obliga a comprar pedidos a <strong>$125 MXN de CPA promedio</strong>. Con $382,500 MXN salen <strong>3,060 pedidos ($2,601,000 MXN)</strong>.
                  <br/>- En el Sitio Web nos piden <strong>ROAS 3.4</strong>, por lo que el CPA promedio debe ser de <strong>$250 MXN</strong>. Con $297,500 MXN salen <strong>1,190 pedidos ($1,011,500 MXN)</strong>.
                </li>
                <li><strong>Costos de mercado en M\xE9xico:</strong> Consideramos CPMs entre $30 y $62.50 MXN (m\xE1s alto en Google Search por intenci\xF3n de compra y m\xE1s bajo en TikTok/Display), logrando CPCs alrededor de $2.89 MXN.</li>
                <li><strong>Por qu\xE9 funciona el CPA en App y Web:</strong> La prospecci\xF3n en fr\xEDo suele tener CPAs m\xE1s altos (por ejemplo $423 MXN en Facebook Web), pero al combinarla con Google Search ($232 CPA) y con las campa\xF1as de Remarketing de Carritos Abandonados de 60 d\xEDas ($112.50 CPA en App y $190.67 CPA en Web), el promedio cierra en meta.</li>
              </ul>
            </div>

            <div class="panel panel-accent">
              <div class="forecast-header">
                <div>
                  <h3 style="margin-bottom:4px;">Calculadora de Escenarios (TypeScript)</h3>
                  <p style="font-size:13px;color:var(--text-secondary);">Mueve los valores para ver c\xF3mo cambian las metas:</p>
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
                    <span>Split Captaci\xF3n (Obj. 1+4) vs. Ventas (Obj. 2+3)</span>
                    <strong id="val-out-split">20% Captaci\xF3n / 80% Ventas</strong>
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
              <span class="section-tag">SECCI\xD3N C | CAMPA\xD1AS PARA LA APLICACI\xD3N M\xD3VIL (OBJETIVOS 1 Y 2)</span>
              <h2>1. Descargas y Engagement App + 2. Promoci\xF3n de Ventas en App</h2>
              <p>Planteamiento en Facebook, Instagram, Google Ads, TikTok y DSP para cubrir las descargas y alcanzar el ROAS de 6.8 dentro de la aplicaci\xF3n.</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel panel-accent">
              <h3>1. Descargas y Engagement para la Aplicaci\xF3n ($102,000 MXN | 12%)</h3>
              <p><strong>Plataformas:</strong> Facebook, Instagram, Google Ads, TikTok y DSP.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> El brief pide 1,300 descargas. Con $102,000 MXN a un CPI promedio de $40 MXN logramos <strong>2,550 descargas</strong> y <strong>1,148 registros dentro de la app</strong> (45% de los que instalan).</li>
                <li><strong>Rol de cada plataforma:</strong>
                  <br/>- <strong>Google Ads ($40,800):</strong> Campa\xF1as UAC enfocadas en usuarios que ya buscan apps de ropa, calzado u ofertas en Play Store y App Store (1,100 descargas a $37.09 CPI).
                  <br/>- <strong>Facebook e Instagram ($35,700):</strong> Campa\xF1as de instalaci\xF3n segmentadas a hombres y mujeres de 18 a 50 a\xF1os en M\xE9xico con inter\xE9s en calzado, ropa familiar y compras online (880 descargas a $40.57 CPI).
                  <br/>- <strong>TikTok ($15,300) y DSP ($10,200):</strong> Videos cortos mostrando cambios de look o paquetes familiares por menos de $850 MXN y formatos de video en otras apps (570 descargas entre ambos).
                </li>
                <li><strong>C\xF3mo subimos el registro despu\xE9s de descargar:</strong> Damos un cup\xF3n de $150 MXN para la primera compra en la app, pero pedimos iniciar sesi\xF3n con Google, Apple o Facebook en un clic para activarlo.</li>
              </ul>
            </div>

            <div class="panel">
              <h3>2. Promoci\xF3n de Ventas dentro de la App ($382,500 MXN | 45%)</h3>
              <p><strong>Plataformas:</strong> Google Ads, Facebook, Instagram, TikTok y DSP.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> Llegar a <strong>ROAS 6.80 ($2,601,000 MXN en ventas / 3,060 pedidos)</strong> con una conversi\xF3n en app del <strong>2.40%</strong> y un CPA de <strong>$125 MXN</strong>.</li>
                <li><strong>Rol de cada plataforma:</strong>
                  <br/>- <strong>Google Ads ($130,050):</strong> UAC optimizado al evento de compra in-app con feed de productos (1,045 pedidos, ROAS 6.83).
                  <br/>- <strong>Facebook e Instagram ($99,450):</strong> Anuncios de cat\xE1logo con deep link para que al hacer clic en un par de zapatos se abra directamente ese producto dentro de la app (755 pedidos, ROAS 6.45).
                  <br/>- <strong>Remarketing Carrito 60D en App ($95,625 en FB/IG + DSP):</strong> Campa\xF1a dirigida a quienes agregaron al carrito en la app pero no compraron en los \xFAltimos 60 d\xEDas (850 pedidos a $112.50 CPA, ROAS 7.56).
                  <br/>- <strong>TikTok ($57,375):</strong> Anuncios de cat\xE1logo en video para usuarios que ya tienen la app instalada (410 pedidos, ROAS 6.07).
                </li>
                <li><strong>Recompras y cuidado del ticket ($850 MXN):</strong> Para no perder AOV en art\xEDculos rebajados, ponemos env\xEDo gratis a partir de $899 MXN (lo que empuja a sumar un segundo art\xEDculo) y trabajamos notificaciones push en quincena para lograr <strong>1,285 compras recurrentes</strong>.</li>
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
              <span class="section-tag">SECCI\xD3N D | CAMPA\xD1AS PARA EL SITIO WEB (OBJETIVOS 3 Y 4) Y REMARKETING 60 D\xCDAS</span>
              <h2>3. Ventas en el Sitio Web + 4. Registros Web + Carritos Abandonados (60 D\xEDas)</h2>
              <p>Uso de Google Search, Email Marketing, Facebook, Instagram, Display y DSP para lograr el ROAS de 3.4 en web y captar m\xE1s de 850 leads cualificados.</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel">
              <h3>3. Incentivar Ventas en el Sitio Web ($297,500 MXN | 35%)</h3>
              <p><strong>Plataformas:</strong> Google Search Ads, Email Marketing, Facebook y Display.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> Cerrar en <strong>ROAS 3.40 ($1,011,500 MXN / 1,190 pedidos)</strong> con una conversi\xF3n en el sitio del <strong>1.20%</strong>.</li>
                <li><strong>Google Search Ads ($133,875 | ROAS 3.65):</strong> Es el canal m\xE1s fuerte en web porque captura gente buscando "outlet de calzado", "tenis en oferta" o marcas espec\xEDficas. Genera <strong>575 pedidos a $232.83 CPA</strong>.</li>
                <li><strong>Facebook Ads Prospecci\xF3n ($82,625):</strong> Campa\xF1as de cat\xE1logo para llevar tr\xE1fico nuevo al sitio web (195 pedidos).</li>
                <li><strong>Remarketing Carrito 60D en Facebook, Display y Email ($81,000):</strong> Recupera a los usuarios que dejaron carrito sin comprar en los \xFAltimos 60 d\xEDas, aportando <strong>420 pedidos con un CPA promedio de remarketing de $192.86 MXN</strong> ($190.67 en pauta y $198.33 en Email Marketing).</li>
              </ul>
            </div>

            <div class="panel panel-accent">
              <h3>4. Incrementar Registros en el Sitio Web ($68,000 MXN | 8%)</h3>
              <p><strong>Plataformas:</strong> Google Display, Facebook Ads, Instagram Ads y DSP.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> El brief pide 850 leads cualificados. Con $68,000 MXN a un CPL de $55.02 MXN proyectamos <strong>1,236 registros completados</strong> convirtiendo al <strong>5.01%</strong> de los visitantes.</li>
                <li><strong>Gancho de registro:</strong> Ofrecer un 15% de descuento adicional en la primera compra al registrarse en el sitio eligiendo qu\xE9 categor\xEDa compran m\xE1s (Mujer, Hombre o Ni\xF1os).</li>
                <li><strong>Reparto por canal:</strong>
                  <br/>- <strong>Facebook ($27,200) e Instagram ($20,400):</strong> Llevan el 70% del presupuesto del objetivo porque tienen mejor conversi\xF3n a formulario (920 leads entre ambos a $50-$54 CPL).
                  <br/>- <strong>Google Display ($12,240) y DSP ($8,160):</strong> Apoyan con audiencias interesadas en moda y ofertas en M\xE9xico (316 leads).
                </li>
                <li><strong>Paso a venta:</strong> En cuanto dejan su correo, entran a los env\xEDos de Email Marketing del Objetivo 3 para usar su cup\xF3n.</li>
              </ul>
            </div>
          </div>

          <h3 class="sub-heading">Campa\xF1a de Remarketing: Audiencia de Carrito Abandonado (\xDAltimos 60 D\xEDas sin Compra)</h3>
          <p style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;">
            En calzado y ropa mucha gente arma su carrito para ver cu\xE1nto sale con env\xEDo y espera a la quincena para pagar. Usar una ventana de 60 d\xEDas (excluyendo a quienes ya compraron) nos permite cubrir 4 quincenas seguidas en M\xE9xico:
          </p>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Etapa de la Audiencia (60D)</th>
                  <th>Ventana</th>
                  <th>Canales</th>
                  <th>Inversi\xF3n (MXN)</th>
                  <th>Qu\xE9 mostramos en el anuncio</th>
                  <th>Pedidos</th>
                  <th>CPA</th>
                  <th>ROAS</th>
                </tr>
              </thead>
              <tbody>
                ${rmktRows}
                <tr class="row-goal">
                  <td><strong>TOTAL REMARKETING CARRITO 60D</strong></td>
                  <td><strong>1 a 60 D\xEDas (Sin Compra)</strong></td>
                  <td><strong>App (FB/IG/DSP) + Web (FB/Display/Email)</strong></td>
                  <td><strong>$176,625 MXN</strong></td>
                  <td><strong>Audiencia acumulada de 60 d\xEDas excluyendo compradores</strong></td>
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
              <span class="section-tag">SECCI\xD3N E | KPIS SOLICITADOS EN EL EJERCICIO</span>
              <h2>Desglose de KPIs por Objetivo</h2>
              <p>Valor estimado para cada uno de los indicadores que pide el caso pr\xE1ctico y c\xF3mo lo cuidamos en la operaci\xF3n diaria.</p>
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
          <strong>Caso Pr\xE1ctico OutletShop</strong> | Jorge Guti\xE9rrez (<a href="mailto:jorgeegtzhdz@gmail.com">jorgeegtzhdz@gmail.com</a>)
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
        valSplit.textContent = `${inputs.captacionSharePct}% Captaci\xF3n / ${100 - inputs.captacionSharePct}% Ventas`;
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
      "B. Estimaciones ($850k)",
      "C. Estrategia App (Obj. 1 y 2)",
      "D. Estrategia Web & Rmkt 60D",
      "E. KPIs por Objetivo"
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
      "#app-strategy": 2,
      "#web-strategy": 3,
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

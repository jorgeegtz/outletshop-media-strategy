"use strict";
(() => {
  // src/data.ts
  var GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/13xVz5fn7o0RXlFqfymwfAVaJiwahTILCM3aRDT-GaNc/edit";
  var OBJECTIVE_GROUPS = [
    {
      id: "obj1",
      title: "1. Incremento de descargas de app",
      block: "Captacion (20%)",
      platformsText: "Facebook, Instagram, Google Ads, TikTok y DSP",
      sharePct: 12,
      monthlySpendMxn: 102e3,
      briefMetricName: "Costo por instalacion (CPI)",
      briefTargetLabel: "1,300 descargas",
      projectedResultLabel: "2,550 descargas (+ 1,148 registros app)",
      unitCostSummary: "$40.00 MXN CPI | 1.59% CTR | 6.00% CVR Descarga | 45.0% CVR Reg",
      statusBadge: "196% vs Meta (+1,250)",
      lines: [
        {
          id: "1.1",
          objectiveId: "obj1",
          name: "1.1 Google Ads (App Campaigns - Descargas)",
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
          name: "1.2 Facebook & Instagram Ads (App Install)",
          platform: "Facebook + Instagram",
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
          name: "1.3 TikTok Ads (App Install Ofertas Moda)",
          platform: "TikTok",
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
          name: "1.4 DSP Programatico (In-App Reach & Video)",
          platform: "DSP",
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
      briefMetricName: "Tasa de conversion en app",
      briefTargetLabel: "ROAS 6.8",
      projectedResultLabel: "ROAS 6.80x ($2,601,000 MXN / 3,060 pedidos)",
      unitCostSummary: "2.40% CVR App | $125.00 CPA | AOV $850 | 1,285 Recompras",
      statusBadge: "Meta Exacta (ROAS 6.80x)",
      lines: [
        {
          id: "2.1",
          objectiveId: "obj2",
          name: "2.1 Google Ads (App Campaigns for Engagement / Ventas)",
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
          kpiHighlight: "ROAS 6.83x"
        },
        {
          id: "2.2",
          objectiveId: "obj2",
          name: "2.2 Facebook & Instagram Ads (Catalogo In-App)",
          platform: "Facebook + Instagram",
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
          kpiHighlight: "ROAS 6.45x"
        },
        {
          id: "2.3",
          objectiveId: "obj2",
          name: "2.3 Remarketing Carrito 60D In-App (FB/IG + DSP Deep Link)",
          platform: "FB/IG + DSP",
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
          kpiHighlight: "ROAS 7.56x (Rmkt 60D)"
        },
        {
          id: "2.4",
          objectiveId: "obj2",
          name: "2.4 TikTok Ads (In-App Video Shopping & Catalog)",
          platform: "TikTok",
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
          kpiHighlight: "ROAS 6.07x"
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
      briefMetricName: "Tasa de conversion en sitio web",
      briefTargetLabel: "ROAS 3.4",
      projectedResultLabel: "ROAS 3.40x ($1,011,500 MXN / 1,190 pedidos)",
      unitCostSummary: "1.20% CVR Web | ROAS Google: 3.65x | CPA Rmkt 60D: $192.86",
      statusBadge: "Meta Exacta (ROAS 3.40x)",
      lines: [
        {
          id: "3.1",
          objectiveId: "obj3",
          name: "3.1 Google Search Ads (Brand + Generic Ofertas + Shopping)",
          platform: "Google Search Ads",
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
          kpiHighlight: "ROAS 3.65x"
        },
        {
          id: "3.2",
          objectiveId: "obj3",
          name: "3.2 Facebook Ads (Catalogo Ventas Web - Prospeccion)",
          platform: "Facebook",
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
          kpiHighlight: "ROAS 2.01x"
        },
        {
          id: "3.3",
          objectiveId: "obj3",
          name: "3.3 Remarketing Carrito 60D Web (Facebook DPA + Display)",
          platform: "Facebook + Display",
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
          kpiHighlight: "ROAS 4.46x (Rmkt 60D)"
        },
        {
          id: "3.4",
          objectiveId: "obj3",
          name: "3.4 Email Marketing (Carrito Abandonado 60D & Leads)",
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
          kpiHighlight: "ROAS 4.29x (Rmkt Email)"
        }
      ]
    },
    {
      id: "obj4",
      title: "4. Incremento de registros en sitio",
      block: "Captacion (20%)",
      platformsText: "Google Display, Facebook Ads, Instagram Ads, DSP",
      sharePct: 8,
      monthlySpendMxn: 68e3,
      briefMetricName: "Costo por registro (CPL)",
      briefTargetLabel: "850 leads cualificados",
      projectedResultLabel: "1,236 leads cualificados (24,738 visitas)",
      unitCostSummary: "$55.02 MXN CPL | 5.00% CVR Visitantes a Registro",
      statusBadge: "145% vs Meta (+386)",
      lines: [
        {
          id: "4.1",
          objectiveId: "obj4",
          name: "4.1 Facebook Ads (Lead Generation & Club Outlet 15% OFF)",
          platform: "Facebook Ads",
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
          kpiHighlight: "540 Leads ($50.37 CPL)"
        },
        {
          id: "4.2",
          objectiveId: "obj4",
          name: "4.2 Instagram Ads (Stories/Reels Registro Moda Familiar)",
          platform: "Instagram Ads",
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
          kpiHighlight: "380 Leads ($53.68 CPL)"
        },
        {
          id: "4.3",
          objectiveId: "obj4",
          name: "4.3 Google Display (Audiencias In-Market Calzado y Ofertas)",
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
          name: "4.4 DSP Programatico (Segmentacion Contextual Moda/Retail)",
          platform: "DSP",
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
          kpiHighlight: "116 Leads ($70.34 CPL)"
        }
      ]
    }
  ];
  var REMARKETING_60D_SEGMENTS = [
    {
      segmentName: "1. Carrito Abandonado Reciente (Alta Urgencia)",
      windowLabel: "Dias 1 a 7 sin compra",
      channels: "Facebook/IG DPA + Google Display + Email (1h, 24h, 48h)",
      budgetMxn: 79481,
      tactic: 'Recordatorio dinamico con la prenda/calzado exacto y aviso de "Ultimos pares en tu talla".',
      orders: 635,
      cpaMxn: 125.17,
      roas: 6.79
    },
    {
      segmentName: "2. Carrito en Quincena (Desbloqueo por Nomina)",
      windowLabel: "Dias 8 a 30 sin compra",
      channels: "Facebook/IG + Display + DSP + Email Quincena",
      budgetMxn: 61819,
      tactic: 'Activacion en dias 15 y 30 del mes con "Envio Gratis hoy o 10% OFF extra para cerrar tu carrito".',
      orders: 425,
      cpaMxn: 145.46,
      roas: 5.84
    },
    {
      segmentName: "3. Reactivacion de Carrito Historico",
      windowLabel: "Dias 31 a 60 sin compra",
      channels: "Facebook/IG Catalog + DSP + Email Reactivacion",
      budgetMxn: 35325,
      tactic: "Muestra productos sustitutos de la misma talla/categoria con descuento final Outlet antes de salir de la ventana de 60 dias.",
      orders: 210,
      cpaMxn: 168.21,
      roas: 5.05
    }
  ];
  var KPI_GROUP_CARDS = [
    {
      objectiveTitle: "1. Campanas de Descargas y Engagement App",
      platforms: "Facebook, Instagram, Google Ads, TikTok y DSP",
      targetMeta: "Meta: 1,300 descargas -> Logrado: 2,550 descargas ($102,000 MXN)",
      kpis: [
        {
          name: "Tasa de clics en anuncios de descarga (CTR)",
          estimate: "1.59% promedio (42,492 clics)",
          howWeAchieveIt: "Videos cortos en TikTok/Reels y Google UAC mostrando descuentos reales por categoria familiar."
        },
        {
          name: "Tasa de conversion de descargas (Click-to-Install)",
          estimate: "6.00% (2,550 descargas)",
          howWeAchieveIt: "Fichas de App Store y Google Play optimizadas con capturas de ofertas y calificaciones."
        },
        {
          name: "Tasa de conversion en registros de la app",
          estimate: "45.0% (1,148 registros in-app)",
          howWeAchieveIt: "Login social en 1 clic e incentivo de $150 MXN en primera compra al registrarse en la app."
        },
        {
          name: "Costo por instalacion (CPI)",
          estimate: "$40.00 MXN promedio",
          howWeAchieveIt: "Concentrar 75% del presupuesto del objetivo en Google UAC ($37.09 CPI) y Meta ($40.57 CPI)."
        }
      ]
    },
    {
      objectiveTitle: "2. Promocion de Ventas dentro de la App",
      platforms: "Google Ads, Facebook, Instagram, TikTok y DSP",
      targetMeta: "Meta: ROAS 6.8 -> Logrado: ROAS 6.80x ($2,601,000 MXN con $382,500 MXN)",
      kpis: [
        {
          name: "Valor promedio de pedido (AOV) en la app",
          estimate: "$850 MXN base (meta operativa $950 MXN)",
          howWeAchieveIt: 'Packs familiares y barra de "Envio Gratis en compras mayores a $899 MXN" en el carrito.'
        },
        {
          name: "Tasa de conversion de usuarios activos en la app",
          estimate: "2.40% global (3.85% en Remarketing 60D)",
          howWeAchieveIt: "Deep linking directo al producto o carrito abandonado (nunca al home generico)."
        },
        {
          name: "Numero de compras recurrentes",
          estimate: "1,285 pedidos recurrentes (42% del total app)",
          howWeAchieveIt: "Audiencias de compradores previos y carritos abandonados (1-60 dias) impactados en quincena."
        }
      ]
    },
    {
      objectiveTitle: "3. Incentivar Ventas en el Sitio Web",
      platforms: "Google Search Ads, Email Marketing, Facebook y Display",
      targetMeta: "Meta: ROAS 3.4 -> Logrado: ROAS 3.40x ($1,011,500 MXN con $297,500 MXN)",
      kpis: [
        {
          name: "Tasa de conversion en el sitio web (CVR Web)",
          estimate: "1.20% global (2.65% en Remarketing 60D)",
          howWeAchieveIt: "Trafico de alta intencion en Search y checkout agil con metodos de pago locales."
        },
        {
          name: "Retorno sobre inversion publicitaria (ROAS) en Google Ads",
          estimate: "3.65x en Google Search Ads",
          howWeAchieveIt: 'Separacion de campanas Brand, Generic de ofertas ("outlet calzado") y Shopping con filtro de stock.'
        },
        {
          name: "Costo por adquisicion (CPA) en campanas de remarketing",
          estimate: "$192.86 MXN CPA ($190.67 Ads | $198.33 Email)",
          howWeAchieveIt: "Campana dedicada a usuarios que abandonaron el carrito sin comprar en los ultimos 60 dias."
        }
      ]
    },
    {
      objectiveTitle: "4. Incrementar Registros en el Sitio Web",
      platforms: "Google Display, Facebook Ads, Instagram Ads, DSP",
      targetMeta: "Meta: 850 leads cualificados -> Logrado: 1,236 leads ($68,000 MXN)",
      kpis: [
        {
          name: "Tasa de conversion de visitantes en registros",
          estimate: "5.00% (1,236 registros de 24,738 visitas)",
          howWeAchieveIt: 'Landing dedicada "Club OutletShop" con 15% OFF adicional en la primera compra.'
        },
        {
          name: "Numero de registros completados",
          estimate: "1,236 leads cualificados (+45% vs meta)",
          howWeAchieveIt: "Formulario corto (correo, WhatsApp y categoria de interes: Mujer, Hombre, Ninos)."
        },
        {
          name: "Costo por lead (CPL)",
          estimate: "$55.02 MXN promedio",
          howWeAchieveIt: "70% del presupuesto en Facebook e Instagram Lead/Conversion Ads ($50-$53 CPL) + 30% en Display/DSP."
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
      const rmktBadge = line.isRemarketing60d ? ` <span class="tag tag-purple">RMKT CARRITO 60D</span>` : "";
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
    const roasOrNote = totalRev > 0 ? `<span class="status-ok">ROAS ${(totalRev / group.monthlySpendMxn).toFixed(2)}x</span>` : group.id === "obj1" ? "1,148 Reg App (45%)" : "+45% vs Meta (850)";
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
  function renderSimulatorHero(out) {
    const badgeHtml = out.allGoalsMet ? `<span class="status-ok">4 / 4 METAS CUMPLIDAS</span>` : `<span class="status-warn">AJUSTAR PARAMETROS</span>`;
    const meterPct = Math.min(100, Math.max(10, out.roasBlended / 6 * 100));
    const meterColor = out.allGoalsMet ? "#047857" : "#b45309";
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
        <span>Obj 1: <strong>${formatInt(out.installs)} descargas</strong> (Meta: 1,300)</span>
        <span>Obj 4: <strong>${formatInt(out.leads)} leads</strong> (Meta: 850)</span>
      </div>
    </div>
    <div class="forecast-sub-row">
      <span>Obj 2 App: <strong>ROAS ${out.roasApp.toFixed(2)}x</strong> (${formatInt(out.ordersApp)} ped.)</span>
      <span>Obj 3 Web: <strong>ROAS ${out.roasWeb.toFixed(2)}x</strong> (${formatInt(out.ordersWeb)} ped.)</span>
    </div>
    <div class="forecast-sub-row" style="margin-top:6px;">
      <span>Remarketing Carrito 60D: <strong>${formatInt(out.rmkt60dOrders)} pedidos</strong></span>
      <span>CPA Rmkt 60D: <strong>${formatMoney(out.cpaRmkt60dMxn, 0)} MXN</strong> (ROAS ${out.roasRmkt60d.toFixed(2)}x)</span>
    </div>
    <div style="font-size:12.5px;color:var(--text-secondary);margin-top:8px;">
      <strong>Inversion por Objetivo:</strong> Obj 1: ${formatMoney(out.budgetObj1)} | Obj 2: ${formatMoney(out.budgetObj2)} | Obj 3: ${formatMoney(out.budgetObj3)} | Obj 4: ${formatMoney(out.budgetObj4)}.
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
        <td><strong>${g.projectedResultLabel}</strong></td>
        <td>${g.unitCostSummary}</td>
        <td><span class="status-ok">${g.statusBadge}</span></td>
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
        <td><span class="status-ok">${s.roas.toFixed(2)}x ROAS</span></td>
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
            <div class="brand-title">Caso Practico: OutletShop</div>
            <div class="brand-sub">Propuesta de Medios Online | Jorge Gutierrez</div>
          </div>
        </div>
        <nav class="nav-links" aria-label="Deck Sections">
          <a href="#executive-summary" data-slide="0" class="active">A. Resumen Ejecutivo</a>
          <a href="#media-plan" data-slide="1">B. Estimaciones ($850k)</a>
          <a href="#app-strategy" data-slide="2">C. Estrategia App (Obj 1 y 2)</a>
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
            <div class="eyebrow">CASO PRACTICO ELOGIA | ESTRATEGIA DE MEDIOS ONLINE PARA OUTLETSHOP</div>
            <h1>Estrategia <span class="gradient-text">20% Captacion / 80% Ventas</span> para Generar $3.61M MXN (ROAS 6.8 App | ROAS 3.4 Web)</h1>
            <p class="hero-lead">
              Propuesta para distribuir los <strong>$850,000 MXN mensuales</strong> (con AOV actual de <strong>$850 MXN</strong> en App y Sitio Web) enfocada en hombres y mujeres de 18 a 50 anos en Mexico interesados en moda, calzado, accesorios, ofertas y compras online.
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
              <h3>1. Captacion de Usuarios: 20% ($170,000 MXN)</h3>
              <ul class="styled-list">
                <li><strong>Obj. 1 - Descargas y Engagement App (12% | $102,000 MXN):</strong> En Facebook, Instagram, Google Ads, TikTok y DSP. Genera <strong>2,550 descargas a $40.00 MXN CPI</strong> (superando en +96% la meta de 1,300 descargas) y <strong>1,148 registros en la app</strong> (45% CVR).</li>
                <li><strong>Obj. 4 - Registros en el Sitio Web (8% | $68,000 MXN):</strong> En Google Display, Facebook Ads, Instagram Ads y DSP. Genera <strong>1,236 leads cualificados a $55.02 MXN CPL</strong> (superando en +45% la meta de 850 leads) con 5.00% de conversion de visita a registro.</li>
                <li><strong>Por que 20% en Captacion:</strong> Con $170,000 MXN cubrimos y superamos ampliamente las metas de volumen de descargas y leads, liberando el 80% del presupuesto para maximizar ingresos donde el brief exige ROAS altos.</li>
              </ul>
            </div>
            <div class="panel">
              <h3>2. Generacion de Ventas y Remarketing 60D: 80% ($680,000 MXN)</h3>
              <ul class="styled-list">
                <li><strong>Obj. 2 - Promocion de Ventas en App (45% | $382,500 MXN):</strong> En Google Ads, Facebook, Instagram, TikTok y DSP. Cumple el <strong>ROAS 6.80x</strong> generando <strong>$2,601,000 MXN (3,060 pedidos a $125.00 MXN CPA y 2.40% CVR en app)</strong>.</li>
                <li><strong>Obj. 3 - Incentivar Ventas en Sitio Web (35% | $297,500 MXN):</strong> En Google Search Ads, Email Marketing, Facebook y Display. Cumple el <strong>ROAS 3.40x</strong> generando <strong>$1,011,500 MXN (1,190 pedidos a $250.00 MXN CPA global y 1.20% CVR web)</strong>.</li>
                <li><strong>Campana de Remarketing Carrito Abandonado (Ultimos 60 Dias):</strong> Integra audiencias que abandonaron el carrito y no compraron en los ultimos 60 dias (App + Web + Email), recuperando <strong>1,270 pedidos a un CPA de $139.07 MXN (ROAS 6.11x)</strong>.</li>
              </ul>
            </div>
          </div>

          <h3 class="sub-heading" style="margin-top: 24px;">Resultados Esperados (Tabla del Caso Practico vs. Estimacion Propuesta)</h3>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Objetivo y Plataformas</th>
                  <th>Metrica (Brief)</th>
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
                  <td>ROAS Global: <strong>4.25x</strong> | ROAS Ventas: <strong>5.31x</strong><br/>18.71M Impresiones | 284.8k Clics</td>
                  <td><span class="status-ok">4 / 4 Metas Cumplidas</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="assumptions-banner">
            <div class="assumptions-title">Datos Base del Caso Practico:</div>
            <div class="assumptions-pills">
              <span><strong>Presupuesto Mensual:</strong> $850,000 MXN</span>
              <span><strong>AOV Actual (Web y App):</strong> $850 MXN</span>
              <span><strong>Publico Objetivo:</strong> Hombres y Mujeres 18-50 anos en Mexico (Moda, Ofertas y Compras Online)</span>
              <span><strong>Relacion ROAS / CPA (con AOV $850):</strong> ROAS 6.8 App = $125 CPA | ROAS 3.4 Web = $250 CPA</span>
            </div>
          </div>
        </section>
      </div>

      <!-- SLIDE 2: B. ESTIMACIONES Y PLAN DE MEDIOS -->
      <div class="deck-slide" data-slide="1">
        <section id="media-plan" class="section-card">
          <div class="section-header">
            <div>
              <span class="section-tag">SECCION B | ESTIMACIONES NUMERICAS Y PLAN DE MEDIOS ($850,000 MXN)</span>
              <h2>Desglose de Estimaciones por Objetivo y Plataforma</h2>
              <p>Calculo detallado de inversion, CPM, impresiones, CTR, clics, CPC, tasa de conversion (CVR), volumen de resultados, CPI/CPL/CPA, ingresos (con AOV de $850 MXN) y ROAS.</p>
            </div>
          </div>

          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Objetivo / Plataforma / Campana</th>
                  <th>Inversion (MXN)</th>
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
                  <td><strong>$45.44</strong></td>
                  <td><strong>18,708,856</strong></td>
                  <td><strong>1.52%</strong></td>
                  <td><strong>284,791</strong></td>
                  <td><strong>$2.98</strong></td>
                  <td><strong>-</strong></td>
                  <td><strong>4,250 Pedidos</strong></td>
                  <td><strong>$160 CPA Ventas</strong></td>
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
                <li><strong>Matematica exacta del ROAS con AOV de $850 MXN:</strong>
                  <br/>- En <strong>App (ROAS 6.8)</strong>: <code>$850 AOV / 6.8 = $125.00 MXN CPA maximo</code>. Con $382,500 MXN generamos <strong>3,060 pedidos ($2,601,000 MXN)</strong>.
                  <br/>- En <strong>Sitio Web (ROAS 3.4)</strong>: <code>$850 AOV / 3.4 = $250.00 MXN CPA maximo</code>. Con $297,500 MXN generamos <strong>1,190 pedidos ($1,011,500 MXN)</strong>.
                </li>
                <li><strong>Benchmarks de Mexico (Retail / Moda):</strong> CPMs entre $32 y $65 MXN, CTRs de 0.71% a 2.30%, CPI en App de $40.00 MXN y CPL en Sitio Web de $55.02 MXN.</li>
                <li><strong>Eficiencia por Remarketing 60D:</strong> Las campanas de Carrito Abandonado (60 dias sin compra) operan con CVR superior (3.85% en App y 2.65% en Web), reduciendo el CPA promedio y asegurando las metas de ROAS.</li>
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
              <span class="section-tag">SECCION C | ESTRATEGIA PARA LA APLICACION MOVIL (OBJETIVOS 1 Y 2)</span>
              <h2>1. Descargas y Engagement App + 2. Promocion de Ventas dentro de la App</h2>
              <p>Estrategia en Facebook, Instagram, Google Ads, TikTok y DSP para lograr 2,550 descargas ($40 CPI) y ROAS 6.8x en ventas dentro de la aplicacion.</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel panel-accent">
              <h3>1. Campanas de Descargas y Engagement App ($102,000 MXN | 12%)</h3>
              <p><strong>Plataformas:</strong> Facebook, Instagram, Google Ads, TikTok y DSP.</p>
              <ul class="styled-list">
                <li><strong>Objetivo y Meta:</strong> Superar las 1,300 descargas llegando a <strong>2,550 descargas a $40.00 MXN CPI</strong>, asegurando ademas que el <strong>45% se registre en la app (1,148 registros)</strong>.</li>
                <li><strong>Configuracion por Canal:</strong>
                  <br/>- <strong>Google Ads ($40,800):</strong> App Campaigns (UAC) optimizadas a instalacion y primer registro en Android e iOS (1,100 descargas a $37.09 CPI).
                  <br/>- <strong>Facebook e Instagram ($35,700):</strong> Campanas de App Promotion segmentadas a Hombres y Mujeres 18-50 en Mexico interesados en calzado, ropa familiar y ofertas (880 descargas a $40.57 CPI).
                  <br/>- <strong>TikTok ($15,300) y DSP ($10,200):</strong> Videos cortos de "Unboxing familiar Outlet" y banners en apps de estilo de vida (570 descargas conjuntas).
                </li>
                <li><strong>Palanca de Engagement (Registro):</strong> Beneficio exclusivo de <em>"$150 MXN de descuento en tu primera compra en la App"</em> que se desbloquea al completar el registro en 1 clic.</li>
              </ul>
            </div>

            <div class="panel">
              <h3>2. Promocion de Ventas dentro de la App ($382,500 MXN | 45%)</h3>
              <p><strong>Plataformas:</strong> Google Ads, Facebook, Instagram, TikTok y DSP.</p>
              <ul class="styled-list">
                <li><strong>Objetivo y Meta:</strong> Alcanzar un <strong>ROAS de 6.80x ($2,601,000 MXN en ventas / 3,060 pedidos)</strong> manteniendo una <strong>CVR en app del 2.40%</strong> y un <strong>CPA de $125.00 MXN</strong>.</li>
                <li><strong>Configuracion por Canal:</strong>
                  <br/>- <strong>Google Ads ($130,050):</strong> App Campaigns for Engagement/Action enfocadas en compra in-app con feed de productos (1,045 pedidos, ROAS 6.83x).
                  <br/>- <strong>Facebook e Instagram ($99,450):</strong> Anuncios de catalogo dinamico con Deep Link directo a la prenda o calzado en la app (755 pedidos, ROAS 6.45x).
                  <br/>- <strong>Remarketing Carrito 60D en App ($95,625 en FB/IG + DSP):</strong> Impacta usuarios que agregaron al carrito en la app pero no compraron en los ultimos 60 dias (850 pedidos a $112.50 CPA, ROAS 7.56x).
                  <br/>- <strong>TikTok ($57,375):</strong> Video Shopping Ads conectados al catalogo in-app (410 pedidos, ROAS 6.07x).
                </li>
                <li><strong>Defensa de AOV ($850 MXN) y Compras Recurrentes (1,285 pedidos):</strong> Barra de envio gratis a partir de $899 MXN para impulsar el ticket promedio, y notificaciones push + remarketing en quincena para generar 42% de recompra.</li>
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
              <span class="section-tag">SECCION D | ESTRATEGIA SITIO WEB (OBJETIVOS 3 Y 4) + REMARKETING CARRITO 60 DIAS</span>
              <h2>3. Incentivar Ventas en Sitio Web + 4. Incrementar Registros Web</h2>
              <p>Combinacion de captura de demanda en Google Search, Email Marketing, Facebook, Instagram, Display y DSP junto con la campana de Remarketing de Carritos Abandonados (60 dias).</p>
            </div>
          </div>

          <div class="grid-2">
            <div class="panel">
              <h3>3. Incentivar Ventas en el Sitio Web ($297,500 MXN | 35%)</h3>
              <p><strong>Plataformas:</strong> Google Search Ads, Email Marketing, Facebook y Display.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> Lograr <strong>ROAS 3.40x ($1,011,500 MXN / 1,190 pedidos)</strong> con una <strong>tasa de conversion web del 1.20%</strong>.</li>
                <li><strong>Google Search Ads ($133,875 | ROAS 3.65x):</strong> Campanas de busqueda por marca, categorias de alta intencion ("outlet calzado mexico", "tenis en oferta", "ropa para ninos") y Shopping, generando <strong>575 pedidos a $232.83 CPA</strong>.</li>
                <li><strong>Facebook Ads Prospeccion ($82,625):</strong> Campanas de catalogo para atraer nuevos compradores al sitio web (195 pedidos).</li>
                <li><strong>Remarketing Carrito 60D en Facebook, Display y Email ($81,000):</strong> Recupera <strong>420 pedidos a un CPA promedio de remarketing de $192.86 MXN</strong> ($190.67 en Ads y $198.33 en Email Marketing con ROAS de 4.46x y 4.29x).</li>
              </ul>
            </div>

            <div class="panel panel-accent">
              <h3>4. Incrementar Registros en el Sitio Web ($68,000 MXN | 8%)</h3>
              <p><strong>Plataformas:</strong> Google Display, Facebook Ads, Instagram Ads y DSP.</p>
              <ul class="styled-list">
                <li><strong>Meta:</strong> Superar los 850 leads llegando a <strong>1,236 leads cualificados a un CPL de $55.02 MXN</strong> y una <strong>CVR de visitante a registro del 5.00%</strong>.</li>
                <li><strong>Propuesta de Valor (Lead Magnet):</strong> Registro al <em>"Club OutletShop"</em> ofreciendo un cupon de 15% de descuento adicional en la primera compra y acceso anticipado a ofertas familiares.</li>
                <li><strong>Distribucion por Canal:</strong>
                  <br/>- <strong>Facebook Ads ($27,200) e Instagram Ads ($20,400):</strong> Anuncios orientados a conversion en landing de registro (920 leads a $50.37-$53.68 CPL).
                  <br/>- <strong>Google Display ($12,240) y DSP ($8,160):</strong> Segmentacion por intencion de compra en moda y ofertas online en Mexico (316 leads).
                </li>
                <li><strong>Conexion con Ventas Web:</strong> Todo usuario registrado recibe en automatico la secuencia de bienvenida por Email Marketing (Obj. 3) para convertirlo en comprador.</li>
              </ul>
            </div>
          </div>

          <h3 class="sub-heading">Detalle de la Campana de Remarketing: Carritos Abandonados (Ultimos 60 Dias sin Compra)</h3>
          <p style="font-size:14px;color:var(--text-secondary);margin-bottom:12px;">
            Audiencia compuesta por usuarios en App y Web que agregaron productos al carrito en los ultimos 60 dias pero no finalizaron la compra (excluyendo compradores de los ultimos 60 dias). Cubre 4 quincenas completas en Mexico:
          </p>
          <div class="table-wrap">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Segmento de Carrito Abandonado</th>
                  <th>Ventana de Tiempo</th>
                  <th>Canales Activos</th>
                  <th>Inversion (MXN)</th>
                  <th>Mensaje y Tactica Comercial</th>
                  <th>Pedidos</th>
                  <th>CPA Logrado</th>
                  <th>ROAS</th>
                </tr>
              </thead>
              <tbody>
                ${rmktRows}
                <tr class="row-goal">
                  <td><strong>TOTAL REMARKETING CARRITO 60D</strong></td>
                  <td><strong>1 a 60 Dias (Sin Compra)</strong></td>
                  <td><strong>App (FB/IG/DSP) + Web (FB/Display/Email)</strong></td>
                  <td><strong>$176,625 MXN</strong></td>
                  <td><strong>Recuperacion omnicanal en 4 quincenas</strong></td>
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
              <span class="section-tag">SECCION E | KPIS DEL CASO PRACTICO Y PLAN DE CONTROL</span>
              <h2>Cumplimiento de los KPIs Solicitados por Objetivo</h2>
              <p>Resumen de cada KPI requerido en el brief de OutletShop, su estimacion en nuestro plan y la tactica puntual para alcanzarlo.</p>
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
          <strong>Caso Practico OutletShop (Elogia)</strong> | por Jorge Gutierrez (<a href="mailto:jorgeegtzhdz@gmail.com">jorgeegtzhdz@gmail.com</a>)
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
      "B. Estimaciones ($850k)",
      "C. Estrategia App (Obj 1 y 2)",
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

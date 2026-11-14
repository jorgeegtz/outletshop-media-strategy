import { SimulatorInputs, SimulatorOutputs } from './types';

export function calculateMediaSimulation(inputs: SimulatorInputs): SimulatorOutputs {
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

  // Split inside Captacion (default 20%): 60% App Installs (12% of total), 40% Web Leads (8% of total)
  const budgetObj1 = totalBudgetMxn * captShare * 0.6;
  const budgetObj4 = totalBudgetMxn * captShare * 0.4;

  // Split inside Ventas (default 80%): 56.25% App Sales (45% of total), 43.75% Web Sales (35% of total)
  const totalSalesBudget = totalBudgetMxn * salesShare;
  const budgetObj2 = totalSalesBudget * 0.5625;
  const budgetObj3 = totalSalesBudget * 0.4375;

  // Remarketing 60D Cart Abandoners efficiency impact:
  // Baseline rmkt60dShareOfSalesPct is 26% ($176,625 / $680,000 = 25.97%).
  // Increasing 60D Remarketing share improves blended CPA up to saturation point (40%).
  const rmktDelta = (rmkt60dShareOfSalesPct - 26) / 100;
  const efficiencyFactor = 1 - rmktDelta * 0.18;

  const effectiveCpaApp = Math.max(90, cpaAppMxn * efficiencyFactor);
  const effectiveCpaWeb = effectiveCpaApp * 2.0;
  const cplMxn = Math.round(cpiMxn * 1.3755 * 100) / 100;

  const installs = budgetObj1 / cpiMxn;
  const inAppRegistrations = installs * 0.45;
  const leads = budgetObj4 / cplMxn;

  const ordersApp = budgetObj2 / effectiveCpaApp;
  const ordersWeb = budgetObj3 / effectiveCpaWeb;
  const totalOrders = ordersApp + ordersWeb;

  // 60-Day Abandoned Cart Remarketing subset
  const rmkt60dBudgetMxn = totalSalesBudget * (rmkt60dShareOfSalesPct / 100);
  const cpaRmkt60dMxn = effectiveCpaApp * 1.1126; // $139.07 MXN at baseline $125 CPA App
  const rmkt60dOrders = rmkt60dBudgetMxn / cpaRmkt60dMxn;
  const rmkt60dRevenue = rmkt60dOrders * aovMxn;
  const roasRmkt60d = rmkt60dBudgetMxn > 0 ? rmkt60dRevenue / rmkt60dBudgetMxn : 0;

  const revenueApp = ordersApp * aovMxn;
  const revenueWeb = ordersWeb * aovMxn;
  const totalRevenue = revenueApp + revenueWeb;

  const roasApp = budgetObj2 > 0 ? revenueApp / budgetObj2 : 0;
  const roasWeb = budgetObj3 > 0 ? revenueWeb / budgetObj3 : 0;
  const roasBlended = totalBudgetMxn > 0 ? totalRevenue / totalBudgetMxn : 0;

  const allGoalsMet =
    Math.round(installs) >= 1300 &&
    Math.round(leads) >= 850 &&
    Number(roasApp.toFixed(2)) >= 6.8 &&
    Number(roasWeb.toFixed(2)) >= 3.4;

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

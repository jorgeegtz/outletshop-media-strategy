export type ObjectiveId = 'obj1' | 'obj2' | 'obj3' | 'obj4';

export type CostMetricType = 'CPI' | 'CPA' | 'CPL';

export interface MediaChannelLine {
  id: string;
  objectiveId: ObjectiveId;
  name: string;
  platform: 'Google Ads' | 'Meta Ads' | 'TikTok Ads' | 'Programmatic DSP' | 'Email Marketing';
  isRemarketing60d: boolean;
  monthlySpendMxn: number;
  sharePct: number;
  cpmMxn: number;
  impressions: number;
  ctrPct: number;
  clicks: number;
  cpcMxn: number;
  cvrPct: number;
  conversions: number;
  conversionUnit: 'installs' | 'pedidos' | 'leads';
  costPerResultMxn: number;
  costMetricType: CostMetricType;
  revenueMxn: number;
  roas: number | null;
  secondaryKpiNote: string;
}

export interface ObjectiveGroup {
  id: ObjectiveId;
  title: string;
  block: 'Captacion (20%)' | 'Ventas (80%)';
  sharePct: number;
  monthlySpendMxn: number;
  briefMetricName: string;
  briefTargetLabel: string;
  projectedResultLabel: string;
  unitCostSummary: string;
  statusBadge: string;
  ssotSource: string;
  lines: MediaChannelLine[];
}

export interface Remarketing60dTier {
  windowLabel: string;
  quincenaContext: string;
  budgetShareOfRmktPct: number;
  monthlySpendMxn: number;
  inclusionRule: string;
  exclusionRule: string;
  channels: string;
  creativeMessage: string;
  cvrPct: number;
  recoveredOrders: number;
  cpaMxn: number;
  revenueMxn: number;
  roas: number;
}

export interface KpiRow {
  objectiveLabel: string;
  kpiList: string[];
  modelProjections: string[];
  ssotSource: string;
  optimizationRules: string[];
}

export interface WeeklyCadenceStep {
  weekTitle: string;
  summary: string;
}

export interface SimulatorInputs {
  totalBudgetMxn: number;
  captacionSharePct: number;
  aovMxn: number;
  cpiMxn: number;
  cpaAppMxn: number;
  rmkt60dShareOfSalesPct: number;
}

export interface SimulatorOutputs {
  budgetObj1: number;
  budgetObj2: number;
  budgetObj3: number;
  budgetObj4: number;
  rmkt60dBudgetMxn: number;
  installs: number;
  inAppRegistrations: number;
  leads: number;
  ordersApp: number;
  ordersWeb: number;
  rmkt60dOrders: number;
  totalOrders: number;
  revenueApp: number;
  revenueWeb: number;
  rmkt60dRevenue: number;
  totalRevenue: number;
  roasApp: number;
  roasWeb: number;
  roasRmkt60d: number;
  roasBlended: number;
  cplMxn: number;
  cpaWebMxn: number;
  cpaRmkt60dMxn: number;
  allGoalsMet: boolean;
}

export type PresetKey = 'baseline' | 'aov_boost' | 'rmkt_aggressive';

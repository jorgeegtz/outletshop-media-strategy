export type ObjectiveId = 'obj1' | 'obj2' | 'obj3' | 'obj4';

export type CostMetricType = 'CPI' | 'CPA' | 'CPL';

export interface MediaChannelLine {
  id: string;
  objectiveId: ObjectiveId;
  name: string;
  platform: string;
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
  conversionUnit: 'descargas' | 'pedidos' | 'leads';
  costPerResultMxn: number;
  costMetricType: CostMetricType;
  revenueMxn: number;
  roas: number | null;
  kpiHighlight: string;
}

export interface ObjectiveGroup {
  id: ObjectiveId;
  title: string;
  block: 'Captacion (20%)' | 'Ventas (80%)';
  platformsText: string;
  sharePct: number;
  monthlySpendMxn: number;
  briefMetricName: string;
  briefTargetLabel: string;
  projectedResultLabel: string;
  unitCostSummary: string;
  statusBadge: string;
  lines: MediaChannelLine[];
}

export interface Remarketing60dSegment {
  segmentName: string;
  windowLabel: string;
  channels: string;
  budgetMxn: number;
  tactic: string;
  orders: number;
  cpaMxn: number;
  roas: number;
}

export interface KpiGroupCard {
  objectiveTitle: string;
  platforms: string;
  targetMeta: string;
  kpis: {
    name: string;
    estimate: string;
    howWeAchieveIt: string;
  }[];
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

export type PresetKey = 'baseline' | 'aov_boost' | 'rmkt_focus';

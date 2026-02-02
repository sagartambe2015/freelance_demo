import type { KPI } from '../types';

export const shipperKPIs: KPI[] = [
  { id: 'kpi-1', label: 'Active Loads', value: 3, change: 2, changeType: 'increase' },
  { id: 'kpi-2', label: 'Pending Quotes', value: 1, change: 0, changeType: 'neutral' },
  { id: 'kpi-3', label: 'Delivered (MTD)', value: 12, change: 15, changeType: 'increase', unit: '%' },
  { id: 'kpi-4', label: 'Avg. Transit Time', value: '2.3', unit: 'days', change: -5, changeType: 'decrease' },
];

export const carrierKPIs: KPI[] = [
  { id: 'kpi-1', label: 'Available Loads', value: 2 },
  { id: 'kpi-2', label: 'Active Hauls', value: 1 },
  { id: 'kpi-3', label: 'Completed (MTD)', value: 8, change: 10, changeType: 'increase', unit: '%' },
  { id: 'kpi-4', label: 'Revenue (MTD)', value: '$45,200', change: 8, changeType: 'increase', unit: '%' },
];

export const driverKPIs: KPI[] = [
  { id: 'kpi-1', label: 'Assigned Trips', value: 2 },
  { id: 'kpi-2', label: 'In Progress', value: 1 },
  { id: 'kpi-3', label: 'Completed (MTD)', value: 6 },
  { id: 'kpi-4', label: 'Miles (MTD)', value: '2,450', unit: 'mi' },
];

export const adminKPIs: KPI[] = [
  { id: 'kpi-1', label: 'Total Loads', value: 5 },
  { id: 'kpi-2', label: 'Active Carriers', value: 1 },
  { id: 'kpi-3', label: 'Active Drivers', value: 1 },
  { id: 'kpi-4', label: 'Pending Quotes', value: 2 },
  { id: 'kpi-5', label: 'In Transit', value: 1 },
  { id: 'kpi-6', label: 'Delivered (MTD)', value: 12 },
  { id: 'kpi-7', label: 'Revenue (MTD)', value: '$98,500', change: 12, changeType: 'increase', unit: '%' },
  { id: 'kpi-8', label: 'On-Time Rate', value: '94%', change: 2, changeType: 'increase', unit: 'pts' },
];

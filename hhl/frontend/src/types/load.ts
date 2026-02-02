export type LoadStatus =
  | 'pending'
  | 'quoted'
  | 'booked'
  | 'dispatched'
  | 'in_transit'
  | 'delivered'
  | 'completed'
  | 'cancelled';

export interface Location {
  city: string;
  state: string;
  address?: string;
  lat?: number;
  lng?: number;
}

export interface LoadDimensions {
  length: number;
  width: number;
  height: number;
  weight: number;
  unit: 'ft' | 'm';
  weightUnit: 'lbs' | 'kg';
}

export interface Milestone {
  id: string;
  name: string;
  status: 'pending' | 'completed' | 'skipped';
  timestamp?: string;
  notes?: string;
}

export interface Load {
  id: string;
  referenceNumber: string;
  status: LoadStatus;
  origin: Location;
  destination: Location;
  pickupDate: string;
  deliveryDate?: string;
  dimensions: LoadDimensions;
  commodity: string;
  specialRequirements?: string[];
  shipperId: string;
  shipperName: string;
  carrierId?: string;
  carrierName?: string;
  driverId?: string;
  driverName?: string;
  escortRequired: boolean;
  permitRequired: boolean;
  quotedPrice?: number;
  milestones: Milestone[];
  createdAt: string;
  updatedAt: string;
}

export interface KPI {
  id: string;
  label: string;
  value: number | string;
  change?: number;
  changeType?: 'increase' | 'decrease' | 'neutral';
  unit?: string;
}

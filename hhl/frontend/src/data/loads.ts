import type { Load } from '../types';

export const mockLoads: Load[] = [
  {
    id: 'load-001',
    referenceNumber: 'HHL-2024-001',
    status: 'in_transit',
    origin: { city: 'Houston', state: 'TX', address: '1234 Industrial Blvd' },
    destination: { city: 'Dallas', state: 'TX', address: '5678 Commerce St' },
    pickupDate: '2024-01-15',
    deliveryDate: '2024-01-17',
    dimensions: {
      length: 85,
      width: 12,
      height: 14,
      weight: 120000,
      unit: 'ft',
      weightUnit: 'lbs',
    },
    commodity: 'Steel Beam',
    specialRequirements: ['Pilot Car Required', 'Night Travel Only'],
    shipperId: 'shipper-1',
    shipperName: 'Texas Steel Co.',
    carrierId: 'carrier-1',
    carrierName: 'Heavy Haul Pros LLC',
    driverId: 'driver-1',
    driverName: 'Mike Thompson',
    escortRequired: true,
    permitRequired: true,
    quotedPrice: 8500,
    milestones: [
      { id: 'm1', name: 'Order Created', status: 'completed', timestamp: '2024-01-10T09:00:00Z' },
      { id: 'm2', name: 'Quote Accepted', status: 'completed', timestamp: '2024-01-11T14:30:00Z' },
      { id: 'm3', name: 'Dispatched', status: 'completed', timestamp: '2024-01-15T06:00:00Z' },
      { id: 'm4', name: 'Picked Up', status: 'completed', timestamp: '2024-01-15T08:30:00Z' },
      { id: 'm5', name: 'In Transit', status: 'completed', timestamp: '2024-01-15T09:00:00Z' },
      { id: 'm6', name: 'Delivered', status: 'pending' },
      { id: 'm7', name: 'POD Uploaded', status: 'pending' },
    ],
    createdAt: '2024-01-10T09:00:00Z',
    updatedAt: '2024-01-15T09:00:00Z',
  },
  {
    id: 'load-002',
    referenceNumber: 'HHL-2024-002',
    status: 'booked',
    origin: { city: 'San Antonio', state: 'TX', address: '999 Energy Way' },
    destination: { city: 'Austin', state: 'TX', address: '321 Tech Park Dr' },
    pickupDate: '2024-01-18',
    dimensions: {
      length: 60,
      width: 10,
      height: 12,
      weight: 85000,
      unit: 'ft',
      weightUnit: 'lbs',
    },
    commodity: 'Transformer',
    specialRequirements: ['Escort Vehicle Required'],
    shipperId: 'shipper-1',
    shipperName: 'Texas Steel Co.',
    carrierId: 'carrier-1',
    carrierName: 'Heavy Haul Pros LLC',
    escortRequired: true,
    permitRequired: true,
    quotedPrice: 6200,
    milestones: [
      { id: 'm1', name: 'Order Created', status: 'completed', timestamp: '2024-01-12T10:00:00Z' },
      { id: 'm2', name: 'Quote Accepted', status: 'completed', timestamp: '2024-01-13T11:00:00Z' },
      { id: 'm3', name: 'Dispatched', status: 'pending' },
      { id: 'm4', name: 'Picked Up', status: 'pending' },
      { id: 'm5', name: 'In Transit', status: 'pending' },
      { id: 'm6', name: 'Delivered', status: 'pending' },
      { id: 'm7', name: 'POD Uploaded', status: 'pending' },
    ],
    createdAt: '2024-01-12T10:00:00Z',
    updatedAt: '2024-01-13T11:00:00Z',
  },
  {
    id: 'load-003',
    referenceNumber: 'HHL-2024-003',
    status: 'pending',
    origin: { city: 'Fort Worth', state: 'TX', address: '444 Manufacturing Dr' },
    destination: { city: 'El Paso', state: 'TX', address: '888 Border Logistics Rd' },
    pickupDate: '2024-01-20',
    dimensions: {
      length: 95,
      width: 14,
      height: 16,
      weight: 150000,
      unit: 'ft',
      weightUnit: 'lbs',
    },
    commodity: 'Wind Turbine Blade',
    specialRequirements: ['Multi-State Permits', 'Dual Escort Required', 'Daylight Only'],
    shipperId: 'shipper-1',
    shipperName: 'Texas Steel Co.',
    escortRequired: true,
    permitRequired: true,
    milestones: [
      { id: 'm1', name: 'Order Created', status: 'completed', timestamp: '2024-01-14T08:00:00Z' },
      { id: 'm2', name: 'Quote Accepted', status: 'pending' },
      { id: 'm3', name: 'Dispatched', status: 'pending' },
      { id: 'm4', name: 'Picked Up', status: 'pending' },
      { id: 'm5', name: 'In Transit', status: 'pending' },
      { id: 'm6', name: 'Delivered', status: 'pending' },
      { id: 'm7', name: 'POD Uploaded', status: 'pending' },
    ],
    createdAt: '2024-01-14T08:00:00Z',
    updatedAt: '2024-01-14T08:00:00Z',
  },
  {
    id: 'load-004',
    referenceNumber: 'HHL-2024-004',
    status: 'delivered',
    origin: { city: 'Corpus Christi', state: 'TX', address: '222 Port Ave' },
    destination: { city: 'Houston', state: 'TX', address: '777 Refinery Rd' },
    pickupDate: '2024-01-08',
    deliveryDate: '2024-01-09',
    dimensions: {
      length: 45,
      width: 8,
      height: 10,
      weight: 55000,
      unit: 'ft',
      weightUnit: 'lbs',
    },
    commodity: 'Pressure Vessel',
    shipperId: 'shipper-1',
    shipperName: 'Texas Steel Co.',
    carrierId: 'carrier-1',
    carrierName: 'Heavy Haul Pros LLC',
    driverId: 'driver-1',
    driverName: 'Mike Thompson',
    escortRequired: false,
    permitRequired: true,
    quotedPrice: 4800,
    milestones: [
      { id: 'm1', name: 'Order Created', status: 'completed', timestamp: '2024-01-05T09:00:00Z' },
      { id: 'm2', name: 'Quote Accepted', status: 'completed', timestamp: '2024-01-06T10:00:00Z' },
      { id: 'm3', name: 'Dispatched', status: 'completed', timestamp: '2024-01-08T05:00:00Z' },
      { id: 'm4', name: 'Picked Up', status: 'completed', timestamp: '2024-01-08T07:00:00Z' },
      { id: 'm5', name: 'In Transit', status: 'completed', timestamp: '2024-01-08T08:00:00Z' },
      { id: 'm6', name: 'Delivered', status: 'completed', timestamp: '2024-01-09T14:00:00Z' },
      { id: 'm7', name: 'POD Uploaded', status: 'completed', timestamp: '2024-01-09T14:30:00Z' },
    ],
    createdAt: '2024-01-05T09:00:00Z',
    updatedAt: '2024-01-09T14:30:00Z',
  },
  {
    id: 'load-005',
    referenceNumber: 'HHL-2024-005',
    status: 'quoted',
    origin: { city: 'Lubbock', state: 'TX', address: '555 Cotton Mill Ln' },
    destination: { city: 'Amarillo', state: 'TX', address: '111 Plains Industrial' },
    pickupDate: '2024-01-22',
    dimensions: {
      length: 70,
      width: 11,
      height: 13,
      weight: 95000,
      unit: 'ft',
      weightUnit: 'lbs',
    },
    commodity: 'Industrial Compressor',
    specialRequirements: ['Pilot Car Required'],
    shipperId: 'shipper-1',
    shipperName: 'Texas Steel Co.',
    escortRequired: true,
    permitRequired: true,
    quotedPrice: 5500,
    milestones: [
      { id: 'm1', name: 'Order Created', status: 'completed', timestamp: '2024-01-15T11:00:00Z' },
      { id: 'm2', name: 'Quote Sent', status: 'completed', timestamp: '2024-01-15T15:00:00Z' },
      { id: 'm3', name: 'Quote Accepted', status: 'pending' },
      { id: 'm4', name: 'Dispatched', status: 'pending' },
      { id: 'm5', name: 'Picked Up', status: 'pending' },
      { id: 'm6', name: 'In Transit', status: 'pending' },
      { id: 'm7', name: 'Delivered', status: 'pending' },
    ],
    createdAt: '2024-01-15T11:00:00Z',
    updatedAt: '2024-01-15T15:00:00Z',
  },
];

export const getLoadById = (id: string): Load | undefined => {
  return mockLoads.find((l) => l.id === id);
};

export const getLoadsByStatus = (status: string): Load[] => {
  return mockLoads.filter((l) => l.status === status);
};

export const getLoadsByShipper = (shipperId: string): Load[] => {
  return mockLoads.filter((l) => l.shipperId === shipperId);
};

export const getLoadsByCarrier = (carrierId: string): Load[] => {
  return mockLoads.filter((l) => l.carrierId === carrierId);
};

export const getLoadsByDriver = (driverId: string): Load[] => {
  return mockLoads.filter((l) => l.driverId === driverId);
};

export const getAvailableLoads = (): Load[] => {
  return mockLoads.filter((l) => l.status === 'pending' || l.status === 'quoted');
};

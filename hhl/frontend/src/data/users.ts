import type { User } from '../types';

export const mockUsers: User[] = [
  {
    id: 'shipper-1',
    name: 'John Mitchell',
    email: 'john@texassteel.com',
    role: 'shipper',
    company: 'Texas Steel Co.',
  },
  {
    id: 'carrier-1',
    name: 'Maria Garcia',
    email: 'maria@heavyhaulpros.com',
    role: 'carrier',
    company: 'Heavy Haul Pros LLC',
  },
  {
    id: 'driver-1',
    name: 'Mike Thompson',
    email: 'mike@heavyhaulpros.com',
    role: 'driver',
    company: 'Heavy Haul Pros LLC',
  },
  {
    id: 'admin-1',
    name: 'Sarah Johnson',
    email: 'sarah@hhlplatform.com',
    role: 'admin',
    company: 'HHL Platform',
  },
];

export const getUserByRole = (role: string): User | undefined => {
  return mockUsers.find((u) => u.role === role);
};

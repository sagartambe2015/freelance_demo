export type UserRole = 'shipper' | 'carrier' | 'driver' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  company?: string;
  avatarUrl?: string;
}

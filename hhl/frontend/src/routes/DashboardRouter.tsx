import { useAuth } from '../hooks/useAuth';
import { ShipperDashboard } from '../features/shipper/Dashboard';
import { AdminDashboard } from '../features/admin/AdminDashboard';

export function DashboardRouter() {
  const { user } = useAuth();

  if (user?.role === 'admin') {
    return <AdminDashboard />;
  }
  return <ShipperDashboard />;
}

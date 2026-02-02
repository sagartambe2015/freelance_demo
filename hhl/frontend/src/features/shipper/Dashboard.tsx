import { useNavigate } from 'react-router-dom';
import { KPICard } from '../../components/common/KPICard';
import { LoadCard } from '../../components/common/LoadCard';
import { CardTitle } from '../../components/ui/Card';
import { shipperKPIs, mockLoads } from '../../data';
import { useAuth } from '../../hooks/useAuth';

export function ShipperDashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const userLoads = mockLoads.filter((l) => l.shipperId === user?.id);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <p className="text-gray-500">Welcome back, {user?.name}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {shipperKPIs.map((kpi) => (
          <KPICard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      <div>
        <CardTitle className="mb-4">Recent Loads</CardTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userLoads.slice(0, 6).map((load) => (
            <LoadCard
              key={load.id}
              load={load}
              onClick={() => navigate(`/loads/${load.id}`)}
            />
          ))}
        </div>
        {userLoads.length === 0 && (
          <p className="text-gray-500 text-center py-8">No loads found</p>
        )}
      </div>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardTitle } from '../../components/ui/Card';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../../components/ui/Table';
import { KPICard } from '../../components/common/KPICard';
import { StatusBadge } from '../../components/common/StatusBadge';
import { adminKPIs, mockLoads } from '../../data';

export function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Admin Dashboard</h2>
        <p className="text-gray-500">Platform overview and management</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {adminKPIs.map((kpi) => (
          <KPICard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      <Card>
        <div className="flex items-center justify-between mb-4">
          <CardTitle>All Loads</CardTitle>
          <span className="text-sm text-gray-500">
            {mockLoads.length} total loads
          </span>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reference</TableHead>
              <TableHead>Shipper</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Commodity</TableHead>
              <TableHead>Carrier</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockLoads.map((load) => (
              <TableRow
                key={load.id}
                onClick={() => navigate(`/loads/${load.id}`)}
              >
                <TableCell className="font-medium">
                  {load.referenceNumber}
                </TableCell>
                <TableCell>{load.shipperName}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-sm">
                    <span>
                      {load.origin.city}, {load.origin.state}
                    </span>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <span>
                      {load.destination.city}, {load.destination.state}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{load.commodity}</TableCell>
                <TableCell>{load.carrierName || '-'}</TableCell>
                <TableCell>{load.driverName || '-'}</TableCell>
                <TableCell>
                  <StatusBadge status={load.status} />
                </TableCell>
                <TableCell>
                  {load.quotedPrice
                    ? `$${load.quotedPrice.toLocaleString()}`
                    : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardTitle>Loads by Status</CardTitle>
          <div className="mt-4 space-y-3">
            {[
              { status: 'pending', label: 'Pending' },
              { status: 'quoted', label: 'Quoted' },
              { status: 'booked', label: 'Booked' },
              { status: 'in_transit', label: 'In Transit' },
              { status: 'delivered', label: 'Delivered' },
            ].map(({ status, label }) => {
              const count = mockLoads.filter((l) => l.status === status).length;
              const percentage = (count / mockLoads.length) * 100;
              return (
                <div key={status}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">{label}</span>
                    <span className="font-medium">{count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card>
          <CardTitle>Recent Activity</CardTitle>
          <div className="mt-4 space-y-4">
            {mockLoads
              .sort(
                (a, b) =>
                  new Date(b.updatedAt).getTime() -
                  new Date(a.updatedAt).getTime()
              )
              .slice(0, 5)
              .map((load) => (
                <div
                  key={load.id}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <div>
                    <p className="font-medium text-sm">{load.referenceNumber}</p>
                    <p className="text-xs text-gray-500">
                      {load.origin.city} to {load.destination.city}
                    </p>
                  </div>
                  <div className="text-right">
                    <StatusBadge status={load.status} />
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(load.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

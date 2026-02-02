import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, ArrowRight } from 'lucide-react';
import { Card, CardTitle } from '../../components/ui/Card';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../../components/ui/Table';
import { Button } from '../../components/ui/Button';
import { StatusBadge } from '../../components/common/StatusBadge';
import { KPICard } from '../../components/common/KPICard';
import { carrierKPIs, getAvailableLoads, getLoadsByCarrier } from '../../data';
import { useAuth } from '../../hooks/useAuth';
import type { LoadStatus } from '../../types';

interface LoadBoardProps {
  showAssigned?: boolean;
}

const statusFilters: { label: string; value: LoadStatus | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Quoted', value: 'quoted' },
  { label: 'Booked', value: 'booked' },
  { label: 'In Transit', value: 'in_transit' },
];

export function LoadBoard({ showAssigned = false }: LoadBoardProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [statusFilter, setStatusFilter] = useState<LoadStatus | 'all'>('all');

  const baseLoads = showAssigned
    ? getLoadsByCarrier(user?.id || '')
    : getAvailableLoads();

  const filteredLoads =
    statusFilter === 'all'
      ? baseLoads
      : baseLoads.filter((l) => l.status === statusFilter);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          {showAssigned ? 'Active Hauls' : 'Load Board'}
        </h2>
        <p className="text-gray-500">
          {showAssigned
            ? 'Loads assigned to your company'
            : 'Available loads for bidding'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {carrierKPIs.map((kpi) => (
          <KPICard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      <Card>
        <div className="flex items-center justify-between mb-4">
          <CardTitle>
            {showAssigned ? 'Assigned Loads' : 'Available Loads'}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as LoadStatus | 'all')
              }
              className="text-sm border border-gray-300 rounded px-2 py-1"
            >
              {statusFilters.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reference</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Commodity</TableHead>
              <TableHead>Weight</TableHead>
              <TableHead>Pickup</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>{' '}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLoads.map((load) => (
              <TableRow
                key={load.id}
                onClick={() => navigate(`/loads/${load.id}`)}
              >
                <TableCell className="font-medium">
                  {load.referenceNumber}
                </TableCell>
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
                <TableCell>
                  {load.dimensions.weight.toLocaleString()}{' '}
                  {load.dimensions.weightUnit}
                </TableCell>
                <TableCell>{load.pickupDate}</TableCell>
                <TableCell>
                  <StatusBadge status={load.status} />
                </TableCell>
                <TableCell>
                  {load.quotedPrice
                    ? `$${load.quotedPrice.toLocaleString()}`
                    : '-'}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredLoads.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No loads found matching your criteria
          </p>
        )}
      </Card>
    </div>
  );
}

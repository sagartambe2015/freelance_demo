import { Badge } from '../ui/Badge';
import type { LoadStatus } from '../../types';

interface StatusBadgeProps {
  status: LoadStatus;
}

const statusConfig: Record<LoadStatus, { label: string; variant: 'default' | 'success' | 'warning' | 'error' | 'info' }> = {
  pending: { label: 'Pending', variant: 'default' },
  quoted: { label: 'Quoted', variant: 'info' },
  booked: { label: 'Booked', variant: 'info' },
  dispatched: { label: 'Dispatched', variant: 'warning' },
  in_transit: { label: 'In Transit', variant: 'warning' },
  delivered: { label: 'Delivered', variant: 'success' },
  completed: { label: 'Completed', variant: 'success' },
  cancelled: { label: 'Cancelled', variant: 'error' },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];
  return <Badge variant={config.variant}>{config.label}</Badge>;
}

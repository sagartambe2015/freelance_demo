import { MapPin, Calendar, Package, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { StatusBadge } from './StatusBadge';
import type { Load } from '../../types';

interface LoadCardProps {
  load: Load;
  onClick?: () => void;
}

export function LoadCard({ load, onClick }: LoadCardProps) {
  return (
    <Card
      className={onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}
      padding="md"
    >
      <div onClick={onClick}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-sm text-gray-500">{load.referenceNumber}</span>
            <h4 className="font-medium text-gray-900">{load.commodity}</h4>
          </div>
          <StatusBadge status={load.status} />
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <MapPin className="w-4 h-4" />
          <span>
            {load.origin.city}, {load.origin.state}
          </span>
          <ArrowRight className="w-4 h-4" />
          <span>
            {load.destination.city}, {load.destination.state}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{load.pickupDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Package className="w-4 h-4" />
            <span>
              {load.dimensions.weight.toLocaleString()} {load.dimensions.weightUnit}
            </span>
          </div>
        </div>

        {load.quotedPrice && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <span className="text-lg font-semibold text-gray-900">
              ${load.quotedPrice.toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}

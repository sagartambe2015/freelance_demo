import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Package,
  Truck,
  User,
  CheckCircle,
  Circle,
  AlertCircle,
} from 'lucide-react';
import { Card, CardTitle } from '../../components/ui/Card';
import { StatusBadge } from '../../components/common/StatusBadge';
import { Badge } from '../../components/ui/Badge';
import { getLoadById } from '../../data';
import type { Milestone } from '../../types';

function MilestoneItem({ milestone, isLast }: { milestone: Milestone; isLast: boolean }) {
  const Icon =
    milestone.status === 'completed'
      ? CheckCircle
      : milestone.status === 'skipped'
      ? AlertCircle
      : Circle;

  const iconColor =
    milestone.status === 'completed'
      ? 'text-green-500'
      : milestone.status === 'skipped'
      ? 'text-gray-400'
      : 'text-gray-300';

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <Icon className={`w-6 h-6 ${iconColor}`} />
        {!isLast && (
          <div
            className={`w-0.5 flex-1 my-1 ${
              milestone.status === 'completed' ? 'bg-green-300' : 'bg-gray-200'
            }`}
          />
        )}
      </div>
      <div className={`pb-4 ${isLast ? '' : 'min-h-[60px]'}`}>
        <p
          className={`font-medium ${
            milestone.status === 'completed' ? 'text-gray-900' : 'text-gray-500'
          }`}
        >
          {milestone.name}
        </p>
        {milestone.timestamp && (
          <p className="text-sm text-gray-400">
            {new Date(milestone.timestamp).toLocaleString()}
          </p>
        )}
        {milestone.notes && (
          <p className="text-sm text-gray-500 mt-1">{milestone.notes}</p>
        )}
      </div>
    </div>
  );
}

export function LoadTrackingView() {
  const { loadId } = useParams<{ loadId: string }>();
  const load = loadId ? getLoadById(loadId) : undefined;

  if (!load) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900">Load not found</h2>
        <Link to="/loads" className="text-blue-600 hover:underline mt-2 block">
          Back to loads
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          to="/loads"
          className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900">
              {load.referenceNumber}
            </h2>
            <StatusBadge status={load.status} />
          </div>
          <p className="text-gray-500">{load.commodity}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardTitle>Load Details</CardTitle>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Origin</span>
                </div>
                <p className="font-medium">
                  {load.origin.city}, {load.origin.state}
                </p>
                {load.origin.address && (
                  <p className="text-sm text-gray-500">{load.origin.address}</p>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Destination</span>
                </div>
                <p className="font-medium">
                  {load.destination.city}, {load.destination.state}
                </p>
                {load.destination.address && (
                  <p className="text-sm text-gray-500">
                    {load.destination.address}
                  </p>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Pickup Date</span>
                </div>
                <p className="font-medium">{load.pickupDate}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Delivery Date</span>
                </div>
                <p className="font-medium">{load.deliveryDate || 'TBD'}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <Package className="w-4 h-4" />
                  <span className="text-sm">Dimensions</span>
                </div>
                <p className="font-medium">
                  {load.dimensions.length} x {load.dimensions.width} x{' '}
                  {load.dimensions.height} {load.dimensions.unit}
                </p>
                <p className="text-sm text-gray-500">
                  {load.dimensions.weight.toLocaleString()}{' '}
                  {load.dimensions.weightUnit}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <span className="text-sm">Requirements</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {load.escortRequired && (
                    <Badge variant="warning">Escort Required</Badge>
                  )}
                  {load.permitRequired && (
                    <Badge variant="info">Permit Required</Badge>
                  )}
                </div>
              </div>
            </div>
            {load.specialRequirements && load.specialRequirements.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">Special Requirements</p>
                <div className="flex flex-wrap gap-2">
                  {load.specialRequirements.map((req, idx) => (
                    <Badge key={idx} variant="default">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {(load.carrierName || load.driverName) && (
            <Card>
              <CardTitle>Assignment</CardTitle>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {load.carrierName && (
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <Truck className="w-4 h-4" />
                      <span className="text-sm">Carrier</span>
                    </div>
                    <p className="font-medium">{load.carrierName}</p>
                  </div>
                )}
                {load.driverName && (
                  <div>
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                      <User className="w-4 h-4" />
                      <span className="text-sm">Driver</span>
                    </div>
                    <p className="font-medium">{load.driverName}</p>
                  </div>
                )}
              </div>
            </Card>
          )}
        </div>

        <div>
          <Card>
            <CardTitle>Timeline</CardTitle>
            <div className="mt-4">
              {load.milestones.map((milestone, idx) => (
                <MilestoneItem
                  key={milestone.id}
                  milestone={milestone}
                  isLast={idx === load.milestones.length - 1}
                />
              ))}
            </div>
          </Card>

          {load.quotedPrice && (
            <Card className="mt-4">
              <CardTitle>Pricing</CardTitle>
              <div className="mt-4">
                <p className="text-3xl font-bold text-gray-900">
                  ${load.quotedPrice.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">Quoted Price</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

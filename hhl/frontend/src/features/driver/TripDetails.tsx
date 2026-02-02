import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Building,
  CheckCircle,
  Circle,
  AlertTriangle,
} from 'lucide-react';
import { Card, CardTitle } from '../../components/ui/Card';
import { StatusBadge } from '../../components/common/StatusBadge';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { getLoadById } from '../../data';
import type { Milestone } from '../../types';

function MilestoneItem({
  milestone,
  isLast,
  isCurrent,
}: {
  milestone: Milestone;
  isLast: boolean;
  isCurrent: boolean;
}) {
  const Icon =
    milestone.status === 'completed'
      ? CheckCircle
      : milestone.status === 'skipped'
      ? AlertTriangle
      : Circle;

  const iconColor =
    milestone.status === 'completed'
      ? 'text-green-500'
      : isCurrent
      ? 'text-blue-500'
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
      <div className={`pb-4 flex-1 ${isLast ? '' : 'min-h-[60px]'}`}>
        <div className="flex items-center justify-between">
          <p
            className={`font-medium ${
              milestone.status === 'completed'
                ? 'text-gray-900'
                : isCurrent
                ? 'text-blue-600'
                : 'text-gray-500'
            }`}
          >
            {milestone.name}
          </p>
          {isCurrent && milestone.status === 'pending' && (
            <Button size="sm" variant="primary" disabled>
              Update (Demo)
            </Button>
          )}
        </div>
        {milestone.timestamp && (
          <p className="text-sm text-gray-400">
            {new Date(milestone.timestamp).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}

export function TripDetails() {
  const { tripId } = useParams<{ tripId: string }>();
  const trip = tripId ? getLoadById(tripId) : undefined;

  if (!trip) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-gray-900">Trip not found</h2>
        <Link to="/trips" className="text-blue-600 hover:underline mt-2 block">
          Back to trips
        </Link>
      </div>
    );
  }

  const currentMilestoneIdx = trip.milestones.findIndex(
    (m) => m.status === 'pending'
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link
          to="/trips"
          className="flex items-center gap-1 text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900">
              {trip.referenceNumber}
            </h2>
            <StatusBadge status={trip.status} />
          </div>
          <p className="text-gray-500">{trip.commodity}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardTitle>Route Information</CardTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Pickup Location</span>
                </div>
                <p className="font-medium text-lg">
                  {trip.origin.city}, {trip.origin.state}
                </p>
                {trip.origin.address && (
                  <p className="text-sm text-gray-500">{trip.origin.address}</p>
                )}
                <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{trip.pickupDate}</span>
                </div>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Delivery Location</span>
                </div>
                <p className="font-medium text-lg">
                  {trip.destination.city}, {trip.destination.state}
                </p>
                {trip.destination.address && (
                  <p className="text-sm text-gray-500">
                    {trip.destination.address}
                  </p>
                )}
                {trip.deliveryDate && (
                  <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{trip.deliveryDate}</span>
                  </div>
                )}
              </div>
            </div>
          </Card>

          <Card>
            <CardTitle>Cargo Details</CardTitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500">Commodity</p>
                <p className="font-medium">{trip.commodity}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Dimensions</p>
                <p className="font-medium">
                  {trip.dimensions.length} x {trip.dimensions.width} x{' '}
                  {trip.dimensions.height} {trip.dimensions.unit}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Weight</p>
                <p className="font-medium">
                  {trip.dimensions.weight.toLocaleString()}{' '}
                  {trip.dimensions.weightUnit}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Requirements</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {trip.escortRequired && (
                    <Badge variant="warning">Escort</Badge>
                  )}
                  {trip.permitRequired && <Badge variant="info">Permit</Badge>}
                </div>
              </div>
            </div>
            {trip.specialRequirements && trip.specialRequirements.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">
                  Special Requirements
                </p>
                <div className="flex flex-wrap gap-2">
                  {trip.specialRequirements.map((req, idx) => (
                    <Badge key={idx} variant="default">
                      {req}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </Card>

          <Card>
            <CardTitle>Contact Information</CardTitle>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-1">
                  <Building className="w-4 h-4" />
                  <span className="text-sm">Shipper</span>
                </div>
                <p className="font-medium">{trip.shipperName}</p>
              </div>
              {trip.carrierName && (
                <div>
                  <div className="flex items-center gap-2 text-gray-500 mb-1">
                    <Building className="w-4 h-4" />
                    <span className="text-sm">Carrier</span>
                  </div>
                  <p className="font-medium">{trip.carrierName}</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <CardTitle>Trip Progress</CardTitle>
            <div className="mt-4">
              {trip.milestones.map((milestone, idx) => (
                <MilestoneItem
                  key={milestone.id}
                  milestone={milestone}
                  isLast={idx === trip.milestones.length - 1}
                  isCurrent={idx === currentMilestoneIdx}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

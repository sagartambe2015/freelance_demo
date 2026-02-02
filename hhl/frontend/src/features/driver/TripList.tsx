import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Card, CardTitle } from '../../components/ui/Card';
import { StatusBadge } from '../../components/common/StatusBadge';
import { KPICard } from '../../components/common/KPICard';
import { driverKPIs, getLoadsByDriver } from '../../data';
import { useAuth } from '../../hooks/useAuth';

export function TripList() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const trips = getLoadsByDriver(user?.id || '');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">My Trips</h2>
        <p className="text-gray-500">Your assigned hauls</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {driverKPIs.map((kpi) => (
          <KPICard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      <div>
        <CardTitle className="mb-4">Assigned Trips</CardTitle>
        <div className="space-y-4">
          {trips.map((trip) => (
            <Card
              key={trip.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              padding="md"
            >
              <div onClick={() => navigate(`/trips/${trip.id}`)}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-sm text-gray-500">
                      {trip.referenceNumber}
                    </span>
                    <h4 className="font-medium text-gray-900">{trip.commodity}</h4>
                  </div>
                  <StatusBadge status={trip.status} />
                </div>

                <div className="flex items-center gap-2 text-sm mb-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    {trip.origin.city}, {trip.origin.state}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">
                    {trip.destination.city}, {trip.destination.state}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Pickup: {trip.pickupDate}</span>
                  </div>
                  {trip.deliveryDate && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Delivery: {trip.deliveryDate}</span>
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Weight: {trip.dimensions.weight.toLocaleString()}{' '}
                    {trip.dimensions.weightUnit}
                  </span>
                  <span className="text-sm font-medium text-blue-600">
                    View Details
                  </span>
                </div>
              </div>
            </Card>
          ))}

          {trips.length === 0 && (
            <Card>
              <p className="text-gray-500 text-center py-8">
                No trips assigned to you
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

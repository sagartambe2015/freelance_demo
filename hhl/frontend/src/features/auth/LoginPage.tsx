import { useNavigate } from 'react-router-dom';
import { Truck, Package, MapPin, Shield } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Card } from '../../components/ui/Card';
import type { UserRole } from '../../types';

interface RoleOption {
  role: UserRole;
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  defaultPath: string;
}

const roleOptions: RoleOption[] = [
  {
    role: 'shipper',
    label: 'Shipper',
    description: 'Create loads, request quotes, track shipments',
    icon: <Package className="w-8 h-8" />,
    color: 'bg-blue-500',
    defaultPath: '/dashboard',
  },
  {
    role: 'carrier',
    label: 'Carrier',
    description: 'View load board, manage assignments',
    icon: <Truck className="w-8 h-8" />,
    color: 'bg-green-500',
    defaultPath: '/load-board',
  },
  {
    role: 'driver',
    label: 'Driver',
    description: 'View assigned trips, update milestones',
    icon: <MapPin className="w-8 h-8" />,
    color: 'bg-orange-500',
    defaultPath: '/trips',
  },
  {
    role: 'admin',
    label: 'Admin',
    description: 'Manage platform, view analytics',
    icon: <Shield className="w-8 h-8" />,
    color: 'bg-purple-500',
    defaultPath: '/dashboard',
  },
];

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelect = (option: RoleOption) => {
    login(option.role);
    navigate(option.defaultPath);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Heavy Haul Logistics Platform
          </h1>
          <p className="text-gray-600">
            Select a role to explore the platform (Demo Mode)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {roleOptions.map((option) => (
            <Card
              key={option.role}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              padding="lg"
            >
              <button
                onClick={() => handleRoleSelect(option)}
                className="w-full text-left"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`${option.color} text-white p-3 rounded-lg`}
                  >
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {option.label}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          This is a view-only demo with mock data
        </p>
      </div>
    </div>
  );
}

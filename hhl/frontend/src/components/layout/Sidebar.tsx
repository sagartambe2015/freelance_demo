import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  Truck,
  MapPin,
  Users,
  Settings,
  FileText,
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import type { UserRole } from '../../types';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  roles: UserRole[];
}

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    roles: ['shipper', 'carrier', 'admin'],
  },
  {
    label: 'My Loads',
    path: '/loads',
    icon: <Package className="w-5 h-5" />,
    roles: ['shipper'],
  },
  {
    label: 'Load Board',
    path: '/load-board',
    icon: <FileText className="w-5 h-5" />,
    roles: ['carrier'],
  },
  {
    label: 'Active Hauls',
    path: '/hauls',
    icon: <Truck className="w-5 h-5" />,
    roles: ['carrier'],
  },
  {
    label: 'My Trips',
    path: '/trips',
    icon: <MapPin className="w-5 h-5" />,
    roles: ['driver'],
  },
  {
    label: 'All Loads',
    path: '/admin/loads',
    icon: <Package className="w-5 h-5" />,
    roles: ['admin'],
  },
  {
    label: 'Users',
    path: '/admin/users',
    icon: <Users className="w-5 h-5" />,
    roles: ['admin'],
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: <Settings className="w-5 h-5" />,
    roles: ['admin'],
  },
];

export function Sidebar() {
  const { user } = useAuth();

  const filteredItems = navItems.filter(
    (item) => user && item.roles.includes(user.role)
  );

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="p-4 border-b border-gray-700">
        <span className="text-lg font-semibold">HHL Platform</span>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {filteredItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

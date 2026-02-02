import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { LoginPage } from '../features/auth/LoginPage';
import { ShipperDashboard } from '../features/shipper/Dashboard';
import { LoadTrackingView } from '../features/shipper/LoadTrackingView';
import { LoadBoard } from '../features/carrier/LoadBoard';
import { TripList } from '../features/driver/TripList';
import { TripDetails } from '../features/driver/TripDetails';
import { AdminDashboard } from '../features/admin/AdminDashboard';
import { DashboardRouter } from './DashboardRouter';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute allowedRoles={['shipper', 'carrier', 'admin']}>
            <DashboardRouter />
          </ProtectedRoute>
        ),
      },
      {
        path: 'loads',
        element: (
          <ProtectedRoute allowedRoles={['shipper']}>
            <ShipperDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'loads/:loadId',
        element: (
          <ProtectedRoute allowedRoles={['shipper', 'carrier', 'admin']}>
            <LoadTrackingView />
          </ProtectedRoute>
        ),
      },
      {
        path: 'load-board',
        element: (
          <ProtectedRoute allowedRoles={['carrier']}>
            <LoadBoard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'hauls',
        element: (
          <ProtectedRoute allowedRoles={['carrier']}>
            <LoadBoard showAssigned />
          </ProtectedRoute>
        ),
      },
      {
        path: 'trips',
        element: (
          <ProtectedRoute allowedRoles={['driver']}>
            <TripList />
          </ProtectedRoute>
        ),
      },
      {
        path: 'trips/:tripId',
        element: (
          <ProtectedRoute allowedRoles={['driver']}>
            <TripDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin/loads',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: 'admin/users',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <div className="p-4">Users management coming soon...</div>
          </ProtectedRoute>
        ),
      },
      {
        path: 'settings',
        element: (
          <ProtectedRoute allowedRoles={['admin']}>
            <div className="p-4">Settings coming soon...</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/unauthorized',
    element: (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Unauthorized</h1>
          <p className="text-gray-600">You do not have access to this page.</p>
        </div>
      </div>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

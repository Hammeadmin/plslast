// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { supabase } from './lib/supabase';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { ShiftsPage } from './pages/ShiftsPage';
import { LandingPage } from './pages/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { Layout } from './components/Layout';
import { Navbar } from './components/Layout/Navbar';
import type { Database } from './types/database';
import IntegritetspolicyPage from './pages/IntegritetspolicyPage';
import PriserPage from './pages/PriserPage';
import MyPayrollPage from './pages/MyPayrollPage';
import ForApotekare from './pages/ForApotekare';
import ForApotek from './pages/ForApotek';
import Kontakt from './pages/Kontakt';
import { EmployerDashboard } from './components/employer/EmployerDashboard';
import ApplicantsPage from './pages/ApplicantsPage';
import PayrollPage from './pages/PayrollPage';
import EmployeeProfilesPage from './pages/EmployeeProfilesPage';
import { MessagesPanel } from './components/Messages/MessagesPanel';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import EmployerDirectoryPage from './pages/EmployerDirectoryPage';
import MySchedulePage from './pages/MySchedulePage';
import { CheckEmailPage } from './pages/CheckEmailPage';
import AvailablePostingsPage from './pages/AvailablePostingsPage';
import { UpdatePasswordPage } from './pages/UpdatePasswordPage';
import { useAuth } from './context/AuthContext';

type Profile = Database['public']['Tables']['profiles']['Row'];

// Unified Layout for all authenticated users
function AuthenticatedLayout({ session, profile }: { session: any, profile: Profile | null }) {
  return (
    <div className="min-h-screen bg-brandBeige">
      <Navbar session={session} profile={profile} />
      <main className="p-4 sm:p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

// Public Layout remains the same
function PublicLayout({ session, profile }: { session: any, profile: Profile | null }) {
  return (
    <div className="min-h-screen bg-brandBeige">
      <Navbar session={session} profile={profile} />
      <main className="p-4 sm:p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  const { session, profile, loading } = useAuth();

  const isStrictlyEmployer = () => profile?.role === 'employer';
  const isAdmin = () => profile?.role === 'admin';
  const isEmployee = () => ['pharmacist', 'säljare', 'egenvårdsrådgivare'].includes(profile?.role || '');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brandBeige">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-primary-700">Laddar...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout session={session} profile={profile} />}>
          <Route path="/" element={session ? <Navigate to="/dashboard" replace /> : <LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/for-apotekare" element={<ForApotekare />} />
          <Route path="/for-apotek" element={<ForApotek />} />
          <Route path="/privacy" element={<IntegritetspolicyPage />} />
          <Route path="/priser" element={<PriserPage />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/check-email" element={<CheckEmailPage />} />
        </Route>

        {/* Auth routes */}
        <Route path="/login" element={session ? <Navigate to="/dashboard" replace /> : <AuthPage type="login" />} />
        <Route path="/register" element={session ? <Navigate to="/dashboard" replace /> : <AuthPage type="register" />} />
        <Route path="/update-password" element={<UpdatePasswordPage />} />

        {/* --- PROTECTED ROUTES --- */}
        {/* All authenticated users will use AuthenticatedLayout */}
        <Route
          element={
            <ProtectedRoute>
              <AuthenticatedLayout session={session} profile={profile} />
            </ProtectedRoute>
          }
        >
          {/* Dashboard Route - Handles redirection based on role */}
          <Route
            path="/dashboard"
            element={
              isAdmin()
                ? <DashboardPage />
                : isStrictlyEmployer()
                  ? <Navigate to="/employer/dashboard" replace />
                  : isEmployee()
                    ? <DashboardPage />
                    : <Navigate to="/login" replace />
            }
          />

          {/* Employer Specific Routes */}
          <Route
            path="/employer/dashboard"
            element={
              <ProtectedRoute allowedRoles={['employer', 'admin']}>
                <EmployerDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employer/applicants"
            element={
              <ProtectedRoute allowedRoles={['employer', 'admin']}>
                <ApplicantsPage />
              </ProtectedRoute>
            }
          />
          
          {/* --- CORRECTED ROUTE --- */}
          {/* This route is now accessible to all authenticated users because the outer ProtectedRoute already confirms they are logged in. */}
          <Route path="/employees" element={<EmployeeProfilesPage />} />

          {/* Common Authenticated Routes */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/messages" element={<MessagesPanel />} />

          {/* Payroll Page - Accessible to Employer and Admin */}
          <Route
            path="/payroll"
            element={
              <ProtectedRoute allowedRoles={['employer', 'admin']}>
                <PayrollPage />
              </ProtectedRoute>
            }
          />

          {/* MyPayroll Page - Accessible to Employees and Admin */}
          <Route
            path="/my-payroll"
            element={
              (isEmployee() || isAdmin())
                ? <MyPayrollPage />
                : <Navigate to="/dashboard" replace />
            }
          />
          
          {/* ShiftsPage - Accessible to Employees and Admin */}
          <Route
            path="/shifts"
            element={
              (isEmployee() || isAdmin()) 
                ? <ShiftsPage /> 
                : <Navigate to="/dashboard" replace />
            }
          />

          {/* AvailablePostingsPage - Accessible to Employees and Admin */}
          <Route
            path="/job-postings"
            element={
              (isEmployee() || isAdmin())
                ? <AvailablePostingsPage />
                : <Navigate to="/dashboard" replace />
            }
          />

          {/* Other Employee specific routes */}
          <Route path="/my-schedule" element={(isEmployee() || isAdmin()) ? <MySchedulePage /> : <Navigate to="/dashboard" replace />} />
          <Route path="/pharmacies" element={(isEmployee() || isAdmin()) ? <EmployerDirectoryPage /> : <Navigate to="/dashboard" replace />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to={session ? "/dashboard" : "/"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
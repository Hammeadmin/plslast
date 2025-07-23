// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Layout/Navbar';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import type { Database } from '../types/database'; // Assuming types are needed

// Define Profile type if not already globally available via Database type
type Profile = Database['public']['Tables']['profiles']['Row'];

export function Layout() { // No longer needs session/profile props
  const { session, profile } = useAuth(); // Get session and profile from context

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar session={session} profile={profile} />
      <main className="p-4 sm:p-6 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
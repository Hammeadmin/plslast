import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, MessageCircle, Settings } from 'lucide-react';
import { ProfileSetup } from '../components/Profile/ProfileSetup';
import { MessagesPanel } from '../components/Messages/MessagesPanel';
import { useEffect } from 'react'; 
import { NotificationToggle } from '../components/Profile/NotificationToggle'; // <-- 1. Import


type TabType = 'profile' | 'messages' | 'settings';

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const { profile, fetchProfile, session } = useAuth();

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  } 

  const handleUpdate = async () => {
    if (session?.user) {
      await fetchProfile(session.user.id);
    }
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-6">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`px-4 py-2 rounded ${activeTab === id ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab(id as TabType)}
          >
            <Icon className="inline mr-2" />
            {label}
          </button>
        ))}
      </div>

      <div>
        {activeTab === 'profile' && <ProfileSetup profile={profile} onUpdate={handleUpdate} />}
        {activeTab === 'messages' && <MessagesPanel userId={profile.id} />}
        {activeTab === 'settings' && (
          <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Inställningar</h2>
            <div className="space-y-6">
              <NotificationToggle />
              {/* Add other settings here in the future */}
            </div>
          </div>
  )}
      </div>
    </div>
  );
}
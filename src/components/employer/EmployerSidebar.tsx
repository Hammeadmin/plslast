import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
    LayoutDashboard, 
    Users as ApplicantsIcon, 
    User as ProfilesIcon, 
    FileText, 
    History, 
    Briefcase, 
    CalendarPlus,
    MessageCircle,
    Settings
} from 'lucide-react';

type EmployerDashboardTab = 'overview' | 'postings' | 'completed' | 'schedule';

interface EmployerSidebarProps {
    activeTab: EmployerDashboardTab;
    onTabChange: (tab: EmployerDashboardTab) => void;
    appliedCount?: number;
}

const EmployerSidebar: React.FC<EmployerSidebarProps> = ({
    activeTab,
    onTabChange,
    appliedCount = 0
}) => {
    const location = useLocation();

    const getTabClassName = (tabName: EmployerDashboardTab) => {
        return `flex items-center space-x-3 block w-full text-left py-3 px-4 rounded-md transition duration-200 cursor-pointer ${
            activeTab === tabName ? 'bg-primary-600 text-white font-medium' : 'text-gray-200 hover:bg-gray-700 hover:text-white'
        }`;
    };

    const getLinkClassName = (path: string) => {
        const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
        return `flex items-center space-x-3 block py-3 px-4 rounded-md transition duration-200 ${
            isActive ? 'bg-primary-600 text-white font-medium' : 'text-gray-200 hover:bg-gray-700 hover:text-white'
        }`;
    };

    return (
        <div className="w-64 min-h-screen bg-gray-800 text-white p-4 flex flex-col flex-shrink-0">
            <div className="flex items-center mb-8 px-4">
                <Briefcase className="h-8 w-8 text-primary-400 mr-3" />
                <h2 className="text-xl font-semibold text-white">Arbetsgivarmeny</h2>
            </div>
            <nav className="flex-grow space-y-1">
                <div className="px-3 py-2">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Huvudmeny</h3>
                </div>
                <ul className="space-y-1">
                    <li>
                        <button onClick={() => onTabChange('overview')} className={getTabClassName('overview')}>
                            <LayoutDashboard size={20} />
                            <span>Passöversikt</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onTabChange('postings')} className={getTabClassName('postings')}>
                            <Briefcase size={20} />
                            <span>Uppdrag</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onTabChange('schedule')} className={getTabClassName('schedule')}>
                            <CalendarPlus size={20} />
                            <span>Skapa Schema</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onTabChange('completed')} className={getTabClassName('completed')}>
                            <History size={20} />
                            <span>Historik</span>
                        </button>
                    </li>
                </ul>

                <div className="px-3 py-2 mt-6">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Hantering</h3>
                </div>
                <ul className="space-y-1">
                    <li>
                        <Link to="/employer/applicants" className={getLinkClassName('/employer/applicants')}>
                            <ApplicantsIcon size={20} />
                            <span>Sökande {appliedCount > 0 ? <span className="ml-1.5 px-2 py-0.5 text-xs bg-primary-600 text-white rounded-full">{appliedCount}</span> : ''}</span>
                        </Link>
                    </li>
                    <li><Link to="/employees" className={getLinkClassName('/employees')}><ProfilesIcon size={20} /><span>Personalprofiler</span></Link></li>
                    <li>
                        <Link to="/payroll" className={getLinkClassName('/payroll')}>
                            <FileText size={20} />
                            <span>Lönehantering</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/messages" className={getLinkClassName('/messages')}>
                            <MessageCircle size={20} />
                            <span>Meddelanden</span>
                        </Link>
                    </li>
                </ul>
                
                <div className="px-3 py-2 mt-6">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Konto</h3>
                </div>
                <ul className="space-y-1">
                    <li>
                        <Link to="/profile" className={getLinkClassName('/profile')}>
                            <ProfilesIcon size={20} />
                            <span>Min Profil</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className={getLinkClassName('/settings')}>
                            <Settings size={20} />
                            <span>Inställningar</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-auto pt-4 border-t border-gray-700 text-xs text-gray-400 px-4">
                <p>Farmispoolen &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
    );
};

export default EmployerSidebar;
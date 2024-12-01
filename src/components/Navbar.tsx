import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  Building2,
  Scale,
  IndianRupee,
  Bell,
  FileBarChart,
  Megaphone
} from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import NationalEmblem from './NationalEmblem';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Ministries', href: '/ministries', icon: Building2 },
    { name: 'RTI', href: '/rti', icon: Scale },
    { name: 'Budget', href: '/budget', icon: IndianRupee },
    { name: 'Performance', href: '/performance', icon: FileBarChart },
    { name: 'Grievances', href: '/grievances', icon: Megaphone },
  ];

  const notifications = [
    { id: 1, title: 'New RTI response available', time: '5m ago' },
    { id: 2, title: 'Project status updated', time: '1h ago' },
    { id: 3, title: 'Grievance resolved', time: '2h ago' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <NationalEmblem />
              </div>
              <div className="border-l pl-4 border-gray-200">
                <motion.span 
                  className="block text-2xl font-bold bg-gradient-to-r from-orange-700 to-orange-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  RashtraNirikshan
                </motion.span>
                <motion.span 
                  className="block text-sm text-gray-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Good Governance Monitor
                </motion.span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}

            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="relative p-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-full">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 transform translate-x-1/2 -translate-y-1/2"></span>
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content className="bg-white rounded-lg shadow-lg py-2 w-64 mt-2">
                  {notifications.map((notification) => (
                    <DropdownMenu.Item
                      key={notification.id}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <span>{notification.title}</span>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                    </DropdownMenu.Item>
                  ))}
                  <DropdownMenu.Separator className="my-2 border-t border-gray-100" />
                  <DropdownMenu.Item className="px-4 py-2 text-sm text-orange-600 hover:bg-orange-50 cursor-pointer">
                    View all notifications
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-orange-600 hover:bg-orange-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive(item.href)
                  ? 'bg-orange-50 text-orange-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
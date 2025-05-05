import React from 'react';
import { FaDatabase, FaStore, FaBug, FaTwitter } from 'react-icons/fa';

const cards = [
  {
    title: 'Used Space',
    value: '49/50 GB',
    icon: <FaDatabase size={30} className="text-white" />,
    bgColor: 'bg-orange-500',
    footer: 'Get more space',
    footerColor: 'text-red-500',
  },
  {
    title: 'Revenue',
    value: '$34,245',
    icon: <FaStore size={30} className="text-white" />,
    bgColor: 'bg-green-500',
    footer: 'Last 24 Hours',
    footerColor: 'text-gray-500',
  },
  {
    title: 'Fixed Issues',
    value: '75',
    icon: <FaBug size={30} className="text-white" />,
    bgColor: 'bg-red-500',
    footer: 'Tracked from Github',
    footerColor: 'text-gray-500',
  },
  {
    title: 'Followers',
    value: '+245',
    icon: <FaTwitter size={30} className="text-white" />,
    bgColor: 'bg-sky-500',
    footer: 'Just Updated',
    footerColor: 'text-gray-500',
  },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex items-center p-4">
            <div className={`p-4 rounded-xl ${card.bgColor} mr-4`}>
              {card.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>
              <h2 className="text-xl font-semibold">{card.value}</h2>
            </div>
          </div>
          <div className={`px-4 py-2 border-t ${card.footerColor} text-sm`}>
            {card.footer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

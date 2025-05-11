import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="service-card bg-white rounded-lg shadow-card p-6 h-full">
      <div className="text-gold-400 mb-4">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-semibold text-primary-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;
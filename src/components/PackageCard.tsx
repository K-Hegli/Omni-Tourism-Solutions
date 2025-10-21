import React from "react";
import { MiniIcon, AlphaIcon, OmegaIcon } from "./ServiceIcons";

interface PackageCardProps {
  id: string;
  title: string;
  price: string;
  monthly: string;
  hint: string;
  description: string;
}

export default function PackageCard({ id, title, price, monthly, hint, description }: PackageCardProps) {
  const renderIcon = () => {
    switch (id) {
      case 'mini':
        return <MiniIcon className="w-8 h-8 text-[#ff5c33]" />;
      case 'alpha':
        return <AlphaIcon className="w-8 h-8 text-[#ff5c33]" />;
      case 'omega':
        return <OmegaIcon className="w-8 h-8 text-[#ff5c33]" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 flex flex-col justify-between shadow-md border border-[#ff5c33]/20">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xl font-heading text-offWhite">{title}</h3>
        {renderIcon()}
      </div>

      <p className="text-2xl text-[#ff5c33] font-semibold">{price}</p>
      <p className="text-sm text-gray-400 mb-2">{monthly}</p>
      <p className="text-sm text-gray-300 italic mb-4">{hint}</p>

      <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}

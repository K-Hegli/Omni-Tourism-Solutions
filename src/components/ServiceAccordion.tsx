import { useState } from "react";
import { WebDevIcon, SEOIcon, SocialMediaIcon, PhotoVideoIcon } from "./ServiceIcons";

interface Tier {
  name: string;
  description: string;
  price: string;
}

interface ServiceAccordionProps {
  title: string;
  description: string;
  icon?: string;
  tiers: Tier[];
}

// Icon mapping
const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  WebDevIcon,
  SEOIcon,
  SocialMediaIcon,
  PhotoVideoIcon,
};

export default function ServiceAccordion({ title, description, icon, tiers }: ServiceAccordionProps) {
  const [open, setOpen] = useState(false);
  const IconComponent = icon ? iconMap[icon] : null;

  // Sort tiers by price to find the starting package
  const sortedTiers = [...tiers].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/,/g, ''));
    const priceB = parseFloat(b.price.replace(/,/g, ''));
    return priceA - priceB;
  });
  const startingTier = sortedTiers[0];
  const upgradeTiers = sortedTiers.slice(1);

  return (
    <div className="accordion service-card">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="accordion-header group"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4 text-left flex-1">
          {/* Icon with glow effect */}
          {IconComponent && (
            <div className="accordion-icon service-icon-wrapper flex-shrink-0">
              <IconComponent className="accordion-icon" />
            </div>
          )}
          
          {/* Title and Description */}
          <div className="flex-1 min-w-0">
            <h3 className="font-heading text-xl font-bold text-offWhite mb-2 group-hover:text-[#ff5c33] transition-colors duration-300">
              {title}
            </h3>
            <p className="font-body text-sm md:text-base text-[#ff5c33] font-semibold leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Chevron */}
        <svg
          className={`w-6 h-6 text-[#ff5c33] transition-transform duration-300 flex-shrink-0 ml-4 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Body */}
      {open && (
        <div className="accordion-content animate-slideDown">
          {/* Starting Package */}
          <div className="starting-package">
            <div className="mb-3">
              <h4 className="starting-title">
                Starting from — {startingTier.name} — €{startingTier.price}
              </h4>
              <p className="starting-description">
                {startingTier.description}
              </p>
            </div>
          </div>

          {/* Upgrades Section */}
          {upgradeTiers.length > 0 && (
            <div className="upgrades">
              <h5 className="upgrades-title">
                Available Upgrades
              </h5>
              
              <ul className="upgrades-list">
                {upgradeTiers.map((tier, i) => (
                  <li key={i} className="upgrades-item">
                    <div className="flex-1">
                      <span className="font-heading font-medium text-offWhite">
                        {tier.name}
                      </span>
                      <span className="font-body text-sm text-gray-400">
                        {" — " + tier.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              
              <p className="upgrades-note">
                All upgrades are priced after a short discovery call to confirm your specific requirements and scope.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import React from "react";

interface ReportSectionProps {
  title: string;
  icon?: string;
  subtitle?: string;
  children: React.ReactNode;
  startOnNewPage?: boolean;
}

const ReportSection: React.FC<ReportSectionProps> = ({
  title,
  icon,
  subtitle,
  children,
  startOnNewPage = false
}) => {
  return (
    <section className={`report-section mb-12 print-section ${startOnNewPage ? 'page-break' : ''}`}>
      <div className="section-header flex items-center gap-3 mb-4">
        {icon && (
          <img
            src={icon}
            alt=""
            className="section-icon w-8 h-8 flex-shrink-0"
          />
        )}
        <h2 className="section-title text-2xl font-heading text-offWhite mb-0 border-b-2 border-[#ff5c33] pb-2 flex-1">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="section-subtitle text-lg text-gray-300 mb-6 font-body">
          {subtitle}
        </p>
      )}
      <div className="section-body space-y-4 pl-4 border-l-2 border-gray-700">
        {children}
      </div>
    </section>
  );
};

export default ReportSection;

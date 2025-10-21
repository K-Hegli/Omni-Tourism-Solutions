import React from "react";

interface ReportCoverProps {
  clientName?: string;
  date?: string;
}

const ReportCover: React.FC<ReportCoverProps> = ({
  clientName = "Business Assessment",
  date = new Date().toLocaleDateString()
}) => {
  return (
    <section className="report-cover print-section page-break">
      <div className="cover-content">
        <div className="cover-logo mb-12">
          <h1 className="text-5xl font-heading font-bold text-offWhite mb-4">
            Omni Solutions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff2a5f] to-[#ff5c33] mx-auto"></div>
        </div>

        <div className="cover-title mb-8">
          <h2 className="text-4xl font-heading font-bold text-offWhite mb-4">
            Business Assessment Report
          </h2>
          <p className="text-xl text-gray-300 font-body">
            Strategic Analysis & Growth Opportunities
          </p>
        </div>

        <div className="cover-meta mt-16">
          <div className="text-center">
            <p className="text-lg text-gray-400 font-body mb-2">
              Prepared for: <span className="text-offWhite font-semibold">{clientName}</span>
            </p>
            <p className="text-lg text-gray-400 font-body">
              Date: <span className="text-offWhite font-semibold">{date}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportCover;
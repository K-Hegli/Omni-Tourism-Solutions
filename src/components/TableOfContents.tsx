import React from "react";

interface TOCSection {
  title: string;
  page: number;
}

interface TableOfContentsProps {
  sections?: TOCSection[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  // Default sections if none provided
  const defaultSections: TOCSection[] = [
    { title: "SWOT Analysis", page: 3 },
    { title: "Business Capabilities Assessment", page: 4 },
  ];

  const tocSections = sections || defaultSections;

  return (
    <section className="toc-section print-section">
      <div className="space-y-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-offWhite mb-4">
            Table of Contents
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ff5c33] to-[#ff2a5f] mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {tocSections.map((section, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border-b border-gray-700 hover:bg-[#1a1a1a]/30 transition-colors"
              >
                <span className="font-body text-lg text-offWhite">
                  {section.title}
                </span>
                <span className="font-heading text-lg text-[#ff5c33] font-semibold">
                  {section.page}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center text-gray-500 text-sm">
            <p className="font-body italic">
              This assessment report provides a comprehensive overview of your business position,
              capabilities, and strategic opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;

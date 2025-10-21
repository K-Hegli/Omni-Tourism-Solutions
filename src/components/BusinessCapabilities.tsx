import { useState } from "react";
import { StrategyIcon, InnovationIcon } from "./ServiceIcons";

interface Capability {
  label: string;
  description: string;
  key: string;
}

export default function BusinessCapabilities() {
  const [strategic, setStrategic] = useState({
    marketingStrategy: false,
    customerPersonas: false,
    uniqueValueProp: false,
    brandGuidelines: false,
    salesProcess: false,
  });

  const [operational, setOperational] = useState({
    automatedWorkflows: false,
    dataDriven: false,
    feedbackLoop: false,
    crossCollab: false,
    continuousImprovement: false,
  });

  const strategicCapabilities: Capability[] = [
    {
      key: "marketingStrategy",
      label: "Documented Marketing Strategy",
      description: "Have you formalized your marketing plan and channels?",
    },
    {
      key: "customerPersonas",
      label: "Defined Customer Personas",
      description: "Do you have clear profiles for your ideal customers?",
    },
    {
      key: "uniqueValueProp",
      label: "Unique Value Proposition",
      description: "Is your UVP clearly stated and differentiated?",
    },
    {
      key: "brandGuidelines",
      label: "Consistent Brand Guidelines",
      description: "Do you enforce brand colors, tone, and imagery consistently?",
    },
    {
      key: "salesProcess",
      label: "Scalable Sales Process",
      description: "Do you have a repeatable, documented sales funnel?",
    },
  ];

  const operationalCapabilities: Capability[] = [
    {
      key: "automatedWorkflows",
      label: "Automated Workflows",
      description: "Are routine tasks automated (email, billing, onboarding)?",
    },
    {
      key: "dataDriven",
      label: "Data-Driven Decisions",
      description: "Do you use analytics to guide your strategy?",
    },
    {
      key: "feedbackLoop",
      label: "Customer Feedback Loop",
      description: "Do you systematically collect and act on user feedback?",
    },
    {
      key: "crossCollab",
      label: "Cross-Functional Collaboration",
      description: "Do teams share goals, data, and processes seamlessly?",
    },
    {
      key: "continuousImprovement",
      label: "Continuous Improvement",
      description: "Do you regularly review and optimize workflows?",
    },
  ];

  const handleStrategicToggle = (key: string) => {
    setStrategic((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const handleOperationalToggle = (key: string) => {
    setOperational((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <div className="space-y-8">
      {/* Strategic Foundation Table */}
      <div className="capabilities-table">
        <div className="flex items-center gap-2 mb-4">
          <StrategyIcon className="w-6 h-6 text-[#ff5c33]" />
          <h3 className="font-heading text-xl font-semibold text-offWhite">
            Strategic Foundation & Marketing
          </h3>
        </div>
        <p className="font-body text-gray-300 text-lg mb-6 leading-relaxed max-w-3xl"
           style={{
             textShadow: '0 0 15px rgba(255, 255, 255, 0.05)',
             fontFamily: 'Inter, sans-serif'
           }}>
          These capabilities form the foundation of your business strategy and customer acquisition efforts.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse capabilities-grid">
            <thead>
              <tr className="bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] border-b-2 border-[#ff5c33]">
                <th className="text-left p-3 font-heading text-offWhite font-semibold">Capability</th>
                <th className="text-left p-3 font-heading text-offWhite font-semibold">Description</th>
                <th className="text-center p-3 font-heading text-offWhite font-semibold w-24">Status</th>
              </tr>
            </thead>
            <tbody>
              {strategicCapabilities.map((cap) => (
                <tr key={cap.key} className="border-b border-gray-700 hover:bg-[#1a1a1a]/50 transition-colors">
                  <td className="p-4 font-body text-offWhite font-medium text-lg">{cap.label}</td>
                  <td className="p-4 font-body text-gray-300 text-base leading-relaxed">{cap.description}</td>
                  <td className="p-4 text-center">
                    <input
                      type="checkbox"
                      checked={strategic[cap.key as keyof typeof strategic]}
                      onChange={() => handleStrategicToggle(cap.key)}
                      className="w-6 h-6 accent-[#ff5c33] cursor-pointer print-checkbox"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Operational Excellence Table */}
      <div className="capabilities-table">
        <div className="flex items-center gap-2 mb-4">
          <InnovationIcon className="w-6 h-6 text-[#ff5c33]" />
          <h3 className="font-heading text-xl font-semibold text-offWhite">
            Operational Excellence & Innovation
          </h3>
        </div>
        <p className="font-body text-gray-300 text-lg mb-6 leading-relaxed max-w-3xl"
           style={{
             textShadow: '0 0 15px rgba(255, 255, 255, 0.05)',
             fontFamily: 'Inter, sans-serif'
           }}>
          These operational capabilities determine your ability to scale efficiently and adapt to market changes.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse capabilities-grid">
            <thead>
              <tr className="bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] border-b-2 border-[#ff5c33]">
                <th className="text-left p-3 font-heading text-offWhite font-semibold">Capability</th>
                <th className="text-left p-3 font-heading text-offWhite font-semibold">Description</th>
                <th className="text-center p-3 font-heading text-offWhite font-semibold w-24">Status</th>
              </tr>
            </thead>
            <tbody>
              {operationalCapabilities.map((cap) => (
                <tr key={cap.key} className="border-b border-gray-700 hover:bg-[#1a1a1a]/50 transition-colors">
                  <td className="p-4 font-body text-offWhite font-medium text-lg">{cap.label}</td>
                  <td className="p-4 font-body text-gray-300 text-base leading-relaxed">{cap.description}</td>
                  <td className="p-4 text-center">
                    <input
                      type="checkbox"
                      checked={operational[cap.key as keyof typeof operational]}
                      onChange={() => handleOperationalToggle(cap.key)}
                      className="w-6 h-6 accent-[#ff5c33] cursor-pointer print-checkbox"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

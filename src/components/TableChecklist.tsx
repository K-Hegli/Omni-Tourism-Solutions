import React from "react";

interface ChecklistItem {
  id: string;
  title: string;
  short: string;
  checked: boolean;
}

interface TableChecklistProps {
  title: string;
  items: ChecklistItem[];
}

const TableChecklist: React.FC<TableChecklistProps> = ({ title, items }) => {
  return (
    <div className="checklist-container">
      <h3 className="text-xl font-heading font-semibold text-offWhite mb-4">{title}</h3>
      <table className="checklist w-full border-collapse border-2 border-gray-800">
        <thead>
          <tr className="bg-gray-800/50">
            <th className="text-left p-4 font-semibold text-offWhite border-2 border-gray-600">Capability</th>
            <th className="text-left p-4 font-semibold text-offWhite border-2 border-gray-600">Why it matters</th>
            <th className="text-center p-4 font-semibold text-offWhite border-2 border-gray-600 w-20">Status</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b-2 border-gray-700/50">
              <td className="p-4 text-gray-300 font-body border-r-2 border-gray-600">{item.title}</td>
              <td className="p-4 text-gray-300 font-body border-r-2 border-gray-600">{item.short}</td>
              <td className="p-4 text-center border-r-2 border-gray-600">
                <span className={`inline-block w-8 h-8 rounded-full border-2 flex items-center justify-center text-lg font-bold ${
                  item.checked
                    ? 'bg-[#ff5c33] border-[#ff5c33] text-white'
                    : 'border-gray-500 bg-gray-800'
                }`}>
                  {item.checked ? '✓' : '○'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableChecklist;
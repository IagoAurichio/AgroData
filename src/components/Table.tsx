import React from "react";

type HistoricalDataRow = {
  date: string;
  cafe: number | null;
  milho: number | null;
  usd: number | null;
};

type TableProps = {
  data: HistoricalDataRow[];
  period: number;
  setPeriod: (value: number) => void;
};

const Table: React.FC<TableProps> = ({
  data,
  period,
  setPeriod,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 p-6 mt-8 mb-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-black">Dados Históricos</h3>
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-900">Período:</span>
          <select
            className="border-gray-300 border rounded-md px-8 py-2 pl-2 text-gray-800 font-medium cursor-pointer focus:outline-none"
            value={period}
            onChange={(e) => setPeriod(Number(e.target.value))}
          >
            <option value={3}>Últimos 3 meses</option>
            <option value={6}>Últimos 6 meses</option>
            <option value={12}>Últimos 12 meses</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-100">
            <tr className="border-b border-gray-300">
              <th className="px-6 py-3 text-left text-sm text-gray-900">Data</th>
              <th className="px-6 py-3 text-left text-sm text-gray-900">Café</th>
              <th className="px-6 py-3 text-left text-sm text-gray-900">Milho</th>
              <th className="px-6 py-3 text-left text-sm text-gray-900">USD/BRL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                  {row.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-[#6B4226]">
                  {row.cafe !== null ? `$${row.cafe}` : "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-700">
                  {row.milho !== null ? `$${row.milho}` : "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700">
                  {row.usd !== null ? `R$${row.usd}` : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

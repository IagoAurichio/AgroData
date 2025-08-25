import { TrendingUp } from "lucide-react";
import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

type ChartProps = {
  data: any[];
};

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <div className="rounded-lg border border-gray-200 p-6 mt-8">
      <div className="flex items-center mb-4">
        <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
        <h3 className="text-lg font-semibold text-black">Evolução dos Preços</h3>
      </div>
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#6B7280" }} />
            <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cafe" name="Café" stroke="#A0522D" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="milho" name="Milho" stroke="#F59E0B" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="usd" name="USD/BRL" stroke="#3B82F6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;

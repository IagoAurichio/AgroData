import { Coffee, TrendingUp, DollarSign } from "lucide-react";

type CardProps = {
  title: string;
  value: number | null;
  date: string | null;
  variation?: number | null;
};

const Card: React.FC<CardProps> = ({ title, value, date, variation }) => {
  // Define cores e ícones com base no title
  const config = {
    cafe: { bg: "#F5E4D7", border: "#A0522D", text: "#6B4226", icon: <Coffee className="w-8 h-8 text-[#6B4226]" /> },
    milho: { bg: "#FEF3C7", border: "#F59E0B", text: "#B45309", icon: <TrendingUp className="w-8 h-8 text-yellow-500" /> },
    usd: { bg: "#DBEAFE", border: "#3B82F6", text: "#1D4ED8", icon: <DollarSign className="w-8 h-8 text-blue-500" /> },
  };

  const key = title.toLowerCase();
  const color = config[key as keyof typeof config] || config.usd;

  const variationBgColor =
    (variation ?? 0) >= 0 ? "bg-green-200" : "bg-red-200";
  const variationTextColor =
    (variation ?? 0) >= 0 ? "text-green-700" : "text-red-700";

  return (
    <div
      className={`rounded-lg border p-6`}
      style={{ backgroundColor: color.bg, borderColor: color.border }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-md text-black font-semibold">{title}</h3>
        {color.icon}
      </div>
      <div className="flex items-baseline space-x-2">
        <span className={`text-2xl font-bold`} style={{ color: color.text }}>
          {value ? `$${value}` : "-"}
        </span>
        {title !== "USD/BRL" && <span className="text-sm text-gray-900">/Kg</span>}
      </div>
      {date && (
        <div className="flex flex-wrap items-center justify-between mt-2">
          <div className="text-xs text-gray-600">{date}</div>
          {variation !== undefined && (
            <div className={`flex items-center mt-2 ${variationBgColor} rounded-xl px-3`}>
              <span className={`text-sm ${variationTextColor}`}>
                {variation?.toFixed(2) ? variation?.toFixed(2) + "%" : "-"}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;

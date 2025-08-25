import { NextResponse } from "next/server";

type CommoditiesData = {
  date: string;
  cafe: number | null;
  milho: number | null;
  usd: number | null;
};

function convertCentsPerPoundToUSDPerKg(valueInCentsPerPound: number | null): number | null {
  if (valueInCentsPerPound === null) return null;

  const usdPerLb = valueInCentsPerPound / 100   // cents → USD/lb
  const usdPerKg = usdPerLb / 0.453592;         // USD/lb → USD/kg
  return parseFloat(usdPerKg.toFixed(2));
}

function parseCommoditiesWithUSD(cafe: any, milho: any, usd: Record<string, any>): CommoditiesData[] {
  const cafeSeries = cafe["data"] || [];
  const milhoSeries = milho["data"] || [];
  const usdSeries = usd ? usd["Time Series FX (Monthly)"] || {} : {};

  const allDates = new Set([
    ...cafeSeries.map((d: any) => d.date),
    ...milhoSeries.map((d: any) => d.date),
  ]);

  return Array.from(allDates)
    .sort((a, b) => (a > b ? -1 : 1))
    .map((date) => {
      const cafeEntry = cafeSeries.find((d: any) => d.date === date);
      const milhoEntry = milhoSeries.find((d: any) => d.date === date);
      const usdEntry = usdSeries[date];

      return {
        date: formatDateBR(date),
        cafe: cafeEntry ? convertCentsPerPoundToUSDPerKg(Number(cafeEntry.value)) : null,
        milho: milhoEntry ? convertCentsPerPoundToUSDPerKg(Number(milhoEntry.value)) : null,
        usd: usdEntry ? parseFloat(usdEntry["4. close"]) : null,
      };
    });
}

function formatDateBR(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

export async function GET() {
  const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
  if (!API_KEY) {
    return NextResponse.json({ error: "API Key inválida!" }, { status: 500 });
  }

  try {
    const [cafeRes, milhoRes, usdRes] = await Promise.all([
      fetch(`https://www.alphavantage.co/query?function=COFFEE&interval=monthly&apikey=${API_KEY}`),
      fetch(`https://www.alphavantage.co/query?function=CORN&interval=monthly&apikey=${API_KEY}`),
      fetch(`https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=USD&to_symbol=BRL&apikey=${API_KEY}`)
    ]);

    const [cafeData, milhoData, usdData] = await Promise.all([cafeRes.json(), milhoRes.json(), usdRes.json()]);

    const parsed = parseCommoditiesWithUSD(cafeData, milhoData, usdData);

    return NextResponse.json(parsed);

  } catch (err) {
    console.error("Erro na rota commodities:", err);
    return NextResponse.json({ error: "Falha ao buscar dados" }, { status: 500 });
  }
}


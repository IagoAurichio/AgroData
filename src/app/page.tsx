"use client";

import React, { useEffect, useState } from "react";
import { Key, Wifi } from "lucide-react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import Table from "@/components/Table";

export type CommoditiesData = {
  date: string;
  cafe: number | null;
  milho: number | null;
  usd: number | null;
};

export default function Home() {
  const [commodities, setCommodities] = useState<CommoditiesData[]>([]);
  const [period, setPeriod] = useState<number>(3);
  const [filteredData, setFilteredData] = useState<CommoditiesData[]>([]);
  const [usd, setUSD] = useState<{ date: string; value: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/commodities");
        const data = await res.json();
        console.log("Res Data:", data);

        if (data.error) {
          console.error("Erro API:", data.error);
          return;
        }

        const { commodities, usd } = data;

        setCommodities(commodities);
        setUSD(usd);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!commodities || commodities.length === 0) return;

    const parseDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split("/").map(Number);
      return new Date(year, month, day);
    };

    const lastDataDate = parseDate(commodities[0].date);

    const cutoffDate = new Date(lastDataDate);
    cutoffDate.setMonth(cutoffDate.getMonth() - period + 1);

    const filtered = commodities
      .map((commodity) => {
        const usdEntry = usd.find((u) => u.date === commodity.date);
        return { ...commodity, usd: usdEntry ? usdEntry.value : null };
      })
      .filter((row) => parseDate(row.date) >= cutoffDate);

    setFilteredData(filtered);
  }, [commodities, period]);

  function calculateVariation(
    current: number | null,
    previous: number | null
  ): number | null {
    if (current === null || previous === null) return null;

    return ((current - previous) / previous) * 100;
  }

  const cafeVariation = calculateVariation(
    filteredData[0]?.cafe,
    filteredData[1]?.cafe ?? null
  );
  const milhoVariation = calculateVariation(
    filteredData[0]?.milho,
    filteredData[1]?.milho ?? null
  );
  const usdVariation = calculateVariation(
    filteredData[0]?.usd,
    filteredData[1]?.usd ?? null
  );

  const defaultCommodity = { date: "-", cafe: null, milho: null, usd: null };

  const firstCommodity = (commodities ?? [])[0] ?? defaultCommodity;
  // const firstUSD = (filteredData ?? [])[0] ?? defaultCommodity;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-white">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-7 flex items-center justify-between">
            <div className="text-blue-600 mr-3 flex items-center">
              <Key className="w-4 y-4 mr-3" />
              <span className="text-blue-800 text-sm">
                API Key configurada para dados reais
              </span>
            </div>
            <div className="flex space-x-2">
              <button className="text-black text-sm hover:text-gray-700 border border-gray-300 rounded px-4 py-2 cursor-pointer bg-white">
                Editar
              </button>
              <button className="text-black text-sm hover:text-gray-700 border border-gray-300 rounded px-4 py-2 cursor-pointer bg-white">
                Remover
              </button>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5 mt-8 flex items-center">
            <Wifi className="text-green-600 w-4 y-4 mr-3" />
            <span className="text-green-800 text-sm">
              Dados atualizados - Próxima atualização em 5 segundos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card
              title="Cafe"
              value={firstCommodity.cafe}
              date={firstCommodity.date}
              variation={cafeVariation}
            />

            <Card
              title="Milho"
              value={firstCommodity.milho}
              date={firstCommodity.date}
              variation={milhoVariation}
            />

            <Card
              title="USD/BRL"
              value={firstCommodity.usd}
              date={firstCommodity.date}
              variation={usdVariation}
            />
          </div>

          <Chart
            data={filteredData.length ? filteredData : [defaultCommodity]}
          />

          <Table data={filteredData} period={period} setPeriod={setPeriod} />

          <footer className="border-t border-gray-300 mt-15 text-center">
            <h3 className="text-xs text-gray-600 mt-5">
              © 2025 AgroData - Dashboard Agrícola - Dados fornecidos por APIs
              públicas
            </h3>
          </footer>
        </main>
      </div>
    </div>
  );
}

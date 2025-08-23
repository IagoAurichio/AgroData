'use client'

import React from "react";
import {
  Wheat,
  LogOut,
  House,
  ChartColumn,
  TrendingUp,
  DollarSign,
  Users,
  Settings,
  Key,
  Wifi,
} from "lucide-react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function Home() {

  const chartData = [
    { date: '24/04/2025', soja: 12, milho: 5.25, usd: 4 },
    { date: '25/04/2025', soja: 10, milho: 4.75, usd: 4 },
    { date: '26/04/2025', soja: 14, milho: 5.09, usd: 4 },
    { date: '27/04/2025', soja: 16, milho: 5.28, usd: 4 },
    { date: '28/04/2025', soja: 15, milho: 4.94, usd: 4 },
    { date: '29/04/2025', soja: 14, milho: 4.04, usd: 4 },
    { date: '30/04/2025', soja: 15, milho: 4.43, usd: 4 }
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Wheat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  AgroData
                </h1>
                <p className="text-sm text-gray-500">Dashboard Agrícola</p>
              </div>
            </div>
            <div className="absolute top-0 bottom-0 h-screen left-65 w-px bg-gray-300 mx-4"></div>
            <div className="ml-25">
              <h2 className="text-xl font-semibold text-gray-900">
                Dashboard Agrícola
              </h2>
              <p className="text-sm text-gray-500">
                Monitoramento de Commodities em Tempo Real
              </p>
            </div>
          </div>
          <button className="flex items-center border border-gray-300 rounded px-4 py-2 text-gray-800 hover:text-gray-700 text-sm font-medium cursor-pointer">
            <LogOut className="w-4 y-4 text-black mr-3" />
            Logout
          </button>
        </div>
      </div>

      <div className="flex h-screen">
        {/* SIDEBAR */}
        <div className="w-65 bg-gray-100 border-gray-200">
          <div className="p-4">
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                NAVEGAÇÃO PRINCIPAL
              </h3>
              <nav className="space-y-1">
                <a
                  href="#"
                  className="bg-gray-200 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <House className="w-4 y-4 mr-3" />
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-200 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <Wheat className="w-4 y-4 mr-3" />
                  Commodities
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-200 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <TrendingUp className="w-4 y-4 mr-3" />
                  Análises
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-200 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <ChartColumn className="w-4 y-4 mr-3" />
                  Relatórios
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-200 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <DollarSign className="w-4 y-4 mr-3" />
                  Câmbio
                </a>
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                GERENCIAMENTO
              </h3>
              <nav className="space-y-1">
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-200 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <Users className="w-4 y-4 mr-3" />
                  Usuários
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-200 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  <Settings className="w-4 y-4 mr-3" />
                  Configurações
                </a>
              </nav>
              {/* BLOCO DE USUÁRIO */}
              <div className="absolute left-0 w-65 h-px bg-gray-300 mt-50">
                <div className="flex items-center space-x-3 p-4">
                  <img src="/profile-icon.png" className="w-10 h-10" />
                  <div>
                    <h1 className="text-lg text-gray-900">Agro User</h1>
                    <p className="text-sm text-gray-500">admin@agrodata.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6">
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
            {/* Soja Card */}
            <div className="bg-green-50 rounded-lg border border-green-300 p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-medium text-black font-semibold">
                  Soja
                </h3>
                <Wheat className="w-8 h-8 text-green-500" />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-black">$21.77</span>
                <span className="text-sm text-gray-900">/ETF</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-600 mt-1">2025-05-24</div>
                <div className="flex items-center mt-2 bg-red-200 rounded-xl px-3">
                  <span className="text-sm text-red-700">-1.53%</span>
                </div>
              </div>
            </div>
            {/* Milho Card */}
            <div className="bg-yellow-50 rounded-lg border border-yellow-300 p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-medium text-black font-semibold">
                  Soja
                </h3>
                <TrendingUp className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-black">$18.24</span>
                <span className="text-sm text-gray-900">/ETF</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-600 mt-1">2025-05-24</div>
                <div className="flex items-center mt-2 bg-red-200 rounded-xl px-3">
                  <span className="text-sm text-red-700">-0.76%</span>
                </div>
              </div>
            </div>
            {/* USD Card */}
            <div className="bg-blue-50 rounded-lg border border-blue-300 p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-md font-medium text-black font-semibold">
                  USD/BRL
                </h3>
                <DollarSign className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-black">R$5.65</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-600 mt-1">29/05/2025</div>
                <div className="flex items-center mt-2 bg-green-200 rounded-xl px-3">
                  <span className="text-sm text-green-700">+0.55%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="rounded-lg border border-gray-200 p-6 mt-8">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Evolução dos Preços</h3>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray=" 3 3" />
                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 12, fill: '#6B7280'}}
                  />
                  <YAxis
                    tick={{ fontSize: 12, fill: '#6B7280'}}
                  />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="soja"
                    name="Soja"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="milho"
                    name="Milho"
                    stroke="#F59E0B"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="usd" 
                    name="USD/BRL"
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

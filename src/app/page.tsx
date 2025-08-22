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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
          <button className="flex items-center border border-gray-300 rounded px-4 py-2 text-black hover:text-gray-700 text-sm font-medium cursor-pointer">
            <LogOut className="w-4 y-4 text-black mr-3" />
            Logout
          </button>
        </div>
      </div>

      <div className="flex h-screen">
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
              <div className="absolute left-0 w-65 h-px bg-gray-300 mt-50">
                <div className="flex items-center space-x-3 p-4">
                  <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                    <h3 className="text-green-700">AG</h3>
                  </div>
                  <div>
                    <h1 className="text-lg text-gray-900">
                      Agro User
                    </h1>
                    <p className="text-sm text-gray-500">admin@agrodata.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

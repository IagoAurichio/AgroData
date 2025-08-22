import React from "react";
import { Wheat } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gray-100 border-b border-gray-200 px-6 py-4">
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
            <div className="ml-20">
              <h2 className="text-xl font-semibold text-gray-900">
                Dashboard Agrícola
              </h2>
              <p className="text-sm text-gray-500">
                Monitoramento de Commodities em Tempo Real
              </p>
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

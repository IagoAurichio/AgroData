import { Wheat, LogOut } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <Wheat className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">AgroData</h1>
              <p className="text-sm text-gray-500">Dashboard Agrícola</p>
            </div>
          </div>
          <div className="ml-18">
            <h2 className="text-xl font-semibold text-gray-900">
              Dashboard Agrícola
            </h2>
            <p className="text-sm text-gray-500">
              Monitoramento de Commodities em Tempo Real
            </p>
          </div>
        </div>
        <button className="flex items-center border border-gray-300 rounded px-2 py-1 text-gray-800 hover:text-gray-700 text-sm font-medium cursor-pointer md:px-4 md:py-2 sm:my-2 xs-my-2">
          <LogOut className="w-4 y-4 text-black mr-3" />
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;

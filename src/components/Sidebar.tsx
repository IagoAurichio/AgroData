import {
  House,
  Wheat,
  TrendingUp,
  ChartColumn,
  DollarSign,
  Users,
  Settings,
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <div className="w-65 bg-gray-100 border-r border-gray-200 hidden md:flex flex-col">
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
          
          <div className="flex items-center space-x-3 p-l-2 py-4 border-t border-gray-300 mt-50">
            <img src="/profile-icon.png" className="w-10 h-10" />
            <div>
              <h1 className="text-lg text-gray-900">Agro User</h1>
              <p className="text-sm text-gray-500">admin@agrodata.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

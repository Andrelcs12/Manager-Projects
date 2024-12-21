import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTachometerAlt, FaProjectDiagram, FaBox, FaUser, FaChevronDown, FaChevronRight } from 'react-icons/fa';

function Sidebar() {
  const [activeNav, setActiveNav] = useState('inicio');
  const [expandedSections, setExpandedSections] = useState({});

  const handleNavClick = (nav) => {
    setActiveNav(nav);
  };

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="flex fixed h-screen flex-col justify-between bg-slate-800 text-gray-200 w-64 border-r border-gray-700">
      <div className="px-6 py-6">
        <div className="text-center mb-6">
          <span className="h-12 w-40 mx-auto text-xl font-bold items-center justify-center flex rounded-lg bg-gray-100 text-gray-700">
            LOJA DO DRÉ
          </span>
        </div>

        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              onClick={() => handleNavClick('inicio')}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                activeNav === 'inicio' ? 'bg-gray-600 text-white' : 'hover:bg-gray-700'
              }`}
            >
              <FaHome className="text-lg" />
              Início
            </Link>
          </li>

          <li>
            <button
              onClick={() => toggleSection('painel')}
              className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 hover:bg-gray-700"
            >
              <div className="flex items-center gap-3">
                <FaTachometerAlt className="text-lg" />
                Painel
              </div>
              {expandedSections.painel ? <FaChevronDown /> : <FaChevronRight />}
            </button>

            {expandedSections.painel && (
              <ul className="ml-6 mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    to="/dashboard/analytics"
                    className={`block rounded-lg px-4 py-2 ${
                      activeNav === 'analises' ? 'bg-gray-600 text-white' : 'hover:bg-gray-700'
                    }`}
                    onClick={() => handleNavClick('analises')}
                  >
                    Análises
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/reports"
                    className={`block rounded-lg px-4 py-2 ${
                      activeNav === 'relatorios' ? 'bg-gray-600 text-white' : 'hover:bg-gray-700'
                    }`}
                    onClick={() => handleNavClick('relatorios')}
                  >
                    Relatórios
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => toggleSection('projetos')}
              className="flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 hover:bg-gray-700"
            >
              <div className="flex items-center gap-3">
                <FaProjectDiagram className="text-lg" />
                Projetos
              </div>
              {expandedSections.projetos ? <FaChevronDown /> : <FaChevronRight />}
            </button>

            {expandedSections.projetos && (
              <ul className="ml-6 mt-2 space-y-2 text-sm">
                <li>
                  <Link
                    to="/projects/team"
                    className={`block rounded-lg px-4 py-2 ${
                      activeNav === 'equipe' ? 'bg-gray-600 text-white' : 'hover:bg-gray-700'
                    }`}
                    onClick={() => handleNavClick('equipe')}
                  >
                    Projetos em Equipe
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects/individual"
                    className={`block rounded-lg px-4 py-2 ${
                      activeNav === 'individuais' ? 'bg-gray-600 text-white' : 'hover:bg-gray-700'
                    }`}
                    onClick={() => handleNavClick('individuais')}
                  >
                    Projetos Individuais
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/products"
              onClick={() => handleNavClick('produtos')}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                activeNav === 'produtos' ? 'bg-gray-600 text-white' : 'hover:bg-gray-700'
              }`}
            >
              <FaBox className="text-lg" />
              Produtos
            </Link>
          </li>

          <li>
            <Link
              to="/profile"
              onClick={() => handleNavClick('perfil')}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 ${
                activeNav === 'perfil' ? 'bg-gray-600 text-white' : 'hover:bg-gray-700'
              }`}
            >
              <FaUser className="text-lg" />
              Perfil
            </Link>
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
        <p className="text-sm text-gray-400">&copy; 2024 Dré Enterprise</p>
      </div>
    </div>
  );
}

export default Sidebar;

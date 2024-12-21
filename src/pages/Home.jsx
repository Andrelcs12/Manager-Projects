import React from "react";
import Sidebar from "../components/Sidebar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaBell, FaTasks, FaShoppingCart, FaChartBar, FaUser } from "react-icons/fa";

const Home = () => {
    const data = [
        { month: 'Janeiro', vendas: 300 },
        { month: 'Fevereiro', vendas: 450 },
        { month: 'Março', vendas: 500 },
        { month: 'Abril', vendas: 700 },
        { month: 'Maio', vendas: 800 },
        { month: 'Junho', vendas: 650 },
        { month: 'Julho', vendas: 900 },
        { month: 'Agosto', vendas: 850 },
        { month: 'Setembro', vendas: 950 },
        { month: 'Outubro', vendas: 1000 },
        { month: 'Novembro', vendas: 1100 },
        { month: 'Dezembro', vendas: 1200 },
      ];

      
  return (
    <div className="flex h-full bg-gray-400">
      <Sidebar />

      <div className="flex-1 ml-64 p-6">
       
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Dashboard Empresarial</h1>
          <div className="flex items-center gap-4">
            <button className="relative">
              <FaBell className="text-2xl text-gray-600 hover:text-gray-900" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="flex items-center gap-3">
              <FaUser className="text-2xl text-gray-600 cursor-pointer" />
              <div>
                <h2 className="font-bold">André Lucas</h2>
                <p className="text-sm text-gray-500 bg-">Administrador</p>
              </div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { title: "Produtos", value: "780", icon: <FaShoppingCart />, color: "red" },
            { title: "Vendas", value: "R$ 25.845.630,00", icon: <FaChartBar />, color: "blue" },
            { title: "Usuários", value: "13.480", icon: <FaUser />, color: "yellow" },
            { title: "Pedidos Pendentes", value: "346", icon: <FaTasks />, color: "red" },
          ].map(({ title, value, icon, color }, idx) => (
            <div
              key={idx}
              className={`p-3 h-24 bg-white shadow-md rounded-lg flex items-center gap-4 border-l-4 border-${color}-500`}
            >
              <div className={`p-3 bg-${color}-100 text-${color}-500 rounded-full text-xl `}>{icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-2xl font-bold">{value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Meta de Vendas</h3>
            <p className="mt-2 text-3xl font-bold text-blue-500">42%</p>
            <p className="text-gray-500">R$ 2.356.400,00 de R$ 8.500.000,00</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Meta de Produtos</h3>
            <p className="mt-2 text-3xl font-bold text-green-500">60%</p>
            <p className="text-gray-500">164 de 240 produtos</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-700">Satisfação do Cliente</h3>
            <p className="mt-2 text-3xl font-bold text-yellow-500">92%</p>
          </div>
        </div>

    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

  <div className="lg:col-span-2 bg-white shadow-md p-6 rounded-lg">
    <h2 className="text-xl font-semibold mb-4">Últimas Atividades</h2>
    <table className="w-full text-left text-gray-700">
      <thead>
        <tr className="border-b">
          <th className="py-2">Data</th>
          <th>Descrição</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {[
          { date: "21/12", desc: "Venda de 5 itens", status: "Concluído" },
          { date: "20/12", desc: "Novo produto adicionado", status: "Pendente" },
          { date: "19/12", desc: "Estoque atualizado", status: "Concluído" },
          { date: "18/12", desc: "Nova categoria criada", status: "Concluído" },
          { date: "17/12", desc: "Pedido cancelado", status: "Pendente" },
          { date: "16/12", desc: "Relatório mensal gerado", status: "Concluído" },
        ].map(({ date, desc, status }, idx) => (
          <tr key={idx} className="border-b">
            <td className="py-2">{date}</td>
            <td>{desc}</td>
            <td
              className={`font-bold ${
                status === "Concluído" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="mt-4 text-right">
      <a
        href="/relatorios"
        className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        Ver Relatórios
      </a>
    </div>
  </div>

          <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Progressão Anual</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="vendas" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>

    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Team Goals */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Metas da Equipe</h2>
            <ul className="space-y-4">
              {[
                { goal: "Meta de vendas: R$ 25,000", progress: 70 },
                { goal: "Meta de produtos: 120 unidades", progress: 60 },
                { goal: "Satisfação do cliente", progress: 92 },
              ].map(({ goal, progress }, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <p>{goal}</p>
                  <p className="font-bold text-blue-500">{progress}%</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Notificações</h2>
            <ul className="space-y-4">
              {[
                { message: "Pedido pendente de aprovação", type: "alert" },
                { message: "Estoque baixo em 2 produtos", type: "warning" },
                { message: "Novo administrador registrado", type: "info" },
              ].map(({ message, type }, idx) => (
                <li
                  key={idx}
                  className={`p-3 rounded-lg ${
                    type === "alert"
                      ? "bg-red-100 text-red-600"
                      : type === "warning"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



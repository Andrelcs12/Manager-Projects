// Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 text-gray-200">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <label htmlFor="email" className="block text-sm font-medium mb-2">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-gray-600 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none mb-4"
        />

        <label htmlFor="password" className="block text-sm font-medium mb-2">Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-gray-600 text-gray-200 focus:ring-2 focus:ring-blue-500 outline-none mb-6"
        />

        <Link to='/home' className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200">
          Entrar
        </Link>

        <div className="mt-4 text-center">
          <p>Não tem uma conta? <Link to="/register" className="text-blue-400 hover:underline">Cadastre-se</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
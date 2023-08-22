
import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <section>
      <div className={`flex items-center justify-center min-h-screen bg-gradient-to-r from-green-900 to-pink-900`}>
        <div className={`bg-gradient-to-r from-green-800 to-pink-800  p-10 rounded-2xl shadow-md w-96`}>
            
        
          <h1 className={`text-2xl font-semibold mb-4 text-slate-950 flex justify-center`}>Login</h1>
          <input
            type="email"
            className={`w-full p-2 border rounded mb-2`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className={`w-full p-2 border rounded mb-4`}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={`bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded w-full`}
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}

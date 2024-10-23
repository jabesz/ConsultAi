// context/Context.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simulação de lógica de login
    // Aqui você deve implementar a lógica real de autenticação
    // Exemplo simples: armazenando o email e um nome fictício
    const userData = { email, name: email.split('@')[0] }; // Extrai o nome do email
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

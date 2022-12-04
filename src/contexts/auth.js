import { createContext, useState } from "react";
import axios from 'axios';
import { decodeToken } from "react-jwt";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('userToken'));

  const login = async (username, password, setError) => {
    try {
      const rs = await axios.post('/login', { username, password });
      setToken(rs.data.data.token);
      localStorage.setItem('userToken', rs.data.data.token);
      return true;
    } catch (error) {
      setError(error.response.data.message);
    }
    return false;
  }

  const logout = () => {
    localStorage.removeItem('userToken');
    setToken(null);
  }

  const userLoggedIn = () => {
    return token !== null;
  }

  const loggedUser = () => {
    if (token) {
      return decodeToken(token)
    }

    return {}
  }

  const loggedAs = (role) => {
    return userLoggedIn() && loggedUser().role === role;
  }

  return (
    <AuthContext.Provider value={{ token, login, logout, userLoggedIn, loggedUser, loggedAs }}>
      {children}
    </AuthContext.Provider>
  );
}

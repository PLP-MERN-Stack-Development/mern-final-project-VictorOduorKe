import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const AuthContext = createContext();
import { hideConsoleLogInProduction } from "./hideLogs";
// import { hideConsoleLogInProduction } from "./hideLogs"; --- IGNORE ---
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Load user on mount (check session)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      // add a client-side timeout so the UI doesn't hang indefinitely
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        { email, password },
        { withCredentials: true, timeout: 10000 } // 10s timeout
      );

      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("Login successful");

      return res.data;
    } catch (err) {
      // log for debugging and rethrow so callers can display messages
      console.error("AuthContext.login error:", err?.response || err.message || err);
      // normalize axios error shape if possible
      const message = err.response?.data?.error || err.response?.data?.message || err.message || "Login failed";
      // rethrow an error object so callers (pages) can read err.response or err.message
      throw new Error(message);
    }
  };

  const logout = async () => {
    try {
      // send cookie-based logout request
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );

      setUser(null);
      localStorage.removeItem("user");
      toast.success("User logged out");
    } catch (err) {
      hideConsoleLogInProduction("Logout failed:", err);
      toast.error("Failed to logout");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

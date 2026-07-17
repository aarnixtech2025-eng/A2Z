import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem("admin-theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem("admin-theme", isDark ? "dark" : "light");
    
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      background: isDark ? "#0f172a" : "#ffffff",
      surface: isDark ? "#1e293b" : "#f8fafc",
      text: isDark ? "#f1f5f9" : "#0f172a",
      textSecondary: isDark ? "#94a3b8" : "#64748b",
      border: isDark ? "#334155" : "#e2e8f0",
      primary: isDark ? "#3b82f6" : "#2563eb",
      primaryHover: isDark ? "#60a5fa" : "#3b82f6",
      accent: isDark ? "#f59e0b" : "#d97706",
      success: isDark ? "#10b981" : "#059669",
      danger: isDark ? "#ef4444" : "#dc2626",
      warning: isDark ? "#f59e0b" : "#d97706",
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

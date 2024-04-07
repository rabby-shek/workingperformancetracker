import React, { createContext, useState } from "react";

// Create authentication context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  // State to manage authentication status and user data
  const [authToken, setAuthToken] = useState(false);
  const [user, setUser] = useState(null);

  // Function to handle login
  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:6060/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // If login successful, set authToken to true and save user data
        setAuthToken(true);
        setUser(data);
      } else {
        // Handle authentication error
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  // Function to handle logout
  const logout = () => {
    // Perform logout logic here
    setAuthToken(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

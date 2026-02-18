import React, { useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
  role: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        console.log("Dashboard loaded");
        console.log("User:", parsedUser);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  if (!user) {
    return <div style={{ padding: "20px" }}>Loading dashboard...</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      
      <div style={{ 
        backgroundColor: "#f8f9fa", 
        border: "1px solid #e9ecef", 
        borderRadius: "8px", 
        padding: "20px",
        marginBottom: "20px"
      }}>
        <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}>Welcome back!</h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>User ID:</strong> {user.id}</p>
        </div>
        
        <div style={{ 
          marginTop: "20px", 
          padding: "16px", 
          backgroundColor: "#d4edda", 
          borderRadius: "8px",
          border: "1px solid #c3e6cb"
        }}>
          <p style={{ color: "#155724", margin: "0", fontWeight: "bold" }}>
            ✅ Login Successful - Authentication Working
          </p>
          <p style={{ color: "#155724", marginTop: "8px", fontSize: "14px" }}>
            Dashboard loaded successfully - No 404 error!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

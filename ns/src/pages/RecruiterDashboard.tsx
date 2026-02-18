import React, { useEffect, useState } from "react";

const RecruiterDashboard = () => {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    console.log("Recruiter Dashboard loaded");

  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recruiter Dashboard</h1>

      <p>Welcome Recruiter: {user?.email}</p>

      <p>Role: {user?.role}</p>

      <p>You can manage jobs and applicants here.</p>
    </div>
  );
};

export default RecruiterDashboard;

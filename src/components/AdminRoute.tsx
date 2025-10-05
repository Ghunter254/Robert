// src/components/AdminRoute.tsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Client, Account, Teams } from "appwrite";

const client = new Client()
  .setEndpoint("http://localhost/v1") // change if deployed
  .setProject("68da2cc50027438313ca");

const account = new Account(client);
const teams = new Teams(client);

export default function AdminRoute({ children }: { children: JSX.Element }) {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const user = await account.get();
        const userTeams = await teams.list();
        setIsAdmin(userTeams.teams.some((t) => t.name === "admins"));
      } catch {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };
    checkAccess();
  }, []);

  if (loading) return <p>Loading...</p>;

  return isAdmin ? children : <Navigate to="/" replace />;
}

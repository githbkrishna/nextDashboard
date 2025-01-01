import Sidebar from "../src/components/Sidebar";
import Dashboard from "../src/components/Dashboard";


export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

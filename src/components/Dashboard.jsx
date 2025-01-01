import MachineCard from "./MachineCard";
import DashboardHeader from "./DashboardHeader";
import { machines } from "../data/machines";

export default function Dashboard() {
  return (
    <div className="flex-1 h-screen overflow-y-auto bg-gray-50">
      <DashboardHeader />
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
          {machines.map((machine, index) => (
            <MachineCard key={index} machine={machine} />
          ))}
        </div>
      </div>
    </div>
  );
}
import { getStatusColor } from "../utils/statusColors";
import { Card } from "@nextui-org/react";


export default function MachineCard({ machine }) {

  console.log(getStatusColor(machine.status));

  
  return (
    <Card className="p-4 shadow-sm bg-white rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-semibold">{machine.name}</h4>
        <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(machine.status)}`}>
          {machine.status}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Item Code:</span>
          <span>{machine.itemCode || '-'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Mould No:</span>
          <span>{machine.mouldNo || '-'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Efficiency:</span>
          <span>{machine.efficiency || '-'}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Defect %:</span>
          <span>{machine.defect || '-'}</span>
        </div>
      </div>
    </Card>
  );
}
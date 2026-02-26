export default function SystemHealthDiagram() {
  return (
    <div className="flex flex-col items-center space-y-6 relative">

      {/* Users */}
      <DiagramBox label="Users" color="blue" />

      <FlowLine />

      {/* API Gateway */}
      <DiagramBox label="API Gateway" color="purple" />

      <FlowLine />

      {/* App Server */}
      <DiagramBox label="Application Server" color="green" />

      <FlowLine />

      {/* Database */}
      <DiagramBox label="Database" color="yellow" />

      <FlowLine />

      {/* Monitoring */}
      <div className="relative">
        <DiagramBox label="Monitoring System" color="red" />
        <span className="absolute -top-2 -right-2 h-3 w-3 bg-green-500 rounded-full animate-ping"></span>
        <span className="absolute -top-2 -right-2 h-3 w-3 bg-green-500 rounded-full"></span>
      </div>

    </div>
  );
}

function DiagramBox({ label, color }) {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <div
      className={`px-5 py-2 rounded-lg shadow transition-transform duration-300 hover:scale-105 ${colors[color]}`}
    >
      {label}
    </div>
  );
}

function FlowLine() {
  return (
    <div className="relative flex justify-center">
      <div className="h-6 w-1 bg-gray-300 relative overflow-hidden">
        <div className="absolute w-full h-2 bg-purple-400 animate-flow"></div>
      </div>
    </div>
  );
}

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Fake time-series generator
const generateTrendData = () => {
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      time: `${i + 1}`,
      cpu: Math.floor(60 + Math.random() * 20),
      memory: Math.floor(50 + Math.random() * 25),
      latency: Math.floor(150 + Math.random() * 100),
    });
  }
  return data;
};

export default function PerformanceChart() {
  const data = generateTrendData();

  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

        <XAxis dataKey="time" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />

        <Tooltip />
        <Legend />

        <Line
          type="monotone"
          dataKey="cpu"
          stroke="#7c3aed"
          strokeWidth={2}
          dot={false}
        />

        <Line
          type="monotone"
          dataKey="memory"
          stroke="#22c55e"
          strokeWidth={2}
          dot={false}
        />

        <Line
          type="monotone"
          dataKey="latency"
          stroke="#f59e0b"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

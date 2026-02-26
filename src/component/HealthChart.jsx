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

// Generate fake health data
const generateHealthData = () => {
  const data = [];

  for (let i = 0; i < 20; i++) {
    data.push({
      time: `${i + 1}`,
      uptime: 99 + Math.random() * 1,
      errorRate: Math.random() * 2,
      dbLoad: 40 + Math.random() * 30,
    });
  }

  return data;
};

export default function HealthChart() {
  const data = generateHealthData();

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
          dataKey="uptime"
          stroke="#22c55e"
          strokeWidth={2}
          dot={false}
          name="Uptime (%)"
        />

        <Line
          type="monotone"
          dataKey="errorRate"
          stroke="#ef4444"
          strokeWidth={2}
          dot={false}
          name="Error Rate (%)"
        />

        <Line
          type="monotone"
          dataKey="dbLoad"
          stroke="#7c3aed"
          strokeWidth={2}
          dot={false}
          name="DB Load (%)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

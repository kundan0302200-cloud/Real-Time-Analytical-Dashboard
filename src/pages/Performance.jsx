import MetricGrid from "../component/MetricGrid";
import LargeCard from "../component/LargeCard";
import PerformanceChart from "../component/PerformanceChart";
export default function Performance() {
  const performanceMetrics = [
    { title: "CPU Usage", value: 64, unit: "%", change: "+2%", status: "warning" },
    { title: "Memory Usage", value: 72, unit: "%", change: "+1.4%", status: "warning" },
    { title: "API Latency", value: 220, unit: "ms", change: "-5ms", status: "positive" },
    { title: "Throughput", value: 1340, unit: "req/s", change: "+3%", status: "positive" },
  ];

  return (
    <div className="space-y-8">
      
      <h2 className="text-2xl font-semibold">
        Performance Metrics
      </h2>

      <MetricGrid metrics={performanceMetrics} />

      <LargeCard title="Performance Trends">
        <div className="h-80 bg-teal-100 rounded-lg flex items-center justify-center text-gray-400">
          <PerformanceChart />
        </div>
      </LargeCard>

    </div>
  );
}

import MetricGrid from "../component/MetricGrid";
import LargeCard from "../component/LargeCard";
import HealthChart from "../component/HealthChart";
import SystemHealthDiagram from "../component/SystemHealthDiagram";
export default function Health() {
  const healthMetrics = [
    { title: "Service Uptime", value: 99.98, unit: "%", change: "Stable", status: "positive" },
    { title: "Error Rate", value: 0.6, unit: "%", change: "-0.2%", status: "positive" },
    { title: "Database Load", value: 58, unit: "%", change: "+1%", status: "warning" },
    { title: "Queue Size", value: 42, change: "+3", status: "neutral" },
  ];

  return (
    <div className="space-y-8">
      
      <h2 className="text-2xl font-semibold">
        System Health
      </h2>

      <MetricGrid metrics={healthMetrics} />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <LargeCard title="System Health Trends">
          <HealthChart />
        </LargeCard>

        <LargeCard title="System Architecture Flow">
          <SystemHealthDiagram />
        </LargeCard>

      </section>

    </div>
  );
}


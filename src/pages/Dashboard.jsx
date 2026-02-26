import { useMetrics } from "../context/MetricsContext";
import MetricGrid from "../component/MetricGrid";
import LargeCard from "../component/LargeCard";
import PerformanceChart from "../component/PerformanceChart";
import DistributionChart from "../component/DistributionChart";
import DashboardEventFeed from "../component/DashboardEventFeed";

export default function Dashboard() {
  const { metrics, error } = useMetrics();

  if (error) {
    return (
      <div className="bg-red-100 text-red-600 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* 1️⃣ KPI Summary Row */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Executive Overview
        </h2>

        <MetricGrid metrics={metrics} />
      </section>


      {/* 2️⃣ Multi-Metric Trend Chart */}
      <section>
        <LargeCard title="Performance Trends (Last 30 Minutes)">
          <PerformanceChart />

        </LargeCard>
      </section>


      {/* 3️⃣ Distribution + Alerts */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

       <LargeCard title="Resource Distribution">
          <DistributionChart />
        </LargeCard>

        <LargeCard title="Active Alerts">
          <div className="space-y-4">

            <div className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-sm font-medium text-yellow-700">
                High CPU usage detected
              </p>
              <p className="text-xs text-yellow-600">
                Above 80% for 5 minutes
              </p>
            </div>

            <div className="p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
              <p className="text-sm font-medium text-red-700">
                API timeout spike
              </p>
              <p className="text-xs text-red-600">
                Latency above threshold
              </p>
            </div>

          </div>
        </LargeCard>

      </section>


      {/* 4️⃣ Top Services + Events */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <LargeCard title="Top Services by Traffic">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="pb-2">Service</th>
                <th className="pb-2">Requests</th>
                <th className="pb-2">Errors</th>
                <th className="pb-2">Latency</th>
              </tr>
            </thead>
            <tbody className="space-y-2">

              <tr className="border-t">
                <td className="py-2">Auth API</td>
                <td>12,340</td>
                <td className="text-red-500">34</td>
                <td>210ms</td>
              </tr>

              <tr className="border-t">
                <td className="py-2">Payments</td>
                <td>9,845</td>
                <td className="text-yellow-500">12</td>
                <td>180ms</td>
              </tr>

            </tbody>
          </table>
        </LargeCard>
        
<div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
            
            <LargeCard title="Recent Events">
              <DashboardEventFeed />
        </LargeCard>
          </div>

        


        
      </section>

    </div>
  );
}





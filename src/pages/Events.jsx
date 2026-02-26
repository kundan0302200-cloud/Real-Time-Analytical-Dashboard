import { useEffect, useState } from "react";
import { useMetrics } from "../context/MetricsContext";
import LargeCard from "../component/LargeCard";

export default function Events() {
  const { autoRefresh } = useMetrics();
  const [events, setEvents] = useState([]);

  // Simulated real-time event generator
  useEffect(() => {
    if (!autoRefresh) return;

    const eventTypes = ["INFO", "WARNING", "ERROR"];
    const messages = [
      "User logged in",
      "High CPU usage detected",
      "API timeout occurred",
      "New deployment successful",
      "Database connection restored",
      "Memory usage exceeded threshold",
    ];

    const interval = setInterval(() => {
      const newEvent = {
        id: Date.now(),
        type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
        message:
          messages[Math.floor(Math.random() * messages.length)],
        time: new Date().toLocaleTimeString(),
      };

      setEvents((prev) => [newEvent, ...prev.slice(0, 9)]);
    }, 3000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const typeColors = {
    INFO: "text-blue-600 bg-blue-50",
    WARNING: "text-yellow-600 bg-yellow-50",
    ERROR: "text-red-600 bg-red-50",
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">
        Events & Logs
      </h2>

      <LargeCard title="Recent Events">
        <div className="space-y-4 max-h-[500px] overflow-y-auto">

          {events.length === 0 && (
            <div className="text-gray-400 text-sm">
              Waiting for events...
            </div>
          )}

          {events.map((event) => (
            <div
              key={event.id}
              className="flex justify-between items-center p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow"
            >
              <div>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded ${typeColors[event.type]}`}
                >
                  {event.type}
                </span>

                <p className="text-sm text-gray-700 mt-1">
                  {event.message}
                </p>
              </div>

              <span className="text-xs text-gray-400">
                {event.time}
              </span>
            </div>
          ))}
        </div>
      </LargeCard>
    </div>
  );
}




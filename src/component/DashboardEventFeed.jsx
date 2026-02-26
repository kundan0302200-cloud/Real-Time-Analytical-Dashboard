import { useEffect, useState } from "react";

export default function DashboardEventFeed() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventTypes = ["INFO", "WARNING", "ERROR"];
    const messages = [
      "User login detected",
      "High CPU usage",
      "API timeout occurred",
      "Database reconnected",
      "New deployment completed",
    ];

    const interval = setInterval(() => {
      const newEvent = {
        id: Date.now(),
        type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
        message:
          messages[Math.floor(Math.random() * messages.length)],
        time: new Date().toLocaleTimeString(),
      };

      setEvents((prev) => [newEvent, ...prev.slice(0, 5)]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const typeStyles = {
    INFO: "bg-blue-50 text-blue-600",
    WARNING: "bg-yellow-50 text-yellow-600",
    ERROR: "bg-red-50 text-red-600",
  };

  return (
    <div className="space-y-4 max-h-[300px] overflow-y-auto">

      {events.length === 0 && (
        <p className="text-gray-400 text-sm">
          Waiting for events...
        </p>
      )}

      {events.map((event) => (
        <div
          key={event.id}
          className="p-3 bg-gray-50 rounded-lg flex justify-between items-center transition-all duration-300 hover:shadow"
        >
          <div>
            <span
              className={`px-2 py-1 text-xs rounded font-semibold ${typeStyles[event.type]}`}
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
  );
}

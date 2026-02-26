import React, { useEffect, useRef, useState } from "react";

function MetricCard({ title, value, unit, change, status }) {
  const [flash, setFlash] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 400);
      prevValue.current = value;
      return () => clearTimeout(t);
    }
  }, [value]);

  const statusColors = {
    positive: "text-green-600",
    negative: "text-red-600",
    warning: "text-yellow-500",
    neutral: "text-gray-500",
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-5 transition-all duration-300 ${
        flash ? "bg-purple-50 scale-[1.02]" : ""
      }`}
    >
      <div className="flex justify-between mb-2">
        <h4 className="text-sm text-gray-500">{title}</h4>
        <span className={`text-xs ${statusColors[status]}`}>
          {change}
        </span>
      </div>

      <div className="text-2xl font-bold">
        {value} {unit}
      </div>
     
    </div>
  );
}

export default React.memo(MetricCard);




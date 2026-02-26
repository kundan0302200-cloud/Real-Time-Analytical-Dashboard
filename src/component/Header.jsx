import { useMetrics } from "../context/MetricsContext";
import RefreshButton from "./RefreshButton";
import AutoRefreshToggle from "./AutoRefreshToggle";
import IntervalSelector from "./IntervalSelector";

export default function Header() {
  const {
    autoRefresh,
    interval,
    loading,
    lastUpdated,
    dispatch,
    manualRefresh,
  } = useMetrics();

  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="w-8 h-8 rounded bg-purple-600 text-white flex items-center justify-center font-bold">
          RT
        </div>
      <h1 className="text-lg font-semibold ">
        
        Real-Time Analytics Dashboard

      </h1>
      

      <div className="flex items-center space-x-10">

        {lastUpdated && (
          <span className="text-sm text-gray-500">
            Updated: {lastUpdated.toLocaleTimeString()}
          </span>
        )}

        <IntervalSelector
          value={interval}
          onChange={(val) =>
            dispatch({ type: "SET_INTERVAL", payload: val })
          }
        />

        <AutoRefreshToggle
          enabled={autoRefresh}
          onToggle={() =>
            dispatch({ type: "TOGGLE_AUTO_REFRESH" })
          }
        />

        <RefreshButton
          onRefresh={manualRefresh}
          isLoading={loading}
        />
      </div>
    </header>
  );
}




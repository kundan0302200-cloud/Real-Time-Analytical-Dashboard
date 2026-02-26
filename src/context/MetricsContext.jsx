import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from "react";
import generateMetrics from "../services/metricsSimulator";

const MetricsContext = createContext();

const initialState = {
  metrics: [],
  autoRefresh: true,
  interval: 2000,
  loading: false,
  error: null,
  lastUpdated: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_METRICS":
      return {
        ...state,
        metrics: action.payload,
        error: null,
        lastUpdated: new Date(),
      };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "TOGGLE_AUTO_REFRESH":
      return { ...state, autoRefresh: !state.autoRefresh };

    case "SET_INTERVAL":
      return { ...state, interval: action.payload };

    default:
      return state;
  }
}

export function MetricsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.autoRefresh) return;

    const timer = setInterval(() => {
      try {
        dispatch({
          type: "SET_METRICS",
          payload: generateMetrics(),
        });
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.message });
      }
    }, state.interval);

    return () => clearInterval(timer);
  }, [state.autoRefresh, state.interval]);

  useEffect(() => {
    dispatch({ type: "SET_METRICS", payload: generateMetrics() });
  }, []);

  const manualRefresh = () => {
    dispatch({ type: "SET_LOADING", payload: true });

    setTimeout(() => {
      try {
        dispatch({
          type: "SET_METRICS",
          payload: generateMetrics(),
        });
      } catch (err) {
        dispatch({ type: "SET_ERROR", payload: err.message });
      }

      dispatch({ type: "SET_LOADING", payload: false });
    }, 800);
  };

  const value = useMemo(
    () => ({
      ...state,
      dispatch,
      manualRefresh,
    }),
    [state]
  );

  return (
    <MetricsContext.Provider value={value}>
      {children}
    </MetricsContext.Provider>
  );
}

export function useMetrics() {
  return useContext(MetricsContext);
}


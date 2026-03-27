export async function fetchMetrics() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            // 10% error simulation
            if (Math.random() < 0.1) {
                reject(new Error("Simulated API Failure"));
                return;
            }

            resolve([{
                    id: 1,
                    title: "Active Users",
                    value: Math.floor(Math.random() * 2000),
                    change: "+2%",
                    status: "positive",
                },
                {
                    id: 2,
                    title: "CPU Usage",
                    value: Math.floor(Math.random() * 100),
                    unit: "%",
                    change: "+1%",
                    status: "warning",
                },
                {
                    id: 3,
                    title: "Error Rate",
                    value: (Math.random() * 2).toFixed(2),
                    unit: "%",
                    change: "-0.3%",
                    status: "positive",
                },
                {
                    id: 4,
                    title: "Requests/sec",
                    value: Math.floor(Math.random() * 1000),
                    unit: "req/s",
                    change: "+4%",
                    status: "neutral",
                },
            ]);

        }, 800); // Simulated network delay

    });
}
export default function generateMetrics() {
    if (Math.random() < 0.1) {
        throw new Error("Simulated API Failure");
    }

    return [{
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
    ];
}

export function generateRevenueData() {
    return [
        { month: "Jan", revenue: 4000 },
        { month: "Feb", revenue: 6000 },
        { month: "Mar", revenue: 5000 },
        { month: "Apr", revenue: 7000 },
        { month: "May", revenue: 9000 },
        { month: "Jun", revenue: 8500 },
    ];
}
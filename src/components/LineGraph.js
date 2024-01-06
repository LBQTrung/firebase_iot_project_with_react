import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js'


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend)

const LineGraph = ({ type }) => {
    const [graphData, setGraphData] = useState([])
    const [labels, setLabels] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const lineReponse = await fetch(`http://127.0.0.1:5000/line-graph-${type}`);
                const lineData = await lineReponse.json();
                setGraphData(lineData['data'])
                setLabels(lineData['labels'])
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [type])

    return (
        <div className="line-graph-wrapper">
            <h3>{type === "temp" ? "Temperature" : "Humidity"} Line Graph</h3>
            <Line
                data={{
                    // x-axis label values
                    labels: labels.map(time => new Date(time * 1000)),
                    datasets: [
                        {
                            label: `${type === "temp" ? "Temperature" : "Humidity"}`,
                            // y-axis data plotting values
                            data: graphData,
                            fill: false,
                            borderWidth: 4,
                            backgroundColor: `${type === "temp" ? "rgb(255, 99, 132)" : "#5FBDFF"}`,
                            borderColor: `${type === "temp" ? "#e76f51" : "#5FBDFF"}`,
                            responsive: true
                        },
                    ],
                }}

                options={{
                    scales: {
                        x: {
                            type: "category",
                            ticks: {
                                source: 'labels',
                                display: false,
                            },
                        },
                        y: {
                            beginAtZero: false,
                        }
                    }
                }}
            />
        </div>
    );
}

export default LineGraph
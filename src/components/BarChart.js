import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useEffect, useState } from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
const BarChart = ({ type, target }) => {
    const [graphData, setGraphData] = useState([])
    const [labels, setLabels] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const barReponse = await fetch(`http://127.0.0.1:5000/${target}-${type}`);
                const barData = await barReponse.json();
                setGraphData(barData['data'])
                setLabels(barData['labels'])
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [type])


    return (
        <div className='line-graph-wrapper'>
            <h3>{target === "daily-average" ? "Daily Average" : ""} {type === "temp" ? "Temperature" : "Humidity"} Histogram</h3>
            <Bar data={{
                labels: labels,
                datasets: [
                    {
                        label: `Frequency`,
                        data: graphData,
                        backgroundColor: `${type === "temp" ? "rgb(255, 99, 132)" : "#5FBDFF"}`,
                        borderColor: 'black',
                        borderWidth: 0.5,
                    }
                ]
            }} />
        </div>
    )

}

export default BarChart
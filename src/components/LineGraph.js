// import { type } from "@testing-library/user-event/dist/type";
// import { scales } from "chart.js";
// import { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";

// const LineGraph = (props) => {
//     const [graphData, setGraphData] = useState([])
//     const [labels, setLabels] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const lineReponse = await fetch(`http://127.0.0.1:5000/line-graph-temp`);
//                 const lineData = await lineReponse.json();
//                 setGraphData(lineData['data'])
//                 setLabels(lineData['labels'])
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     })

//     return (
//         <div>
//             <Line
//                 data={{
//                     // x-axis label values
//                     labels: labels,
//                     datasets: [
//                         {
//                             label: "# of Calories Lost",
//                             // y-axis data plotting values
//                             data: graphData,
//                             fill: false,
//                             borderWidth: 4,
//                             backgroundColor: "rgb(255, 99, 132)",
//                             borderColor: 'green',
//                             responsive: true
//                         },
//                     ],
//                 }}

//                 options={{
//                     scales: {
//                         x: {
//                             type: "category",
//                             labels: labels,
//                         },
//                         y: {
//                             beginAtZero: true,
//                         }
//                     }
//                 }}
//             />
//         </div>
//     );
// }

// export default LineGraph
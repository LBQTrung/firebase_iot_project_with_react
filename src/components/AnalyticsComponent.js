import LineGraph from "./LineGraph"
import BarChart from "./BarChart"


const AnalyticsComponent = ({ type }) => {
    return (
        <div>
            <LineGraph type={type} target='line-graph' />
            <BarChart type={type} target='bar-chart' />
            <LineGraph type={type} target='daily-average' />
            <BarChart type={type} target='daily-average' />
        </div>
    )
}

export default AnalyticsComponent
import LineGraph from "./LineGraph"
import BarChart from "./BarChart"

const AnalyticsComponent = ({ type }) => {
    return (
        <div>
            <LineGraph type={type} />
            <BarChart type={type} />
        </div>
    )
}

export default AnalyticsComponent
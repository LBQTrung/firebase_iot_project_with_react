const StatisticIndex = ({ name, type, value }) => {
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Hàm xử lý % cho progressbar
    function calcPercentIndexForProgressBar(value) {
        if (type == 'temp') {
            return -100 + value / 30 * 100
        } else {
            return -100 + value
        }
    }

    return (
        <div className="statistic-index">
            <span className="statistic-text">{capitalizeFirstLetter(name)}</span>
            <div className="progress-bar-wrapper" style={{
                boxShadow: `0 0 5px ${type === 'temp' ? '#EF3E7C' : '#60BEFF'}`
            }}>
                <div className="progress-bar" style={{
                    left: `${calcPercentIndexForProgressBar(value)}%`,
                    transition: 'left linear 1.5s',
                    backgroundColor: `${type === 'temp' ? '#EF3E7C' : '#60BEFF'}`
                }}>
                </div>
            </div>
            <span className="statistic-value">{value}{type === 'temp' ? "°C" : "%"}</span>
        </div>
    )
}

export default StatisticIndex
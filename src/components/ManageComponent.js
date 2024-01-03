import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import database from "./firebase"
import StatisticIndex from './StatisticIndex';


const ManageComponent = (props) => {
    const [data, setData] = useState(0);
    const [counter, setCounter] = useState(0)
    const [dashOffset, setDashOffset] = useState(472);

    const [statisticValues, setStatisticValues] = useState({
        'mean': 0,
        'std': 0,
        'min': 0,
        'max': 0
    })

    // Xử lý call api đến máy chủ flask
    useEffect(() => {
        const fetchData = async () => {
            try {
                const statisticResponse = await fetch(`http://127.0.0.1:5000/statistic-${props.type}`);
                const statisticData = await statisticResponse.json();
                setStatisticValues(statisticData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [props.type]);





    useEffect(() => {
        // Thực hiện lấy dữ liệu từ Firebase Realtime Database
        const fetchData = async () => {
            try {
                // Đường dẫn đến nút dữ liệu bạn muốn lấy
                const dataRef = ref(database, props.type);

                // Lắng nghe sự kiện 'value' để lấy dữ liệu khi có sự thay đổi
                onValue(dataRef, (snapshot) => {
                    const newData = snapshot.val();
                    setData(newData);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [props.type]);


    // Animation quay quay :))
    useEffect(() => {
        const maxCounter = props.type === "temp" ? 50 : 100;
        const percentage = (data / maxCounter) * 100;
        const newDashOffset = 472 - (472 * percentage) / 100;
        setDashOffset(newDashOffset);
    }, [data]);

    // Animation đếm đếm :))
    useEffect(() => {
        const timerId = setInterval(() => {
            if (counter === data) {
                clearInterval(timerId)
            } else if (counter < data) {
                setCounter(prevCount => prevCount + 1)
            } else {
                setCounter(prevCount => prevCount - 1)
            }
        }, props.type === 'temp' ? 50 : 15);


        return () => {
            clearInterval(timerId)
        }
    }, [data, counter])

    return (
        <div className='measure-wrapper'>
            <h3 className='measure-text'>{props.type === "temp" ? "Temperature" : "Humidity"}</h3>
            <div className="measure">
                <div className="measure-cirle">
                    <div className="measure-circle-value">
                        <div className="measure-value">{counter}{props.type == "temp" ? "°C" : "%"}</div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor={props.type === "temp" ? "#e91e63" : "#5FBDFF"} />
                            <stop offset="100%" stopColor={props.type === "temp" ? "#FF90BC" : "#C5FFF8"} />
                        </linearGradient>
                    </defs>
                    <circle
                        cx="80"
                        cy="80"
                        r="70"
                        strokeLinecap="round"
                        style={{
                            fill: 'none',
                            stroke: 'url(#GradientColor)',
                            strokeWidth: '20px',
                            strokeDasharray: '472',
                            strokeDashoffset: dashOffset,
                            transformOrigin: 'center',
                            transform: 'rotate(-90deg)',
                            transition: 'stroke-dashoffset 1.5s ease-in-out',
                        }} />
                </svg>
            </div>
            <div className='statistic-wrapper'>
                <StatisticIndex name='mean' type={props.type} value={statisticValues['mean']} />
                <StatisticIndex name='std' type={props.type} value={statisticValues['std']} />
                <StatisticIndex name='min' type={props.type} value={statisticValues['min']} />
                <StatisticIndex name='max' type={props.type} value={statisticValues['max']} />
            </div>
        </div>
    )
}

export default ManageComponent
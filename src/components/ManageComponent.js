import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import database from "./firebase"


const ManageComponent = (props) => {
    const [data, setData] = useState(0);
    const [counter, setCounter] = useState(0)
    const [dashOffset, setDashOffset] = useState(472);


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

    }, []);


    // Animation quay quay :))
    useEffect(() => {
        const maxCounter = props.type == "temp" ? 50 : 100;
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
        }, props.type == 'temp' ? 50 : 15);


        return () => {
            clearInterval(timerId)
        }
    }, [data, counter])


    const calculateDashOffset = (temperature) => {
        const maxCounter = 50;
        const percentage = (temperature / maxCounter) * 100;
        const dashOffset = 472 - (472 * percentage) / 100;
        return dashOffset;
    };

    return (
        <div className='measure-wrapper'>
            <h3 className='measure-text'>Temperature</h3>
            <div className="measure">
                <div className="measure-cirle">
                    <div className="measure-circle-value">
                        <div className="measure-value">{counter + "°C"}</div>
                    </div>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor={props.type == "temp" ? "#e91e63" : "#5FBDFF"} />
                            <stop offset="100%" stopColor={props.type == "temp" ? "#FF90BC" : "#C5FFF8"} />
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
        </div>
    )
}

export default ManageComponent
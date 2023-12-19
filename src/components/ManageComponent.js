import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import database from "./firebase"


const ManageComponent = () => {
    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(0)


    useEffect(() => {
        // Thực hiện lấy dữ liệu từ Firebase Realtime Database
        const fetchData = async () => {
            try {
                // Đường dẫn đến nút dữ liệu bạn muốn lấy
                const dataRef = ref(database, '/temp');

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

    }, []); // Chạy một lần sau khi component được render


    const calculateDashOffset = (temperature) => {
        const maxCounter = 50;
        const percentage = (temperature / maxCounter) * 100;
        const dashOffset = 472 - (472 * percentage) / 100;
        return dashOffset;
    };


    return (

        <div className="measure">
            <div className="measure-cirle">
                <div className="measure-circle-value">
                    <div className="measure-value">{data + "°C"}</div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#FF90BC" />
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
                        strokeDashoffset: calculateDashOffset(data),
                        transformOrigin: 'center',
                        transform: 'rotate(-90deg)',
                        animation: 'anim 2s linear', // Disable CSS animation
                    }} />
            </svg>
        </div>
        // <div className='measure'>
        //     <h3 className='measure-text'>Temperature</h3>
        //     <div className='measure-circle'>
        //     </div>
        //     <span className='measure-value'>{data}</span>
        // </div>
    )
}

export default ManageComponent
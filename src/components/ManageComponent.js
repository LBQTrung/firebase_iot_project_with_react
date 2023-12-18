import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import database from "./firebase"


const ManageComponent = () => {
    const [data, setData] = useState(null);


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

    return (
        <div className='measure'>
            <h3 className='measure-text'>Temperature</h3>
            <div className='measure-circle'>
            </div>
            <span className='measure-value'>{data}</span>
        </div>
    )
}

export default ManageComponent
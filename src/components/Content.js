import { Routes, Route } from "react-router-dom";

const Content = () => {
    return (
        <div className="content">
            <Routes>
                <Route path="/manage-temperature" element={<h1>Manage Temperature</h1>}></Route>
                <Route path="/manage-humidity" element={<h1>Manage Humidity</h1>}></Route>
                <Route path="/manage-air-quality" element={<h1>Manage Air Quality</h1>}></Route>
            </Routes>
        </div>
    )
}

export default Content
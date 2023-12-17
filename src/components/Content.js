import { Routes, Route } from "react-router-dom";
import NavigationButton from './NavigationButton.js'

const HomePageContent = (props) => {

    return (
        <div className="content-navigation">
            <NavigationButton activeInfo={props.activeInfo} linkTo="manage" icon="bx bxs-calendar-alt" text="Manage" />
            <NavigationButton activeInfo={props.activeInfo} linkTo="utilities" icon="bx bxs-institution" text="Utilities" />
            <NavigationButton activeInfo={props.activeInfo} linkTo="analytics" icon="bx bxs-bar-chart-alt-2" text="Analytics" />
            <NavigationButton activeInfo={props.activeInfo} linkTo="security" icon="bx bxs-lock-alt" text="Security" />
        </div>
    )
}

const Content = (props) => {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<HomePageContent activeInfo={props.activeInfo} />}></Route>
                <Route path="/manage/temperature" element={<h1>Manage Temperature</h1>}></Route>
                <Route path="/manage/humidity" element={<h1>Manage Humidity</h1>}></Route>
                <Route path="/manage/air-quality" element={<h1>Manage Air Quality</h1>}></Route>
            </Routes>
        </div>
    )
}

export default Content
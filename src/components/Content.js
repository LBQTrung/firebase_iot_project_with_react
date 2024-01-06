import { Routes, Route } from "react-router-dom";
import NavigationButton from './NavigationButton.js'
import ManageComponent from "./ManageComponent.js";
import AnalyticsComponent from "./AnalyticsComponent.js";

const HomePageContent = (props) => {

    return (
        <div className="content-navigation">
            <NavigationButton activeInfo={props.activeInfo} linkTo="/manage" icon="bx bxs-calendar-alt" text="Manage" />
            <NavigationButton activeInfo={props.activeInfo} linkTo="/utilities" icon="bx bxs-institution" text="Utilities" />
            <NavigationButton activeInfo={props.activeInfo} linkTo="/analytics" icon="bx bxs-bar-chart-alt-2" text="Analytics" />
            <NavigationButton activeInfo={props.activeInfo} linkTo="/security" icon="bx bxs-lock-alt" text="Security" />
        </div>
    )
}

const ManageContent = (props) => {

    return (
        <div className="content-navigation">
            <NavigationButton activeInfo={props.activeInfo} linkTo="/manage/temperature" icon="bx bxs-hot" text="Temperature" />
            <NavigationButton activeInfo={props.activeInfo} linkTo="/manage/humidity" icon="bx bx-water" text="Humidity" />
            <NavigationButton activeInfo={props.activeInfo} linkTo="/manage/air-quality" icon="bx bx-wind" text="Air quality" />
        </div>
    )
}

const AnalyticsContent = (props) => {

    return (
        <div className="content-navigation">
            <NavigationButton activeInfo={props.activeInfo} linkTo="/analytics/temperature" icon="bx bxs-hot" text="Temperature" />
            <NavigationButton activeInfo={props.activeInfo} linkTo="/analytics/humidity" icon="bx bx-water" text="Humidity" />
        </div>
    )
}

const Content = (props) => {
    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<HomePageContent activeInfo={props.activeInfo} />}></Route>

                <Route path="/manage" element={<ManageContent activeInfo={props.activeInfo} />}></Route>
                <Route path="/manage/temperature" element={<ManageComponent type="temp" />}></Route>
                <Route path="/manage/humidity" element={<ManageComponent type="humidity" />}></Route>


                <Route path="/analytics" element={<AnalyticsContent activeInfo={props.activeInfo} />}></Route>
                <Route path="/analytics/temperature" element={<AnalyticsComponent type="temp" />}></Route>
                <Route path="/analytics/humidity" element={<AnalyticsComponent type="humidity" />}></Route>
            </Routes>
        </div>
    )
}

export default Content
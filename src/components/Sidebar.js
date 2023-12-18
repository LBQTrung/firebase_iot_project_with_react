import Logo from "./Logo"
import Menu from "./Menu"
import MenuItem from "./MenuItem"
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    const [item, setItem] = props.activeInfo
    return (
        <div className="sidebar">
            <Link className="logo-link" to="/" onClick={() => setItem('/home')}>
                <Logo />
            </Link>

            <Menu activeInfo={[item, setItem]} title="MANAGE" linkTo="/manage">
                <MenuItem activeInfo={[item, setItem]} title="Temperature" linkTo="/manage/temperature" />
                <MenuItem activeInfo={[item, setItem]} title="Humidity" linkTo="/manage/humidity" />
                <MenuItem activeInfo={[item, setItem]} title="Air quality" linkTo="/manage/air-quality" />
            </Menu>

            <Menu activeInfo={[item, setItem]} title="UTILITIES" linkTo="/utilities">
                <MenuItem activeInfo={[item, setItem]} title="Lights" linkTo="/utilities/lights" />
                <MenuItem activeInfo={[item, setItem]} title="Air Conditioning" linkTo="/utilities/air-conditioning" />
                <MenuItem activeInfo={[item, setItem]} title="Cleaning" linkTo="/utilities/cleaning" />
            </Menu>

            <Menu activeInfo={[item, setItem]} title="ANALYTICS" linkTo="/analytics">
                <MenuItem activeInfo={[item, setItem]} title="Temperature" linkTo="/analytics/temperature" />
                <MenuItem activeInfo={[item, setItem]} title="Humidity" linkTo="/analytics/humidity" />
            </Menu>

            <Menu activeInfo={[item, setItem]} title="SECURITY" linkTo="/security">
                <MenuItem activeInfo={[item, setItem]} title="Lock" linkTo="/security/lock" />
                <MenuItem activeInfo={[item, setItem]} title="Alarm" linkTo="/security/alarm" />
                <MenuItem activeInfo={[item, setItem]} title="Camera" linkTo="/security/camera" />
            </Menu>
        </div>
    )
}

export default Sidebar
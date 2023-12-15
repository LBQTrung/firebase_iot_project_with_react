import Logo from "./Logo"
import Menu from "./Menu"
import MenuItem from "./MenuItem"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Logo />
            <Menu title="MANAGE">
                <MenuItem title="Temperature" linkTo="manage-temperature" />
                <MenuItem title="Humidity" linkTo="manage-humidity" />
                <MenuItem title="Air quality" linkTo="manage-air-quality" />
            </Menu>
        </div>
    )
}

export default Sidebar
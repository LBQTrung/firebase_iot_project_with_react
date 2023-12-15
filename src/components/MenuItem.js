import { Link } from "react-router-dom";

const MenuItem = (props) => {
    return (
        <li className="menu-item">
            <Link className="menu-item-text" to={props.linkTo}>{props.title}</Link>
        </li>
    )
}

export default MenuItem
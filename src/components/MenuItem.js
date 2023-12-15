import { Link } from "react-router-dom";

const MenuItem = (props) => {
    const [item, setItem] = props.activeInfo

    const handleChosenItem = () => {
        if (item !== props.linkTo) {
            setItem(props.linkTo)
        }
    }

    const active = item === props.linkTo ? 'menu-item-text active' : 'menu-item-text'

    return (
        <li className="menu-item">
            <Link onClick={handleChosenItem} className={active} to={props.linkTo}>{props.title}</Link>
        </li>
    )
}

export default MenuItem
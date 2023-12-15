import { Link } from "react-router-dom";

const Menu = (props) => {
    const [item, setItem] = props.activeInfo

    const handleChosenItem = () => {
        if (item !== props.linkTo) {
            setItem(props.linkTo)
        }
    }

    const active = item === props.linkTo ? 'menu-text active' : 'menu-text'

    return (
        <div className="menu">
            <Link onClick={handleChosenItem} className="menu-text-link" to={props.title.toLowerCase()}>
                <h3 className={active}>{props.title}</h3>
            </Link>
            <ul className="menu-list">
                {props.children}
            </ul>
        </div>
    )
}

export default Menu
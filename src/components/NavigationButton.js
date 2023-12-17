import { Link } from "react-router-dom";

const NavigationButton = (props) => {
    const [item, setItem] = props.activeInfo

    return (
        <div className="navigation-button">
            <Link onClick={() => setItem(props.linkTo)} to={props.linkTo} className="navigation-button-wrapper">
                <i className={props.icon + " navigation-button-icon"}></i>
                <span className="navigation-button-text">{props.text}</span>
            </Link>

        </div>
    )
}

export default NavigationButton
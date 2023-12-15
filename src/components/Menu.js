const Menu = (props) => {
    return (
        <div className="menu">
            <h3 className="menu-text">{props.title}</h3>
            <ul className="menu-list">
                {props.children}
            </ul>
        </div>
    )
}

export default Menu
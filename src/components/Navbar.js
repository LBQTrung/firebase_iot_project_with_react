import { Link } from "react-router-dom";
import React from 'react';


const Navbar = (props) => {
    const [item, setItem] = props.activeInfo

    const parts = item.split('/')

    const linkArray = []

    for (var i = 1; i <= parts.length; i++) {
        linkArray.push(parts.slice(0, i).join("/"));
    }

    const capitalizedStrings = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1))

    const NavigationElements = capitalizedStrings.map((string, index) => (
        <React.Fragment>
            <Link className="navigation-link" to={linkArray[index]} onClick={() => setItem(linkArray[index])}>{string}</Link>
            <span className="navigation-slash">{index < capitalizedStrings.length - 1 && ' / '}</span>
        </React.Fragment>
    )
    )

    return (
        <div className="navbar">
            <div className="navigation">
                {NavigationElements}
            </div>

            <div className="logout">
                <Link onClick={() => setItem('home')} className="logout-text-link" to='/'>
                    <span className="logout-text">Log Out</span>
                </Link>
                <Link onClick={() => setItem('home')} className="logout-icon-link" to='/'>
                    <i className="bx bx-power-off logout-icon"></i>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
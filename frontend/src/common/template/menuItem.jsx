import React from 'react'
import {Link} from 'react-router-dom'

export default(props) => {

    const selectOnClick = (e) => {
        $("li[data-menu-item]").removeClass("active")
        $(e.target).parent().addClass("active")
    }
    
    return (
        <li data-menu-item onClick={selectOnClick}>
            <Link to={props.path}>
                <i className={`fa fa-${props.icon}`}></i>
                <span>{props.label}</span>
            </Link>
        </li>
    )
}
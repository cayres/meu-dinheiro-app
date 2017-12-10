import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class TabHeader extends Component {

    selectOnClick(e) {
        $(".nav.nav-tabs li").removeClass("active")
        $(e.target).parent().addClass("active")
    }

    render() {
        return (
            <li onClick={this.selectOnClick}>
                <Link to={this.props.target}>                
                    <i className={`fa fa-${this.props.icon}`}></i>
                    {this.props.label}
                </Link>
            </li>
        )
    }
}

export default TabHeader
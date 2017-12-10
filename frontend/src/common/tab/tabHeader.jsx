import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectTab} from './tabActions'

import If from '../operator/if'

class TabHeader extends Component {

    render() {
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        return (
            <If test={visible}>
                <li
                    onClick={() => this.props.selectTab(this.props.target)}
                    className={selected
                    ? 'active'
                    : ''}>
                    <Link to={`${this.props.tab.path}/${this.props.target}`}>
                        <i className={`fa fa-${this.props.icon}`}></i>
                        {this.props.label}
                    </Link>
                </li>
            </If>
        )
    }
}

const mapStateToProps = state => ({tab : state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)
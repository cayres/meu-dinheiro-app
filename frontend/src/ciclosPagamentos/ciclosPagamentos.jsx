import React, {Component} from 'react'
import {connect} from 'redux'

import {bindActionCreators} from 'react-redux'
import ContentHeader from '../common/template/contentHeader'

class CiclosPagamentos extends Component{
    render(){
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subtitle='Cadastro' />
            </div>
        )
    }
}

export default CiclosPagamentos
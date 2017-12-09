import React, { Component } from 'react'
import Axios from 'axios'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {

    constructor(props){
        super(props)
        this.state = {
            credito: 0,
            debito: 0
        }
    }

    componentWillMount(){

        Axios.get('http://localhost:3003/api/ciclosPagamentos/sumario').then((resp) => {
            this.setState(resp.data)
        })

    }

    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' subtitle='Versão 1.0'></ContentHeader>
                <Content>
                    <Row>
                        <ValueBox cols="12 12 4" 
                            color='green' 
                            value={`R$ ${this.state.credito}`}
                            text='Total de Créditos'
                            icon='bank' ></ValueBox>
                        <ValueBox cols="12 12 4" 
                            color='red' 
                            value={`R$ ${this.state.debito}`}
                            text='Total de Débitos'
                            icon='credit-card' ></ValueBox>
                        <ValueBox cols="12 12 4" 
                            color='blue' 
                            value={`R$ ${this.state.credito - this.state.debito}`}
                            text='Valor Consolidado'
                            icon='money' ></ValueBox>
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard
import React, {Component} from 'react'
import {connect} from 'redux'
import {bindActionCreators} from 'react-redux'
import {Route} from 'react-router-dom'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import Dummy1 from '../common/widget/dummy.1'
import Dummy from '../common/widget/dummy'

class CiclosPagamentos extends Component {
    render() {
        const {match} = this.props
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subtitle='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target={`${match.path}/tabList`} />
                            <TabHeader label='Incluir' icon='plus' target={`${match.path}/tabCreate`} />
                            <TabHeader label='Alterar' icon='pencil' target={`${match.path}/tabUpdate`} />
                            <TabHeader label='Excluir' icon='trash' target={`${match.path}/tabDelete`} />
                        </TabsHeader>
                        <TabsContent>
                            <Route exact path={`${match.path}/tabList`} component={Dummy1}/>
                            <Route path={`${match.path}/:name`} component={Dummy} test="1"/>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default CiclosPagamentos
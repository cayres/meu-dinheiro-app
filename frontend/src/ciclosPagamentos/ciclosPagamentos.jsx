import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import { showTabs, selectTab, setPath } from '../common/tab/tabActions'


//teste
import Dummy1 from '../common/widget/dummy.1'
import Dummy from '../common/widget/dummy'

class CiclosPagamentos extends Component {

    componentWillMount(){
        const {match} = this.props
        console.log(match)
        this.props.setPath(match.path)
        this.props.showTabs('tabList', 'tabCreate')
        this.props.selectTab('tabList')
    }

    render() {
        const {match} = this.props
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subtitle='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <div className='tab-content'>
                                <Route exact path={match.path} component={Dummy1} />
                                <Route exact path={`match.path/tabList`} component={Dummy1} />
                                <Route path={`${match.path}/:name`} component={Dummy}/>
                            </div>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({setPath, selectTab, showTabs}, dispatch)
export default connect(null, mapDispatchToProps)(CiclosPagamentos)
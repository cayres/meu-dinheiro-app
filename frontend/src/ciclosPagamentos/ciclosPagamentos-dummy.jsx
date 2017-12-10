import React, {Component} from 'react'
import {connect} from 'redux'
import {bindActionCreators} from 'react-redux'
import {Link, Route, Redirect, Switch} from 'react-router-dom'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import Dummy1 from '../common/widget/dummy.1'
import Dummy2 from '../common/widget/dummy.2'
import Dummy3 from '../common/widget/dummy.3'

class CiclosPagamentos extends Component {
    render() {
        let pathName = window.location.pathname
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subtitle='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <li className='tab'>
                                <Link to='/ciclosPagamentos/menu1'>Menu 1</Link>
                            </li>
                            <li className='tab'>
                                <Link to='/ciclosPagamentos/menu2'>Menu 2</Link>
                            </li>
                            <li className='tab'>
                                <Link to='/ciclosPagamentos/menu3'>Menu 3</Link>
                            </li>
                        </TabsHeader>
                        <TabsContent>
                            <Switch>
                                <Route exact path='/ciclosPagamentos' component={Dummy1}/>
                                <Route path='/ciclosPagamentos/menu1' component={Dummy1}/>
                                <Route path='/ciclosPagamentos/menu2' component={Dummy2}/>
                                <Route path='/ciclosPagamentos/menu3' component={Dummy3}/>
                            </Switch>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default CiclosPagamentos
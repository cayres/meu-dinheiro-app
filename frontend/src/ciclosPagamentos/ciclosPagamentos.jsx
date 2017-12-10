import React, {Component} from 'react'
import {connect} from 'redux'
import {bindActionCreators} from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Row from '../common/layout/row'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'

class CiclosPagamentos extends Component {
    render() {
        let pathName = window.location.pathname
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' subtitle='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            
                        </TabsHeader>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default CiclosPagamentos
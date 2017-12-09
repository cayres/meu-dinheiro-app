import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../dashboard/dashboard'
import CliclosPagamentos from '../ciclosPagamentos/ciclosPagamentos'

export default (props) => (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/ciclosPagamentos' component={CliclosPagamentos} />
        <Route component={Dashboard} />
    </Switch>
)
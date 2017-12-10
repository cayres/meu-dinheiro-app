import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default(props) => (
    <ul className='sidebar-menu' data-widget="tree" data-animation-speed="100">
        <MenuItem path="/" label="Dashboard" icon="dashboard"/>
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="/ciclosPagamentos" label="Ciclos de Pagamentos" icon="usd"/>
        </MenuTree>
    </ul>
)
import React from 'react'

export default(props) => (
    <header className='main-header'>
        <a href="#" className='logo'>
            <span className='logo-mini'>
                <i className='fa fa-money'></i>
            </span>
            <span className='logo-lg'>
                <i className='fa fa-money'></i>
                <b>Meu</b>
                Dinheiro
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href="javascript:void(0)" className='sidebar-toggle' data-toggle='push-menu'></a>
        </nav>
    </header>
)
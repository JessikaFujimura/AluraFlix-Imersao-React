import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './styles.css'
import Button from '../Button'

function Menu () {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="Logo"/>
            </a>
            <Button as="a" href="/"  className="ButtonLink">
                Novo video
            </Button>
        </nav>
    )
}

export default Menu

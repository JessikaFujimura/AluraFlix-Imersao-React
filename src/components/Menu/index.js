import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './styles.css'
import Button from '../Button'
import {Link} from 'react-router-dom'

function Menu () {
    return (
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="Logo"/>
            </Link>

            <Button as={Link} to="/cadastro/video"  className="ButtonLink">
                Novo video
            </Button>
        </nav>
    )
}

export default Menu

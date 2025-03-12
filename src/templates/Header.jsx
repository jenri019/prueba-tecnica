import React from 'react'
import CustomSwitch from '../components/DarkMode'
import '../styles/Header.css'
import 'animate.css'

const Header = ({sx}) => {
    return (
        <header className='header animate__animated animate__fadeIn' style={sx}>
            <div>
                Te damos la bienvenida a tu gestor de tareas.
            </div>
            <CustomSwitch className="header__switch"/>
        </header>
    )
}

export default Header
import React from 'react'
import './Header.css'
import HeaderCur from './HeaderCur'
const Header = () => {
    return (
        <div className='header'>
            <div className="header__inner container">
                <div className="logo"><b>Currenci<span className='logo-span'>Es</span></b></div>

                <div className="header-cur">
                    <HeaderCur />
                </div>
            </div>


        </div>
    )
}

export default Header
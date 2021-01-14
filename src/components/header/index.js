import React, { useState } from "react";
import face from '../../assets/img/face.jpg';
import { MdSort, MdExpandMore, MdMenu, MdExitToApp, MdSettings} from 'react-icons/md';
import {useHistory, Link} from 'react-router-dom';

function addClassToBody() {
    var body = document.body;
    if(body.classList[0]) {
        body.classList.remove("sidebar-icon-only");
    } else {
        body.classList.add("sidebar-icon-only");
    }
}

function Header(props) {
    const [dropdown, setDropdown] = useState(false);
    const history = useHistory();

    const logout = () => {
        localStorage.setItem('auth','0');
        history.push('/login')
    }

    return (
        <div className='header'>
            <div className='logo-wrapper'>
                <Link to="/" className="desktop-logo">VCloud</Link>
                <Link to="/" className="mobile-logo">V</Link>
                <MdSort size='24' color='#4a4a4a' className='sort-icon' onClick={() => addClassToBody()}/>
            </div>
            <div className='menu-wrapper'>
                <div className="profile-wrapper">
                    <div className="profile" onClick={() => dropdown ? setDropdown(false) : setDropdown(true)}>
                        <img src={face} alt="profile-pic"/>
                        <span>Deepak Kumar</span>
                        <MdExpandMore size="20" color="#4a4a4a" />
                    </div>
                    <div className={dropdown ? "profile-dropdown active" : "profile-dropdown"}>
                        <div href={void(0)}><MdSettings color="#4d83ff" /><span>Setting</span></div>
                        <div href={void(0)} onClick={() => logout()}><MdExitToApp color="#4d83ff" /><span>Logout</span></div>
                    </div>
                </div>
                <span className='burger-menu' onClick={() => props.menu ? props.setMenu(false) : props.setMenu(true)}><MdMenu size='24' color='#9b9b9b'/></span>
            </div>
        </div>
    )
}

export default Header;
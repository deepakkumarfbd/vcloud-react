import React from 'react';
import {MdHome} from 'react-icons/md';
import {Link} from 'react-router-dom';

function Sidebar(props){
    return (
        <div className={props.menu ? "sidebar active" : "sidebar"}>
              <ul className="nav">
                <li><Link to="/"><MdHome size="18"/> <span>Dashboard</span></Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;
import React from 'react';
import {useState} from 'react';
import Sidebar from '../../components/sidebar';
import MainPanel from '../../components/main-panel';
import Header from '../../components/header';

function Main() {
    const [menu, setMenu] = useState(false);
    return (
      <div className="main">
          <Header setMenu={setMenu}  menu={menu} />
          <div className="page-body-wrapper">
            <Sidebar menu={menu} />
            <MainPanel />
          </div>
      </div>
    )
}

export default Main;
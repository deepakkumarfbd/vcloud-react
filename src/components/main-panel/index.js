import React from "react";
import Tabs from "../tabs";
import DataTable from '../dataTable';

const MainPanel = () => {
  return (
    <div className="main-panel">
      <div className="main-panel-header">
        <h2>Welcome Back,</h2>
        <p>Your Dashboard</p>
      </div>
      <Tabs />
      <DataTable />
    </div>
  );
};

export default MainPanel;

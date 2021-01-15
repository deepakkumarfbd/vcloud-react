import React from "react";
import aws from "../../assets/img/icon-aws.png";
import azure from "../../assets/img/icon-azure.png";
import google from "../../assets/img/icon-google-cloud.png";
import ec2 from "../../assets/img/icon-ec2.png";
import vpc from "../../assets/img/icon-vpc.png";
import s3 from "../../assets/img/icon-s3.png";
import vm from "../../assets/img/icon-vm.png";
import storageAccount from "../../assets/img/icon-storage-account.png";
import resourceGroup from "../../assets/img/icon-resource-group.png";
import storageBucket from "../../assets/img/icon-storage-bucket.png";

const Tabs = () => {
  const changeTab = (e) => {
    var tabs = document.querySelectorAll(".tab");
    var tabPanels = document.querySelectorAll(".tab-panel");
    var currentPanelId = e.target.getAttribute("data-name");
    tabs.forEach((item) => {
      item.classList.remove("active");
    });
    tabPanels.forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.add("active");
    document.getElementById(currentPanelId).classList.add("active");
  };

  return (
    <div className="tabs-warpper">
      <div className="tabs">
        <div
          data-name="one"
          className="tab active"
          onClick={(e) => changeTab(e)}
        >
          Overview
        </div>
        <div data-name="two" className="tab" onClick={(e) => changeTab(e)}>
          AWS
        </div>
        <div data-name="three" className="tab" onClick={(e) => changeTab(e)}>
          Azure
        </div>
        <div data-name="four" className="tab" onClick={(e) => changeTab(e)}>
          Google Cloud
        </div>
      </div>
      <div className="tab-panels">
        <div className="tab-panel active" id="one">
          <div className="card">
            <img src={aws} />
            <span>
              AWS<strong>779</strong>
            </span>
          </div>
          <div className="card">
            <img src={azure} />
            <span>
              AWS<strong>222</strong>
            </span>
          </div>
          <div className="card">
            <img src={google} />
            <span>
              AWS<strong>200</strong>
            </span>
          </div>
        </div>
        <div className="tab-panel" id="two">
          <div className="card">
            <img src={ec2} />
            <span>
              EC2<strong>159</strong>
            </span>
          </div>
          <div className="card">
            <img src={vpc} />
            <span>
              VPC<strong>20</strong>
            </span>
          </div>
          <div className="card">
            <img src={s3} />
            <span>
              S3<strong>58</strong>
            </span>
          </div>
        </div>
        <div className="tab-panel" id="three">
          <div className="card">
            <img src={vm} />
            <span>
              VM's<strong>58</strong>
            </span>
          </div>
          <div className="card">
            <img src={storageAccount} />
            <span>
              Storage Account<strong>58</strong>
            </span>
          </div>
          <div className="card">
            <img src={resourceGroup} />
            <span>
              Resource Group<strong>58</strong>
            </span>
          </div>
        </div>
        <div className="tab-panel" id="four">
          <div className="card">
            <img src={vm} />
            <span>
              VM's<strong>581</strong>
            </span>
          </div>
          <div className="card">
            <img src={storageBucket} />
            <span>
              Storage bucket<strong>158</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;

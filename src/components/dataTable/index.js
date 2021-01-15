import React from "react";

const DataTable = () => {
  return (
    <div className="data-table-wrapper">
      <h3>Reports</h3>
      <div className="table-container">
        <table class="data-table">
          <thead>
            <tr role="row">
              <th>Name</th>
              <th>Last updated</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" class="odd">
              <td class="sorting_1">Assets</td>
              <td>01 Jan 2021</td>
              <td>
                <a href="https://cost-documents-budgeting.s3-ap-southeast-1.amazonaws.com/protectedAssets.csv">
                  Download
                </a>
              </td>
            </tr>
            <tr role="row" class="even">
              <td class="sorting_1">Demo9</td>
              <td>01 Jan 2021</td>
              <td>
                <a href="https://cost-documents-budgeting.s3-ap-southeast-1.amazonaws.com/Dome9_Findings.xlsx">
                  Download
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;

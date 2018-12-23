import React from "react";
import '../App.css';
import ReactTable from "react-table";
import RmsDialog from "./RmsDialog"
import "react-table/react-table.css";


function  RmsTable (props) {
    return (
      <div>
        <div className="headerContainer">
          <h1><span><b>Name:</b> </span><span>Anbu</span></h1>
          <h1>Balance:{props.balance}</h1>
          <RmsDialog/>
        </div>
      
        <ReactTable
          data={props.data}
          columns={[
            {
              Header: "Date",
              accessor: "Date"
            },
            {
              Header: "Description",
              accessor: "Description",
            },
            {
              Header: "Credit",
              accessor: "Credit"
            },
            {
              Header: "Debit",
              accessor: "Debit"
            },
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }

export default RmsTable;

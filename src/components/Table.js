import React from "react";
import TableBody from "./TableBody";

export default function Table(props) {
  return (
    <table className="table table-light table-striped-columns table-hover">
      <thead className="sticky-top">
        <tr>
          <th scope="col">S/N</th>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <TableBody data={props.expenses}/>
    </table>
  );
}

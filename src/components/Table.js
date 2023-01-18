import React from "react";

export default function Table() {
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
      <tbody id="outputTable">
        <tr>
          <th scope="row">1</th>
          <td>10/02/03</td>
          <td>Food</td>
          <td>3000</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>29/12/93</td>
          <td>Drinks</td>
          <td>20000</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>15/05/03</td>
          <td>Larry the Bird</td>
          <td>14400</td>
        </tr>
      </tbody>
    </table>
  );
}

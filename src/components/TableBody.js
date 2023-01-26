import React from "react";

const TableBody = (props) => {
  return (
    <tbody className='table-hover' id="outputTable">
      {props.data.map((expense, index) => (
        <tr
          className={
            expense.transaction === "income" ? "table-success" : "table-danger"
          } key={index + 1}
        >
          <th scope="row">{index + 1}</th>
          <td>{expense.date}</td>
          <td>{expense.description}</td>
          <td>&#8358;{expense.amount}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

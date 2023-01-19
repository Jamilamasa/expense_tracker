import React from "react";

const TableBody = (props) => {
  return (
    <tbody id="outputTable">
      {props.data.map((expense) => (
        <tr
          className={
            expense.transaction === "income" ? "table-success" : "table-danger"
          } key={expense.id}
        >
          <th scope="row">{expense.id}</th>
          <td>{expense.date}</td>
          <td>{expense.description}</td>
          <td>{expense.amount}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

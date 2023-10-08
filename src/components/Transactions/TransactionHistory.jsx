import React from "react";
import css from'./TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(item => (
                <tr key= {item.id}>
               <td>{item.type}</td>
               <td>{item.amount}</td>
               <td>{item.currency}</td>
    </tr>
                ))}

    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table> 
    )
   
}

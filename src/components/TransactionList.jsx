import React from 'react'

function TransactionList({transactions
  ,deleteTransactions})
{
  return (
    <div>
    <h3>HISTORY</h3>
      <ul id="list" className="list">
       {
        transactions.map(transactions=>
          (
            <div className="hov">

            <li className={transactions.amount<0?'minus':'plus'}> 
            {/* //color */}
            
            {transactions.text} <span>${transactions.amount}</span>
            <button className="delete-btn" onClick={
              ()=>deleteTransactions(transactions.id) 
            }>x</button> 
          </li> 
          </div>

          ))
       } 
      </ul>
    </div>
  )
}

export default TransactionList

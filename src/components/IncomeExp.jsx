import React from 'react'

function IncomeExp({transactions}) 
{
  const bal=transactions.map(transactions=>transactions.amount) 
  //amount mtm thaniya eduthurom
  const income=bal
  .filter(amount=>amount>0) 
  .reduce((acc,amount)=>acc+=amount,0)
  .toFixed(2)

  const expense=
  (bal
    .filter(amount=>amount<0) 
  .reduce((acc,amount)=>acc+=amount,0)
  *-1) 
  .toFixed(2) 

  return (
    <div className="inc-exp-container">
        <div>
          <h4 >Extra Earnings</h4>
          <p id="money-plus" className="money plus" style={{ fontWeight: 600 }}>${income}</p>
        </div>
        <div>
          <h4 className='expense'>Expense</h4>

          <p id="money-minus" className="money minus" style={{ fontWeight: 600 }}>${expense} </p> 
        </div>
      </div>
  )
}

export default IncomeExp

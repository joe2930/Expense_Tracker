import React from 'react'

function Balance({transactions}) //rpops or curaly braces la variable name {/* we want only amount to cal balance */}

{
  const bal=transactions.map(transactions=>transactions.amount) 
  const totalbal=bal.reduce(
    (pre_acc,curr_item)=>
    
      (pre_acc=pre_acc+curr_item)
    
    ,0); 
    //two parameters (const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // )
    //calback futn
    // 0 is initial value, we not mention it takes the first value

  return (
    <div>

      <h3> CURRENT BALANCE</h3>
      <h1>${totalbal}</h1>
    </div>
  )
}

export default Balance

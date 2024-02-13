import React, { useState } from "react";

const AddTransaction = ({Amount, transactions,addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [stat,setStatus]=useState("");
  const [showStatus, setShowStatus] = useState(false); 
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction(text, Number(amount));
    setText("");
    setAmount("");
  };

  const status =()=>
  {
    const bal=transactions.map(transactions=>transactions.amount) 
    const totalbal=bal.reduce(
      (pre_acc,curr_item)=>
      
        (pre_acc=pre_acc+curr_item)
      
      ,0);
    if((totalbal*-1)<Amount)
    {
        console.log(totalbal);
        console.log(Amount);
        setStatus(`You can save $${Number(totalbal) + Number(Amount)} in this month`)
    }
    else {
      setStatus(`
    To maintain your balance, you require an additional  $${(Number(totalbal) + Number(Amount))*-1}`);
    }
    setShowStatus(true);
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Objective</label>
          <input 
            type="text"
            value={text} 
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
      <button className="btn1" onClick={status}>Check your Status</button> 
      {showStatus && <p 
       style={{
        color: stat.includes("save") ? "#2ecc71" : "#e76c5e",
        border: `10px solid ${stat.includes("save") ? "#2ecc71" : "#e76c5e"}`
      }}
       className="status">{stat}</p>}   
      </> 
  );
};

export default AddTransaction;

// when we access e.target.value, we are accessing the value property of the <input> element, which contains the current value entered by the user

//onchange mns any change happened 

// the onChange event is triggered on the <input> element, 
//e.target means event object ....refers tp the input element 
//e.target.value means input element oda value
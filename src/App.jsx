import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import Balance from './components/Balance' 
import IncomeExp from './components/IncomeExp'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import Salary from './components/Salary'
function App() {

  const initialState ={
    transaction:
     [
    
     
    ],
    } 

    const [transaction,setTransaction]=useState(initialState.transaction)  
    //send the above array as a initial sate to othere jsx file

    const [amount, setAmount] = useState("");


    const deleteTransaction =(id)=>  //arrow fucntn oda parameter is id
    {
      const updatedTransactions=transaction
      .filter(transaction=>transaction.id!==id)
      //nama slct pana id thavira micham ela transaction ah yum kudu
      //aprm antha list ah replace panita delete airum
      setTransaction(updatedTransactions)
    }


    const addTransaction=(text,amount)=>{
         const newentry=
         {
            id:Math.floor(Math.random()*100000),
            text,
            amount
         };
         setTransaction([...transaction,newentry]) 
    }

  return (
    <>
      <div className="img"></div>
      <div className="content">
      <Header/> 
      <div className="form-control">
          <h3><label htmlFor="text">MONTHLY INCOME</label></h3>
          <input
            type="number"
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter Your Income..."
          />
        </div>
      <Balance  transactions={transaction}/> 
      <IncomeExp transactions={transaction} />
      <TransactionList transactions={transaction} deleteTransactions={deleteTransaction}/>  
      <AddTransaction transactions={transaction} addTransaction={addTransaction}  Amount={amount}/> 
      </div>
    </>
  )
}

export default App

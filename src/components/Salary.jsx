import React from 'react'

const Salary = () => {
  return (
    <div>
      <div className="form-control">
          <h3><label htmlFor="text">INCOME</label></h3>
          <input
            type="number"
            // value={text} 
            // onChange={(e) => setText(e.target.value)}
            placeholder="Enter Your Income..."
          />
        </div>
       
    </div>
  )
}

export default Salary

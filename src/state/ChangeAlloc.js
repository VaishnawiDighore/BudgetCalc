import React, { useState } from 'react'

const ChangeAlloc = ({ setSelectedDepartment, addAmount, removeAmount ,remaining, spent, currency, currencySymbols}) => {
  const [addRemove, setAddRemove] = useState("add");
  const [amount, setAmount] = useState(0);
  
  const handleAmountChange = (event) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleSaveClick  = () => {
    if (addRemove === "add" && amount > 0) {
      if(addRemove === "add" && amount <= remaining){
        addAmount(amount); 
      }else{
      alert(" Amount should be less than or equal to Remaining Amount");
      }    
    }else{
      if(addRemove === "remove" && amount <= spent){
        removeAmount(amount);
      }else{
        alert(" Amount should be less than or equal to spent Amount");
      }  
    }
  };

  const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
      };

  return (
    <div className='change-container'>
      <div>
      <h2>Changes Allocation</h2>
      </div> 

      <div className='c-subcontainer'>
      <div className='c'>
          <select name="department"
          //  value={department} 
          //  onChange={(e) => setDepartment(e.target.value)}
          onChange={handleDepartmentChange}
          >
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Transport">Transport</option>
            <option value="Sales">Sales</option>
            <option value="HR">HR</option>
            <option value="Management">Management</option>
            <option value="Production">Production</option>
          </select>
        </div>

        <div className='c'>
          <select name="add_remove"
           value={addRemove}
           onChange={(e) => setAddRemove(e.target.value)}
          >
            <option value="add">Add</option>
            <option value="remove">Remove</option>
          </select>
        </div>

        <div className='c'>
        {currencySymbols[currency]} <input type="number" value={amount} onChange={handleAmountChange}/>
        </div>

        <div className='c'           >
            <button className='btn-save' onClick={handleSaveClick }>Save</button>
        </div>

      </div>
    </div>
  )
}

export default ChangeAlloc

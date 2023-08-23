import React from "react";

const Budget = ({ spent, remaining, currency, currencySymbols, handleCurrencyChange, updateBudgetAndRemaining}) => {

  const handleBudgetChange = (e) => {
    const newBudget = parseFloat(e.target.value);
    updateBudgetAndRemaining(newBudget);
  };

  return (
    <div className="budget-container">
      <div>
      <h2>Company's Budget Allocation</h2>
      </div>

      <div className="b-subcontainer">
        <div className='b'>
          Budget: 
          {currencySymbols[currency]}
          <input type="number"
          //  value={budget} 
           onChange={handleBudgetChange} />
       
        </div>

        <div className='b'>
          Remaining: 
          {currencySymbols[currency]} 
          <input type="number" value={remaining} readOnly/>
        </div>

        <div className='b'>
          Spent: 
          {currencySymbols[currency]} 
          <input type="number" value={spent} readOnly/>
        </div>

        <div className='b'>
          <select name="currency" 
          onChange={handleCurrencyChange} 
          // value={currency}
          >
          <option value="rupee">₹ Rupee</option>
          <option value="dollar">$ Dollar</option>
          <option value="pound">£ Pound</option>
          <option value="euro">€ Euro</option>
          </select>
        </div>
      </div>    
       
    </div>
  );
};

export default Budget;

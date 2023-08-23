import React, { useState } from 'react';
import './App.css';
import Budget from './state/Budget'
import Alloaction from './state/Alloaction';
import ChangeAlloc from './state/ChangeAlloc';

function App() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [spent, setSpent] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [currency, setCurrency] = useState('rupee');

  const currencySymbols = {
    rupee: '₹',
    dollar: '$',
    pound: '£',
    euro: '€',
  };

  const increaseSpent = () => {
    if (remaining === 0){
       alert("Please check remaining value is already 0")
    }else{
      setSpent(spent + 10);
      setRemaining(remaining - 10);
    }    
  };

  const decreaseSpent = () => {
    if (spent === 0){
      alert("Please check spent value is already 0")
   }else{
    setSpent(spent - 10);
    setRemaining(remaining + 10);
   }    
  };

  const clearData = () => {
    setSelectedDepartment(null);
    setSpent(0);
    setRemaining(0);
    // setRemaining(spent);
  };

  const addAmount = (amount) => {
    setSpent(spent + amount);
    setRemaining(remaining - amount);
  };

  const removeAmount = (amount) => {
    setSpent(spent - amount);
    setRemaining(remaining + amount);
  };

  const handleCurrencyChange = (event) => {
    const selectedCurrency = event.target.value;
    setCurrency(selectedCurrency);
  };

  const updateBudgetAndRemaining = (newBudget) => {
    setSpent(0);
    setRemaining(newBudget);
  };

  return (
    <div className="App">
    <Budget
    spent={spent} 
    remaining={remaining}
    currency={currency}
    currencySymbols={currencySymbols}
    handleCurrencyChange={handleCurrencyChange}
    updateBudgetAndRemaining={updateBudgetAndRemaining}
    />

    <Alloaction selectedDepartment={selectedDepartment}
    currency={currency}
    currencySymbols={currencySymbols}
    spent={spent} 
     increaseSpent={increaseSpent}
     decreaseSpent={decreaseSpent}
     clearData={clearData}
    />
    <ChangeAlloc setSelectedDepartment={setSelectedDepartment}
    currency={currency}
    currencySymbols={currencySymbols}
    addAmount={addAmount}
    removeAmount={removeAmount}
    remaining={remaining}
    spent={spent}
    />
    
    </div>
  );
}

export default App;

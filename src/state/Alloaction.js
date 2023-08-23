import React from "react";

const Alloaction = ({
  selectedDepartment,
  increaseSpent,
  decreaseSpent,
  spent,
  clearData,
  currencySymbols,
  currency
}) => {

const renderDepartmentAndBudget = () => {
    if (selectedDepartment && spent !== null) {
      return (
        <>
         <div className="a">
          <h4>Department: </h4>
          {selectedDepartment}
        </div>
        <div className="a">
          <h4>Allocated Budget: </h4> {currencySymbols[currency]}{spent}
        </div>
        <div className="a">
          <h4>Increased by 10</h4>
          <button className="btn-calc" onClick={increaseSpent}>
            +
          </button>
        </div>
        <div className="a">
          <h4>Decreased by 10</h4>
          <button className="btn-calc" onClick={decreaseSpent}>
            -
          </button>
        </div>
        <div className="a">
          <h4>Delete</h4>
          <button className="btn-calc" onClick={clearData}>
            x
          </button>
          {/* <Button variant="outline-danger">x</Button> */}
        </div>
        </>
      );
    } else {
      return (
        <>
         <div className="a">
          <h4>Department: </h4>
          <button>No Data</button>
        </div>
        <div className="a">
          <h4>Allocated Budget: </h4> 
        </div>
        <div className="a">
          <h4>Increased by 10</h4>
        </div>
        <div className="a">
          <h4>Decreased by 10</h4>
        </div>
        <div className="a">
          <h4>Delete</h4>
        </div>
        </>
      )
    }
  };

  return (
    <div className="allocation-container">
      <div>
        <h2>Allocation</h2>
      </div>
      <div className="a-subcontainer">
      {renderDepartmentAndBudget()}      
      </div>
    </div>
  );
};

export default Alloaction;

import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="new-expense">
      {isEditing === true ? (
        <ExpenseForm
          onClickCancel={startEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;

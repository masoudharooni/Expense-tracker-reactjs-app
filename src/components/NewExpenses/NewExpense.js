import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = props => {
  const saveExpenseDataHandler = expenseData => {
    const userExpenseData = {
      ...expenseData,
      id: `e${Math.trunc(Math.random() * 10).toString()}`,
    };
    props.onSaveNewExpenseData(userExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

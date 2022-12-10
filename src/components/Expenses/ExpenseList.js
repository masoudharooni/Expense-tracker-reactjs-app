import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
const ExpenseList = props => {
  const showExpenseContent = () => {
    if (props.filteredExpenses.length === 0)
      return <p className="alert">Any expenses not found</p>;
    return props.filteredExpenses.map(expense => (
      <ExpenseItem key={expense.id} expense={expense} />
    ));
  };

  return <div className="expense-list">{showExpenseContent()}</div>;
};

export default ExpenseList;

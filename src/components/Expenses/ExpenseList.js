import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = props => {
  const filteredExpenses =
    props.selectedYear != ''
      ? props.expenses.filter(
          expense => expense.date.getFullYear() == props.selectedYear
        )
      : props.expenses.filter(exp => true);

  const showExpenseContent = () => {
    if (filteredExpenses.length === 0)
      return <p className="alert">Any expenses not found</p>;
    return filteredExpenses.map(expense => (
      <ExpenseItem key={expense.id} expense={expense} />
    ));
  };

  return <div>{showExpenseContent()}</div>;
};

export default ExpenseList;

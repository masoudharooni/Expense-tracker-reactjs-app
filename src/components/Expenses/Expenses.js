import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('');
  const yearChangeHandler = year => {
    setSelectedYear(year);
  };

  const filteredExpenses =
    selectedYear != ''
      ? props.expenses.filter(
          expense => expense.date.getFullYear() == selectedYear
        )
      : props.expenses.filter(exp => true);

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onSaveFilteredYear={yearChangeHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p>Any expenses not found</p>
      ) : (
        filteredExpenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      )}
    </Card>
  );
};

export default Expenses;

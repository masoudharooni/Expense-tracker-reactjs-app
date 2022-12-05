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
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onSaveFilteredYear={yearChangeHandler}
      />

      {selectedYear != ''
        ? props.expenses
            .filter(expense => expense.date.getFullYear() == selectedYear)
            .map(expense => <ExpenseItem key={expense.id} expense={expense} />)
        : props.expenses.map(expense => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
    </Card>
  );
};

export default Expenses;

import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const yearChangeHandler = year => {
    console.log(typeof year, year);
    setSelectedYear(year);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onSaveFilteredYear={yearChangeHandler}
      />
      {props.expenses.map(expense => (
        <ExpenseItem expense={expense} />
      ))}
    </Card>
  );
};

export default Expenses;

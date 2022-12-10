import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
const Expenses = props => {
  const [selectedYear, setSelectedYear] = useState('');
  const yearChangeHandler = year => {
    setSelectedYear(year);
  };

  let filteredExpenses = props.expenses;
  const saveFilterExpenses = exp => {
    filteredExpenses = exp;
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={selectedYear}
        onSaveFilteredYear={yearChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList
        selectedYear={selectedYear}
        expenses={props.expenses}
        onSaveFilteredExpenses={saveFilterExpenses}
      />
    </Card>
  );
};

export default Expenses;

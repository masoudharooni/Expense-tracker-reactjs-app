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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
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
      <ExpenseList selectedYear={selectedYear} expenses={props.expenses} />
    </Card>
  );
};

export default Expenses;

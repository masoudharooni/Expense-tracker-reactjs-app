import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" placeholder="Enter title of the expense" />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            placeholder="Enter amount of the expense"
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-12" max="2022-12-20" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

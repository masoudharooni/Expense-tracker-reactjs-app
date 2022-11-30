import './ExpenseItem.css';

function ExpenseItem(props) {
  const month = props.expense.date.toLocaleString('en-US', { month: 'long' });
  const day = props.expense.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.expense.date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

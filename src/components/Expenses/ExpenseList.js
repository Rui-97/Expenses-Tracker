import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  //use conditional statement to decide what content is shown on screen.
  if (props.selectedExpenses.length === 0) {
    return <h2 className="expense-list__fallback">No expenses found</h2>;
  }
  return (
    <ul className="expense-list">
      {/* dynamic ExpenseItem */
      /* build-in .map(): creates a new array from the results of calling the self-defined function for every element in the original array.  */}
      {props.selectedExpenses.map((expense) => {
        return (
          <ExpenseItem
            //key is a build-in react props
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
      ;
    </ul>
  );
}

export default ExpenseList;

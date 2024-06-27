import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  //use useState() to store the state(whether is editing) as boolean
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }

  function addBtnHandler() {
    setIsEditing(true);
  }
  function cancelBtnHandler() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {/* set conditions to decide what content will be shown */}
      {!isEditing && <button onClick={addBtnHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelBtnHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;

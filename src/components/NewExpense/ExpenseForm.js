import { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  /* Alternative*/
  //------------put all varibles in an objet and use useState only once
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //------------ copy the previous sate using function as inpur parameter(this is to make sure the unchanged value don't lose)
  //------------ and then reassign changed value.
  //   function titleChangeHandler(event) {
  //     setUserInput(function (prevState) {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //   }

  //   function amountChangeHandler(event) {
  //     setUserInput(function (prevState) {
  //       return { ...prevState, enteredAmount: event.target.value };
  //     });
  //   }
  //   function dateChangeHandler(event) {
  //     setUserInput(function (prevState) {
  //       return { ...prevState, enteredDate: event.target.value };
  //     });
  //   }

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // for 'event.target.value', the value will be return as strings
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      //+: add amount as numbers
      amount: +enteredAmount,
      //convert string to appropriate time format
      date: new Date(enteredDate),
    };
    // lift the expenseData up to the parent of the component function
    props.onSaveExpenseData(expenseData);
    //when form is submitted, overwrite the user's input and clear the form
    // two-way binding: set input elment's vale attribute
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            step="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          {/* when the cancel btn is clicked, the cancelBtnHandler function in the parent component will be called */}
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;

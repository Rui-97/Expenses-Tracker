import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  function SaveYearDataHandler(selectedYear) {
    //the value is a string
    setFilteredYear(selectedYear);
  }

  // arry with expenses in selected year
  const selectedYearExpenses = props.items.filter((element) => {
    return element.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSaveYearData={SaveYearDataHandler}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={selectedYearExpenses} />
      <ExpenseList selectedExpenses={selectedYearExpenses} />
    </Card>
  );

  //---------------------- if do not create separate ExpenseList component--------------------------------
  /* Alternative way 1---------------------------
  // let expensesContent = <p>No expenses found</p>;
  // if (selectedYearExpenses.length > 0) {
  //   expensesContent = selectedYearExpenses.map((expense) => {
  //     return (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     );
  //   });
  // }

  /* Alternative way 2---------------------------- 
  /* {selectedYearExpenses.length === 0 && <p>No expenses found</p>}
      {selectedYearExpenses.length > 0 &&
        selectedYearExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */

  /* Alternative way 3-------------------------JS ternary operator */
  /* {selectedYearExpenses.length === 0 ? (
        <p>No expenses found</p>
      ) : (
        selectedYearExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )} */
}

export default Expenses;

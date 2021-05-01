import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
import Card from "../UI/Card";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expense.filter((exp) => {
    return exp.date.getFullYear().toString() === filteredYear;
  });

 

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesChart expenses={filteredExpenses}/>
        {/* {filteredExpenses.length === 0 ? (
          <p>no expenses</p>
        ) : (
          filteredExpenses.map((exp) => (
            <ExpItem
              key={exp.id}
              title={exp.title}
              amount={exp.amount}
              date={exp.date}
            />
          ))
        )}; */}

                                        {/* alternative */}

        {/* {filteredExpenses.length==0 && (<p>no expenses</p>)};
        {filteredExpenses.length>0 && filteredExpenses.map((exp) => (
      <ExpItem
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      />
    ))} */}

                                        {/* alternative */}

        {/* {expensesContent} */}

        <ExpensesList items={filteredExpenses}/>
        

      </Card>
    </div>
  );
};

export default Expense;

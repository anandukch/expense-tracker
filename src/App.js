import React, {useState} from 'react';
import "./App.css";
import NewExpense from './components/NewExpense/NewExpense';
import Expense from './components/expenses/Expense'

const DUMMY = [
  // { id: "e1", title: "airpod", amount: "500", date: new Date(2020, 3, 21) },
  // { id: "e2", title: "car", amount: "2000", date: new Date(2020, 2, 25) },
  // { id: "e3", title: "bike", amount: "200", date: new Date(2020, 4, 31) },
  // { id: "e4", title: "phone", amount: "20", date: new Date(2022, 3, 21) },
];

const App=() => {
  const [expenses, setExpenses] = useState(DUMMY)
  

  const addExpenseHandler=expense=>{
    setExpenses(prevExpenses=>{return [expense, ...prevExpenses]})
  }

  return (
    <div className=" ">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense expense={expenses}/>
    </div>
  );
}

export default App;

// import React,{useState  , useEffect } from "react";
import React,{useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
     {
          id: 'e1',
          title: 'school Fee',
          amount: 250,
          date: new Date(2021, 5, 12)
     },
     {
          id: 'e2',
          title: 'Book',
          amount: 230,
          date: new Date(2021, 2, 22)
     },
     {
          id: 'e3',
          title: 'Housse Rent',
          amount: 700,
          date: new Date(2021, 4, 2)
     },
     {
          id: 'e4',
          title: 'Food',
          amount: 780,
          date: new Date(2021, 5, 5)
     }

];

const App = () => {

     const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

     // function fetchData(){
     //      fetch('https://techgun.website/sample/api/read.php').then(
     //           response => {
     //                return response.json();
     //           }
     //           ).then(
     //         data => {
     //                   setExpenses(data);
     //                }
     //          );
     //        };
     // }
     //  Here always use UseEffect Hook... 
     //  Because If you not call UseEffect 
     //  then fetch() will call Recursively which is unnessasary Things to have....
     //  This code to be written in Main File...
     //  Getting Data from Data base using Get API Method..

     //  useEffect(()=>{
     //            fetchData();
     //           },[]);
     

      const addExpenseHandler = (expense) => {
          // Posting Data( new Expense coming from NewExpense ) to Database using Post Method...
          // fetch('https://techgun.website/sample/api/create.php', {
          //      method: 'POST',
          //      body: JSON.stringify(expense),
          //      headers: {
          //          'content-Type' : 'application/json'
          //      }
          //  }).then(
          //      response => {
          //              fetchData();
          //      }
          //  )
          const updatedExpense = [...expenses, expense];
          setExpenses(updatedExpense);

      };
     
       return (
             <div>
               <NewExpense onAddExpense={addExpenseHandler} />
               <Expenses item={ expenses } />
              </div>
         );
}

export default App;
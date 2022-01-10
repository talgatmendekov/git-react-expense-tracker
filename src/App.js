import './App.css';
// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';


function App() {

  const expenses = [
    {
      id: 1, 
      title:'House rent',
      amount: 1000,
      date: new Date(2020, 7, 14)
    },
    {
      id: 2, 
      title:'Car insuranse',
      amount: 200,
      date: new Date(2021, 6, 15)
    },
    {
      id: 3, 
      title:'Utilities',
      amount: 400,
      date: new Date(2021, 8, 20)
    },
    {
      id: 4, 
      title:'Food & Bevarage',
      amount: 300,
      date: new Date(2021, 9, 25)
    },
  ]
  return (
    <div className="App">
      <h1>Hello</h1>
     <Expenses data = {expenses}/>
    </div>
  );
}

export default App;

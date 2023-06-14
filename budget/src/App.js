import "./App.css";
import {
  Container, 
} from "semantic-ui-react";
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import {useState} from 'react'

function App() {
  const [entries, setEntries] = useState(initialEntries)

  return (
    <Container>
      
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance
        title="Your balance"
        value="123123"
        color="Green"
        size="small"
      />
      <DisplayBalances />

      
      <MainHeader title="History" type="h3" />

      

      <EntryLine description={entries[0].description} value={entries[0].value} isExpense={entries[0].isExpense} />
      <EntryLine description="Expense" value="$10" isExpense />
     
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    description : 'work income',
    value : '$1500',
    isExpense: false
  },
  {
    description : 'water bill',
    value : '$100',
    isExpense: true
  },
  {
    description : 'Rent',
    value : '$500',
    isExpense: true
  },
  {
    description : 'Powre bill',
    value : '$50',
    isExpense: true
  }
]

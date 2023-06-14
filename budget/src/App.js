import "./App.css";
import {
  Container, 
} from "semantic-ui-react";
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
function App() {
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

      

      <EntryLine description="Something" value="$10" />
      <EntryLine description="Expense" value="$10" isExpense />
     
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

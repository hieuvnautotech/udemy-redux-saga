import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";
import { useState } from "react";
import EntryLines from "./components/EntryLines";

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function deleteEntry(id) { 
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log(`result`, result);
    console.log(`entries`, entries);
    setEntries(result);
  }

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

      <EntryLines entries={entries} deleteEntry={deleteEntry} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm addEntry={addEntry} />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id:1,
    description: "work income",
    value: "$1500",
    isExpense: false,
  },
  {
    id:2,
    description: "water bill",
    value: "$100",
    isExpense: true,
  },
  {
    id:3,
    description: "Rent",
    value: "$500",
    isExpense: true,
  },
  {
    id:4,
    description: "Powre bill",
    value: "$50",
    isExpense: true,
  },
];

import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useState, useEffect } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { useSelector } from "react-redux";

function App() {
  
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState()
  const entries = useSelector((state) => state.entries);
  const {isOpen, id} = useSelector((state) => state.modals);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index])
  }, [isOpen, id]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      } else {
        return (totalIncome += Number(entry.value));
      }
    });
    setTotal(totalIncome - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncome);
  }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    // setEntries(result);
  }

  

  

  

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance
        title="Your balance"
        value={total}
        color="green"
        size="small"
      />
      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />

      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        
      />

      <ModalEdit
        isOpen={isOpen}
        {...entry}
      />
    </Container>
  );
}

export default App;



import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useState, useEffect } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from './components/ModalEdit'


function App() {

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const [entries, setEntries] = useState(initialEntries);
  const [isOpen, setIsOpen] = useState(false)         
  const [entryId, setEntryId] = useState()    
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)


  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
  }, [isOpen]);
  
  useEffect(() => {
    let totalIncome = 0
    let totalExpenses = 0
    entries.map(entry => { 
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value))
      } else { 
        return (totalIncome += Number(entry.value))
      }
    })
    setTotal (totalIncome - totalExpenses)
    setExpenseTotal(totalExpenses)
    setIncomeTotal(totalIncome)
  },[entries])


  function deleteEntry(id) { 
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result);
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    console.log(`result`, result);
    console.log(`entries`, entries);
    setEntries(result);
    resetEntry()
  }

  function ediEntry(id){
    console.log(`edit entry ${id}`)
    if(id){
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index];
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
       
      
    }
  }

  function resetEntry(){
    setDescription('')
      setValue('')
      setIsExpense(true)
  }

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance
        title="Your balance"
        value={total}
        color="Green"
        size="small"
      />
      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={ incomeTotal} />

      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        // setIsOpen={setIsOpen}
        ediEntry={ediEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />

      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id:1,
    description: "work income",
    value: "1500",
    isExpense: false,
  },
  {
    id:2,
    description: "water bill",
    value: "100",
    isExpense: true,
  },
  {
    id:3,
    description: "Rent",
    value: "500",
    isExpense: true,
  },
  {
    id:4,
    description: "Powre bill",
    value: "50",
    isExpense: true,
  },
];


import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useState, useEffect } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from './components/ModalEdit'
import {createStore} from 'redux'


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

  const store = createStore((state = initialEntries, action) => {
    console.log(action)
    let newEntries
    switch (action.type){
      case 'ADD_ENTRY' : 
      newEntries = state.concat({...action.payload})
      return newEntries

      case 'REMOVE_ENTRY' :
      newEntries = state.filter(entry => entry.id !== action.payload.id)
      return newEntries

      default:
      return state
    }
    return state})

    store.subscribe(() => {
      console.log('store:',store.getState())
    })
  
  // console.log(`store before`, store.getState())

  const payload_add = {
    id: 5,
    description: "hello redux",
    value: 100,
    isExpense: false,
  };

  const payload_remove={
    id:1,
  }

  store.dispatch({type:'ADD_ENTRY', payload: payload_add})
  store.dispatch({type: 'REMOVE_ENTRY', payload: payload_remove})
  
  // console.log(`store after`, store.getState())

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
        color="green"
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

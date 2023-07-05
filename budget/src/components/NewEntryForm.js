import React from 'react'
import { Form} from 'semantic-ui-react'
import ButtonOkOrCancel from './ButtonOkOrCancel';
import EntryForm from './EntryForm';
import { useDispatch } from 'react-redux'
import { addEntryRedux } from '../actions/entries.actions';



function NewEntryForm() {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(false);
  const dispatch = useDispatch()

  function addEntry() { 
    dispatch(addEntryRedux({
      id: 5,
      description,
      value,
      isExpense
    }))
  }
  
  return (
    <Form unstackable>
      <EntryForm
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ButtonOkOrCancel
        addEntry={addEntry}
        
      />
    </Form>
  );
}

export default NewEntryForm
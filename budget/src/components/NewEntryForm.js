import React from 'react'
import { Form} from 'semantic-ui-react'
import ButtonOkOrCancel from './ButtonOkOrCancel';
import EntryForm from './EntryForm';



function NewEntryForm({ addEntry, description, setDescription, value, setValue, isExpense, setIsExpense }) {
  
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
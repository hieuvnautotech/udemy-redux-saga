import React, {useState} from 'react'
import { Form} from 'semantic-ui-react'
import ButtonOkOrCancel from './ButtonOkOrCancel';
import EntryForm from './EntryForm';

import useEntryDetails from '../hooks/useEntryDetails';



function NewEntryForm() {
  const {
    description, setDescription, setValue, value, setIsExpense, isExpense, addEntry
} = useEntryDetails()
  
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
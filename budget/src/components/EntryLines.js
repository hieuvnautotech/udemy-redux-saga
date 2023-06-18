import React from 'react'
import EntryLine from './EntryLine'
import {Container} from 'semantic-ui-react'

function EntryLines({ entries, deleteEntry, setIsOpen}) {
  return (
    <Container>
        {entries.map((entry)=>(
        <EntryLine
            key={entry.id}
            // entry={entry} có cách viết khác dòng dưới
            {...entry} 
            deleteEntry={deleteEntry}
            setIsOpen={setIsOpen}
      />
        ))}
    </Container>
    
  )
}

export default EntryLines
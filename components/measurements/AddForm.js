import { measurementsData } from './data'
import {useState} from 'react'
import { Container, Button, TextField } from "@mui/material"

const AddForm = ({ addWeight, choice }) => {
  const [newestWeight, setNewestWeight] = useState('')

  const addNewWeight = (e) => {
    e.preventDefault()
    const newWeight = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      weight: Number(newestWeight)
    }
    addWeight(newWeight)
    clearInput()
  }

  const clearInput = () => {
    setNewestWeight('')
  }

  return (
    <Container>
      <TextField 
        id="outlined-basic" 
        label={choice} 
        variant="outlined" 
        type='text'
        name='New Weight'
        value={newestWeight}
        placeholder={`New ${choice}`}
        onChange={e => setNewestWeight(e.target.value)}
      />
      <Button onClick={(e) => addNewWeight(e)}>Submit</Button>
    </Container>
  )
}

export default AddForm
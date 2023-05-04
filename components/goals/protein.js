import { useState } from "react"
import { Button, TextField, Card, CardActions, CardContent, Typography } from "@mui/material"
const Protein = () => {
  const [proteinGoal, setProteinGoal] = useState(134)
  const [currentProtein, setCurrentProtein] = useState('')
  const [totalConsumed, setTotalConsumed] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await setTotalConsumed(totalConsumed + Number(currentProtein))
    clearInput()
  }

  const clearInput = () => {
    setCurrentProtein('')
  }

  return(
    <Card sx={{display: 'flex', margin: '10px', flexDirection: 'column', width: '30vw', alignItems: 'center'}}>
      <CardContent 
        component='form'
        noValidate
        autoComplete="off"
        sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
        <Typography  gutterBottom variant='h2' fontSize='2rem'>
        Protein Goal: {proteinGoal - totalConsumed}oz
        </Typography>
        <Typography gutterBottom variant='h2' fontSize='2rem'>
          Total Protein Intake: {totalConsumed}oz
        </Typography>
        <TextField 
          id="outlined-basic" 
          label="Protein Intake" 
          variant="outlined" 
          type='text'
          name='currentProtein'
          value={currentProtein}
          placeholder='Record Protein Intake'
          onChange={e => setCurrentProtein(e.target.value)}
          />
        {(totalConsumed > 0 && totalConsumed < proteinGoal) && <h3>You have {proteinGoal-totalConsumed}g of Protein left to reach your goal.</h3>}
        {(totalConsumed > 0 && totalConsumed === proteinGoal) && <h3>Congrats, you have reached your protein goal!</h3>}
        {(totalConsumed > 0 && totalConsumed > proteinGoal) && <h3>What a rockstar! You've exceeded your protein goal.</h3>}
        <CardActions>
          <Button onClick={(e) => handleSubmit(e)} variant="outlined">Calculate</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default Protein
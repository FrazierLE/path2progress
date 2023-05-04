import { useState } from "react"
import { Button, TextField, Card, CardActions, CardContent, Typography } from "@mui/material"
const Steps = () => {
  const [currentSteps, setCurrentSteps] = useState('')
  const [totalSteps, setTotalSteps] = useState(0)
  const stepGoal = 10000

  const handleSubmit = async (e) => {
    e.preventDefault()
    await setTotalSteps(totalSteps + Number(currentSteps))
    clearInput()
  }

  const clearInput = () => {
    setCurrentSteps('')
  }

  return(
    <Card sx={{display: 'flex', flexDirection: 'column', width: '30vw', alignItems: 'center'}}>
    <CardContent 
      component='form'
      noValidate
      autoComplete="off">
      <Typography  gutterBottom variant='h2' fontSize='2rem'>
      Daily Steps Goal: {stepGoal - totalSteps}
      </Typography>
      <TextField 
        id="outlined-basic" 
        label="Protein Intake" 
        variant="outlined" 
        type='text'
        name='currentSteps'
        value={currentSteps}
        placeholder='Record Daily Steps'
        onChange={e => setCurrentSteps(e.target.value)}
        />
 {/* {remainingSteps > 0 && <h3>You have {remainingSteps} steps left to reach your goal.</h3>}
    //   {remainingSteps === 0 && <h3>Congrats, you have reached your step goal!</h3>}
    //   {remainingSteps < 0 && <h3>What a rockstar! You've exceeded your steps goal.</h3>} */}
      <CardActions>
        <Button onClick={(e) => handleSubmit(e)} variant="outlined">Calculate</Button>
      </CardActions>
    </CardContent>
  </Card>
  )
}

export default Steps
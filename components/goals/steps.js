import { useState } from "react"
import { Button, TextField, Card, CardActions, CardContent, Typography } from "@mui/material"

const styles = {
  card: {
    backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod/images/feet-walking-1665089039.jpg?crop=1.00xw:0.751xh;0,0.192xh&resize=1200:*")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    margin: '10px',
    flexDirection: 'column',
    width: '30vw',
    height: '50vh',
    alignItems: 'center'
  },
};

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
    <Card sx={styles.card}>
    <CardContent 
      component='form'
      noValidate
      autoComplete="off"
      sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      >
      <Typography  gutterBottom variant='h2' fontSize='2rem'>
      Daily Steps Goal: {stepGoal}
      </Typography>
      <Typography  gutterBottom variant='h2' fontSize='2rem'>
      Total Daily Steps: {totalSteps}
      </Typography>
      <TextField 
        id="outlined-basic" 
        label="Daily Steps" 
        variant="outlined" 
        type='text'
        name='currentSteps'
        value={currentSteps}
        placeholder='Record Daily Steps'
        onChange={e => setCurrentSteps(e.target.value)}
        />
        <Typography>
          {(totalSteps > 0 && totalSteps < stepGoal) && <h3>You have {stepGoal-totalSteps} steps left to reach your goal.</h3>}
          {(totalSteps > 0 && totalSteps === stepGoal) && <h3>Congrats, you have reached your step goal!</h3>}
          {(totalSteps > 0 && totalSteps > stepGoal) && <h3>What a rockstar! You've exceeded your steps goal.</h3>}
        </Typography>
      <CardActions>
        <Button onClick={(e) => handleSubmit(e)} variant="contained">Calculate</Button>
      </CardActions>
    </CardContent>
  </Card>
  )
}

export default Steps
import { useState, useRef, useEffect } from "react"
import { Button, TextField, Card, CardActions, CardContent, Typography } from "@mui/material"

const Water = () => {
  const waterGoal = 100
  const [currentWaterIntake, setCurrentWaterIntake] = useState('')
  const [totalConsumed, setTotalConsumed] = useState(0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await setTotalConsumed(totalConsumed + Number(currentWaterIntake))
    clearInput()
  }

  const addWater = (e) => {
    setCurrentWaterIntake(e.target.value)
  }

  const clearInput = () => {
    setCurrentWaterIntake('')
  }

  return(
    <Card sx={{display: 'flex', margin: '10px', flexDirection: 'column', width: '30vw', alignItems: 'center'}}>
      <CardContent 
        component='form'
        sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        noValidate
        autoComplete="off">
        <Typography  gutterBottom variant='h2' fontSize='2rem'>
        Water Goal: 100oz
        </Typography>
        <Typography  gutterBottom variant='h2' fontSize='2rem'>
        Hydration Status: {totalConsumed}oz
        </Typography>
        <TextField 
          id="outlined-basic" 
          label="Water Intake" 
          variant="outlined" 
          type='text'
          name='currentWaterIntake'
          value={currentWaterIntake}
          placeholder='Record Water Intake'
          onChange={e => addWater(e)}
          />
          <Typography>
          {(totalConsumed > 0 && totalConsumed < waterGoal) && <h3>You have {waterGoal-totalConsumed}oz of Water left to reach your goal. Drink up buttercup.</h3>}
          {(totalConsumed > 0 && totalConsumed === waterGoal) && <h3>Congrats, you have reached your water goal! Way to stay hydrated!</h3>}
          {(totalConsumed > 0 && totalConsumed > waterGoal) && <h3>Freaking Camel! You've exceeded your water intake goal.</h3>}
          </Typography>
          <CardActions>
          <Button onClick={(e) => handleSubmit(e)} variant="outlined">Calculate</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default Water
import { useState } from "react"
import { Button, TextField, Card, CardActions, CardContent, Typography } from "@mui/material"
// import Hydration from '../../assets/Hydration.jpeg'

const styles = {
  card: {
    backgroundImage: 'url("https://www.rutgers.edu/sites/default/files/PRMO_lean.protein6.20.22.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    margin: '10px',
    flexDirection: 'column',
    width: '30vw',
    height: '50vh',
    alignItems: 'center',
    // color: 'gray'
  },
};

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
    <Card style={styles.card}>
      <CardContent 
        component='form'
        noValidate
        autoComplete="off"
        sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
        >
        <Typography  gutterBottom variant='h2' fontSize='2rem' fontWeight='400'>
        Protein Goal: {proteinGoal} oz
        </Typography>
        <Typography gutterBottom variant='h2' fontSize='2rem' fontWeight='300'>
          Total Protein Intake: {totalConsumed} oz
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
        {(totalConsumed > 0 && totalConsumed < proteinGoal) && <h3 style={{backgroundColor: 'rgb(48, 99, 186)', color: 'white', borderRadius: '5px', padding: '3px', textAlign: 'center'}}>You have {proteinGoal-totalConsumed}g of Protein left to reach your goal.</h3>}
        {(totalConsumed > 0 && totalConsumed === proteinGoal) && <h3 style={{backgroundColor: 'rgb(48, 99, 186)', color: 'white', borderRadius: '5px', padding: '3px', textAlign: 'center'}}>Congrats, you have reached your protein goal!</h3>}
        {(totalConsumed > 0 && totalConsumed > proteinGoal) && <h3 style={{backgroundColor: 'rgb(48, 99, 186)', color: 'white', borderRadius: '5px', padding: '3px', textAlign: 'center'}}>What a rockstar! You've exceeded your protein goal.</h3>}
        <CardActions>
          <Button onClick={(e) => handleSubmit(e)} variant="contained">Calculate</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default Protein
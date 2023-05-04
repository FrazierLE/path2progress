import { useState } from "react"
const Protein = () => {
  const [proteinGoal, setProteinGoal] = useState(134)
  const [currentProtein, setCurrentProtein] = useState(0)
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
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '20vw', alignItems: 'center'}}>
      <h2>Protein Goal: {proteinGoal - totalConsumed}g</h2>
      <label>Protein: </label>
      <input 
        type='text'
        name='currentProtein'
        value={currentProtein}
        placeholder='Record Protein Intake'
        onChange={e => setCurrentProtein(e.target.value)}
      />
      {/* {remainingProtein > 0 && <h3>You have {remainingProtein}g of Protein left to reach your goal.</h3>}
      {remainingProtein === 0 && <h3>Congrats, you have reached your protein goal!</h3>}
      {remainingProtein < 0 && <h3>What a rockstar! You've exceeded your protein goal.</h3>} */}
      <button>Calculate</button>
    </form>
  )
}

export default Protein
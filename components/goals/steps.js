import { useState } from "react"
const Steps = () => {
  const [currentSteps, setCurrentSteps] = useState(0)
  const [remainingSteps, setRemainingSteps] = useState()
  const stepGoal = 10000

  const handleSubmit = (e) => {
    e.preventDefault()
    setRemainingSteps(stepGoal - currentSteps)
  }

  return(
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '20vw', alignItems: 'center'}}>
      <h2>Daily Steps Goal: 10,000</h2>
      <label>Steps: </label>
      <input 
       type='text'
       name='currentSteps'
       value={currentSteps}
       placeholder='Record Daily Steps'
       onChange={e => setCurrentSteps(e.target.value)}
      />
      <button>Calculate</button>
      {remainingSteps > 0 && <h3>You have {remainingSteps} steps left to reach your goal.</h3>}
      {remainingSteps === 0 && <h3>Congrats, you have reached your step goal!</h3>}
      {remainingSteps < 0 && <h3>What a rockstar! You've exceeded your steps goal.</h3>}
    </form>
  )
}

export default Steps
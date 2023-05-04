import { useState } from "react"
const Steps = () => {
  const [currentSteps, setCurrentSteps] = useState(0)
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
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '30vw', alignItems: 'center'}}>
      <h2>Daily Steps Goal: {stepGoal - totalSteps}</h2>
      <label>Steps: </label>
      <input 
       type='text'
       name='currentSteps'
       value={currentSteps}
       placeholder='Record Daily Steps'
       onChange={e => setCurrentSteps(e.target.value)}
      />
      <button>Calculate</button>
      {/* {remainingSteps > 0 && <h3>You have {remainingSteps} steps left to reach your goal.</h3>}
      {remainingSteps === 0 && <h3>Congrats, you have reached your step goal!</h3>}
      {remainingSteps < 0 && <h3>What a rockstar! You've exceeded your steps goal.</h3>} */}
    </form>
  )
}

export default Steps
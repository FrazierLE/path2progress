import { useState, useRef, useEffect } from "react"

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
    <form  onSubmit={(e) => handleSubmit(e)} style={{display: 'flex', flexDirection: 'column', width: '20vw', alignItems: 'center'}}>
      <h2>Water Goal: {100-totalConsumed}oz</h2>
      <label>Water Intake: </label>
      <input 
        type='text'
        name='currentWaterIntake'
        value={currentWaterIntake}
        placeholder='Record Water Intake'
        onChange={e => addWater(e)}
      />
      {/* {remainingWater > 0 && <h3>You have {remainingWater}oz of Water left to reach your goal. Drink up buttercup.</h3>}
      {remainingWater === 0 && <h3>Congrats, you have reached your water goal! Way to stay hydrated!</h3>}
      {remainingWater < 0 && <h3>Freaking Camel! You've exceeded your water intake goal.</h3>} */}
      <button >Calculate</button>
    </form>
  )
}

export default Water
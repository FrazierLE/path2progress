import { useState } from "react"
const Water = () => {
  const waterGoal = 100
  const [currentWaterIntake, setCurrentWaterIntake] = useState()
  const [remainingWater, setRemainingWater] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setRemainingWater(waterGoal - currentWaterIntake)
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>Water Goal: {waterGoal}oz</h2>
      <label>Water Intake: </label>
      <input 
        type='text'
        name='currentWaterIntake'
        value={currentWaterIntake}
        placeholder='Record Water Intake'
        onChange={e => setCurrentWaterIntake(e.target.value)}
      />
      {remainingWater > 0 && <h3>You have {remainingWater}oz of Water left to reach your goal. Drink up buttercup.</h3>}
      {remainingWater === 0 && <h3>Congrats, you have reached your water goal! Way to stay hydrated!</h3>}
      {remainingWater < 0 && <h3>Freaking Camel! You've exceeded your water intake goal.</h3>}
      <button>Calculate</button>
    </form>
  )
}

export default Water
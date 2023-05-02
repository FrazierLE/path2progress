import Protein from "../components/goals/protein"
import Water from "../components/goals/water"
import Steps from "../components/goals/steps"

export default function Goals() {
  return(
    <div>
      <h1>Goals</h1>
      <Protein />
      <Steps />
      <Water />
    </div>
  )
}
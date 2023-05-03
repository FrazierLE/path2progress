import Protein from "../components/goals/protein"
import Water from "../components/goals/water"
import Steps from "../components/goals/steps"

export default function Goals() {
  return(
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Goals</h1>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100vw', height: '100vh'}}>
        <Protein />
        <Steps />
        <Water />
      </div>
    </div>
  )
}
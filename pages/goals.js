import Protein from "../components/goals/protein"
import Water from "../components/goals/water"
import Steps from "../components/goals/steps"
import { Container, Box } from "@mui/system"

export default function Goals() {
  return(
    <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Goals</h1>
      <Box 
        style={{border: '1px solid black', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '70vw', height: '70vh'}}
      >
        <Protein />
        <Steps />
        <Water />
      </Box>
    </Container>
  )
}
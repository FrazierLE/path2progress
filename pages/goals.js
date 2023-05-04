import Protein from "../components/goals/protein"
import Water from "../components/goals/water"
import Steps from "../components/goals/steps"
import { Container, Box } from "@mui/system"
import { Typography } from "@mui/material"

export default function Goals() {
  return(
    <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography variant='h1'>
        Goals
      </Typography>
      <Box 
        sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '80vh'}}
      >
        <Steps />
        <Protein />
        <Water />
      </Box>
    </Container>
  )
}
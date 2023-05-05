import { Line } from 'react-chartjs-2'
import { Container } from '@mui/material'
import ChoiceForm from './ChoiceForm'

const LineGraph = ({ chartData }) => {
  return(
    <Container className='chart-container'>
      <ChoiceForm />
      {/* <h2 style={{textAlign: 'center'}}>Progress</h2> */}
      <Line 
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Weight'
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </Container>
  )
}

export default LineGraph
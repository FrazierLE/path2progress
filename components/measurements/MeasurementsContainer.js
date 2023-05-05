import {useState, useEffect} from 'react'
import { Container } from '@mui/material'
import { measurementsData } from './data'
import LineGraph from './LineGraph'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

const MeasurementsContainer = () => {
  const [chartData, setChartData] = useState({
    labels: measurementsData.map((data) => data.date),
    datasets: [
      {
        label: 'Weight',
        data: measurementsData.map((data) => data.weight),
      }
    ]
  })
  return(
    <Container>
      <LineGraph chartData={chartData}/>
      MEASUREMENTS CONTAINER
    </Container>
  )
}

export default MeasurementsContainer
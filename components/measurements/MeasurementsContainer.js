import {useState, useEffect} from 'react'
import { Container } from '@mui/material'
import { measurementsData } from './data'
import LineGraph from './LineGraph'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import AddForm from './AddForm';

Chart.register(CategoryScale)
const MeasurementsContainer = () => {
  const [data, setData] = useState(measurementsData)
  const [choice, setChoice] = useState('Weight')

  useEffect(() => {
    setWeightData({
      labels: data.map((data) => data.date),
      datasets: [
        {
          label: 'Weight',
          data: data.map((data) => data.weight),
          borderColor: 'red'
        }
      ]
    })
  }, [data])

  const [weightData, setWeightData] = useState({
    labels: data.map((data) => data.date),
    datasets: [
      {
        label: 'Weight',
        data: data.map((data) => data.weight),
        borderColor: 'red'
      }
    ]
  })
  
  const [bodyFatData, setBodyFatData] = useState({
    labels: measurementsData.map((data) => data.date),
    datasets: [
      {
        label: 'Body Fat Percentage',
        data: measurementsData.map((data) => data.bodyFatPercent), 
        borderColor: 'blue'
      }
    ]
  })

  const [pinchesData, setPinchesData] = useState({
    labels: measurementsData.map((data) => data.date),
    datasets: [
      {
        label: 'Total Pinches',
        data: measurementsData.map((data) => data.chin + data.cheek + data.pec + data.bicep + data.tricep + data.subscap + data.australian + data.auxiliary + data.suprailiac + data.umbilicus + data.knee + data.calf + data.quad + data.hamstring),
        borderColor: 'green'
      }
    ]
  })

  const [allData, setAllData] = useState({
    labels: ['Weight', 'Body Fat Percentage', 'Total Pinches'],
    datasets: [weightData.datasets[0], pinchesData.datasets[0], bodyFatData.datasets[0]]
  })

  const chooseCategory = (choice) => {
    setChoice(choice)
  }

  const addWeight = (newData) => {
    setData([...measurementsData, newData])
  }

  return(
    <Container>
      <LineGraph allData={allData} weightData={weightData} bodyFatData={bodyFatData} pinchesData={pinchesData} chooseCategory={chooseCategory} choice={choice}/>
      {choice !== 'All' && <AddForm addWeight={addWeight} choice={choice}/>}
    </Container>
  )
}

export default MeasurementsContainer
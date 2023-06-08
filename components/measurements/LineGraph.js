import { Line } from 'react-chartjs-2'
import { Container } from '@mui/material'
import ChoiceForm from './ChoiceForm'
import { useState } from 'react'

const LineGraph = ({ allData, weightData, bodyFatData, pinchesData, chooseCategory, choice }) => {
  return(
    <Container className='chart-container'>
      <ChoiceForm chooseCategory={chooseCategory}/>
      {choice === 'Weight' && 
      <Line 
        data={weightData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Weight'
            },
            legend: {
              display: true
            }
          },
        //   scales: {
        //     y: {
        //         suggestedMin: 100,
        //         suggestedMax: 150
        //     }
        // }
        }}
      />}
         {choice === 'Body Fat Percentage' && 
      <Line 
        data={bodyFatData}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Body Fat Percentage'
            },
            legend: {
              display: true
            }
          }
        }}
      />}
         {choice === 'Total Pinches' && 
      <Line 
        data={pinchesData} 
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Total Pinches'
            },
            legend: {
              display: true
            }
          }
        }}
      />}
      {choice === 'All' && 
      <Line 
      data={allData} 
      options={{
        plugins: {
          title: {
            display: true,
            text: 'All Measurements'
          },
          legend: {
            display: true
          }
        }
      }}
      />}
    </Container>
  )
}

export default LineGraph
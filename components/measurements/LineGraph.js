// import React from 'react'
// import { measurementsData } from './data'
import { Line } from 'react-chartjs-2'

const LineGraph = ({ chartData }) => {
  return(
    <div className='chart-container'>
      <h2 style={{textAlign: 'center'}}>Measurements</h2>
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
    </div>
  )
}

export default LineGraph
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function PieChart(props) {

  return <div style={{height:'40vh'}}>
      <Pie data={props.data} options={{maintainAspectRatio: false,
       plugins: {
        title: {
            display: true,
            text: `${props.title.title}`
        },
        datalabels: {
            display: true,
            align: 'bottom',
            backgroundColor: '#ccc',
            borderRadius: 3,
            font: {
              size: 18,
            }
          },
        legend: {
          display: true,
          position: "bottom"
        },
      },
   }}  
  />
  </div>
}

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import Card from "@mui/material/Card";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Premium & Claims Over 10 Years',
    },
  },
};

const labels = ['Total Prodution', 'Total Claim', 'Paid', 'Outstanding'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [2,50,10,5],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    
  ],
};

export  default function Panel4() {
  return <Card style={{height:'60vh'}}>
      <Bar options={options} data={data} />
  </Card>;
}

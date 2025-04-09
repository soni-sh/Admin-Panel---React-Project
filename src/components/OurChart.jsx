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
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Overall Turnover',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Average',
      data: [1000, 3000, 5000, 7000, 9000,13000, 19000],
      backgroundColor: 'red',
    },
    {
      label: 'Report Data',
      data: [3000,4000, 5000,6000, 7000, 9000,13000],
      backgroundColor: 'black',
    },
  ],
};

const OurChart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default OurChart


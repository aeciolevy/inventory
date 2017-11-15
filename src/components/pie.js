/* eslint react/jsx-filename-extension: 0, react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = (props) => {
  const data = {
    labels: [
      'Emergency',
      'Preventive',
      'Homeopathy'
    ],
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56'
      ]
    }]
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Products by Sector</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

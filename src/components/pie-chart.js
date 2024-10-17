// src/components/PieChart.js

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'New Users', value: 53 }, 
  { name: 'Active Users', value: 142 }, 
];

const COLORS = ['#0088FE', '#00C49F']; 

const CustomPieChart = () => {
  return (
    <PieChart width={400} height={250}>
      <Pie
        data={data}
        cx={200} 
        cy={100} 
        labelLine={false}
        outerRadius={90}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomPieChart;

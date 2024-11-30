import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import '../stylesheets/Expense.css';

const ExpenseStatistics = () => {
  const data = [
    { percentage: 35, label: 'Others' }, 
    { percentage: 20, label: 'Investment' }, 
    { percentage: 30, label: 'Entertainment' }, 
    { percentage: 15, label: 'Bill Expense' }, 
  ];

  const COLORS = ['#000000', '#FFA500', '#0000FF', '#808080']; // Black, Orange, Blue, Gray

  return (
    <div className="expense-statistics">
      <h2>Expense Statistics</h2>
      <div className="pie-chart-container">
        <PieChart width={300} height={300}> 
          <Pie
            data={data}
            dataKey="percentage"
            outerRadius={100} 
            fill="green"
            animationDuration={0} 
            labelLine={false} 
            label={({ percentage }) => `${percentage}%`} // Show percentage directly
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default ExpenseStatistics;
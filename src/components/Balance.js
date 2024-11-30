import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import '../stylesheets/Balance.css'; // Import the CSS file

// Separate month and transaction data
const transactionsData = [
  { month: 'Jul', amounts: [200, 250, 300, 250] },
  { month: 'Aug', amounts: [300, 500] },
  { month: 'Sep', amounts: [420, 600, 750, 800] },
  { month: 'Oct', amounts: [280, 400, 560] },
  { month: 'Nov', amounts: [220, 450 , 600] },
  { month: 'Dec', amounts: [650, 400, 300, 200] },
  { month: 'Jan', amounts: [250, 400, 600, 400] },
];

// Flatten the data for the chart
const data = transactionsData.flatMap(({ month, amounts }) =>
  amounts.map((amount, index) => ({ month: index === 0 ? month : '', amount })) // Show month only for the first transaction
);

const BalanceHistory = () => {
  return (
    <div className="BalanceHistoryContainer"> 
      <h6>Balance History</h6> 
      <div className="BalanceHistory"> 
        <div className="GraphContainer"> 
          <LineChart width={500} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              stroke="#000" 
              tickLine strokeWidth={1} 
              interval={0} 
            />
            <YAxis 
              tickFormatter={(value) => `${value}`} 
              domain={[0, 800]} 
              ticks={[0, 200, 400, 600, 800]} 
              stroke="#000" 
              tickLine strokeWidth={1} 
            />
            <Tooltip />
            <defs>
              <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0000FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0000FF" stopOpacity={0} />
              </linearGradient>
              <filter id="rainDropEffect">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
                <feOffset dx="0" dy="5" result="offsetblur" />
                <feFlood floodColor="rgba(0, 0, 255, 0.5)" />
                <feComposite in2="offsetblur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <Line type="monotone" dataKey="amount" stroke="#0000FF" fill="url(#colorAmount)" filter="url(#rainDropEffect)" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default BalanceHistory;
import React from 'react';
import '../stylesheets/WeeklyList.css'; 

const WeeklyList = () => {
  const weeklyData = [
    { day: 'Sat', deposit: 250, withdraw: 480 },
    { day: 'Sun', deposit: 120, withdraw: 350 },
    { day: 'Mon', deposit: 270, withdraw: 320 },
    { day: 'Tue', deposit: 370, withdraw: 490 },
    { day: 'Wed', deposit: 240, withdraw: 150 },
    { day: 'Thu', deposit: 230, withdraw: 400 },
    { day: 'Fri', deposit: 350, withdraw: 390 },
  ];

  return (
    <div className="weekly-list-container">
      <h5>Weekly Activity</h5>
      <div className="chart-container">
        <div className="y-axis">
          <div className=" y-label">500</div>
          <div className="y-label">400</div>
          <div className="y-label">300</div>
          <div className="y-label">200</div>
          <div className="y-label">100</div>
          <div className="y-label">0</div>
        </div>
        <div className="weekly-list">
          {weeklyData.map((data, index) => (
            <div key={index} className="weekly-item">
              <div className="bars-container">
                <div className="withdraw-bar" style={{ height: `${data.withdraw * 0.5}px` }}></div>
                <div className="deposit-bar" style={{ height: `${data.deposit * 0.5}px` }}></div>
              </div>
              <div className="day">{data.day}</div>
            </div>
          ))}
        </div>
        <div className="legend">
          <div className="withdraw-legend">
            <div className="withdraw-color"></div>
            <span>Withdraw</span>
          </div>
          <div className="deposit-legend">
            <div className="deposit-color"></div>
            <span>Deposit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyList;
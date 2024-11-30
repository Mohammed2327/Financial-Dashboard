import React, { useState, useEffect } from 'react';
import { BsFillSendFill } from "react-icons/bs"; 
import '../stylesheets/Transfer.css';

const QuickTransfer = () => {
  const [amount, setAmount] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/images.json`); 
        const data = await response.json();
        setUsers(data); 
      } catch (error) {
        console.error('Error fetching the user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Amount:', amount);
  };

  const nextUsers = () => {
    if (currentIndex + 3 < users.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevUsers = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="quick-transfer">
      <h2>Quick Transfer</h2>
     
      <div className="content-container">
        <div className="transfer-container">
          <div className="scroll-buttons">
            <button onClick={prevUsers} disabled={currentIndex === 0} className="circle-button">
              &lt;
            </button>
          </div>
          <div className="profiles-container">
            {users.slice(currentIndex, currentIndex + 3).map((user, index) => (
              <div className="profile" key={index}>
                <img src={user.image} alt={user.name} />
                <p>{user.name}</p>
                <span>{user.role}</span>
              </div>
            ))}
          </div>
          <div className="scroll-buttons">
            <button onClick={nextUsers} disabled={currentIndex + 3 >= users.length} className="circle-button">
              &gt;
            </button>
          </div>
        </div>
        
        <div className="action-container">
          <div className="form">
            <label htmlFor="amount">Write Amount</label>
            <div className="amount-container">
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={handleInputChange}
                className="amount-input"
                placeholder="525.50" 
              />
              <button type="button" onClick={handleSubmit} className="send-button">
                Send
                <BsFillSendFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
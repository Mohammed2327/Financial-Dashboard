import React from 'react';
import { SiMastercard } from "react-icons/si";
import { FcSimCardChip } from "react-icons/fc";
import { FaCreditCard, FaPaypal, FaMoneyBillWave } from 'react-icons/fa'; // Import icons
import '../stylesheets/card.css';

function CardList() {
  const cards = [
    {
      balance: '$5,756',
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      cardNumber: '3778 **** **** 1234',
    },
    {
      balance: '$5,756',
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      cardNumber: '3778 **** **** 1234',
    },
  ];

  const transactions = [
    {
      id: 1,
      description: 'Deposit from my Card',
      date: '28 January 2021',
      amount: '-$850',
      type: 'deposit',
      icon: <FaCreditCard />,
    },
    {
      id: 2,
      description: 'Deposit Paypal',
      date: '25 January 2021',
      amount: '+$2,500',
      type: 'deposit',
      icon: <FaPaypal />,
    },
    {
      id: 3,
      description: 'Jemi Wilson',
      date: '21 January 2021',
      amount: '+$5,400',
      type: 'deposit',
      icon: <FaMoneyBillWave />,
    },
  ];

  return (
    <div>
      <div className="header">
        <h2>My Cards</h2>
        <h2 className='see-all'> See All</h2>
      </div>
      <div className="card-list">
        {cards.map((card, index) => (
          <div key={index} className={`card ${index === 0 ? 'black-card' : 'white-card'}`}>
            <div className="card-front">
              <div className="header-background">
                <div className="balance-container">
                  <div className="balance-label">Balance</div>
                  <div className="chip"> <FcSimCardChip /> </div>
                </div>
                <div className="balance">{card.balance}</div>
              </div>
              <div className="card-holder-container">
                <div className="card-holder">
                  <div>CARD HOLDER</div>
                  <div>{card.cardHolder}</div>
                </div>
                <div className="valid-thru">
                  <div>VALID THRU</div>
                  <div>{card.validThru}</div>
                </div>
              </div>
              <hr />
              <div className="card-number-container">
                <div className="card-number"> {card.cardNumber} </div>
                <div className="card-logo"> <SiMastercard /> </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="transaction-container">
        <h2>Recent Transactions</h2>
        <div className="transaction-list">
          <ul>
            {transactions.map((tx) => (
              <li key={tx.id} className="transaction-item">
                <div className="transaction-icon">{tx.icon}</div>
                <div className="transaction-details">
                  <strong className="transaction-description">{tx.description}</strong>
                  <span className="transaction-date">{tx.date}</span> 
                </div>
                <span className={`transaction-amount ${tx.amount.startsWith('+') ? 'positive' : 'negative'}`}>
                  {tx.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardList;
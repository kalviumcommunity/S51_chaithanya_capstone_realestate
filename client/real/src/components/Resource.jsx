import React, { useState } from 'react';
import "./Resouce.css";

function Resource() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const handleCalculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12; // monthly interest rate
    const n = parseInt(loanTerm) * 12; // total number of payments

    if (p && r && n) {
      const payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setMonthlyPayment(payment.toFixed(2));
    } else {
      setMonthlyPayment('');
    }
  };

  return (
    <div className="resource-container">
      <h1>Mortgage Calculator (INR)</h1>
      <form>
        <label>
          Loan Principal (₹):
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} />
        </label>
        <br />
        <label>
          Annual Interest Rate (%):
          <input type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </label>
        <br />
        <label>
          Loan Term (years):
          <input type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCalculate}>Calculate</button>
      </form>
      {monthlyPayment && (
        <p>Your estimated monthly payment: ₹{monthlyPayment}</p>
      )}
    </div>
  );
}

export default Resource;

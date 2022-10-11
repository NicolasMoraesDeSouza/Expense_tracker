import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function Balance() {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transactions => transactions.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
  return (
    <div>
       <h4>Seus gastos e ganhos</h4>
       <div id='balance'><h1>${total}</h1></div> 
    </div>
  );
}
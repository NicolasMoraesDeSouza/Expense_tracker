import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

export function History() {
const { transactions } = useContext(GlobalContext)

  return (
    <div>

    <h3>Histórico</h3>
    <ul id='list' className='list'>
      {transactions.map(transactions => (
        <Transaction transaction={transactions} key={transactions.id} />
      ))}
        
    </ul>

    </div>
    
  )
}
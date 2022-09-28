import React from 'react';
import { GlobalContext } from '../context/GlobalState';

export function History() {
  return (
    <div>

    <h3>Histórico</h3>
    <ul id='list' className='list'>
        <li className='minus'>
            Mouse <span>R$400</span> <button className='delete-btn'>X</button>

        </li>
        <li className='minus'>
            Headset <span>R$400</span> <button className='delete-btn'>X</button>
        </li>
        <li className='plus'>
            Salário <span>R$1400</span> <button className='delete-btn'>X</button>
        </li>
    </ul>

    </div>
    
  );
}
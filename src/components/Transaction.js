

export default function Transaction({ transaction }) {
   
    const sign = transaction.amount < 0 ? '-' : '+';
    return(

        <div>
           <ul id='list' className='list'>
                

                    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>

                    {transaction.text}
                     <span>{sign}${Math.abs(transaction.amount)}</span>
                    <button className='delete-btn'>x</button>
                    
                    </li>
                    
      
               
            </ul>
        </div>
    )
    
};
 


export default function Transaction({ transaction }) {
   
    const sign = transaction.amount < 0 ? '-' : '+';
    return(

        <div>
           <ul id='list' className='list'>
                

                    <li className='minus'>{transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span></li>
                    <button className='delete-btn'>x</button>
      
               
            </ul>
        </div>
    )
    
};
 
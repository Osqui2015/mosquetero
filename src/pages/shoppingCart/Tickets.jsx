import React from 'react';
import list from './data';
import Ticket from './Ticket';

const Tickets = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                <Ticket item={item} key={item.id} handleClick={handleClick}/>
            ))
        }
    </section>
  )
}

export default Tickets
import React from 'react'
import Itemslist from './Itemslist';

const Content = ({items,HandelCheck,HandelDelete}) => {


  
 return ( 

   <main>
      {(items.length)?(
      <Itemslist 
      items = {items}
      HandelCheck = {HandelCheck}
      HandelDelete  =  {HandelDelete}
               />
         ): (
            <p>No items</p>
         
         )}
   </main>     
)

}
export default Content
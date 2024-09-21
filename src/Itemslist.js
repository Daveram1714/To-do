import React from 'react'
import Lineitems from './Lineitems';
const Itemslist = ({items,HandelCheck,HandelDelete}) => {
  return (

<ul>
          {items.map((item) =>( 
            <Lineitems 
            item = {item}
            key={item.id}
            HandelCheck = {HandelCheck}
            HandelDelete  =  {HandelDelete}
            />


          ))}
        </ul>
  

        )}
export default Itemslist
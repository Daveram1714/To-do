import React from 'react'
import { FaTrashCan } from "react-icons/fa6";


const Lineitems = ( {item ,HandelCheck,HandelDelete}) => {
  return (
    <li className="item" key={item.id}>
         <input  
          type='checkbox'
          onChange={() => HandelCheck(item.id) }
          checked ={item.checked}
          />
               <label
          style={(item.checked)? {textDecoration:"line-through"} : null}
               
               >{item.item}</label>
               <FaTrashCan 
               role='button'
               tabIndex={0}
               aria-label={`Delete ${item.item}`}
                onClick={() => HandelDelete(item.id)}
               />
               
          </li>
          
        )
  
}

export default Lineitems
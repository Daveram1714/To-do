import React from 'react'

const Footer = ( {length}) => {
  return (

    <footer> 
      {length}    {length === 1 ? "List Item" : " List -Items"} </footer>
)
}

export default Footer
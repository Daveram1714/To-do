import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { useRef } from 'react'

const Additem = ({addItem,SetAddItems,HandelSubmit}) => {

    const inputRef  = useRef()

  return (
    <form 
    className=' addForm' onSubmit={HandelSubmit}>
        <label htmlfor ='addItem'></label>
        <input
        autoFocus  
        ref={inputRef}
        type='text'
        id='addItem'
        placeholder='Add Items'
        required
        value={addItem}
        onChange={(e) => SetAddItems(e.target.value)}
        />
        <button 
        type='submit'
        aria-label='Add Items'
        onClick={() => inputRef.current.focus()}
        >
            <FaPlus/>
        </button>

    </form>

)
}

export default Additem
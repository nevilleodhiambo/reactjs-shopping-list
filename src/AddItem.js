import React from 'react'
// import {faPlus} from './react-icons/fa'
function AddItem({newItem, setNewItem, handleSubmit}) {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label> <br></br>
        <input autoFocus
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button 
            type='submit' 
            aria-label='Add Item'
            // onClick={()=>handleSubmit(e)}
            >Add</button>
    </form>
  )
}

export default AddItem
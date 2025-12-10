import React from 'react'
import { useState } from 'react'

function BookCreate({onCreate}) {
const [title,setTitle]=useState('')

const handleChange=(event)=>{
  setTitle(event.target.value);
}
const handleSubmit=(event)=>{
event.preventDefault();
onCreate(title)
setTitle("")
}
  return (
    <div className='createbook'>
<form onSubmit={handleSubmit}>
  <label>Title:</label>
  <input type='text'value={title} onChange={handleChange}></input>
<button>Create!</button>
</form>


    </div>
  )
}

export default BookCreate
// import { useState } from 'react'
// import './App.css'
// import BookCreate from './components/BookCreate'
// function App() {
//   const [books, setBooks] = useState([]) 

// const[editIteam,setEditIteam]=useState()

// const handleEdit=(event)=>{
// setEditIteam(event.target.value)
// }
// const handleSubmitEdit=(event)=>{
// event.preventDefault();
// onCreate(editIteam)
// setEditIteam("")
// }

// const createBook=(title)=>{
//   const updatedBook=[
//     ...books,{id:Math.random(),title}
//   ]
//   setBooks(updatedBook);
// }

// const editBook=(id,title)=>{
// const updatedBook=editIteam.map((edit)=>{
  
//   if(edit.id==id){
//     return{...books,title}
//   }
//   return edit;
// })
// setBooks(updatedBook);
// }

//   const handleDelete = (id) => {
//     const updatedBooks = books.filter((book) => book.id !== id)
//     setBooks(updatedBooks)
//   }
//   return (
//     <>
  
//  <BookCreate  onCreate={createBook} />
//     <div className="book-list">
//         {books.map((book) => (
//           <div key={book.id} className="book">
//             {book.title}
//             <span className='del'  onClick={()=>handleDelete(book.id)}>&times;</span>
          
// <input type="text" value={editIteam}  onChange={handleEdit}  onSubmit={handleSubmitEdit}/>
//          <span className='edit' onClick={()=>editBook(edit.id)} >edit</span>
//           </div>   
                 
//         ))}

//       </div>

  
//     </>
//   )
// }

// export default App




import { useState } from 'react'
import './App.css'
import BookCreate from './components/BookCreate'

function App() {
  const [books, setBooks] = useState([]) 
  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState('')

  const createBook = (title) => {
    const updatedBook = [
      ...books,
      { id: Math.random(), title }
    ]
    setBooks(updatedBook)
  }

  const startEditing = (id, title) => {
    setEditingId(id)
    setEditTitle(title)
  }

  const saveEdit = (id) => {
    const updatedBooks = books.map(book => 
      book.id === id ? { ...book, title: editTitle } : book
    )
    setBooks(updatedBooks)
    setEditingId(null)
    setEditTitle('')
  }

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id)
    setBooks(updatedBooks)
  }

  return (
    <>
      <BookCreate onCreate={createBook} />
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book">
            {editingId === book.id ? (
              <>
                <input 
                  type="text" 
                  value={editTitle} 
                  onChange={(e) => setEditTitle(e.target.value)} 
                />
                <button onClick={() => saveEdit(book.id)}>Save</button>
              </>
            ) : (
              <>
                {book.title}
                <span className='del' onClick={() => handleDelete(book.id)}>&times;</span>
                <span className='edit' onClick={() => startEditing(book.id, book.title)}>edit</span>
              </>
            )}
          </div>   
        ))}
      </div>
    </>
  )
}

export default App
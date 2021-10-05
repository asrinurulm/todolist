import './TodoCreate.css'

const TodoCreate = () =>{
    // ketika klik submit maka dia akan memunculkan data secara otomatis
    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            // menampilkan id secara rendom
            id:Math.floor(Math.random() * 100) +1,
            title: 'Learn react'
        }
        console.log(newTodo)
    } 

    return(
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text"/>
            <button type="submit">Add</button>

        </form>
    )
}

export default TodoCreate
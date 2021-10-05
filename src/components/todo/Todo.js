import './Todo.css';
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate';

const Todo = () => {
    const todos = [
        {id:1,title:"eat"},
        {id:2,title:"sleap"},
        {id:3,title:"code"},
    ]

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate />
            <TodoList dataTodos={todos}/>
        </div>
    )
}

export default Todo
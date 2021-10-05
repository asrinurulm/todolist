import './TodoList.css';

const TodoList = (props) => {
    console.log(props.dataTodos);
    return (
        <ul>
            {
                // fungsi map
                props.dataTodos.map((todo) => {

                    return <li key={todo.id}>{todo.title}</li>
                })
            }
        </ul>
    )
}

export default TodoList
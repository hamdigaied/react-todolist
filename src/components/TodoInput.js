import { useState } from "react"

function TodoInput({ createTodo, todosList }) {
    const [todoValue, setTodoValue] = useState("")

    const handleAddTodo = (event) => {
        if (event.key === "Enter") {
            createTodo([...todosList, todoValue])
            setTodoValue("")
        }
    }

    const handleInputChange = (event) => {
        setTodoValue(event.target.value)
    }

    return (
        <input value={todoValue} onChange={handleInputChange} onKeyDown={handleAddTodo} type="text" placeholder="Insert todo..." />
    )
}

export default TodoInput
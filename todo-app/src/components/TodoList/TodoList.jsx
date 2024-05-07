import { Todo } from "../Todo/todo"
import { TodoFilters } from "../TodoFilters/TodoFilters"

const TodoList =  ({todos, handleSetComplete}) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => (
                <Todo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} />
            ) )}
            <TodoFilters></TodoFilters>
        </div>
    )
}

export {TodoList}

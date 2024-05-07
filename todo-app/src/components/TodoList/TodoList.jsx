import { Todo } from "../Todo/todo"
import { TodoFilters } from "../TodoFilters/TodoFilters"

const TodoList =  ({todos}) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return (
                    <Todo key={todo.id} 
                    todo={todo}/>
                )
            })}
            <TodoFilters></TodoFilters>
        </div>
    )
}

export {TodoList}

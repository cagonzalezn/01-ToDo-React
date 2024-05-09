import { Todo } from "../Todo/todo"
import { TodoFilters } from "../TodoFilters/TodoFilters"

const TodoList = ({
    todos, 
    handleSetComplete, 
    handleDelete,
    activeFilter, 
    showAllTodos, 
    showActiveTodos, 
    showCompletetedTodos, 
    handleClearComplete
}) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => (
                <Todo 
                key={todo.id} 
                todo={todo} 
                handleSetComplete={handleSetComplete} 
                handleDelete={handleDelete}
                />
            ) )}
            <TodoFilters>
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletetedTodo={showCompletetedTodos}
                handleClearComplete={handleClearComplete}
            </TodoFilters>
        </div>
    )
}

export {TodoList}

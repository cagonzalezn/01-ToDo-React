import './App.css';
import {Title} from './components/TitleComponent/title'
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList/TodoList';
import { useEffect, useState } from 'react';

export default function App() {
  const [ todos, setTodos] = useState([
    {
      id:1,
      title:' Tarea 1',
      completed: false,
    },
    {
      id:2,
      title:' Tarea 2',
      completed: false,
    },
    {
      id:3,
      title:' Tarea 3',
      completed: false,
    },
    {
      id:4,
      title:' Tarea 4',
      completed: false,
    },
  ])

  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState(todos)

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length-1].id:1;
    const newTodo = {
      id: lastId +1,
      title,
      completed: false
    }

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList)
  }

//Funcion para mostrar como completada cuando de click

  const handleSetComplete = (id) => {
    const updateList = todos.map(todo => {
      if (todo.id === id){
        return {...todo, completed:!todo.completed}
      }
      return todo;
    })
    setTodos(updateList)
  }

  const handleDelete = (id) => {
    const updateList = todos.filter(todo=>todo.id !== id)
    setTodos(updateList);
  }

  const handleClearComplete = () => {
    const updateList = todos.filter(todo=>!todo.completed);
    setActiveFilter(updateList);
  }

  const showAllTodos = () => {
    setActiveFilter('active')
  }

  const showActiveTodos = () => {
    setActiveFilter('completed')
  }

  const showCompletetedTodos = () => {
    setActiveFilter('completed')
  }

  useEffect(()=> {
    if(activeFilter==='all'){
      setFilteredTodos(todos)
    } else if(activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilteredTodos(activeTodos)
    } else if(activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilteredTodos(completedTodos)
    }
  }, [activeFilter, todos])

  return (
    <div className='bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
      <Title/>
      <TodoInput addTodo={addTodo}/>
      <TodoList 
        todos={filteredTodos}
        activeFilter={activeFilter}
        handleSetComplete={handleSetComplete}
        handleDelete={handleDelete}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletetedTodo={showCompletetedTodos}
        handleClearComplete={handleClearComplete}/>
      </div>
    </div>
  )
}

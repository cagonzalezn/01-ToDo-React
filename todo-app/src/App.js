import './App.css';
import {Title} from './components/TitleComponent/title'
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList/TodoList';
import { Todo } from './components/Todo/todo';
import { TodoFilters } from './components/TodoFilters/TodoFilters';
import { FilterButton, FilterButtonContainer } from './components/TodoFilters/TodoFilters-components';
import { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      title:'Tarea 1',
      completed: false,
    },
    {
      id:2,
      title:'Tarea 2',
      completed: false,
    },
    {
      id:3,
      title:'Tarea 3',
      completed: false,
    },
    {
      id:4,
      title:'Tarea 4',
      completed: false,
    },
  ])

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

  return (
    <div className='bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
      <Title/>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos}
      handleSetComplete={handleSetComplete}
      handleDelete={handleDelete}/>
      </div>
    </div>
  )
}

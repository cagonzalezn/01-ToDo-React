import './App.css';
import {Title} from './components/TitleComponent/title'
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList/TodoList';

export default function App() {
  return (
    <div className='bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5'>
      <div className='container flex flex-col max-w-xl'>
      <Title/>
      <TodoInput/>
      <TodoList>
        <h2>
          Todo LIST
        </h2>
        <p>
          AL
        </p>
      </TodoList>
      </div>
    </div>
  )
}

import React, { useState } from 'react';

import './App.css';
import './TodoMain.css';

import NoTodos from './components/NoTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import useLocalStorage from './hooks/useLocalStorage';
import { TodosContext } from './context/TodosContext';

export default function App() {
	const [todos, setTodos] = useLocalStorage('todos',[]);
	const [todoId, setTodoId] = useLocalStorage('todoId',1);
	const [filter,setFilter] = useState('all');
	function todoFiltered(){
		if(filter === 'all'){
			return todos;
		}else if(filter === 'active'){
			return todos.filter(todo => !todo.isCompleted);
		}else if(filter === 'completed'){
			return todos.filter(todo => todo.isCompleted);
		}
	}

	return (
		<TodosContext.Provider value={{todos,setTodos,todoId,setTodoId,filter,setFilter,todoFiltered}}>
		<div>
			<div className="App">
				<div className="container">
					<TodoForm/>

					{todos.length > 0 ? (
					<TodoList/>
					) : (
						<NoTodos/>
					)}
				</div>
			</div>
		</div>
	  </TodosContext.Provider>
	);
}

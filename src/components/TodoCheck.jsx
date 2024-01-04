import React, { useContext } from 'react';
import {TodosContext} from '../context/TodosContext';
import useToggle from '../hooks/useToggle';
import TodoRemainingItems from './TodoRemainingItems';

export default function TodoCheck() {
	const {todos,setTodos} = useContext(TodosContext);
	const [togglePendingItemsNum,setTogglePendingItemsNum] = useToggle();

	function checkAllTodos(){
		const completeAllTodos = todos.map(todo => {
			todo.isCompleted = true;
			return todo;
		});
		setTodos(completeAllTodos);
	}
	function uncheckAllTodos(){
		const completeAllTodos = todos.map(todo => {
			todo.isCompleted = false;
			return todo;
		});
		setTodos(completeAllTodos);
	}


	function clearAllTodos(){
		setTodos([]);
		localStorage.setItem('todoId',1);
	}
  return (
	<div>
		<div className='flex-buttons'>
			<button onClick={checkAllTodos}>Check All</button>
			<button onClick={uncheckAllTodos}>Unheck All</button>
			<button onClick={clearAllTodos}>Clear All</button>
			<button onClick={setTogglePendingItemsNum}>{togglePendingItemsNum ? 'Hide Number' : 'Show Number'}</button>
		</div>
		{togglePendingItemsNum && <TodoRemainingItems /> }
	</div>
  )
}


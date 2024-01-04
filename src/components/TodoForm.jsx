import React,{useContext, useState} from 'react';
import { TodosContext } from '../context/TodosContext';

export default function TodoForm() {
	const {todos,setTodos,todoId,setTodoId}= useContext(TodosContext);

	const [todoInput, setTodoInput] = useState('');
	function handleInput(event){
		setTodoInput(event.target.value);
	}
	function addTodo(e){
		e.preventDefault();

		if (todoInput.trim().length === 0) {
			return;
		}

		setTodos([
			...todos,
			{
				id: todoId,
				title: todoInput,
				isCompleted: false,
			},
		]);

		setTodoId(prevTodoId => prevTodoId + 1);
		setTodoInput('');
	}
	return (
	<div>
		<h1 style={{marginBottom:'20px'}}>Todo List</h1>
		<form onSubmit={addTodo} className="input-field">
			<input
			type="text"
			value={todoInput}
			onChange={handleInput}
			placeholder="Enter your new todo"/>
		</form>
	</div>
	)
}


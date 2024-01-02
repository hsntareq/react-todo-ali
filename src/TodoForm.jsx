import React,{useState} from 'react';
import PropsType from 'prop-types';

TodoForm.propTypes = {
	addTodo: PropsType.func,
}

export default function TodoForm(props) {
	const [todoInput, setTodoInput] = useState('');
	function handleInput(event){
		setTodoInput(event.target.value);
	}
	function handleSubmit(e){
		e.preventDefault();
		if (todoInput.trim().length === 0) {
			return;
		}
		props.addTodo(todoInput);
		setTodoInput('');
	}
	return (
	<div>
		<form action='#' onSubmit={handleSubmit} className="input-field">
				<input
				type="text"
				value={todoInput}
				onChange={handleInput}
				placeholder="Enter your new todo"/>
			</form>
	</div>
	)
}


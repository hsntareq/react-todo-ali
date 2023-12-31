import React, { Component } from 'react';

export default class TodoClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					title: 'Learn React',
					isCompleted: false,
				},
				{
					id: 2,
					title: 'Learn React Native',
					isCompleted: false,
				},
				{
					id: 3,
					title: 'Learn React Hooks',
					isCompleted: false,
				},
			]
		}
	}
	addTodo = e => {
		e.preventDefault();

		this.setState(prevState => {
			const newTodos =  [
				...prevState.todos,
				{
					id: 5,
					title: 'todoInput',
					isCompleted: false,
				},
			];
			return {todos : newTodos};
		});
	};
  	render() {
	return (
	<div>
		<div className="container">
		  <form action='#' onSubmit={this.addTodo} className="input-field">
			<input type='text' placeholder="Enter your new todo"/>
		  </form>

		  <ul className="todoLists">
			{this.state.todos.map((todo,index) => (
				<li key={todo.id} className="list pending">
				<input type="checkbox" value={'wo'}/>
				<span>{todo.id}</span>
				<span className="task">{todo.title}</span>
				<span className="task">{todo.isCompleted}</span>
				<i className="uil uil-trash">icon</i>
				</li>
			))}
		  </ul>

		  <div className="pending-tasks">
			<span>You have <span className="pending-num"> no </span> tasks pending.</span>
			<button className="clear-button">Clear All</button>
			<button className="clear-button">Check All</button>
		  </div>
		</div>
	  </div>	)
  }
}


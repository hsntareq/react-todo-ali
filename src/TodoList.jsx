import React from 'react';
import PropsType from 'prop-types';

TodoList.propTypes = {
	todos: PropsType.array,
	completeTodo: PropsType.func,
	markAsEditing: PropsType.func,
	updateTodo: PropsType.func,
	cancelEditing: PropsType.func,
	deleteTodo: PropsType.func,
}

export default function TodoList(props) {
  return (
	<div>
		<>
		<ul className="todoLists">
			{props.todos.map((todo,index) => (
				<li key={todo.id} className="list pending">
					<input type="checkbox" onChange={() => props.completeTodo(todo.id)} checked={todo.isCompleted ? true : false }/>
					<span>{todo.id}</span>

					{!todo.isEditing ?(
						<span
							onDoubleClick={() => props.markAsEditing(todo.id)}
							className="task">
								{todo.title}
							</span>
							) : (
							<input
							type="text"
							className="edit-input"
							defaultValue={todo.title}
							onBlur={(event) => props.updateTodo(event,todo.id)}
							onKeyDown={(event) => {
								if(event.key === 'Enter'){
									props.updateTodo(event,todo.id);
								}else if(event.key === 'Escape'){
									props.cancelEditing(event,todo.id);
								}
							}}
							/> )
					}

					<span className="task">{todo.isCompleted}</span>
					<button onClick={() => props.deleteTodo(todo.id)} className="uil uil-trash">icon</button>
				</li>
			))}
		</ul>

		<div className="pending-tasks">
			<span>You have <span className="pending-num"> no </span> tasks pending.</span>
			<button className="clear-button">Clear All</button>
			<button className="clear-button">Check All</button>
		</div>
		</>
	</div>
  )
}


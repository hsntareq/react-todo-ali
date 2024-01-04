import React, { useContext, useMemo } from 'react';
import { TodosContext } from '../context/TodosContext';

export default function TodoRemainingItems() {
	const {todos} = useContext(TodosContext);
	function remainingItems(){
		return todos.filter(todo => !todo.isCompleted).length;
	}
	const remaining = useMemo(remainingItems, [todos]);
  return (
	<div>
		<span>
			You have
			<span className="pending-num"> {remaining ? remaining : 0} </span>
			tasks pending.
		</span>
	</div>
  )
}


import React from 'react'

export default function TodoFilters(props) {
  return (
	<div>
		<div className='flex-buttons'>
			<button className="filter-btn" onClick={() => {
				props.todoFiltered('all');
				props.setFilter('all');
			}}>All</button>

			<button className="filter-btn" onClick={() => {
				props.todoFiltered('active');
				props.setFilter('active');
			}} >Active</button>

			<button className="filter-btn" onClick={() => {
				props.todoFiltered('completed');
				props.setFilter('completed');
			}}>Completed</button>
		</div>
	</div>
  )
}


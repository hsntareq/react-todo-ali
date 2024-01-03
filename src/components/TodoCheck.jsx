import React from 'react'

export default function TodoCheckAll(props) {
  return (
	<div>
		<div className='flex-buttons'>
			<button onClick={() => props.checkAll()}>Check All</button>
			<button onClick={() => props.uncheckAll()} className="clear-button">Unheck All</button>
			<button onClick={() => props.clearCompleted()} className="clear-button">Clear All Completed Task</button>
		</div>
	</div>
  )
}


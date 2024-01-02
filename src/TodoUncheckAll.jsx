import React from 'react'

export default function TodoCheckAll(props) {
  return (
	<div>
		<button onClick={() => props.uncheckAll()} className="clear-button">Unheck All</button>
	</div>
  )
}


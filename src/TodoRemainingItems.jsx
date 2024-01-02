import React from 'react';

export default function TodoRemainingItems(props) {
  return (
	<div>
		<span>
			You have
			<span className="pending-num"> {props.remainingItems() ? props.remainingItems() : 0} </span>
			tasks pending.
		</span>
	</div>
  )
}


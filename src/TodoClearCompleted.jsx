import React from 'react';

export default function TodoClearComplete(props) {
  return (
    <div>
      <button onClick={() => props.clearCompleted()} className="clear-button">
        Clear All Completed Task
      </button>
    </div>
  );
}

import React from 'react'

function Button({click}) {
    return (
      <div>
        <button id="new-quote" onClick={click}>
          New Quote
        </button>
      </div>
    );
}

export default Button
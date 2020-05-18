import React from 'react'


function Quote({quotes, authors}) {
    return (
      <div>
        <p id="text">
          <span>"</span>
          {quotes}
          <span>"</span>
        </p>
        <h5 id="author">- {authors}</h5>
      </div>
    );
}

export default Quote
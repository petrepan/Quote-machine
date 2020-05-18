import React from "react";


function Tweet({quotes, authors}) {
  return (
    <div>
      <a
        role="button"
        target="_blank" rel="noopener noreferrer"
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text="${quotes}"  ${authors} #quote`}>
        <i className="fa fa-twitter"></i> Tweet the Quote
      </a>
    </div>
  );
}

export default Tweet;

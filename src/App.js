import React from "react";
import Quote from "./Quote";
import Button from "./Button";
import Tweet from "./Tweet";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: "",
      author: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getContent() {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.quotes.length);
        let randomPosts = data.quotes[randomNum];
        this.setState({
          quotes: randomPosts["quote"],
          author: randomPosts["author"],
        });
      });
  }

  componentDidMount() {
    this.getContent();
  }

  handleClick() {
    this.getContent();
  }

  render() {
    const { quotes, author } = this.state;

    return (
      <div id="quote-box">
        <h1> Random Quote Machine </h1>{" "}
        <div>
          <Quote quotes={quotes} authors={author} />
          <div className="button">
            <Tweet quotes={quotes} authors={author} />
            <Button click={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App

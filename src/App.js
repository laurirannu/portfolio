import React, { Component } from 'react';
import Items from './Portfolio Items/Items';
import './App.css';
import ComponentWrapper from './Header/Header';

class App extends Component {
  state = {
    pics: [
      {
        src: require("./Pics/a.jpg"), className: "portfolio-item medium"
      },
      {
        src: require("./Pics/b.jpg"), className: "portfolio-item large"
      },
      {
        src: require("./Pics/c.jpeg"), className: "portfolio-item medium"
      },
      {
        src: require("./Pics/d.jpeg"), className: "portfolio-item small"
      },
      {
        src: require("./Pics/e.jpeg"), className: "portfolio-item tall"
      },
      {
        src: require("./Pics/f.jpeg"), className: "portfolio-item wide"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="main-content">
          <ComponentWrapper />
          <Items items={this.state.pics}/>
        </div>
      </div>
    );
  }
}

export default App;

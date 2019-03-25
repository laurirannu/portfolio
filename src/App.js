import React, { Component } from 'react';
import Items from './Portfolio Items/Items';
import ZoomExample from './About/About';
import './App.css';
import Header from './Header/Header';

class App extends Component {
  state = {
    pics: [
      {
        src: require("./Pics/flowers.jpg"), className: "portfolio-item medium"
      },
      {
        src: require("./Pics/line.jpeg"), className: "portfolio-item large"
      },
      {
        src: require("./Pics/city.jpg"), className: "portfolio-item medium"
      },
      {
        src: require("./Pics/roses.jpg"), className: "portfolio-item small"
      },
      {
        src: require("./Pics/street.jpg"), className: "portfolio-item tall"
      },
      {
        src: require("./Pics/wave.jpeg"), className: "portfolio-item wide"
      }
    ], 
    picturePage: true,
    lorem: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada tellus ac mi volutpat, ut condimentum dui lobortis. Praesent cursus, mauris nec aliquet tristique, nulla urna sodales eros, nec sodales nulla ipsum id ante. Donec id elit posuere, sollicitudin nunc non, placerat lacus. Maecenas ac placerat erat. Nulla tristique erat neque, id placerat purus accumsan eu. In mi enim, tristique nec dignissim sed, molestie eget urna. Phasellus commodo nisi et mauris molestie tempus. Sed pulvinar mi in sapien laoreet, vitae commodo mi porta. Aliquam bibendum, orci eu viverra commodo, neque ligula efficitur erat, sit amet porttitor libero orci at ipsum. Morbi urna orci, congue ut elementum id, venenatis sed mauris. Nulla consectetur consectetur molestie. Donec semper ac ante ut tincidunt"
  }

  componentDidUpdate() {
      window.scrollTo(0, 0);
  }

  handleSlider = () => {
    this.setState({picturePage: !this.state.picturePage})
  }

  render() {
    return (
      <div className="App">
        <div className="main-content">
          <Header onToggle={this.handleSlider}/>
          {this.state.picturePage ? 
          <Items items={this.state.pics}/> :
          <ZoomExample lorem={this.state.lorem}/>  
        }
        </div>
      </div>
    );
  }
}

export default App;

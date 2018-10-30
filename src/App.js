import React, { Component } from 'react';
import './App.scss';
import "./components/frame.scss";
import MovieCards from "./components/movieCards.js";
import Frame from "./components/frame";
import ContentDetails from "./components/ContentDetails";
import data from "./data/Data";
import SelectCurrency from "./components/SelectCurrency.js"
import ItemTeaser from "./components/ItemTeaser.js"
import "./scss/ItemTeaser.scss";
require("typeface-montserrat");
// import { throws } from 'assert';

class App extends Component {
  constructor(props) {
    super(props);
    this.frameClose = this.frameClose.bind(this);
    this.frameOpen = this.frameOpen.bind(this);
    this.state = {
      articles: [],
      articlePassed: "",
      frameVisible: false 
    };
  }

  frameOpen() {
    this.setState({
      frameVisible: true
    });
  }
  
  frameClose() {
    this.setState({
      frameVisible: false 
    });
  }

  componentDidMount() {
    this.fetchData();
  };

  fetchData() {
    fetch('http://web.tcch.ch/tv-test/') //     // https://www.letemps.ch/tv-shows
      .then((response) => response.json())
      .then((json) => {
        this.setState({ 
          articles: json 
        });
      }).catch(function () {
        console.log("Error when loading json");
      });
  }

  



  render() {
    const { articles } = this.state;
    const { frameVisible } = this.state;
    
    return (
      <div className="App">
        <aside>
          {/* <div>
            <MovieCards
              data={this.state.data}
              showData={this.seeArticle}
              numberOfCards='one'
              additionalClasses='stackable stuff yolo'
            />
          </div> */}
          

         
        </aside>
        <main>
            {
              articles.length > 0 ? articles.map(item => {
                // const title = item.title;
                // const image = item.np8_main_media;
                  return <ItemTeaser key={item.title} title={item.title} image={item.np8_main_media} frameOpen={this.frameOpen} />;
              }) : null
            }
        </main>
        
        
        {/* <Frame isVisible={this.state.isVisible} article={this.state.article}></Frame> */}
        <Frame frameVisible={frameVisible}>
            <p>ici un text</p> 
          <ContentDetails frameClose={this.frameClose}></ContentDetails>
        </Frame>
        
      </div>
    );
  }
}

export default App;

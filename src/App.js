import React, { Component } from 'react';
import './App.scss';
import "./components/frame.scss";
import MovieCards from "./components/movieCards.js";
import Frame from "./components/frame";
import ContentDetails from "./components/ContentDetails";
import data from "./data/Data";
import SelectCurrency from "./components/SelectCurrency.js"
import ItemTeaser from "./components/ItemTeaser.js"
// import { throws } from 'assert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isVisible: false, // DEBUG / false
      // article: null
      
      articles: [],
      articlePassed: "",
      frameVisible: true 
      // currencyA: data.currencies[0],
      // currencyB: data.currencies[1],
      // currencyAval: data.currencies[0].sellRate,
      // currencyBval: data.currencies[1].sellRate
    };
    // this.showFrame = this.showFrame.bind(this);
    // this.seeArticle = this.seeArticle.bind(this);
  }
  

  componentWillMount() {
    // fires immediately before the initial render
  }

  componentDidMount() {
    //this.setState({ isLoading: true });
    this.fetchData();


      
  };
  
  
  componentDidUpdate() {
    // console.log(this.state.articles);
  }







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
          {
            articles.length > 0 ? articles.map(item => {
              // const title = item.title;
              // const image = item.np8_main_media;
              return <ItemTeaser key={item.title} title={item.title} image={item.np8_main_media}>
                </ItemTeaser>;
            }) : null
          }

         
        </aside>
        <main>
          
        </main>
        
        
        {/* <Frame isVisible={this.state.isVisible} article={this.state.article}></Frame> */}
        <Frame frameVisible={frameVisible}>
            <p>ici un text</p> 
            <ContentDetails></ContentDetails>
        </Frame>
        
      </div>
    );
  }
}

export default App;

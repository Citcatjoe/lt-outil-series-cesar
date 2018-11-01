import React, { Component } from 'react';
import Frame from "./components/frame";
import ContentDetails from "./components/ContentDetails";
import ItemTeaser from "./components/ItemTeaser.js";

import './App.scss';
import "./components/frame.scss";
import "./scss/ItemTeaser.scss";

import cross from "./img/cross.svg";

import data from "./data/Data";

require("typeface-montserrat");
// import { throws } from 'assert';


class App extends Component {
  constructor(props) {
    super(props);
    this.articleClose = this.articleClose.bind(this);
    this.articleOpen = this.articleOpen.bind(this);
    this.state = {
      articles: [],
      gridVisible: true,
      frameVisible: false
    };
  }

  articleOpen(item) {
    this.setState(
      {
        gridVisible: false,
        item: item
      },
      () => {
        setTimeout(() => {
          this.setState({ 
            frameVisible: true 
          });
        }, 500);
      }
    );
  }

  articleClose() {
    this.setState(
      {
        frameVisible: false,
      },
      () => {
        setTimeout(() => {
          this.setState({
            gridVisible: true
          });
        }, 500);
      }
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://web.tcch.ch/tv-test/") //     // https://www.letemps.ch/tv-shows
      .then(response => response.json())
      .then(json => {
        this.setState({
          articles: json
        });
      })
      .catch(function() {
        console.log("Error when loading json");
      });
  }

  render() {
    const { articles } = this.state;
    const { frameVisible } = this.state;
    const { gridVisible } = this.state;

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
          <div class="main-header"></div>
          <div className={`grid ${gridVisible ? "is-visible" : ""}`}>
            {articles.length > 0
              ? articles.map((item, index) => {
                  return (
                    <ItemTeaser
                      key={index}
                      item={item}
                      articleOpen={this.articleOpen}
                    />
                  );
                })
              : null}
          </div>
        </main>

        <Frame frameVisible={frameVisible}>
          <p>ici un text</p>
          <ContentDetails articleClose={this.articleClose} item={this.state.item} />
        </Frame>
      </div>
    );
  }
}

export default App;

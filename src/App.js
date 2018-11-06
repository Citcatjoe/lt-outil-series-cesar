import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; 
import Frame from "./components/frame";
import ContentDetails from "./components/ContentDetails";
import ItemTeaser from "./components/ItemTeaser.js";
import FilterSearch from "./components/FilterSearch.js";
import FilterOrder from "./components/FilterOrder.js";

import './App.scss'; 
import "./scss/AsideTabs.scss";
import "./scss/Frame.scss";
import "./scss/ItemTeaser.scss";
import "./scss/FilterSearch.scss";
import "./scss/FilterOrder.scss";

import asideFooterBg from "./img/aside-footer-bg.svg";

require("typeface-montserrat");
// import { throws } from 'assert';


class App extends Component {
  constructor(props) {
    super(props);
    this.articleClose = this.articleClose.bind(this);
    this.articleOpen = this.articleOpen.bind(this);
    this.state = {
      articles: [],
      headerVisible: true,
      gridVisible: true,
      frameVisible: false
    };
  }

  articleOpen(item) {
    this.setState(
      {
        headerVisible: false,
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
            headerVisible: true,
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
    const { headerVisible } = this.state;
    const { frameVisible } = this.state;
    const { gridVisible } = this.state;

    return <div className="App">
        <aside>
          {/* <div className="aside-header">
            <nav>
              <ul>
                <li>Suggestions</li>
                <li> Sur mesure</li>
              </ul>
            </nav>
          </div> */}

          
          <Tabs>
            <TabList>
              <Tab>Suggestions</Tab>
              <Tab>Sur mesure</Tab>
            </TabList>

            <TabPanel>
              <h3 className="aside-title">Nos suggestions rapides</h3>
            </TabPanel>
            <TabPanel>
              <h3 className="aside-title">Filtrage personnalisé</h3>
            </TabPanel>
          </Tabs>

          <img className="aside-footer-bg" src={asideFooterBg} />
        </aside>
        <main>
          <div className={`main-header ${headerVisible ? "is-visible" : ""}`}>
            <FilterSearch />
            <FilterOrder />
          </div>
          <div className={`grid ${gridVisible ? "is-visible" : ""}`}>
            {articles.length > 0 ? articles.map((item, index) => {
                  return <ItemTeaser key={index} item={item} articleOpen={this.articleOpen} />;
                }) : null}
          </div>
        </main>

        <Frame frameVisible={frameVisible}>
          <p>ici un text</p>
          <ContentDetails articleClose={this.articleClose} item={this.state.item} />
        </Frame>
      </div>;
  }
}

export default App;

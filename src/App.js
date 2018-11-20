import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; 
import Frame from "./components/Frame";
import ContentDetails from "./components/ContentDetails";
import ItemTeaser from "./components/ItemTeaser.js";
import FilterButton from "./components/FilterButton.js";
import AsideToggle from "./components/AsideToggle.js";
import FilterSearch from "./components/FilterSearch.js";
import FilterOrder from "./components/FilterOrder.js";

import './App.scss'; 
import "./scss/AsideTabs.scss";
import "./scss/Frame.scss"; 
import "./scss/ContentDetails.scss";
import "./scss/ItemTeaser.scss";
import "./scss/AsideToggle.scss";
import "./scss/FilterSearch.scss";
import "./scss/FilterOrder.scss";
import "./scss/FilterButton.scss";

import asideFooterBg from "./img/aside-footer-bg.svg";
import asideBg1 from "./img/aside-bg-1.png";
import cross from "./img/cross.svg";

require("typeface-montserrat");
// import { throws } from 'assert';

const asideBg1Style = { backgroundImage: "url(" + asideBg1 + ")" };

class App extends Component {
  constructor(props) {
    super(props);
    this.introClose = this.introClose.bind(this);
    this.articleClose = this.articleClose.bind(this);
    this.articleOpen = this.articleOpen.bind(this);
    this.buttonHandle = this.buttonHandle.bind(this);
    this.asideToggle = this.asideToggle.bind(this);
    this.state = { 
      articles: [], 
      asideCloseButtonVisible: false,
      asideVisible: false,
      introVisible: true,
      introInnerVisible: true,
      headerVisible: true, 
      gridVisible: true, 
      frameVisible: false, 
      buttons: [
        { status: false, label:"Se délasser en mangeant ou en repassant" }, 
        { status: false, label:"Frissonner" },
        { status: false, label:"En discuter demain au bureau" }, 
        { status: false, label:"Remonter le temps" }, 
        { status: false, label:"Regarder un truc complètement frappé" }
      ] 
    };
  }

  introClose(){
    // this.setState({
    //   introInnerVisible: false
    // });
    
    this.setState(
      {
        introInnerVisible: false
      },
      () => {
        setTimeout(() => {
          this.setState({
            introVisible: false
          });
        }, 200);
      }
    );
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
          document.body.classList.add("no-scroll");
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
          document.body.classList.remove("no-scroll");
        }, 500);
      }
    );
  }

  buttonHandle(key) {
    var buttons = this.state.buttons;
    var newStateButtons = buttons.map((button, index) => {
      button.status = false;
      if (index === key) {
        button.status = true;
      }
      return button;
    });

    this.setState({
      buttons: newStateButtons
    });
  }

  asideToggle() {
    //alert("coucou");
    //e.preventDefault();
    if (this.state.asideVisible)
    {
      this.setState(
        {
          asideCloseButtonVisible: false
        },
        () => {
          setTimeout(() => {
            this.setState({
              asideVisible: false
            });
          }, 250);

        }
      );
    }
    else 
    {
      this.setState(
        {
          
          asideVisible: true
        },
        () => {
          setTimeout(() => {
            this.setState({
              asideCloseButtonVisible: true
            });
          }, 250);

        }
      );
    }
    
  } 

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("http://web.tcch.ch/tv-test/index_read.php") //     // https://www.letemps.ch/tv-shows
      .then(response => response.json())
      .then(json => {
        this.setState({ articles: json });
      })
      .catch(function() {
        console.log("Error when loading json");
      });
  }

  render() {
    const { articles } = this.state;
    const { asideCloseButtonVisible } = this.state;
    const { asideVisible } = this.state;
    const { headerVisible } = this.state;
    const { frameVisible } = this.state;
    const { gridVisible } = this.state;
    const { buttons } = this.state;
    const { introVisible } = this.state;
    const { introInnerVisible } = this.state;

    return <div className="App">
        <aside style={asideBg1Style} className={`${asideVisible ? "is-visible" : ""}`}>
        <div className={`aside--close-button ${asideCloseButtonVisible ? "is-visible" : ""}`} onClick={this.asideToggle}>
            <img className="aside--close-button--img" src={cross} />
          </div>
          <Tabs>
            <TabList>
              <Tab>Suggestions</Tab>
              <Tab>Sur mesure</Tab>
            </TabList>

            <TabPanel>
              <h3 className="aside-title">Nos suggestions rapides</h3>
              {buttons.length > 0 ? buttons.map((button, index) => {
                    return <FilterButton index={index} key={index} button={button} buttonHandle={this.buttonHandle} />;
                  }) : null}
            </TabPanel>
            <TabPanel>
              <h3 className="aside-title">Filtrage personnalisé</h3>
            </TabPanel>
          </Tabs>
          <ul className="aside-footer-list">
            <li className="aside-footer-list-item">
              Partager sur Facebook
            </li>
            <li className="aside-footer-list-item">Partager sur Twitter</li>
            <li className="aside-footer-list-item">
              Partager sur Linkedin
            </li>
            <li className="aside-footer-list-item">letemps.ch</li>
          </ul>
          <img className="aside-footer-bg" src={asideFooterBg} />
        </aside>
        <main className={`${asideVisible ? "is-moved-right" : ""}`}>
          <div className={`main-header ${headerVisible ? "is-visible" : ""}`}>
            <AsideToggle asideToggle={this.asideToggle} />
            <FilterSearch />
            <FilterOrder />
          </div>
          <div className={`grid ${gridVisible ? "is-visible" : ""}`}>
            {articles.length > 0 ? articles.map((item, index) => {
                  return <ItemTeaser index={index} key={index} item={item} introVisible={introVisible} introInnerVisible={introInnerVisible} articleOpen={this.articleOpen} introClose={this.introClose} />;
                }) : null}
          </div>
        </main>

        <Frame frameVisible={frameVisible}>
          <ContentDetails articleClose={this.articleClose} item={this.state.item} />
        </Frame>
      </div>;
  }
}

export default App;

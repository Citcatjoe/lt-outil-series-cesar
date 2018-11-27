import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"; 
//import Select from "react-select";

import Frame from "./components/Frame";
import ContentDetails from "./components/ContentDetails";
import Loading from "./components/Loading";
import ItemTeaser from "./components/ItemTeaser";
import FilterButton from "./components/FilterButton";
import FilterSelect from "./components/FilterSelect";
import AsideToggle from "./components/AsideToggle";
import FilterSearch from "./components/FilterSearch";
import FilterOrder from "./components/FilterOrder";

import './App.scss'; 
import "./scss/AsideTabs.scss";
import "./scss/Frame.scss"; 
import "./scss/ContentDetails.scss";
import "./scss/Loading.scss";
import "./scss/ItemTeaser.scss";
import "./scss/AsideToggle.scss";
import "./scss/FilterSearch.scss";
import "./scss/FilterOrder.scss";
import "./scss/FilterButton.scss";
import "./scss/FilterSelect.scss";

import asideFooterBg from "./img/aside-footer-bg.svg";
import asideBg1 from "./img/aside-bg-1.png";
import cross from "./img/cross.svg";
import noResults from "./img/no-results.svg";

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
    this.selectHandle = this.selectHandle.bind(this);
    this.hideLoading = this.hideLoading.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    // this.selectCategoryHandle = this.selectCategoryHandle.bind(this);
    // this.selectFormatHandle = this.selectFormatHandle.bind(this);
    this.state = {
      articles: [],
      articlesFiltered: null,
      asideCloseButtonVisible: false,
      asideVisible: false,
      introVisible: true,
      introInnerVisible: true,
      headerVisible: true,
      gridVisible: true,
      frameVisible: false,
      loading: true,
      selectedOption: false,
      filteredOptions: [],
      buttons: [
        { status: false, label: "Se délasser en mangeant ou en repassant" },
        { status: false, label: "Frissonner" },
        { status: false, label: "En discuter demain au bureau" },
        { status: false, label: "Remonter le temps" },
        { status: false, label: "Regarder un truc complètement frappé" }
      ],
      selects: [ 
        { 
          selectName: "Genre", 
          selectJsonLabel: "lt_tv_show_genre",
          selectOptions: [
            { value: "Comédie", label: "Comédie" },
            { value: "Société", label: "Société" }
          ]
        },
        {
          selectName: "Public",
          selectJsonLabel: "lt_informed_public",
          selectOptions: [
            { value: "Tout le monde dans la famille", label: "Tout le monde dans la famille" },
            { value: "Public averti", label: "Public averti" }
          ]
        },
        {
          selectName: "Provenance de la série",
          selectJsonLabel: "lt_country",
          selectOptions: [
            { value: "France", label: "France" },
            { value: "Allemagne", label: "Allemagne" }
          ]
        },
        {
          selectName: "Format des épisodes",
          selectJsonLabel: "lt_reading_time",
          selectOptions: [
            { value: "3", label: "3" },
            { value: "5", label: "5" }
          ]
        },
        {
          selectName: "État de la production",
          selectJsonLabel: "np8_end_date",
          selectOptions: [
            { value: "", label: "En cours" },
            { value: "Terminée", label: "Terminée" }
          ]
        },
        {
          selectName: "Histoire suivie",
          selectJsonLabel: "lt_tv_show_serial",
          selectOptions: [
            { value: "Feuilleton", label: "Oui" },
            { value: "Histoires autonomes", label: "Non" }
          ]
        }
        
        
      ],
      selectCategory: [
        { value: "Comédie", label: "Comédie" },
        { value: "Société", label: "Société" },
        { value: "Sentimental", label: "Sentimental" },
        { value: "Policier", label: "Policier" },
        { value: "Fantastique", label: "Fantastique" },
        { value: "Historique", label: "Historique" },
        { value: "Guerre", label: "Guerre" },
        { value: "Action", label: "Action" },
        { value: "Western", label: "Western" }
      ],
      selectFormat: [
        { value: "3", label: "3" },
        { value: "5", label: "5" },
        { value: "21", label: "21" },
        { value: "25", label: "25" },
        { value: "40", label: "40" },
        { value: "42", label: "42" },
        { value: "45", label: "45" },
        { value: "55", label: "55" },
        { value: "56", label: "56" },
        { value: "59", label: "59" },
        { value: "60", label: "60" }
      ],
    };
  }

  resetFilters() {
    this.setState({ filteredOptions: [], articlesFiltered: null});
  }

  hideLoading() {
    // this.setState({
    //   loading: false
    // });
    alert('coucou');
  }

  introClose() {
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
        frameVisible: false
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

  selectHandle(selectedOption, selectJsonLabel) {
    let articles = this.state.articles,
      filteredOptions = this.state.filteredOptions;
    
    // Ici on regarde si on filter ou on clear le filtre
    // puis on sauve ça dans notre variable locale
    if (selectedOption !== null) {
      filteredOptions[selectJsonLabel] = selectedOption.value
    }else{
      if (filteredOptions[selectJsonLabel]) {
        delete filteredOptions[selectJsonLabel];
      }
    }

    console.log(filteredOptions);

    for (var index in filteredOptions) {
      if (filteredOptions.hasOwnProperty(index)) {
        // eslint-disable-next-line no-loop-func
        articles = articles.filter(article => article[index] === filteredOptions[index]);
      }
    }

    // Ici on parcour chaque filtre pour filtre les articles
    // c'est un filtre additionnel, c'est à dire que nous allons
    // filtre le reste des articles qui sont déjà filtré.
    filteredOptions.forEach((filter, index) => {
      console.log(filter, index);
      
    });

    // On place tout ça dans le state
    this.setState({
      selectedOption: selectedOption,
      articlesFiltered: articles,
      filteredOptions: filteredOptions
    });
  }

  // selectCategoryHandle(selectedOption) {
  //   let x = null;
  //   if (selectedOption !== null) {
  //     x = this.state.articles.filter(
  //       article => article.lt_tv_show_genre === selectedOption.value
  //     );
  //   }
  //   this.setState({
  //     selectedOption: selectedOption,
  //     articlesFiltered: x
  //   });
  // }

  // selectFormatHandle(selectedOption) {
  //   let x = null;
  //   if (selectedOption !== null) {
  //     x = this.state.articles.filter(
  //       article => article.lt_reading_time === selectedOption.value
  //     );
  //   }
  //   this.setState({
  //     selectedOption: selectedOption,
  //     articlesFiltered: x
  //   });
  // }

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
    if (this.state.asideVisible) {
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
    } else {
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
    fetch("http://web.tcch.ch/tv-test/index_read.php") //     // https://www.letemps.ch/tv-shows
      .then(response => response.json())
      .then(json => {
        // setTimeout(() => {
          this.setState({ articles: json, loading: false });
        // }, 3000);
      })
      .catch(function () {
        console.log("Error when loading json");
    });
  }

  
  

  render() {
    
    let { articles, articlesFiltered } = this.state;
    const { asideCloseButtonVisible } = this.state;
    const { asideVisible } = this.state;
    const { headerVisible } = this.state;
    const { frameVisible } = this.state;
    const { gridVisible } = this.state;
    const { loading } = this.state;
    const { buttons } = this.state;
    const { selects } = this.state;
    const { introVisible } = this.state;
    const { introInnerVisible } = this.state;
    
    if(articlesFiltered !== null) {
      articles = articlesFiltered;
    }

    return (
      <div className="App">
        <aside
          style={asideBg1Style}
          className={`${asideVisible ? "is-visible" : ""}`}
        >
          <div
            className={`aside--close-button ${
              asideCloseButtonVisible ? "is-visible" : ""
            }`}
            onClick={this.asideToggle}
          >
            <img className="aside--close-button--img" src={cross} />
          </div>
          <Tabs>
            <TabList>
              <Tab>Suggestions</Tab>
              <Tab>Sur mesure</Tab>
            </TabList>

            <TabPanel>
              <h3 className="aside-title">Nos suggestions rapides</h3>
              {buttons.length > 0
                ? buttons.map((button, index) => {
                    return (
                      <FilterButton
                        index={index}
                        key={index}
                        button={button}
                        buttonHandle={this.buttonHandle}
                      />
                    );
                  })
                : null}
            </TabPanel>
            <TabPanel>
              <h3 className="aside-title">Filtrage personnalisé</h3>
              {/* <FilterSelect articles={articles} selectCategoryHandle={this.selectCategoryHandle} /> */}
              {
                selects.length > 0
                ? selects.map((select, index) => {
                  //console.log(select);
                  return (
                    <FilterSelect index={index} key={index} articles={articles} select={select} selectHandle={this.selectHandle} filteredOptions={this.state.filteredOptions} />
                  );
                })
                : null
              }
              {/* <FilterSelect selectCategoryHandle={this.selectCategoryHandle} selectCategory={selectCategory} />
              <FilterSelect selectFormatHandle={this.selectFormatHandle} selectFormat={selectFormat} /> */}
              
            </TabPanel>
          </Tabs>
          <ul className="aside-footer-list">
            <li className="aside-footer-list-item">Partager sur Facebook</li>
            <li className="aside-footer-list-item">Partager sur Twitter</li>
            <li className="aside-footer-list-item">Partager sur Linkedin</li>
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
          <Loading loading={loading} />
          <div className={`grid ${gridVisible ? "is-visible" : ""}`}>
              
            {
              articles.length > 0
              ? articles.map((item, index) => {
                  return (
                    <ItemTeaser
                      index={index}
                      key={index}
                      item={item}
                      introVisible={introVisible}
                      introInnerVisible={introInnerVisible}
                      articleOpen={this.articleOpen}
                      introClose={this.introClose}
                      hideLoading={this.hideLoading}
                    />
                  );
                })
                : <div className="no-results"><div className="no-results--inner"><img className="aside--close-button--img" src={noResults} /><h4 className="no-results--title">Votre recherche n'a produit aucun résultat</h4><button className="no-results--button" onClick={this.resetFilters}>Réinitialiser les filtres</button></div></div>
            }
          </div>
        </main>

        <Frame frameVisible={frameVisible}>
          <ContentDetails
            articleClose={this.articleClose}
            item={this.state.item}
          />
        </Frame>
      </div>
    );
  }
}

export default App;

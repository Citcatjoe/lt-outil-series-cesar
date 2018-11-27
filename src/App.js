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
    this.searchHandler = this.searchHandler.bind(this);
    this.searchingFor = this.searchingFor.bind(this);
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
      searchTerm: '',

      buttons: [
        { status: false, label: "Se délasser en mangeant ou repassant" },
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
            { value: "Action", label: "Action" },
            { value: "Comédie", label: "Comédie" },
            { value: "Historique", label: "Historique" },
            { value: "Policier", label: "Policier" },
            { value: "Science-fiction, fantastique", label: "Science-fiction, fantastique" },
            { value: "Sentimental", label: "Sentimental" },
            { value: "Société", label: "Société" },
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
            // complété au chargement du json (Danemark et éventuels nouveaux pays)
            { value: "Canada", label: "Canada" },
            { value: "États-Unis", label: "États-Unis" },
            { value: "France", label: "France" },
            { value: "Grande-Bretagne", label: "Grande-Bretagne" },
          ]
        },
        {
          selectName: "Format des épisodes",
          selectJsonLabel: "lt_reading_time",
          selectOptions: [
            { value: "<15", label: "Moins de 15 minutes" },
            { value: "<=30", label: "De 15 à 30 minutes" },
            { value: ">30", label: "Plus de 30 minutes" },
          ]
        },
        {
          selectName: "État de la production",
          selectJsonLabel: "np8_end_date",
          selectOptions: [
            { value: false, label: "En cours" },
            { value: true, label: "searchTerminée" }
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
      ]
    };
  }

  // La fonction utilisée comme filtre
  searchingFor(searchTerm) {
    return function(x) {
      return x.title.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm;
    }
  }

  // On met dans searchTerm la valeur de l'élément qui subit un événement
  searchHandler(event) {
    this.setState({searchTerm: event.target.value})
  }

  resetFilters() {
    //Un bout de buttonHandle pour reset les bouton en même temps.
    var buttons = this.state.buttons;
    buttons.map((button) => {
      button.status = false;
      //return button;
    });
    //Merci Ivo
    this.setState({ filteredOptions: [], articlesFiltered: null, searchTerm: ''});
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

    // DEBUG console.log(filteredOptions);

    // On ne réaffiche pas l’intro «Le guide ultime…»
    articles = articles.filter(article => article['lt_tv_show_tag'] !== 'intro' );

    // on utilise *let* pour eviter de déclencher no-loop-func
    for (let index in filteredOptions) {
      if (filteredOptions.hasOwnProperty(index)) {
        switch (true) {

          // categories pouvant contenir plusieurs éléments
          case ['lt_tv_show_genre', 'lt_country'].indexOf(index) >= 0:
            articles = articles.filter(article => article[index].includes( filteredOptions[index] ) );
            break;

          // durée
          case index === 'lt_reading_time':
            const categorizeLength = function(lengthTime) {
              lengthTime = parseInt(lengthTime, 10);
              if ( lengthTime < 15 ){
                return '<15';
              } else if ( lengthTime <= 30 ) {
                return '<=30';
              } else {
                return '>30';
              }
            }
            articles = articles.filter(article => categorizeLength(article[index]) === filteredOptions[index] );
            break;

          // série en cours / searchTerminée
          case index === 'np8_end_date':
            articles = articles.filter(article => article['completed'] === filteredOptions[index]);
            break;

          // simple égalité
          default:
            articles = articles.filter(article => article[index] === filteredOptions[index]);
        }
      }
    }

    // Ici on parcour chaque filtre pour filtre les articles
    // c'est un filtre additionnel, c'est à dire que nous allons
    // filtre le reste des articles qui sont déjà filtré.
    filteredOptions.forEach((filter, index) => {
      // DEBUG console.log(filter, index);
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

  // TODO: handle à déplacer dans FilterButton.js?
  buttonHandle(key) {
    var buttons = this.state.buttons;
    let articles = this.state.articles;

    var newStateButtons = buttons.map((button, index) => {
      if (index === key) {
        if (button.status === false) {
          articles = articles.filter(article => article['lt_tv_show_quick_suggestion'] === button.label );
        }
        button.status = ! button.status;
      } else {
        button.status = false;
      }
      return button;
    });

    this.setState({
      articlesFiltered: articles
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
    fetch("http://web.tcch.ch/tv-test/index_read.php") // prod: https://www.letemps.ch/tv-shows
      .then(response => response.json())
      .then(json => {

          // ajout d’une colonne pour «En cours / searchTerminé»
          json.map((row, index) => {
            return row['completed'] = row['np8_end_date'] === '' ? false : true;
          });

          this.setState({ articles: json, loading: false });

          // test: génération auto du menu déroulant «Provenance»
          var countryList = [];
          json.map((row, index) => {
            // on saute les pays non renseignés et on splitte les coproductions
            var countries = row['lt_country'].length > 0 ? row['lt_country'].split(', ') : [];
            return countryList = countryList.concat(countries);
          });

          // filtrage et tri
          countryList = countryList.filter (function (value, index, countryList) {
              return countryList.indexOf(value) === index;
          });
          countryList.sort(
            function (a, b) {
              // Pour États-Unis, ... (accent initial)
              return a.localeCompare(b);
          });

          var countryOptions = [];
          countryList.map((item, index) => {
            return countryOptions.push({ value: item, label: item });
          });

          // on update les selects souhaités
          let selects = this.state.selects;
          selects.forEach((item) => {
            if ( item.selectJsonLabel === 'lt_country'){
              item.selectOptions = countryOptions;
            }
          });
          this.setState( {'selects': selects} );
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

    return <div className="App">
        <aside style={asideBg1Style} className={`${asideVisible ? "is-visible" : ""}`}>
          <div className={`aside--close-button ${asideCloseButtonVisible ? "is-visible" : ""}`} onClick={this.asideToggle}>
            <img className="aside--close-button--img" alt="Fermer" src={cross} />
          </div>
          <Tabs>
            <TabList>
              <Tab onClick={this.resetFilters}>Suggestions</Tab>
            <Tab onClick={this.resetFilters}>Sur mesure</Tab>
            </TabList>

            <TabPanel>
              <h3 className="aside-title">Nos suggestions rapides</h3>
              {buttons.length > 0 ? buttons.map((button, index) => {
                    return <FilterButton index={index} key={index} button={button} buttonHandle={this.buttonHandle} />;
                  }) : null}
            </TabPanel>
            <TabPanel>
              <h3 className="aside-title">Filtrage personnalisé</h3>
              {/* <FilterSelect articles={articles} selectCategoryHandle={this.selectCategoryHandle} /> */}
              {selects.length > 0 ? selects.map((select, index) => {
                    //console.log(select);
                    return <FilterSelect index={index} key={index} articles={articles} select={select} selectHandle={this.selectHandle} filteredOptions={this.state.filteredOptions} />;
                  }) : null}
              {/* <FilterSelect selectCategoryHandle={this.selectCategoryHandle} selectCategory={selectCategory} />
              <FilterSelect selectFormatHandle={this.selectFormatHandle} selectFormat={selectFormat} /> */}
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
          <img className="aside-footer-bg" alt="" src={asideFooterBg} />
        </aside>
        <main className={`${asideVisible ? "is-moved-right" : ""}`}>
          <div className={`main-header ${headerVisible ? "is-visible" : ""}`}>
            <AsideToggle asideToggle={this.asideToggle} />
            {/* <input type="text" ></input> */}
            <FilterSearch onChange={this.searchHandler} searchTerm={this.state.searchTerm}/>
            <FilterOrder />
          </div>
          <Loading loading={loading} />
          <div className={`grid ${gridVisible ? "is-visible" : ""}`}>
              {/* {
                articles.filter(this.searchingFor(this.state.searchTerm)).map(article =>
                  <div>
                    <p>{article.title}</p>
                  </div>  
                )
              } */}
          {articles.length > 0 ? articles.filter(this.searchingFor(this.state.searchTerm)).map((item, index) => {
                return <ItemTeaser index={index} key={index} item={item} introVisible={introVisible} introInnerVisible={introInnerVisible} articleOpen={this.articleOpen} introClose={this.introClose} hideLoading={this.hideLoading} />;
              }) : <div className="no-results">
                <div className="no-results--inner">
                  <img className="aside--close-button--img" src={noResults} />
                  <h4 className="no-results--title">
                    Votre recherche n'a produit aucun résultat
                  </h4>
                  <button className="no-results--button" onClick={this.resetFilters}>
                    Réinitialiser les filtres
                  </button>
                </div>
              </div>}
          </div>
        </main>

        <Frame frameVisible={frameVisible}>
          <ContentDetails articleClose={this.articleClose} item={this.state.item} />
        </Frame>
      </div>;
  }
}

export default App;

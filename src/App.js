import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Frame from "./components/Frame";
import ContentDetails from "./components/ContentDetails";
import Loading from "./components/Loading";
import ItemTeaser from "./components/ItemTeaser";
import FilterButton from "./components/FilterButton";
import FilterSelect from "./components/FilterSelect";
import AsideToggle from "./components/AsideToggle";
import FilterSearch from "./components/FilterSearch";
import FilterOrder from "./components/FilterOrder";
import AsideCount from "./components/AsideCount";
import AsideReset from "./components/AsideReset";
import LogoLtGray from "./components/LogoLtGray";
import BackToTop from "./components/BackToTop";
import {Helmet} from "react-helmet";
import {GetContents, SetContents, ProcessContents, GetCountries} from "./utilities/ProcessContents";

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
import "./scss/AsideCount.scss";
import "./scss/AsideReset.scss";
import "./scss/LogoLtGray.scss";
import "./scss/BackToTop.scss";

import asideFooterBg from "./img/aside-footer-bg.svg";
import asideBg1 from "./img/aside-bg-1.png";
import cross from "./img/cross.svg";
import noResults from "./img/no-results.svg";
import ShareButtons from './components/ShareButtons';

const devServer = /localhost$/.test(window.location.hostname);
const routePath = devServer ? '/series/:uniquekey' : '/guide-des-series/series/:uniquekey';
const routeHomepage = devServer ? '/' : '/guide-des-series/';
const childRoute = devServer ? "/series/":  "/guide-des-series/series/";
const landingOnDetailTest = devServer ? /series/ : /series\/series/;

require("typeface-montserrat");
var sortJsonArray = require("sort-json-array");
// import { throws } from 'assert';

const asideBg1Style = {
  backgroundImage: "url(" + asideBg1 + ")",
  backgroundColor: "#ffffff"
};
const asideFooterBgStyle = {
    backgroundImage: "url(" + asideFooterBg + ")",
    backgroundPosition: 'top right',
    backgroundSize: 'cover'
};

// landing sur un détail ou sur l’ensemble -- TODO a retablier
const landingOnDetailView = landingOnDetailTest.test(document.location.href) ? true : false;

class App extends Component {
  constructor(props) {
    super(props);
    this.introClose = this.introClose.bind(this);
    this.articleClose = this.articleClose.bind(this);
    this.articleOpen = this.articleOpen.bind(this);
    this.buttonHandle = this.buttonHandle.bind(this);
    this.asideToggle = this.asideToggle.bind(this);
    this.selectHandle = this.selectHandle.bind(this);
    this.resetFilters = this.resetFilters.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.searchingFor = this.searchingFor.bind(this);
    this.orderHandle = this.orderHandle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      articles: [],
      articlesFiltered: null,
      asideCloseButtonVisible: false,
      asideVisible: false,
      backToTopVisible: false,
      introVisible: true,
      introInnerVisible: true,
      headerVisible: true,
      gridVisible: true,
      frameVisible: false,
      loading: true,
      selectedOption: false,
      filteredOptions: [],
      searchTerm: '',
      orderLabel: null,
      orderValue: null,
      orderSort: null,
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
            { value: "Guerre", label: "Guerre" },
            { value: "Historique", label: "Historique" },
            { value: "Hospitalier", label: "Hospitalier" },
            { value: "Policier", label: "Policier" },
            { value: "Politique", label: "Politique" },
            { value: "Science-fiction, fantastique", label: "Science-fiction, fantastique" },
            { value: "Sentimental", label: "Sentimental" },
            { value: "Société", label: "Société" },
            { value: "Western", label: "Western" },
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
          selectName: "Diffuseur",
          selectJsonLabel: "lt_distributor",
          isMulti: true,
          selectOptions: [
            { value: "Amazon", label: "Amazon" },
            { value: "Arte", label: "Arte" },
            { value: "Canal+", label: "Canal+" },
            { value: "Facebook Watch", label: "Facebook Watch" },
            { value: "France", label: "France Télévisions" },
            { value: "HBO", label: "HBO" },
            { value: "Hulu", label: "Hulu" },
            { value: "Netflix", label: "Netflix" },
            { value: "RTS", label: "RTS" },
            { value: "ShowTime", label: "ShowTime" },
            { value: "USA Network", label: "USA Network" },
            { value: "YouTube", label: "YouTube" },
          ]
        },
        {
          selectName: "Durée des épisodes",
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
            { value: 'en-cours', label: "En cours" },
            { value: 'terminee', label: "Terminée" }
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

  handleScroll() {

    var scrollHeight = document.querySelector(".App").scrollTop;

    if(scrollHeight > 200 && this.state.backToTopVisible === false && this.state.gridVisible === true)
    {
      this.setState({
        backToTopVisible: true
      });
    }
    if (scrollHeight < 200 && this.state.backToTopVisible === true) {
      this.setState({ backToTopVisible: false });
    }

  }


  orderHandle(value, sort, label) {

    var o = null;
    if (this.state.articlesFiltered !== null)
    {
      o = sortJsonArray(this.state.articlesFiltered, value, sort);
    }
    else
    {
      o = sortJsonArray(this.state.articles, value, sort);
    }

    this.setState({
      articlesFiltered: o,
      orderLabel: label,
      orderValue: value,
      orderSort: sort
    });
  }

  // La fonction utilisée comme filtre
  searchingFor(searchTerm) {
    return function(x) {
      return x.title.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm;
    }
  }

  // On met dans searchTerm la valeur de l'élément qui subit un événement
  searchHandler(event) {
    this.setState({searchTerm: event.target.value, introVisible: false})
  }

  resetFilters() {
    //Un bout de buttonHandle pour reset les bouton en même temps.
    var buttons = this.state.buttons;
    buttons.map((button) => {
      button.status = false;
      return button;
    });

    //var o = sortJsonArray(this.state.articles, "title", "asc");
    //Merci Ivo
    this.setState({
    filteredOptions: [],
      articlesFiltered: null,
      //articles: o,
      searchTerm: "",
      // orderLabel: null,
      // orderSort: null,
      // orderValue: null,
      buttons: buttons
      //introVisible: false
    });
  }

  introClose() {
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
      filteredOptions[selectJsonLabel] = selectedOption.length > 0 ? selectedOption : selectedOption.value;
    }else{
      if (filteredOptions[selectJsonLabel]) {
        delete filteredOptions[selectJsonLabel];
      }
    }

    // inner func pour filtrage ET décompte
    function filterArticles(articles, index, value=false){
      switch (true) {
        // diffuseurs: plusieurs choix, plusieurs éléments
        case index === 'lt_distributor':

          const containsDiffusor = function(show_diffusors, choosen_diffusors) {
            let found_list = choosen_diffusors.map(function(choice){
              if(show_diffusors.includes(choice)){
                return true;
              }
              return false;
            });
            return found_list.some(item => item === true);
          }

          // On extrait les valeurs du tableau généré par le plugin react-select
          if(selectedOption !== null && selectedOption.length > 0){
            let selectedDiffusors = selectedOption.map(function(item){ return item.value; });
            articles = articles.filter(article => containsDiffusor(article[index], selectedDiffusors) === true );
          }
          break;

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

      return articles;
    }

    // on utilise *let* pour eviter de déclencher no-loop-func
    for (let index in filteredOptions) {
      if (filteredOptions.hasOwnProperty(index)) {
        articles = filterArticles(articles, index)
      }

      this.setState({
        introVisible: false
      });
    }

    // Ici on parcourt chaque filtre pour filtre les articles
    // c'est un filtre additionnel, c'est à dire que nous allons
    // filtre le reste des articles qui sont déjà filtrés.

    // On place tout ça dans le state
    this.setState({
      selectedOption: selectedOption,
      articlesFiltered: articles,
      filteredOptions: filteredOptions
    });
  }

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
      buttons: newStateButtons,
      introVisible: false
    });


    var o = null;
    if (this.state.orderLabel !== null) {
      o = sortJsonArray(articles, this.state.orderValue, this.state.orderSort);
      this.setState({
        articlesFiltered: o

      });
    }
    else{
        this.setState({
      articlesFiltered: articles
    });
    }
  }

  asideToggle() {
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
    // On regarde si déjà sauvé dans le localStorage
    let data = GetContents();
    if (data) {
      console.log('Data already stored')
      this.setState({ baseData: data['contents'], articles: data['contents'], loading: false });
      this.setState( {'selects': data['selects']} );
    } else {
      fetch("http://web.tcch.ch/tv-test/index_read.php") // prod: https://www.letemps.ch/tv-shows
        .then(response => response.json())
        .then(json => {
            console.log('No stored content, ajax')
            json = ProcessContents(json);
            this.setState({ baseData: json, articles: json, loading: false });

            // update du select des pays
            let countryOptions = GetCountries(json)
            let selects = this.state.selects;
            selects.forEach((item) => {
              if ( item.selectJsonLabel === 'lt_country'){
                item.selectOptions = countryOptions;
              }
            });
            this.setState( {'selects': selects} );

            // Sauvegarde dans le localStorage
            SetContents(json, selects);
        })
        .catch(function () {
          console.log("Error when loading json");
      });
    }

    // TODO dry
    if(landingOnDetailView){
      console.log('Landing on detail view')
      this.setState(
        {
          headerVisible: false,
          gridVisible: false,
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

    function getArticleByParam(theParam){
      console.log('param = ' + theParam + ' / frameVisible = ' + frameVisible);
      let targetArticle = articles.filter(article => article['uniquekey'] === theParam);
      if (targetArticle.length === 1){
        return targetArticle[0]
      }
    }

    if(articlesFiltered !== null || (articlesFiltered && articlesFiltered.length > 0)) {
      articles = articlesFiltered;
    }

    articles = articles.filter(this.searchingFor(this.state.searchTerm));

    return(
      <Router>
        <div className="App" onScroll={this.handleScroll}>
          <Helmet>
              <title>Les meilleures séries des 20 dernières années: notre guide</title>
              <link rel="canonical" href="https://labs.letemps.ch/guide-des-series/" />
              <meta charset="utf-8" />
              <title>Les meilleures séries des 20 dernières années: notre guide</title>
              <meta name="description" content="«Le Temps» vous propose de composer votre menu parmi les meilleures séries des 20 dernières années." />
              <meta name="image" content="https://labs.letemps.ch/guide-des-series/img/social.jpg" />
              <meta itemprop="name" content="Les meilleures séries des 20 dernières années: notre guide" />
              <meta itemprop="description" content="«Le Temps» vous propose de composer votre menu parmi les meilleures séries des 20 dernières années." />
              <meta itemprop="image" content="https://labs.letemps.ch/guide-des-series/img/social.jpg" />
              <meta name="og:title" content="Les meilleures séries des 20 dernières années: notre guide" />
              <meta name="og:description" content="«Le Temps» vous propose de composer votre menu parmi les meilleures séries des 20 dernières années." />
              <meta name="og:image" content="https://labs.letemps.ch/guide-des-series/img/social.jpg" />
              <meta name="og:url" content="https://labs.letemps.ch/guide-des-series/" />
              <meta name="og:site_name" content="Les meilleures séries des 20 dernières années: notre guide" />
              <meta name="og:locale" content="fr_CH" />
              <meta name="og:type" content="website" />
          </Helmet>
          <BackToTop backToTopVisible={this.state.backToTopVisible}  onClick={this.scrollTop} />
          <aside style={asideBg1Style} className={`${asideVisible ? "is-visible" : ""}`}>
            <div className="aside-top">
              <div className={`aside--close-button ${asideCloseButtonVisible ? "is-visible" : ""}`} onClick={this.asideToggle}>
                <img className="aside--close-button--img" alt="Fermer" src={cross} />
              </div>
              <Tabs defaultIndex={0}>
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
                        return <FilterSelect index={index} key={index} articles={articles} select={select} selectHandle={this.selectHandle} filteredOptions={this.state.filteredOptions} />;
                      }) : null}
                  {/* <FilterSelect selectCategoryHandle={this.selectCategoryHandle} selectCategory={selectCategory} />
                  <FilterSelect selectFormatHandle={this.selectFormatHandle} selectFormat={selectFormat} /> */}
                </TabPanel>
              </Tabs>
              <AsideCount articlesVar={articles} introVisible={introVisible} />
              <AsideReset onClick={this.resetFilters} />

              {/* <img className="aside-footer-bg" alt="" src={asideFooterBg} /> */}
            </div>
            <ul className="aside-footer-list" style={asideFooterBgStyle}>
              <ShareButtons title="Les meilleures séries des 20 dernières années: notre guide" description="Quelle série TV regarder ce soir? Nous vous proposons de composer votre menu grâce à notre plateforme interactive" path="/" />
              <li className="aside-footer-list-item">
                <a href="mailto:redactionweb@letemps.ch?subject=Une erreur dans le guide des séries" target="_blank" rel="noopener noreferrer">
                  Signaler une erreur
                </a>
              </li>
              <li className="aside-footer-list-item">
                <a href="mailto:redactionweb@letemps.ch?subject=Suggestion pour le guide des séries" target="_blank" rel="noopener noreferrer">
                  Suggérer une série
                </a>
              </li>
              <li className="aside-footer-list-item">
                <a href="#apropos">À propos</a>
              </li>
              <li className="aside-footer-list-item">
                <LogoLtGray />
              </li>
            </ul>
          </aside>

          <main className={`${asideVisible ? "is-moved-right" : ""}`} id="main">
            <div className={`main-header ${headerVisible ? "is-visible" : ""}`}>
              <AsideToggle asideToggle={this.asideToggle} />
              <FilterSearch onChange={this.searchHandler} searchTerm={this.state.searchTerm} />
              <FilterOrder orderHandle={this.orderHandle} orderLabel={this.state.orderLabel} />
            </div>
            <Loading loading={loading} />
            <div className={`grid ${gridVisible ? "is-visible" : ""}`}>
              {articles.length > 0 ? articles.map((item, index) => {
                  return <ItemTeaser index={index} key={index} item={item} introVisible={introVisible} introInnerVisible={introInnerVisible} articleOpen={this.articleOpen} introClose={this.introClose} hideLoading={this.hideLoading} childRoute={childRoute} />;
                }) : <div className="no-results">
                  <div className="no-results--inner">
                    <img className="aside--close-button--img" src={noResults} alt="" />
                    <h4 className="no-results--title">
                      Votre recherche n’a produit aucun résultat
                    </h4>
                    <button className="no-results--button" onClick={this.resetFilters}>
                      Réinitialiser les filtres
                    </button>
                  </div>
                </div>}
            </div>
          </main>
          <Frame frameVisible={frameVisible}>
            <Switch>
              <Route
                path={routePath}
                render={(props) => <ContentDetails {...props} item={getArticleByParam(props.match.params.uniquekey)} homepage={routeHomepage} articleClose={this.articleClose} />}
              />
              <Route
                path=':test'
                render={(props) => <h1>{props.match.params.test}</h1> }
              />
            </Switch>
          </Frame>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import Parser from 'html-react-parser';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShareButtons from "../components/ShareButtons";
import {Helmet} from "react-helmet";

import "../scss/ShareButtons.scss";

// import faviconLt from "../img/favicon-lt.svg";

class ContentDetails extends Component {
  // hantableeToggle(e) {
  //     e.preventDefault();
  //     this.setState({
  //         isVisible: !this.state.isVisible,
  //     });
  // }

  // constructor(props) {
  //     super(props)
  //     this.state = {
  //         itemFull: this.props.itemFull
  //     }
  // }

  render() {

    if (!this.props.item) {
      return false;
    }

    const backgroundImg = {
      background: "url(" + this.props.item.np8_main_media + ")"
    };

    const shareURL = 'https://labs.letemps.ch/guide-des-series/' + this.props.location.pathname;
    const shareTitle = "Guide des séries: " + this.props.item.title;
    const shareDescription = 'Quelle série TV regarder ce soir? Nous vous proposons de composer votre menu grâce à notre plateforme interactive.';

    return (
      // petite structure header-body-footer, on est pas obligés de garder bien sur
      <div className={`content`}>
        <Helmet>
            <title>{shareTitle}</title>
            <meta name="description" content={shareDescription} />
            <link rel="canonical" href={shareURL} />
            <meta name="image" content={this.props.item.np8_main_media} />
            <meta itemprop="name" content={shareTitle} />
            <meta itemprop="description" content={shareDescription} />
            <meta itemprop="image" content={this.props.item.np8_main_media} />
            <meta property="og:title" content={shareTitle} />
            <meta property="og:description" content={shareDescription} />
            <meta property="og:image" content={this.props.item.np8_main_media} />
            <meta property="og:url" content={shareURL} />
            <meta property="og:site_name" content={shareTitle} />
            <meta property="og:locale" content="fr_CH" />
            <meta property="og:type" content="website" />
        </Helmet>
        <div className={`content-background`} style={backgroundImg} />
        <div className={`content-gradient`} />
        <div className={`content-details`}>
          <div className={`content-details-header`}>
            <Link to={this.props.homepage}>
              <button
                className={`content-close`}
                onClick={this.props.articleClose}
              >
              Fermer
            </button>
            </Link>
          </div>
          <div className={`content-details-body`}>
            <div className={`content-details-body-col1`}>
              <img src={this.props.item.np8_main_media} alt="" />
            </div>

            <div className={`content-details-body-col2`}>
              <h1 className={`body-h1`}>{this.props.item.title}</h1>
              <span className={`body-highlighted`}>
                {this.props.item.lt_tv_show_genre}
              </span>
              <div className={`body-p`}>{Parser(this.props.item.body)}<span className={`body-author`}>&nbsp;&nbsp;– {this.props.item.np8_author_ref}</span></div>

              <ul>
                <li>
                  <span className="col1">Années prod. :</span>
                  <span className="col2">{this.props.item.np8_start_date} -{" "}
                  {this.props.item.np8_end_date
                    ? this.props.item.np8_end_date
                      : "aujourd’hui"}</span>
                </li>
                <li>
                  <span className="col1">Auteur{/,| et /.test(this.props.item.np8_gallery_author) ? 's' : ''} :</span>
                  <span className="col2">{this.props.item.np8_gallery_author}</span>
                </li>
                <li>
                  <span className="col1">Format :</span>
                  <span className="col2">Épisodes de{" "}{this.props.item.lt_reading_time} minutes</span>
                </li>
                <li>
                  <span className="col1">Diffuseur :</span>
                  <span className="col2">{this.props.item.lt_distributor}</span>
                </li>
                <li>
                  <span className="col1">Provenance :</span>
                        <span className="col2">{this.props.item.lt_country}</span>
                </li>
                {
                  this.props.item.np8_news_ref === '' ? '' : Parser('<li className="related-news"><span className="col1">Lire aussi:</span><span className="col2"><img src="/guide-des-series/img/favicon-lt.svg" alt="">' + this.props.item.np8_news_ref + '</span></li>')
                }

                <ShareButtons path={shareURL} title={shareTitle} description={shareDescription} />



              </ul>
              <div className="links">

              </div>
            </div>
          </div>
        </div>

        {/* {itemFull.body} */}
      </div>
    );
  }
}


export default ContentDetails;

import React, { Component } from "react";
import Parser from 'html-react-parser';


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
    //const itemFull = this.props.itemFull;
    //console.log(itemFull)
    if (!this.props.item) {
      return false;
    }

    const backgroundImg = {
      background: "url(" + this.props.item.np8_main_media + ")"
    };

    return (
      // petite structure header-body-footer, on est pas obligés de garder bien sur
      <div className={`content`}>
        <div className={`content-background`} style={backgroundImg} />
        <div className={`content-gradient`} />
        <div className={`content-details`}>
          <div className={`content-details-header`}>
            <button
              className={`content-close`}
              onClick={this.props.articleClose}
            >
              Fermer
            </button>
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
              <div className={`body-p`}>{Parser(this.props.item.body)}</div>
              <ul>
                <li>
                  <span>Années prod. :</span>
                  {this.props.item.np8_start_date} -{" "}
                  {this.props.item.np8_end_date
                    ? this.props.item.np8_end_date
                    : "aujourd’hui"}
                </li>
                <li>
                  <span>Réalisé par :</span>
                  {this.props.item.np8_gallery_author}
                </li>
                <li>
                  <span>Format :</span>Épisodes de{" "}
                  {this.props.item.lt_reading_time} minutes
                </li>
                <li>
                  <span>Distributeur :</span>
                  {this.props.item.lt_distributor}
                </li>
                <li>
                  <span>Provenance :</span>
                  {this.props.item.lt_country}
                </li>
                <li class="article-link">
                {this.props.item.np8_news_ref
                  ? Parser('<span>Lire aussi :</span>' + this.props.item.np8_news_ref)
                  : ""}
                </li>
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

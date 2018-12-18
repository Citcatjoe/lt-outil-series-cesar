import React, { Component } from "react";


class AsideCount extends Component {



    render() {

        return <p className="aside--count">
            Résultats:&nbsp;&nbsp;
            <b className="aside--count--highlight">
              {

                  this.props.articlesVar.length

              //this.props.articlesFiltered !== null ? (this.props.articlesFiltered.length -1) : (this.props.articles.length -1)
              }
            </b>
          </p>;
    }

}


export default AsideCount;

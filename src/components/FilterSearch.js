import React, { Component } from "react";

import manifier from "../img/manifier.svg";



class FilterSearch extends React.Component {


    render() {
        return <div className="filter-search">
            <input className="filter-search--textfield" type="text" placeholder="Recherche" id='filter-search--textfield' onChange={this.props.onChange} value={this.props.searchTerm} />
            <img className="filter-search--icon" src={manifier} />
          </div>;
    }

}

export default FilterSearch;
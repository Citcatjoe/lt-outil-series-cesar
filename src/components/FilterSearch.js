import React, { Component } from "react";

import manifier from "../img/manifier.svg";



class FilterSearch extends React.Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isOpen: false
    //     }
    // }

    // handleToggle(e) {
    //     e.preventDefault();
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     });
    // }


    render() {
        // const { isOpen } = this.state;
        // const title = this.props.item.title;
        // const image = this.props.item.np8_main_media;
        return <div className="filter-search">
            <input className="filter-search--textfield" type="text" placeholder="Recherche" />
            <img className="filter-search--icon" src={manifier} />
          </div>;
    }

}

export default FilterSearch;
import React, { Component } from "react";

import angle from "../img/angle.svg";



class FilterOrder extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    } 


    render() {
        const { isOpen } = this.state;
        // const title = this.props.item.title;
        // const image = this.props.item.np8_main_media;
        return <div className={`filter-order ${isOpen ? "is-open" : "is-closed"}`} onClick={e => this.handleToggle(e)}>
            <span className="filter-order--text">Ordre</span>
            <img className="filter-order--icon" src={angle} />

            <ul className="filter-order--items">
                <li className="filter-order--items--item">Par nom</li>
                <li className="filter-order--items--item">Par nom inv.</li>
                <li className="filter-order--items--item">Par année</li>
                <li className="filter-order--items--item">Par année inv.</li>
            </ul>
          </div>;
    }

}

export default FilterOrder;
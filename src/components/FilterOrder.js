import React, { Component } from "react";

import angle from "../img/angle.svg";



class FilterOrder extends Component {

    //Ces deux éléments, constructor et fonction dessous, uniquement car le composant vit et change ses states tout seul sur lui-même
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
        // const title = this.props.i§tem.title;
        // const image = this.props.item.np8_main_media;
        return <div className={`filter-order ${isOpen ? "is-open" : "is-closed"}`} onClick={e => this.handleToggle(e)}>
            <span className="filter-order--text">
                {this.props.orderLabel ? this.props.orderLabel : 'Ordre'} 
            </span>
            <img className="filter-order--icon" src={angle} alt="" />

            <ul className="filter-order--items">
              <li className="filter-order--items--item" onClick={this.props.orderHandle.bind(this, "title", "asc", "Nom asc.")}>
                Par nom
              </li>
              <li className="filter-order--items--item" onClick={this.props.orderHandle.bind(this, "title", "des", "Nom desc.")}>
                Par nom inv.
              </li>
              <li className="filter-order--items--item" onClick={this.props.orderHandle.bind(this, "np8_start_date", "asc", "Année asc.")}>
                Par année
              </li>
              <li className="filter-order--items--item" onClick={this.props.orderHandle.bind(this, "np8_start_date", "des", "Année desc.")}>
                Par année inv.
              </li>
            </ul>
          </div>;
    }

}

export default FilterOrder;
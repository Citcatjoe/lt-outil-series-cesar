import React, { Component } from "react";

import filter from "../img/filter.svg";


class AsideToggle extends Component {

    

    render() {

        return (
            // petite structure header-body-footer, on est pas obligés de garder bien sur
            <div className={`aside-toggle`} onClick={this.props.asideToggle}>
                <img className="aside-toggle--icon" src={filter} />
                <span className="aside-toggle--text">Filtrer</span>
            </div>

        )
    }
    
}


export default AsideToggle;

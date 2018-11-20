import React, { Component } from "react";

import filter from "../img/filter.svg";


class AsideToggle extends Component {


    constructor(props) {
        super(props)
        this.state = {
            asideVisible: false
        }
    }

    handleAsideToggle(e) {
        e.preventDefault();
        this.setState({
            asideVisible: !this.state.asideVisible
        });
    } 

    render() {

        //const { asideVisible } = this.state ;
        

        //const backgroundImg = { background: "url(" + this.props.item.np8_main_media + ")" };

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

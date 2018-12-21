import React, { Component } from "react";


class Collapsible extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        });
    } 

    render() {
       
        const { isExpanded, height } = this.state;
        //const currentHeight = isExpanded ? height : 'auto';


        return (
            // petite structure header-body-footer, on est pas obligés de garder bien sur
            <div className={`collapsible ${this.state.isExpanded ? 'is-expanded' : ''}`} >
                <div className="collapsible-header" onClick={(e) => this.handleToggle(e)}>
                    Crédits

                </div>
                <div className="collapsible-body" ref="inner">
                    <ul>
                        <li>Rédaction: Nicolas Dufour, Florian Delafoi et Virginie Nussbaum</li>
                        <li>Développement: César Greppin, Paul Ronga et Ivo Marques</li>
                        <li>Design: César Greppin</li>
                    </ul>
                </div>
            </div>

        )
    }

}

export default Collapsible;
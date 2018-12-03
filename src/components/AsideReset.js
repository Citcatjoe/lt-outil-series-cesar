import React, { Component } from "react";


class AsideReset extends Component {



    render() {

        return <p className="aside--reset" onClick={this.props.onClick}>
            Réinitialiser
          </p>;
    }

}


export default AsideReset;
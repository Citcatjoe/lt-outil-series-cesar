import React, { Component } from "react";




class FilterButton extends Component {
  // en travail (redondant avec App.js mais me semble plus logique), on peut l’enlever
  state = {
    isToggleOn: false
  };

  handleClick() {
     this.setState(state => ({
       isToggleOn: !state.isToggleOn
     }));
   }
   // fin en travail


    render() {
        const ButtonLabel = this.props.button.label;
        return <button onClick={this.props.buttonHandle.bind(this, this.props.index)} className={this.props.button.status ? 'is-selected' : ''}>{ButtonLabel}</button>;
    }

}

export default FilterButton;

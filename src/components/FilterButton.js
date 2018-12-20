import React, { Component } from "react";




class FilterButton extends Component {


    render() {
        const ButtonLabel = this.props.button.label;
        return <button disabled={this.props.disabled} onClick={this.props.buttonHandle.bind(this, this.props.index)} className={`filter-button ${this.props.button.status ? 'is-selected' : ''}`}>
            {ButtonLabel}
          </button>;
    }

}

export default FilterButton;

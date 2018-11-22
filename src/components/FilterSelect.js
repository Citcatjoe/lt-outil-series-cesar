import React, { Component } from "react";
import Select from "react-select";

class FilterSelect extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption});
    this.props.selectFormatHandle(selectedOption);
  };

  render() {
    const { selectedOption } = this.state;
    const options = this.props.selectFormat;

    return (
      <Select options={options} value={selectedOption} onChange={this.handleChange} isClearable={true} />
    );
  }
}



export default FilterSelect;

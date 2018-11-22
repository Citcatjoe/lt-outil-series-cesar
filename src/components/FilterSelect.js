import React, { Component } from "react";
import Select from "react-select";

class FilterSelect extends Component {
  state = {
    selectedOption: null
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption});
    this.props.selectHandle(selectedOption);
  };

  render() {
    // const select = this.props.select.value;
    // console.log(select);

    const { selectedOption } = this.state;
    const options = [
      { value: "Comédie", label: "Comédie" },
      { value: "Société", label: "Société" },
      { value: "Sentimental", label: "Sentimental" },
      { value: "Policier", label: "Policier" },
      { value: "Fantastique", label: "Fantastique" },
      { value: "Historique", label: "Historique" },
      { value: "Guerre", label: "Guerre" },
      { value: "Action", label: "Action" },
      { value: "Western", label: "Western" }
    ];

    return (
      <Select options={options} value={selectedOption} onChange={this.handleChange} isClearable={true} />
    );
  }
}



export default FilterSelect;

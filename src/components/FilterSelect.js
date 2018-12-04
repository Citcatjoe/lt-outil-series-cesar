import React, { Component } from "react";
import Select from "react-select";

class FilterSelect extends Component {
  state = {
    selectedOption: null,
    selectJsonLabel: this.props.select.selectJsonLabel
  };

  static getDerivedStateFromProps(props, state) {
    if (state.selectedOption && props.filteredOptions[state.selectJsonLabel] !== state.selectedOption.value) {
      return { selectedOption: null };
    }
    return {};
  }

  handleChange = selectedOption => {
    this.setState({
      selectedOption: selectedOption
    });
    //console.log("(fonction) selectJsonLabel " + this.state.selectJsonLabel);
    this.props.selectHandle(selectedOption, this.state.selectJsonLabel);
  };

  render() {

    const { selectedOption } = this.state;
    const selectName = this.props.select.selectName;
    const selectOptions = this.props.select.selectOptions;
    const isMulti = this.props.select.isMulti ? true : false;
    //console.log("(render) selectJsonLabel " + selectJsonLabel);
    //console.log(select + 'lol');

    return (
      <div className="filter-select">
        {/* <p>{selectName}</p> */}
        <Select
          className="select"
          classNamePrefix="select"
          options={selectOptions}
          value={selectedOption}
          onChange={this.handleChange}
          isClearable={true}
          isMulti={isMulti}
          placeholder={selectName}
        />
      </div>
    );
  }
}



export default FilterSelect;


// import React, { Component } from "react";
// import Select from "react-select";

// class FilterSelect extends Component {
//   state = {
//     selectedOption: null,
//   };

//   handleChange = (selectedOption) => {
//     this.setState({ selectedOption: selectedOption});
//     this.props.selectFormatHandle(selectedOption);
//   };

//   render() {
//     const { selectedOption } = this.state;
//     const options = this.props.selectFormat;

//     return (
//       <Select options={options} value={selectedOption} onChange={this.handleChange} isClearable={true} />
//     );
//   }
// }



// export default FilterSelect;

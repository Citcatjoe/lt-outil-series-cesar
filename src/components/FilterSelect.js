import React, { Component } from "react";
import Select from "react-select";

class FilterSelect extends Component {
  state = {
    selectedOption: null,
    selectJsonLabel: null
  };

  handleChange = (selectedOption, selectJsonLabel) => {
    this.setState({ 
      selectedOption: selectedOption,
      selectJsonLabel: 'mon cul'
    });
    console.log('(fonction) selectJsonLabel ' + selectJsonLabel);
    this.props.selectHandle(selectedOption, selectJsonLabel);
    
  };

  render() {
    const { selectedOption } = this.state;
    const selectName  = this.props.select.selectName;
    const selectJsonLabel = this.props.select.selectJsonLabel;
    const selectOptions = this.props.select.selectOptions;
    
    console.log('(render) selectJsonLabel ' + selectJsonLabel);
    //console.log(select + 'lol');

    return (
      <div>
        <p>{selectName}<br></br>{selectJsonLabel}</p>
        <Select options={selectOptions} value={selectedOption} onChange={this.handleChange} isClearable={true} />
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

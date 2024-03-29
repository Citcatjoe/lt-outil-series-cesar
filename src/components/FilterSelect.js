import React, { Component } from "react";
import Select from "react-select";

class FilterSelect extends Component {
  state = {
    selectedOption: null,
    selectJsonLabel: this.props.select.selectJsonLabel
  };

  static getDerivedStateFromProps(props, state) {
    if (!props.filteredOptions[state.selectJsonLabel]) {
      return { selectedOption: null };
    }
    return {};
  }

  handleChange = selectedOption => {
    this.setState({
      selectedOption: selectedOption
    });
    this.props.selectHandle(selectedOption, this.state.selectJsonLabel);
  };

  render() {
    const { selectedOption } = this.state;
    const selectName = this.props.select.selectName;
    const selectOptions = this.props.select.selectOptions;
    const isMulti = this.props.select.isMulti ? true : false;

    /*
    // test décompte dans component -> nouvelle branche
    let selectOptionsAndCount = Array.from(selectOptions);
    if(selectName === 'Genre'){
      for(let item of selectOptionsAndCount){
        let temp = this.props.articles.filter(article => article['lt_tv_show_genre'] === item['value']);
        item['label'] = item['label'] + ' (' + temp.length + ')';
      }
    }
    */


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
          isDisabled={this.props.disabled}
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

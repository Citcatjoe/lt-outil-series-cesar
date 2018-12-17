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

    // test décompte dans component -> nouvelle branche
    let selectOptionsAndCount = Array.from(selectOptions);

    /*case ['lt_tv_show_genre', 'lt_country'].indexOf(index) >= 0:
      articles = articles.filter(article => article[index].includes( filteredOptions[index] ) );
      break;*/


    if(['lt_tv_show_genre', 'lt_tv_show_serial'].indexOf(this.state.selectJsonLabel) >= 0){

      // update uniquement si le filtre n’est pas actif
      // a améliorer
      // problème: tenir compte des articles du filtre
      if(! this.state.selectedOption){
        for(let item of selectOptionsAndCount){
          console.log(item);
          // hideux truc temporaire
          if(item['label'].indexOf('(') > 0){
            item['label'] = item['label'].substr(0, item['label'].indexOf('('));
          }

          let temp = this.props.articles.filter(article => article[this.state.selectJsonLabel] === item['value']);
          item['label'] = item['label'] + ' (' + temp.length + ')';
        }
      }
    }

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

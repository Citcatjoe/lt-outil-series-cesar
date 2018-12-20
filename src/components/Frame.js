import React, { Component } from "react";


class Frame extends Component {

  // hantableeToggle(e) {
  //     e.preventDefault();
  //     this.setState({
  //         isVisible: !this.state.isVisible,
  //     });
  // }

  render() {
    const frameVisible = this.props.frameVisible;
    const children = this.props.children;



    return (
      // petite structure header-body-footer, on est pas obligés de garder bien sur
      <div className={`frame ${frameVisible ? 'is-visible' : ''}`}>
        {children}
      </div>

    )
  }

}

// Collapsible.propTypes = {
//     title: PropTypes.string,
// };

export default Frame;

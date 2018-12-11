import React, { Component } from "react";
//import ScrollUpButton from "react-scroll-up-button";


class BackToTop extends Component {



    render() {

        return <a href="#" id="back-to-top" className="back-to-top" onClick={this.props.onClick}></a>
    }

    //  render() {

    // return <div>
    //     <ScrollUpButton />
    //     </div>
    // }
    

}


export default BackToTop;
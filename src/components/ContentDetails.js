import React, { Component } from "react";
import Parser from 'html-react-parser';

class ContentDetails extends Component {

    // hantableeToggle(e) {
    //     e.preventDefault();
    //     this.setState({
    //         isVisible: !this.state.isVisible,
    //     });
    // }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         itemFull: this.props.itemFull
    //     }
    // }

    render() {
        //const itemFull = this.props.itemFull;
        //console.log(itemFull)
        if (!this.props.item) {
            return false;
        }
        return (
                // petite structure header-body-footer, on est pas obligés de garder bien sur
                <div className={`content-details`}>
                    <h1>{this.props.item.title}</h1>
                    <p onClick={this.props.articleClose}>hello</p>
                    {/* {itemFull.body} */}
                </div>

        )
    }

}


export default ContentDetails;

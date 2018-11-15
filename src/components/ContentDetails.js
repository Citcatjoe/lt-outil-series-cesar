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

        const backgroundImg = { background: "url(" + this.props.item.np8_main_media + ")" };
        
        return (
                // petite structure header-body-footer, on est pas obligés de garder bien sur
            <div className={`content`}>
                <div className={`content-background`} style={backgroundImg}></div>
                <div className={`content-gradient`}></div>
                <div className={`content-details`}>
                    <div className={`content-details-header`}>
                    </div>
                    <div className={`content-details-body`}>
                        <div className={`content-details-body-col1`}>
                            <img src={this.props.item.np8_main_media} alt=""></img>
                        </div>
                       
                        <div className={`content-details-body-col2`}>
                            <h1>{this.props.item.title}</h1>
                        </div>
                        
                    </div>
                    
                    
                    <p onClick={this.props.articleClose}>hello</p>
                </div>
             
                {/* {itemFull.body} */}
            </div>

        )
    }

}


export default ContentDetails;

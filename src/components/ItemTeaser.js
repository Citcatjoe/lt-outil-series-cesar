import React from 'react';
import Parser from "html-react-parser";

import cross from "../img/cross.svg";

class ItemTeaser extends React.Component {

    // introClose(e) {
    //     e.preventDefault();
    //     this.setState({
    //         introInnerVisible: !this.state.introVisible
    //     });
    // } 

    
    

    render(){
        const introVisible = this.props.introVisible;
        const introInnerVisible = this.props.introInnerVisible;
        const title = this.props.item.title;
        const body = this.props.item.body;
        const image = this.props.item.np8_main_media;
        const intro = this.props.item.lt_tv_show_tag;

        if (!intro) {
            return <div className="item-teaser" onClick={this.props.articleOpen.bind(this, this.props.item)}>
                <div className="item-teaser--overlay">
                    <img className="item-teaser--overlay-icon" src={cross} alt="" />
                </div>
                <figure className="item-teaser--figure" style={{ backgroundImage: "url(" + image + ")" }} />
                {/* <img src={image} alt={title} /> */}
                <h2 className="item-teaser--title">{title}</h2>
            </div>;
        }
        return <div className={`intro ${introVisible ? "is-visible" : ""}`}>
            <div className={`intro-inner ${introInnerVisible ? "is-visible" : ""}`}>
              <h1>{title}</h1>
              {Parser(body)}
              <button className={`content-close is-selected`} onClick={this.props.introClose}>
                Fermer
              </button>
            </div>
          </div>;
        
    }

}

export default ItemTeaser;
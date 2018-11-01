import React from 'react';
import PropTypes from 'prop-types';

import cross from "../img/cross.svg";

class ItemTeaser extends React.Component {

    

    render(){
        const title = this.props.item.title;
        const image = this.props.item.np8_main_media;
        return <div className="item-teaser" onClick={this.props.articleOpen.bind(this, this.props.item)}>
            <div class="item-teaser--overlay">
                <img className="item-teaser--overlay-icon" src={cross} />
            </div>
            <figure className="item-teaser--figure" style={{ backgroundImage: "url(" + image + ")" }}  />
            {/* <img src={image} alt={title} /> */}
            <h2 className="item-teaser--title">{title}</h2>
          </div>;
    }

}

export default ItemTeaser;
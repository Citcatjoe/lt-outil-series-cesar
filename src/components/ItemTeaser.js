import React from 'react';
import PropTypes from 'prop-types';

class ItemTeaser extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const title = this.props.title;
        const image = this.props.image;
        return <div className="item-teaser" onClick={this.props.frameOpen}>
            <figure className="item-teaser--figure" style={{ backgroundImage: "url(" + image + ")" }}  />
            {/* <img src={image} alt={title} /> */}
            <h2 className="item-teaser--title">{title}</h2>
          </div>;
    }

}

export default ItemTeaser;
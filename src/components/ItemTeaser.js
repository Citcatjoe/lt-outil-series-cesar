import React from 'react';
import PropTypes from 'prop-types';

class ItemTeaser extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        const title = this.props.title;
        const image = this.props.image;
        return (
            <div className='item-teaser'>
                <img src={image} alt={title} />
                <h2>{title}</h2>
                
            </div>
        )
    }

}

export default ItemTeaser;
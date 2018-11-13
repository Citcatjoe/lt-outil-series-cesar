import React, { Component } from "react";
import Parser from 'html-react-parser';

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
        {/* <div className='header'>
          <img src={article.np8_main_media} alt={article.title} />
          <div className="frame-close">X</div>
          <h2 className="frame-title">{!article ? 'No article selected' : article.title}</h2>
          <table>
            <tbody>
              <tr><td className="key">Genre</td><td>{article.lt_tv_show_genre}</td></tr>
              <tr><td className="key">Distributeur</td><td>{article.lt_distributor}</td></tr>
              <tr><td className='key'>Pays</td><td>{article.lt_country}</td></tr>
              <tr><td className='key'>Durée</td><td>{article.lt_reading_time} minutes</td></tr>
              <tr><td className='key'>Tags</td><td>{article.lt_tv_show_tag}</td></tr>
            </tbody>
          </table>
        </div>
        <div className='body'>
          <div className='author'>
            Par <a href="https://www.letemps.ch/#auteur-etc">{article.np8_author_ref}</a>
          </div>
          <div>{Parser(article.body)}</div>
        </div>
        <div className='footer'>
        </div> */}
      </div>

    )
  }

}

// Collapsible.propTypes = {
//     title: PropTypes.string,
// };

export default Frame;

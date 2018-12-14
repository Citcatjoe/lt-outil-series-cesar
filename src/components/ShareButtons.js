import React, { Component } from "react";
import Parser from "html-react-parser";

//import pictoFacebook from "../img/picto-facebook.svg";

class ShareButtons extends Component {

  render() {
    return <li className="share-buttons">
        <span className="col1">Partager :</span>
        <span className="col2">
          <a target="_blank" href="https://www.facebook.com/sharer.php?u=http://labs.letemps.ch/interactive/2018/_sandbox/gus/&display=popup&ref=plugin&src=share_button">
            <button className="share-buttons--button">
              {Parser(
                '<svg version="1.1" class="facebook" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 264 512" style="enable-background:new 0 0 264 512;" xml:space="preserve"><path class="st0" d="M76.7,512V283H0v-91h76.7v-71.7C76.7,42.4,124.3,0,193.8,0c33.3,0,61.9,2.5,70.2,3.6V85h-48.2	c-37.8,0-45.1,18-45.1,44.3V192H256l-11.7,91h-73.6v229"/></svg>'
              )}
            </button>
          </a>&nbsp;&nbsp;
          <a target="_blank" href="https://twitter.com/intent/tweet?text=Pour%20se%20délasser%20ou%20pour%20frissoner,%20pour%20découvrir%20ou%20simplement%20pour%20en%20parler,%20Le%20Temps%20vous%20propose%20sa%20sélection%20de%20séries%20TV%20http://labs.letemps.ch/interactive/2018/_sandbox/gus/%20&via=letemps">
            <button className="share-buttons--button">
              {Parser(
                '<svg aria-hidden="true" class="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="st0" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>'
              )}
            </button>
          </a>&nbsp;&nbsp;
          <a target="_blank" href="https://www.linkedin.com/shareArticle?url=http://labs.letemps.ch/interactive/2018/_sandbox/gus/&mini=true&title=Le%20guide%20ultime%20des%20séries%20du%20Temps&summary=Pour%20se%20délasser%20ou%20pour%20frissoner,%20pour%20découvrir%20ou%20simplement%20pour%20en%20parler,%20Le%20Temps%20vous%20propose%20sa%20sélection%20de%20séries%20TV&source=Le%20Temps">
            <button className="share-buttons--button">
              {Parser(
                '<svg aria-hidden="true" class="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></svg>'
              )}
            </button>
          </a>
        </span>
      </li>;
  }
}

export default ShareButtons;

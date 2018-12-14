import React, { Component } from "react";
import Parser from "html-react-parser";


class BackToTop extends Component {

    

    scrollup() {

        
        

        document.querySelector(".App").scrollTo({
            top: 0,
            behavior: 'smooth',
        });

        

    }

    render() {
        const backToTopVisible = this.props.backToTopVisible;
         
        return <a href="#" id="back-to-top" className={`back-to-top ${backToTopVisible ? "is-visible" : ""}`} onClick={() => this.scrollup()}>
            {Parser('<svg class="back-to-top--icon" width="15px" height="9px" viewBox="0 0 15 9" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Artboard" transform="translate(-1419.000000, -129.000000)"  fill-rule="nonzero"><g id="Group" transform="translate(1356.000000, 120.000000)"><g transform="translate(64.000000, 10.000000)"><path d="M6.49997842,7 C6.26699196,7 6.03403427,6.91596701 5.85640296,6.74825433 L0.266684335,1.46803629 C-0.0888947783,1.13214891 -0.0888947783,0.587565105 0.266684335,0.251813616 C0.622119594,-0.0839378721 1.19851509,-0.0839378721 1.55412298,0.251813616 L6.49997842,4.92404262 L11.4458626,0.251976682 C11.8014418,-0.0837748068 12.3777797,-0.0837748068 12.7331862,0.251976682 C13.0889379,0.58772817 13.0889379,1.13231198 12.7331862,1.46819935 L7.14355389,6.74841739 C6.96583626,6.91615725 6.73287857,7 6.49997842,7 Z" id="Shape"></path></g></g></g></g></svg>')}
          </a>;

        //return <a href="#" id="back-to-top" className="back-to-top" onClick={this.props.onClick}>

        //</a>
    }

    //  render() {

    // return <div>
    //     <ScrollUpButton />
    //     </div>
    // }
    

}


export default BackToTop;
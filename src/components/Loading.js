import React, { Component } from "react";




class Loading extends Component {

    

    render() {
        const loading = this.props.loading;

        return <div className={`loading ${loading ? "is-visible" : ""}`}>
                    <div className="loader">Loading...</div>
                </div>
    }

}

export default Loading;
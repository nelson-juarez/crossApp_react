import React, { Component } from 'react';

export default class Tittle extends Component {
    render() {
        return(
            <p className="h5 my-0 me-md-auto fw-normal">
                {this.props.title}
            </p>
        )
    }
}
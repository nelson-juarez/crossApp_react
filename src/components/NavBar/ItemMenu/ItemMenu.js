import React, { Component } from 'react';

export default class ItemMenu extends Component {
    render() {
        return(
                <a className="p-2 text-dark" href={this.props.link}> {this.props.label} </a>
            
        )
    }
}
import React, { Component } from 'react';

export default class Logo extends Component {
    render() {
        return(
            <div className="boxLogo">
                <img class="logo" src="/logo_2.png" alt={this.props.title}></img>
            </div>
        )
    }
}
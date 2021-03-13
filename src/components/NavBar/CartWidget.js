import React, { Component } from 'react';

export default class CartWidget extends Component {
    render() {
        return(
            <div className="boxCart">
                <img class="cartIcon" src="/cart-icon.png" alt="Cart"></img>
            </div>
        )
    }
}
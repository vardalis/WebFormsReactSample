import React, { Component } from "react";

class ItemInfo extends Component {
    render() {
        return (
            <div>
                <label>{this.props.item.Name}:</label> ${this.props.item.Price}
            </div>
        );
    }
}

export default ItemInfo;
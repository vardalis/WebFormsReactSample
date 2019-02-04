import React, { Component } from "react";
import { hot } from "react-hot-loader/root";

import ItemInfo from "components/itemInfo";

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.retrieveData();
    }

    retrieveData() {
        let endpoint = window.baseUrl + "api/Products/";
        fetch(endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    // const pro = result.map((item) => { return { name: item.DatasetName }; });
                    this.setState({
                        products: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        error
                    });
                }
            );
    }

    render() {
        return (
            <div>
                <h1>Products:</h1>
                <ul>
                    {this.state.products.map(product => <li key={product.Id}><ItemInfo item={product} /></li>)}
                </ul>
            </div >
        );
    }
}

export default hot(Products);
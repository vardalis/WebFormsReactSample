import React, { Component } from "react";
import { hot } from "react-hot-loader/root";

import ItemInfo from "components/itemInfo";

class Parts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parts: []
        };
    }

    componentDidMount() {
        this.retrieveData();
    }

    retrieveData() {
        let endpoint = window.baseUrl + "api/Parts/";
        fetch(endpoint)
            .then(res => res.json())
            .then(
                (result) => {
                    // const pro = result.map((item) => { return { name: item.DatasetName }; });
                    this.setState({
                        parts: result
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
                <h1>Parts:</h1>
                <ul>
                    {this.state.parts.map(part => <li key={part.Id}><ItemInfo item={part} /></li>)}
                </ul>
            </div >
        );
    }
}

export default hot(Parts);
import React, {Component} from 'react';
import './App.css'
class ItemInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: null // default selected type
        };
    }
    componentDidMount () {
        const path = this.props.location.pathname; 
        const  url = "https://www.healthcare.gov" + path.substring(0, path.length - 1) + ".json";
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setState({ 
                    item : json,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        const item = this.state.item;
        return (
            <div className="container">
            {item ? (
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Attribute Name</th>
                        <th>Attribute</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(item).map((keyName, keyIndex) => (
                            // use keyName to get current key's name
                            // and item[keyName] to get its value
                            <tr key = {keyIndex}>
                                <td className="leftCol">{keyName}</td>
                                <td className="rightCol"><span dangerouslySetInnerHTML={{ __html: item[keyName]}}></span></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            ) : (
                <div> Loading....</div>
            )}
            </div>
        )    
    }
}
export default ItemInfo;
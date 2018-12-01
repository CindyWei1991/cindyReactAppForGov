import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import GuttersGrid from './GridBoard.js'
import Dropdown from './Dropdown.js';
import ReactDOM from 'react-dom';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items : null,
            selectedType : null,
            isLoading: false,
        }
    }
    componentDidMount() {
        const type= sessionStorage.getItem('selectedType');
        if(type) {
            this.setState ({
                isLoading: true,
            })
            const url = "https://www.healthcare.gov/api/" + type  + ".json";
            fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    items: json[type],
                    selectedType: type,
                    isLoading: true,
                })
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
    getItems = (itemsFromDropdown) => {
        this.setState({
            items : itemsFromDropdown
        });
    }
    render() {
        const items = this.state.items;
        //const showLoading = !items && this.state.selectedType;
        //const showListItems = items && this.state.selectedType;
        return (
            <div className="App">
                
                <Dropdown getItemsForParent = {this.getItems}/>
                {items && 
                <div>
                    <GuttersGrid itemsFromParent = {items} />
                </div>
                }
            </div>
        )
  }
}
export default Home;

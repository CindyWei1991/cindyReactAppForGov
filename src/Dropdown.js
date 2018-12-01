import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap/lib';
import loader from './load.gif'
const types = ["articles","blog","questions","glossary","states","topics"];
class Dropdown extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            selectedType: sessionStorage.getItem('selectedType') // default selected type
        };
    }
    handleSelect = (eventKey, event) => {
        this.setState({ 
            isLoading: true,
            selectedType: types[eventKey] 
        });
        this.props.getItemsForParent(null);
        sessionStorage.setItem("selectedType",types[eventKey]);
        
        const url = "https://www.healthcare.gov/api/" + types[eventKey]  + ".json";
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.props.getItemsForParent(json[types[eventKey]]);
                this.setState({
                    isLoading : false
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
      return (
        <div>
        <h3> Please select the content type to view the posts</h3>
        <DropdownButton bsSize = "large" title = {this.state.selectedType ? this.state.selectedType : "Please Select a Type" } id="dropdown-size-default" 
        onSelect = {this.handleSelect.bind(this)}>
        {types.map((type, i) => (
            <MenuItem key={i} eventKey={i}>
              {type}
            </MenuItem>
        ))}
        </DropdownButton>
        {this.state.isLoading && 
        <div>
            <img src={loader} alt="loading..." />
        </div>
        }
        </div>
      );
    }
  }
  export default Dropdown;
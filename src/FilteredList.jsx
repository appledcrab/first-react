import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
// import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All" // Default type
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
    console.log("ot went through search");
  }

  onFilter = (event) => {
    if (event !== null) {
      // console.log("event : " + event);
      // console.log("next thing: " + event.target.innerHTML);
      this.setState({ type: event.target.innerHTML });
    } else {
      // this.setState({ type: event });
      console.log("Event type is null");
    }
  }

  onTest = (event) => {

    console.log("test");
  }

  filterItem = (item) => {
    const { search, type } = this.state;
    return (item.name.toLowerCase().includes(search) && (type === "All" || item.type === type));
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title={this.state.type} align={"start"}>

          <Dropdown.Item eventKey="All" onClick={this.onFilter}><span class="dropdown-select">All</span></Dropdown.Item>
          <br></br>
          <Dropdown.Item eventKey="Vegetable" onClick={this.onFilter}><span class="dropdown-select">Vegetable</span></Dropdown.Item>
          <br></br>
          <Dropdown.Item eventKey="Fruit" onClick={this.onFilter}><span class="dropdown-select">Fruit</span></Dropdown.Item>
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;

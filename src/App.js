import React, { Component } from 'react';
import SearchBar from './components/search-bar/search-bar.component';
import ProjectList from './components/project-list/project-list.component';

import data from './data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      filteredProjects: [

      ]
    }
  }

  componentDidMount() {
    this.setState({
      filteredProjects: data
    })
  }

  handleChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <SearchBar
          placeholder="Search Projects"
          handleChange={this.handleChange}
        />
        <ProjectList
          filteredProjects={this.state.filteredProjects}
        />
      </div>
    );
  }
}

export default App;

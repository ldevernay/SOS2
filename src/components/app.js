import React, { Component } from 'react';
import ProjectDetail from '../containers/project_detail';
import ProjectList from '../containers/project_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <ProjectList />
        <ProjectDetail />
      </div>
    );
  }
}

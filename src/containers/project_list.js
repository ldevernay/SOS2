import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProject } from '../actions/index';
import { bindActionCreators } from 'redux';

class ProjectList extends Component {
    render() {
        return (
            <div className="listGroup col-sm-4 projects">
                <ul>
                    {this.renderList()}
                </ul>
            </div>
        );
    }

    renderList() {
        return this.props.projects.map((project) => {
            return (
                <li
                    className="project" 
                    key={project.repo}
                    onClick={() => { this.props.getProject(project) }}
                >
                    {project.name}
                </li>
            );
        });
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProject: getProject
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);


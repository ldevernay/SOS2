import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectProject from '../actions/index';
import { bindActionCreators } from 'redux';

class ProjectList extends Component {
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

    renderList() {
        return this.props.projects.map((project) => {
            return (
                <li
                    key={project.repo}
                    onClick={() => { this.props.selectProject(project) }}>
                    {project.repo}
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
        selectProject: selectProject
    }, dispatch);
}
export default connect((mapStateToProps, mapDispatchToProps), ProjectList);


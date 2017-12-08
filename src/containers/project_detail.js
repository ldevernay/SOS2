import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDetail extends Component {
    render() {
        let project = this.props.project;
        if (!project) {
            return (
                <div className="col-sm-8">Sélectionnez un projet pour commencer</div>
            );
        }

        return (
            <div className="card col-sm-8">
                <div className="card-header">
                    {project.data.name}
                </div>
                <div className="card-body">
                    <p className="card-text">
                    {project.data.description}
                    </p>
                    <a href={project.data.html_url} className="btn btn-primary">
                        Go to Github repo
                </a>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        project: state.activeProject
    };
}

export default connect(mapStateToProps)(ProjectDetail);
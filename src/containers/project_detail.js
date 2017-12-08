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
                <div className="title">
                    {project.data.name}
                </div>
                <div className="card-body info">
                    <p className="card-text">
                        {project.data.description}
                    </p>
                    <div className="row">
                        <div className="col-sm-5">
                            <a href={project.data.html_url} className="btn repo">
                                Go to Github repo
                </a>
                        </div>
                        <div className="col-sm-5 col-sm-offset-2">
                            <a href={project.data.html_url} className="btn repo">
                                Go to live demo
                </a>
                        </div>
                    </div>
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
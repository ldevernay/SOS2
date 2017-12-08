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
                    <div className="project-status">
                        <a href={project.data.html_url} role="button">
                            <p title="Stars">
                                <i aria-hidden="true" className="fa fa-star fa-fw"></i>
                                {project.data.stargazers_count}
                            </p>
                            <p title='Watching'>
                                <i aria-hidden='true' className='fa fa-eye fa-fw' />
                                {project.data.watchers_count}
                            </p>
                            <p title='Forks'>
                                <i aria-hidden='true' className='fa fa-code-fork fa-fw' />
                                {project.data.forks_count}
                            </p>
                        </a>
                    </div>
                    <p className="card-text">
                        {project.data.description}
                    </p>

                    {project.data.license &&
                    <p className="card-text">
                        License : {project.data.license.spdx_id}
                    </p>}
                    
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
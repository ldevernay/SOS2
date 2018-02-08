import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectLanguages from './project_languages';
import { getProjectLanguages } from '../actions/index';
import { bindActionCreators } from 'redux';

class ProjectDetail extends Component {
    render() {
        let project = this.props.project;
        if (!project) {
            return (
                <div className="col-sm-8">Sélectionnez un projet pour commencer</div>
            );
        }

        return (
            <div className="col-sm-8">
                <div className="title">
                    {project.data.name}
                    <div>
                        <a href={project.data.html_url} role="button">
                            <div className="github-icon">
                                <i aria-hidden="true" className="fa fa-star fa-fw"></i>
                                {project.data.stargazers_count}
                                <i aria-hidden='true' className='fa fa-eye fa-fw' />
                                {project.data.watchers_count}
                                <i aria-hidden='true' className='fas fa-code-branch' />
                                {project.data.forks_count}
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card-body info">
                    <p className="card-text">
                        {project.data.description}
                    </p>

                    {project.data.license &&
                        <p className="card-text">
                            License : {project.data.license.spdx_id}
                        </p>}

                    <ProjectLanguages languages={this.props.getProjectLanguages(project.data.full_name)} />

                    <div className="row">
                        <div className="col-sm-5">
                            <a href={project.data.html_url} className="btn repo" title="Github repo">
                                <i className="fab fa-github link-icon"></i>
                            </a>
                        </div>
                        <div className="col-sm-5">
                            <a href={this.props.demo} className="btn repo" title="Live demo">
                                <i className="fas fa-desktop link-icon"></i>
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getProjectLanguages: getProjectLanguages
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetail);
// export default connect(mapStateToProps)(ProjectDetail);
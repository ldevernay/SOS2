import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectDetail extends Component {
    render() {
        if (!this.props.project) {
            return (
                <div>Sélectionnez un projet pour commencer</div>
            );
        }

        return (
            <div>
                <h2>Détails pour le projet : {this.props.project.data.name}</h2>
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
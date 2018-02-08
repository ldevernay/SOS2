import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectLanguages extends Component {
    render() {
        return (
            <div className="listGroup">
                {this.renderLanguagesList()}
            </div>
        );
    }

    renderLanguagesList() {
        let languages = this.props.languages;
        if (!languages) {
            return (
                <div>None</div>
            )
        } else {
            return Object.keys(languages.data).map((language) => {
                return (
                    <span className="badge badge-pill badge-secondary" key={language} >
                        {language}
                    </span>
                );
            });
        }
    }
}

function mapStateToProps(state) {
    return {
        languages: state.activeProjectLanguages
    };
}

export default connect(mapStateToProps)(ProjectLanguages);
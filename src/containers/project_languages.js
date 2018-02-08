import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectLanguages extends Component {
    render() {
        return (
            <div className="listGroup col-sm-4 projects">
                <ul>
                    {this.renderLanguagesList()}
                </ul>
            </div>
        );
    }

    renderLanguagesList() {
        let languages = this.props.languages;
        if (!languages) {
            return (
                <li>
                    None
                    </li>
            )
        } else {
            return Object.keys(languages.data).map((language) => {
                return (
                    <li key={language}>
                        {language}
                    </li>
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
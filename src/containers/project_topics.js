import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectTopics extends Component {
    render() {
        return (
            <div className="listGroup topics">
                {this.renderTopicsList()}
            </div>
        );
    }

    renderTopicsList() {
        let topics = this.props.topics;
        if (!topics) {
            return (
                <div>None</div>
            )
        } else {
            return topics.data.names.map((topic) => {
                return (
                    <span className="badge badge-pill badge-primary" key={topic} >
                        {topic}
                    </span>
                );
            });
        }
    }
}

function mapStateToProps(state) {
    return {
        topics: state.activeProjectTopics
    };
}

export default connect(mapStateToProps)(ProjectTopics);
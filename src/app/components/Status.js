'use strict';

import React from 'react';
import Timer from './Timer';
import RemainingFlags from './RemainingFlags';

export default class Status extends React.Component {
    render() {
        return (
            <div className="ms-Status">
                <RemainingFlags flags={this.props.remainingFlags} />
                <Timer elapsedSeconds={this.props.elapsedSeconds} />
            </div>
        );
    }
};

Status.propTypes = {
    elapsedSeconds: React.PropTypes.number.isRequired,
    remainingFlags: React.PropTypes.number.isRequired
};

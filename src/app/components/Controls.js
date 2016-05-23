'use strict';

import React from 'react';
import Stop from './Stop';
import Pause from './Pause';

export default class Controls extends React.Component {
    render() {
        return (
            <div className="ms-Controls">
                <Stop onStop={this.requestStopGame.bind(this)} />
                <Pause onPause={this.requestPauseGame.bind(this)} />
            </div>
        );
    }

    requestStopGame() {
        if (confirm('Are you sure you want to stop the game? Your progress will be lost.')) {
            this.props.onStop();
        }
    }

    requestPauseGame() {
        this.props.onPause();
    }
};

Controls.propTypes = {
    onStop: React.PropTypes.func.isRequired,
    onPause: React.PropTypes.func.isRequired
};

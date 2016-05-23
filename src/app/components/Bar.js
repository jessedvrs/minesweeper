'use strict';

import React from 'react';
import c from 'classnames';
import Controls from './Controls';
import Title from './Title';
import Status from './Status';

export default class Bar extends React.Component {
    render() {
        return (
            <div className={c('ms-Bar', {
                'ms-Bar--playing': this.props.playing
            })}>
                <div className="ms-Bar__part ms-Bar__part__controls">
                    <Controls
                        onPause={this.props.onPause.bind(this)}
                        onStop={this.props.onStop.bind(this)} />
                </div>
                <div className="ms-Bar__part ms-Bar__part__title">
                    <Title />
                </div>
                <div className="ms-Bar__part ms-Bar__part__status">
                    <Status
                        elapsedSeconds={this.props.elapsedSeconds}
                        remainingFlags={this.props.remainingFlags} />
                </div>
            </div>
        );
    }
};

Bar.propTypes = {
    playing: React.PropTypes.bool.isRequired,
    onPause: React.PropTypes.func.isRequired,
    onStop: React.PropTypes.func.isRequired,
    elapsedSeconds: React.PropTypes.number.isRequired,
    remainingFlags: React.PropTypes.number.isRequired
};

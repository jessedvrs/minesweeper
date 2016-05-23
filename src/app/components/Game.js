'use strict';

import React from 'react';
import c from 'classnames';
import Bar from './Bar';
import Field from './Field';
import Setup from './Setup';

export default class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playing: false,
            paused: false,
            elapsedSeconds: 50,
            remainingFlags: 50
        };
    }

    render() {
        return (
            <div className={c('ms-Game', {
                'ms-Game--playing': this.state.playing
            })}>
                <Bar
                    playing={this.state.playing}
                    onPause={this.onPause.bind(this)}
                    onStop={this.onStop.bind(this)}
                    elapsedSeconds={this.state.elapsedSeconds}
                    remainingFlags={this.state.remainingFlags} />
                <Field />
                <Setup startGame={this.onStart.bind(this)} />
            </div>
        );
    }

    onPause() {
        this.setState({paused: true});
    }

    onResume() {
        this.setState({paused: false});
    }

    onStop() {
        this.setState({playing: false});
    }

    onStart() {
        this.setState({playing: true});
    }
};

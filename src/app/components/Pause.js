'use strict';

import React from 'react';
import Button from './Button';

export default class Pause extends React.Component {
    render() {
        return (
            <div className="ms-Pause">
                <Button onClick={this.props.onPause.bind(this)}>
                    Pause
                </Button>
            </div>
        );
    }
};


Pause.propTypes = {
    onPause: React.PropTypes.func.isRequired
};

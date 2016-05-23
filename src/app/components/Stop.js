'use strict';

import React from 'react';
import Button from './Button';

export default class Stop extends React.Component {
    render() {
        return (
            <div className="ms-Stop">
                <Button onClick={this.props.onStop.bind(this)}>
                    Stop
                </Button>
            </div>
        );
    }
};

Stop.propTypes = {
    onStop: React.PropTypes.func.isRequired
};

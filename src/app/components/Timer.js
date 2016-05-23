'use strict';

import React from 'react';
import moment from 'moment';

export default class Timer extends React.Component {
    render() {
        const timeMoment = moment.duration(this.props.elapsedSeconds * 1000);
        const formattedTime = moment(timeMoment._data).format('mm:ss');

        return (
            <div className="ms-Timer">
                {formattedTime}
            </div>
        );
    }
};

Timer.propTypes = {
    elapsedSeconds: React.PropTypes.number.isRequired
};

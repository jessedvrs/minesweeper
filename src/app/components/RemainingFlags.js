'use strict';

import React from 'react';

export default class RemainingFlags extends React.Component {
    render() {
        return (
            <div className="ms-RemainingFlags">
                {this.props.flags} flags to go
            </div>
        );
    }
};

RemainingFlags.propTypes = {
    flags: React.PropTypes.number.isRequired
};

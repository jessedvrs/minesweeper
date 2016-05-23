'use strict';

import React from 'react';

export default class Fieldset extends React.Component {
    render() {
        return (
            <fieldset className="ms-Fieldset">
                {this.props.legend &&
                    <legend>{this.props.legend}</legend>
                }
                {this.props.children}
            </fieldset>
        );
    }
};

Fieldset.propTypes = {
    legend: React.PropTypes.string
};

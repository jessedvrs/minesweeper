'use strict';

import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <button className="ms-Button" onClick={this.onClick.bind(this)}>
                {this.props.children}
            </button>
        );
    }

    onClick(event) {
        event.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }
};

Button.propTypes = {
    onClick: React.PropTypes.func
};

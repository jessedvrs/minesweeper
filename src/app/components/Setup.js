'use strict';

import React from 'react';
import Fieldset from './Fieldset';
import Button from './Button';

export default class Setup extends React.Component {
    render() {
        return (
            <form className="ms-Setup">
                <Fieldset legend="Select a difficulty">
                    <select defaultValue="3">
                        <option value="1">Beginner</option>
                        <option value="2">Easy</option>
                        <option value="3">Normal</option>
                        <option value="4">Hard</option>
                        <option value="5">Expert</option>
                        <option value="6">Impossible</option>
                    </select>
                </Fieldset>
                <span className="ms-Setup__separator">
                    <span>or</span>
                </span>
                <Fieldset legend="Set up by hand">
                    <ul>
                        <li>Rows: <input type="number" defaultValue={10} /></li>
                        <li>Columns: <input type="number" defaultValue={10} /></li>
                        <li>Bombs: <input type="number" defaultValue={10} /></li>
                    </ul>
                </Fieldset>
                <div className="ms-Setup__start-button">
                    <Button onClick={this.props.startGame}>Start game</Button>
                </div>
            </form>
        );
    }
};

Setup.propTypes = {
    startGame: React.PropTypes.func.isRequired
};

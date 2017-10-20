import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    number: -1
};

class Value extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Value.propTypes = {
    number: PropTypes.number
  };

Value.defaultProps = defaultProps;

export default Value;

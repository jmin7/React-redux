import React, { Component } from 'react';
import PropTypes from 'prop-types';


function createWarning(funcName) {
  return () => console.warn(funcName + 'is not defined');
}
const defaultProps = {
      onPlus: createWarning('onPlus'),
      onSubstract: createWarning('onSubstract'),
      onRandomizeColor: createWarning('onRandomizeColor')
};

class Control extends Component {

    render() {
        return(
            <div>
              <button onClick={this.props.onPlus}> + </button>
              <button onClick={this.props.onSubstract}> - </button>
              <button onClick={this.props.onRandomizeColor}> Randomize Background Color </button>
            </div>
        );
    }
}

Control.propTypes = {
    onPlus: PropTypes.func,
    onSubstract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};
Control.defaultProps = defaultProps;

export default Control;

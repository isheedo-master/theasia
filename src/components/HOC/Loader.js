import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';


const Loader = (propToCheck) => (WrappedComponent) => {
  return class Loader extends Component {
    render () {
      const isEmpty = (prop) => (
        prop === null ||
        prop === undefined ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
      );
      return isEmpty(this.props[propToCheck]) ? <FontAwesome name='circle-o-notch' sixe='5x' spin /> : <WrappedComponent />;
    }
  }
}

export default Loader
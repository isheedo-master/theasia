import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './style.scss';


const Loader = (propToCheck) => (WrappedComponent) => {
  return class Loader extends Component {
    render () {
      const isEmpty = (prop) => (
        prop === null ||
        prop === undefined ||
        (prop.constructor === Object && Object.keys(prop).length === 0)
      );
      return isEmpty(this.props[propToCheck]) ? 
        <img id='appLoader' src='../../images/load_asia.gif' /> :
         <WrappedComponent {...this.props} />;
    }
  }
}

export default Loader
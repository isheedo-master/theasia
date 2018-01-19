import React, { Component } from 'react'
import Loader from '../../HOC/Loader';

class PageContent extends Component {
  render () {
    const { content } = this.props;
    return (
      <div>
        <h1>Welcome to TheAsia</h1>
        <h1>Welcome to TheAsia</h1>
        <h1>Welcome to TheAsia</h1>
        <h1>Welcome to TheAsia</h1>
        <h1>Welcome to TheAsia</h1>
        <h1>Welcome to TheAsia</h1>
        <h1>Welcome to TheAsia</h1>
        <h1>Welcome to TheAsia</h1>
        <h1>Welcome to TheAsia</h1>
      </div>
    )
  }
}

export default Loader('content')(PageContent)
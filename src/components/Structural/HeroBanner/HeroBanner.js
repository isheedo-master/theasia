import React from 'react';
import { Image, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Loader from '../../HOC/Loader';
import './style.scss';

const HeroBanner = ({imgUrl}) => {
  return (
    <div 
      id='heroBanner'
      style={{
        backgroundImage: 'url(' + imgUrl + ')',
      }}
    >
      <div className='hero-banner-actions'>
        <ul>
          <li>
            <a href='#'>
              <FontAwesome name='facebook' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesome name='twitter' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesome name='clone' />
            </a>
          </li>
        </ul>
        <Button>View Photos</Button>
      </div>
    </div>
  )
}

HeroBanner.defaultProps = {
  imgUrl: 'http://via.placeholder.com/1350x500',
};

HeroBanner.PropTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default Loader('imgUrl')(HeroBanner)
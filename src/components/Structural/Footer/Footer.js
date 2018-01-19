import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  const footerLinks = [
    'About Us',
    'FAQ',
    'Blog',
    'Terms & Conditions',
    'Cancellation Policy',
    'Contact Us'
  ]
  const socialLinks = [
    'facebook',
    'twitter',
    'instagram',
    'youtube',
    'pinterest',
    'linkedin'
  ]
  return (
    <footer>
      <Grid>
        <Row>
          <Col>
            {footerLinks.map(link => (
              <a key={link} href='#'>{link}</a>
            ))}
          </Col>
        </Row>
        <hr />
        <Row>
          <h3>Follow Us On</h3>
          <Col>
            {socialLinks.map(link => (
              <a key={link} href='#'>
                <FontAwesome name={link} />
              </a>
            ))}
          </Col>
        </Row>
      </Grid>
    </footer>
  );
};

export default Footer;

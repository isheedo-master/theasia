import React, { Component } from 'react'
import Loader from '../../HOC/Loader';
import { Grid, Row, Col, Panel, Table, Image } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { sortBy, sample } from 'lodash';
import './style.scss';

const fallbackEmptyLink = function(e){
  e.preventDefault();
  alert(`${_.sample(['Uh-oh', 'Ouch', 'Oopsy'])}, sorry we can't take you here yet`);
}

class PageContent extends Component {
  constructor(props) {
    super(props),
    this.renderNameAndInfo = this.renderNameAndInfo.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.renderImportantInfo = this.renderImportantInfo.bind(this);
    this.renderIncludeExclude = this.renderIncludeExclude.bind(this);
    this.renderSchedule = this.renderSchedule.bind(this);
    this.renderImages = this.renderImages.bind(this);
  }

  
  componentWillMount () {
    document.querySelectorAll('a[href="#"]:not([class*="dropdown"])').forEach(elem => {
      elem.addEventListener('click', (e) => fallbackEmptyLink(e))
    });
  }
  
  componentWillUnmount() {
    document.querySelectorAll('a[href="#"]:not([class*="dropdown"])').forEach(elem => {
      elem.removeEventListener('click', (e) => fallbackEmptyLink(e))
    });
  }
  
  
  

  renderNameAndInfo() {
    const { content: { 
      name,
      departure,
      tour_duration,
      available_day, 
    } } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <Row>
          <Col xs={3}>
            <FontAwesome name='map-marker' />
            <p>Departue</p>
            <p>{departure}</p>
          </Col>
          <Col xs={3}>
            <FontAwesome name='users' />
            <p>Tour type</p>
            <p>Join Tour</p>
          </Col>
          <Col xs={3}>
            <FontAwesome name='clock-o' />
            <p>Duration</p>
            <p>{tour_duration}</p>
          </Col>
          <Col xs={3}>
            <FontAwesome name='calendar' />
            <p>Available day</p>
            <p>{available_day}</p>
          </Col>
        </Row>
      </div>
    );
  }

  renderDetail() {
    const { content: {
      tour_duration,
      available_day,
      meeting_point,
      meeting_time,
    } } = this.props;

    return (
      <Row>
        <Col xs={3}>Detail</Col>
        <Col xs={9}>
          <p><strong>Tour Type: </strong>Join tour</p>
          <p><strong>Duration: </strong>{tour_duration}</p>
          <p><strong>Available Day: </strong>{available_day}</p>
          <p><strong>Meeting Time: </strong>{meeting_time}</p>
          <p><strong>Meeting Point: </strong>{meeting_point}</p>
          <hr />
        </Col>
      </Row>
    );
  }

  renderDescription() {
    const { content: { description } } = this.props;
    
    if (!description) {
      return;
    }

    const parsedDesc = JSON.parse(description);


    return (
      <Row>
        <Col xs={3}>Description</Col>
        <Col xs={9}>
          {parsedDesc.map((para, i) => <p key={`${para}_${i}`}>{para}</p>)}
          <hr />
        </Col>
      </Row>
    );
  }

  renderIncludeExclude() {
    const { content: { excluded_included } } = this.props;

    if (!excluded_included) {
      return;
    }

    let included = [];
    let excluded = [];

    excluded_included.map(item => {
      if (item.type) {
        included.push(item);
      } else {
        excluded.push(item);
      }
    });
    const includedRow = included.length > 0 ? (
      <Row>
        <h5>Include</h5>
        {included.map(inc => {
          return (
            <Col key={inc.id} sm={6} md={6}>
              {inc.exclude_include.name}
            </Col>
          );
        })}
      </Row>
    ) : null;

    const excludedRow = excluded.length > 0 ? (
      <Row>
        <h5>Exclude</h5>
        {excluded.map(excl => {
          return (
            <Col key={excl.id} sm={6} md={6}>
              {excl.exclude_include.name}
            </Col>
          );
        })}
      </Row>
    ) : null;

    return (
      <div>
        {includedRow}
        {excludedRow}
      </div>
    );
  }

  renderImportantInfo() {
    const { content: { important_information } } = this.props;
    
    if (!important_information) {
      return;
    }

    const parsedInfo = JSON.parse(important_information);
    const parsedInfoBody = JSON.parse(parsedInfo[0].body);


    return (
      <Row>
        <Col xs={3}>{parsedInfo[0].head}</Col>
        <Col xs={9}>
          <Table striped>
            <tbody>
              {parsedInfoBody.map((inforow, i) => {
                return (
                  <tr key={`${inforow}_${i}`}>
                    <td>{inforow}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {this.renderIncludeExclude()}
        </Col>
      </Row>
    );
  }

  renderSchedule() {
    const { content: { schedule_details } } = this.props;

    if (!schedule_details) {
      return;
    }

    const sortedDetails = _.sortBy(schedule_details, det => det.display_order);

    return (
      <Row>
        <Col xs={3}>Schedule</Col>
        <Col xs={9}>
          <Table striped>
            <thead>
              <tr>
                <th>Time</th>
                <th>Place</th>
              </tr>
            </thead>
            <tbody>
              {sortedDetails
                .map(detail => {
                  return (
                    <tr key={detail.id}>
                      <td>{detail.time}</td>
                      <td>{detail.description}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
          <hr />
        </Col>
      </Row>      
    );
  }

renderImages() {
  const { content: { product_medias } } = this.props;
  
  if (!product_medias) {
    return;
  }

  return (
    <Row>
      {product_medias.slice(0, 6).map(media => {
        return (
          <Col key={`${media.product_id}-${media.media_id}`}
            xs={6} lg={4}
            className='tour-media-wrapper'
          > 
            <Image
              src={media.details.absolute_url} responsive
              className='tour-media'
            />
          </Col>
        );
      })}
    </Row>
  );  
}



  render () {
    return (
      <Grid id='appContent' componentClass='section'>
        <Row>
          <Col xs={12} md={8}>
            {this.renderNameAndInfo()}
            <hr />
            {this.renderDescription()}
            {this.renderDetail()}
            {this.renderImportantInfo()}
            <hr />
            {this.renderSchedule()}
            {this.renderImages()}
          </Col>
          <Col>
            <Panel>
              <Panel.Heading>
                <Panel.Title>
                  Title that functions as a collapse toggle
						    </Panel.Title>
              </Panel.Heading>
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Loader('content')(PageContent)
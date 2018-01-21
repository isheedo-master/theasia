import React, { Component } from 'react';
import Header from '../components/Structural/Header/Header';
import Footer from '../components/Structural/Footer/Footer';
import PageContent from '../components/Containers/PageContent/PageContent';
import HeroBanner from './Structural/HeroBanner/HeroBanner';
import axios from 'axios';
import FontAwesome from 'react-fontawesome';

export default class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      tourData: {},
    },
    this.renderHero = this.renderHero.bind(this);
  }
  
  componentDidMount() {
    const apiUrl = 'https://api-development.theasia.com/Products/findBySlug/captain-explorer-dukw-tour-singapore-duck-tour-merlion-park-91';
    axios.get(apiUrl)
      .then(response => this.setState({
        tourData: response.data
      }))
      .catch(err => console.log(err));
  }

  renderHero() {
    const { tourData: { product_medias } } = this.state;
    if (product_medias) {
      const heroImg = product_medias.find(media => media.is_thumbnail );
      
      return <HeroBanner imgUrl={heroImg.details.absolute_url} />
    }
  }
  

  render() {
    const { tourData } = this.state;
    return (
      <div>
        <Header />
        {this.renderHero()}
        <PageContent content={tourData}/>
        <Footer />
      </div>
    );
  }
}

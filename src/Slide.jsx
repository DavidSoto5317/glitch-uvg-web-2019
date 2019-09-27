import React, { PureComponent } from 'react';
import './Slide.css';

class Slide extends PureComponent {
  // Hola soy Rodrigo Zea, discipulo de MS
  // Jose Cifuentes :) discipulo de MS
  // holis xd
  render() {
    const { imgPath } = this.props;
    const { bgColor } = this.props;
    const { txtColor } = this.props;
    const image = {
      backgroundImage: `url(${imgPath})`,
      width: '1000px',
      height: '385px',
      zoom: '0.8',
      margin: 'auto auto auto auto',
    };

    const bgColor1 = {
      background: `#${bgColor}`,
    };

    const textColor = {
      color: `#${txtColor}`,
    };

    const textShadow = {
      color: `#${txtColor}`,
      textShadow: '0 1px 4px rgba(0,0,0,0.25)',
    };

    const { title } = this.props;
    const { description } = this.props;
    const { shadow } = this.props;

    return (
      <div className="slideContainer" style={bgColor1}>
        <h1 style={shadow ? textShadow : textColor}>{title}</h1>
        <h2 style={textColor}>{description}</h2>
        <button type="button">Add DuckDuckGo to Chrome</button>
        <div className="slideImage" style={image} />
      </div>
    );
  }
}

export default Slide;

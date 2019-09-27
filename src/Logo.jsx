import React, { PureComponent } from 'react';
import './index.css';

class Logo extends PureComponent {
  render() {
    const conocer = 'conocer más';
    return (
      <div clasName="Container">
        <img src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg" href={window.scrollTo(0, 250)} className="mainLogo" alt="Duck Logo" />

        <span className="tag">{conocer}</span>
      </div>
    );
  }
}

export default Logo;

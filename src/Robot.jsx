import React, { PureComponent } from 'react';

require('./cuadro.css');

export default class Robot extends PureComponent {
  render() {
    return (
      <img src="https://duckduckgo.com/assets/onboarding/robot-icon-frameless.svg" className="imagenRobot" alt="ImagenRobot" />
    );
  }
}

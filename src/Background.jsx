import React, { PureComponent } from 'react';
import './App.css';

export default class Background extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="background">{children}</div>
    );
  }
}

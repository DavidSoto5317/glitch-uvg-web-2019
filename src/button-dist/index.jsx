import React, { PureComponent } from 'react';
import './style.css';

export default class DiscButton extends PureComponent {
  render() {
    return (
      <div className="install">
        <button type="button">Add DuckDuckGo to Firefox</button>
      </div>
    );
  }
}

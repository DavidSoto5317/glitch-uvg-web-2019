import React, { PureComponent } from 'react';
import Title from './title/index';
import Robot from './Robot';
import DataInfo from './DataInfo';
import DiscButton from './button-dist/index';

import './cuadro.css';


export default class Cuadro extends PureComponent {
  render() {
    return (
      <div className="cuadro">
        <div className="imagen">
          <Robot />
          <Title />
          <DataInfo />
          <DiscButton />
        </div>
      </div>
    );
  }
}

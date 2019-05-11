
import React, { Component } from 'react'
import style from './astyle.less'
import LazyLoad from 'react-lazyload';

export default class Instruction extends Component {
  render() {
    return (
      <div className={style.detail} style={{ position: "relative", margin: "15px 0" }}>
        <LazyLoad >
          <img src={require('../asset/img/plan/1.jpg')} />
        </LazyLoad>
        <LazyLoad >
          <img src={require('../asset/img/plan/2.jpg')} />
        </LazyLoad>
        <LazyLoad >
          <img src={require('../asset/img/plan/3.jpg')} />
        </LazyLoad>
        <LazyLoad >
          <img src={require('../asset/img/plan/4.jpg')} />
        </LazyLoad>
        <LazyLoad >
          <img src={require('../asset/img/plan/5.jpg')} />
        </LazyLoad>
        <LazyLoad >
          <img src={require('../asset/img/plan/6.jpg')} />
        </LazyLoad>
        
      </div>
    )
  }
}
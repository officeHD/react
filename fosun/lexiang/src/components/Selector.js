import React, { Component } from 'react'
import style from './asset/css/index.less'
export default class OutPut extends Component {
  
  
  componentWillUnmount() {
   
    
    //当页面卸载时，要关闭选择器
    this.props.onClose()
  }
  render() {
    // console.log(this.props.selectorOptions);
    if (!this.props.showSelector||!this.props.selectorOptions) {
      return null
    }
    return (
      <div className={style.selector} onClick={this.props.onClose}>
        <ul>
          {this.props.selectorOptions.map((option, index) =>
            <li key={option.value} onClick={e => this.props.onSelect(this.props.selectorTarget, option.value)}>
              {option.label}
              <img src={ctx + '/static/img/carInf/radio_' + (option.value === this.props.selectorSelected - 0 ? 'on' : 'off') + '.png'} />
            </li>
          )}
        </ul>
      </div>
    )
  }

}
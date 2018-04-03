import React, {Component} from 'react'
import style from './asset/css/index.less'

export default class OutPut extends Component{
  componentWillUnmount() {
    
    //当页面卸载时，要关闭选择器
    this.props.onClose()
  }

  render() {
    if (!this.props.showSelector) {
      return null
    }

    return (
      <div className={style.selector} onClick={this.props.onClose}>
        <ul>
          {this.props.selectorOptions.map((option, index) => 
            <li key={index} onClick={e => this.props.onSelect(this.props.selectorTarget, index)}>{option}<img src={ctx + '/static/img/carInf/radio_' + (index === this.props.selectorSelected ? 'on' : 'off') + '.png'} /></li> 
          )}
        </ul>
      </div>
    )
  }

}
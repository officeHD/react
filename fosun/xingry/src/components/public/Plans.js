import React, { Component } from 'react'
import style from '../asset/css/index.less'
import ShowController from './ShowController'
import SelectBox from './SelectBox'

export default class Plans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.toggleShow = this.toggleShow.bind(this);
  }
  toggleShow() {
    this.setState({
      show: !this.state.show,
    })
  }
  render() {
    return (
      <div>
        <div className={this.state.show ? style.plan_all : style.plan_list} >
          <span className={style.detail_title}>
            <span className={style.detail_half}> {this.props.title}</span>
            <span className={style.detail_half} onClick={this.props.onClick}>
              {this.props.extra ? <SelectBox extra={this.props.extra} /> : this.props.children}
              {this.props.more ? <ShowController show={this.state.show} onToggleShow={this.toggleShow} /> : null}
            </span>
          </span>
          <span className={style.more_info}>
            {this.props.more}
          </span>
        </div>
      </div>
    )
  }
}
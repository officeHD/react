import React, {Component} from 'react'
import style from '../asset/css/index.less'
import Plan from './Plan'
import Items from './Items'

export default class Out extends Component {
    constructor(props){
        super(props);
        this.state = {
          tab: 0,
        }

        this.selectLeft = this.selectLeft.bind(this)
        this.selectRight = this.selectRight.bind(this)
    }

    selectLeft() {
      this.setState({
        tab: 0
      })
    }

    selectRight() {
      this.setState({
        tab: 1
      })
    }

    render(){
        return (
          <div>
            <ul className={style.tab_controller}>
              <li className={this.state.tab ? '' : style.selected} onClick={this.selectLeft}>产品介绍</li>
              <li className={this.state.tab ? style.selected : ''} onClick={this.selectRight}>详细说明</li>
            </ul> 
            {this.state.tab ? <Items /> : <Plan />} 

          </div>
        )
    }
}
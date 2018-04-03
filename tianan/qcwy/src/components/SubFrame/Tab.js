import React, {Component} from 'react'
import style from '../asset/css/Tab.less'
import AppStore from '../../stores/AppStore';
import Notice from './Notice'
import Process from './Process'
import Detail from './Detail'

export default class Out extends Component {
    constructor(props){
        super(props);
        this.state = {
          tab:AppStore.getTabPage(),
        }

        this.selectLeft = this.selectLeft.bind(this)
        this.selectRight = this.selectRight.bind(this)
        this.selectCenter = this.selectCenter.bind(this)
    }

    selectLeft() {
      this.setState({
        tab: '0'
      })
    }

    selectRight() {
      this.setState({
        tab: '1'
      })
    }
    selectCenter(){
      this.setState({
          tab:'2'
      })
    }
    render(){
        return (
          <div>
            <ul className={style.tab_controller}>
              <li className={this.state.tab==='0' ? style.selected : ''} onClick={this.selectLeft}>投保须知</li>
              <li className={this.state.tab==='2' ? style.selected : ''} onClick={this.selectCenter}>理赔说明</li>
              <li className={this.state.tab==='1' ? style.selected : ''} onClick={this.selectRight}>保险条款</li>
            </ul> 
            {this.state.tab==='2'? <Process/> :(this.state.tab==="1"?<Detail/>:<Notice/>)} 

          </div>
        )
    }
}
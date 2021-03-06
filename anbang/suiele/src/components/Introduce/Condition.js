import React, {Component} from 'react'
import style from '../asset/css/introduce.less'
import ShowController from './ShowController'
 
export default class Out extends Component {
   constructor(props){
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
    render(){ 

      return (
       
          <p className={this.state.show ? style.all : ''}>
            <span className={style.detail_title}>
              {this.props.title}
              <ShowController title={this.props.tip} show={this.state.show} onToggleShow={this.toggleShow} />
            </span> 
            <span className={style.more_info} dangerouslySetInnerHTML={{__html: this.props.more}}>
              
            </span>
          </p>
        
      )
    }
}
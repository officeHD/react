import React, {Component} from 'react'
import style from '../asset/css/introduce.less'
export default class Feature extends Component {
    render(){ 
      return (
         <div className={style.feature_content}>
            <img src={require('../asset/img/introduction.jpg')}/> 
         </div>
             
      )
    }
}
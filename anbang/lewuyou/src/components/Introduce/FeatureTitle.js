import React, {Component} from 'react'
import style from '../asset/css/introduce.less'

export default class Feature extends Component {
    
    render(){ 
     
      return (
      	<div>
	        <div className={style.feature_title}>
	        	<h2>
		         {this.props.name}
		        </h2>
		        <h4>
		         {this.props.title}
		        </h4>
		        <p>
		        {this.props.article}
		        </p> 
	        </div> 
	        
        </div>  
      )
    }
}
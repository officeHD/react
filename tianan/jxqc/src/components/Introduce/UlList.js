import React, {Component} from 'react'
import style from '../asset/css/introduce.less'
export default class Feature extends Component {


    render(){ 

    	let company=this.props.company.condition;
    	let list=company.map((val, index) => {
           	return <div className={style.list} key={index}>
         		 		<img src={require(`../asset/img/step${index}.png`)}/> 
         		 <div>
         		 	<h2>{val.title}</h2>
         		 	<p>{val.name}</p>
         		 </div>
         	</div>
           })
      return (
         <div className={style.ullist}>
         	 
         	 
            {list}
         </div>
             
      )
    }
}
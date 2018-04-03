import style from '../asset/css/introduce.less';
import React , {Component} from 'react'
export default class Banner extends Component {
    constructor(props){
      super(props);
    };
 
    render() {

      let company=this.props.company;
        return (
           <div>
            <img className={style.top_img} src={require(`../asset/img/banner_${company.spell}.jpg`)}/>
            <div className={style.words}>
              <p>{company.title}</p>
              <span>{ company.titletip}</span>
            </div>
          </div>
        );
    };
}
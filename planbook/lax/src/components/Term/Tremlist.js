import React, {Component} from 'react';
import style from '../asset/css/term.less';

import AppStore from '../../stores/AppStore';

export default class Backpage extends Component {
    constructor(props){
        super(props); 
        this.state = {
            type: AppStore.getType(),
        };
        this._onChange=this._onChange.bind(this); 
    }
    componentDidMount() { 
        AppStore.addChangeListener(this._onChange); 
       
    };
    componentWillUnmount () {  
        AppStore.removeChangeListener(this._onChange);  
        
    };
    _onChange() {  
        this.setState({type: AppStore.getType(),});  
    };
    handelClick(url){

      if(!this.state.type){
         window.open('',"_blank").location=ctx+url;
      }else{
        if(window.minsheng){
          window.minsheng.OpenPdfActivity(url)
        }else{
          tianbai.openPdfController(url)
        }
      } 
    }
    render() {

      if (!this.props.company) {
            return null
      }
      let list=this.props.company.term;
      
      let Termlist=list.map((term,index) => { 

      return  <li key={index} className={style.term_list} onClick={(val) => {this.handelClick(term.url)}}>
            <h4>
                <span>{term.name}</span>
            </h4>
          </li>
      })
      return (
        <div> 
          <ul className={style.termlist}> 
            {Termlist}
          </ul> 
        </div>
      )
    };
}
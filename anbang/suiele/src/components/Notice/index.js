import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Defind from './Defind';
import Tips from './Tips';
import Insure from './Insure';
import AppStore from '../../stores/AppStore'

export default class App extends Component {
 
    constructor(props){
        super(props);
         this.state = {
          page: AppStore.getTipsPage(),
        }
         
    }

     
    render(){
       
        return (
          <div>
            <TitleBar title="安邦随e乐两全保险"/>
            {this.state.page===1?<Defind/>:this.state.page===2?<Tips/>:<Insure/>
             
            }

          </div>
        )
    }
}
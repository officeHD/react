import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Banner from './Banner';
import Userinf from './Userinf';
import Introduce from './Introduce';
import Album from './Album';
 import AppStore from '../../stores/AppStore';
export default class Out extends Component {
 
  constructor(props){
        super(props);
        this.state = this.getData(); 
        this._onChange=this._onChange.bind(this); 
        
    };
    getData() {
      return {
        staffmes:AppStore.getStaff() 
      }
    };
    componentDidMount() { 
      AppStore.addChangeListener(this._onChange);
     
    };
    componentWillUnmount () {
      AppStore.removeChangeListener(this._onChange); 
    };
    _onChange() {  
        this.setState(this.getData());  
    };
  render() {
      return (
        <div>
          <TitleBar title="个人名片" />
            <Banner staffmes={this.state.staffmes}/>
            <Userinf staffmes={this.state.staffmes}/>
            <Introduce staffmes={this.state.staffmes}/>
            <Album staffmes={this.state.staffmes}/>
        </div>
      );
  };
}
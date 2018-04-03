import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Tab from './Tab';
export default class App extends Component {
     constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <TitleBar title="乐无忧1号少儿两全保险（分红型）" />
                 <Tab page={this.props.page}/>
            </div>
        )
    };
}
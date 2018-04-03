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
                <TitleBar title="安邦畅行无忧两全保险" />
                 <Tab page={this.props.page}/>
            </div>
        )
    };
}
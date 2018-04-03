 

import React, {Component} from 'react';
import TitleBar from '../public/TitleBar';
import Content from './Content';
 
import Bottom from './Bottom';
export default class App extends Component {
     constructor(props){
        super(props);
    }
    
    render() {
 
        return (
            <div>
                <TitleBar title="安邦随e乐两全保险" />
                 <Content />
                 <Bottom />
            </div>
        )
    };
}
import React, {Component} from 'react';
import AppStore from '../../stores/AppStore';
import style from '../asset/css/SubFrame.less'

class SubFrame extends Component {
    constructor(props){
        super(props);
         this.state = {
          company: localStorage.InsuranceCom,
          url:localStorage.carurl
        };
    };

    render() {
        return (
            <form name='form' method="POST" className={style.sub_frame} action={this.state.url} id="sub_frame">
              <input type="submit"/>
            </form>
        );
    };
}

export default SubFrame
import React, {Component} from 'react';
import style from '../asset/css/SelectorInLine.less'

export default class Out extends Component {
       constructor(props) {
        super(props);

        this.state = {
            search: '',
        };
        this.handleChange = this.handleChange.bind(this)
         
    };

    handleChange(event){
        let val=event.target.value.trim()
        this.setState({
            search: val,
        }) 
    }
    render() {
        if (!this.props.isShow) {
            return null;
        }

        let listShows = this.props.options.map((text, index)=> {
           
            // if(text.indexOf(this.state.search) >= 0){
                return (
                    <li key={index} className={text === this.props.selected ? style.selected : ''} onClick={e => this.props.onSelect({text, index,})}>{text}</li>
                );
            // }
           
        });

        return (
              <div className={style.jobCover} onClick={this.props.onClose}>
                <div className={style.jobContent} >
                    
                    <ul className={style.li_se} onClick={this.props.onClose}>
                        {listShows}
                    </ul>
                 </div>
            </div>
        );
    };
}
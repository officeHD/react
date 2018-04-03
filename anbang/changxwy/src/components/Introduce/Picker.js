import React, {Component} from 'react';
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
 


class Test extends React.Component {
  const district = [
   
    {
      label: '2013',
      value: '2013',
    },
    {
      label: '2014',
      value: '2014',
    },
  
];

  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
     <List>
       <Picker data={district} cols={1} {...getFieldProps('district3')} className="forss">
          <div>
              <label>保障范围</label>
              <input type="text" placeholder="请选择" 
                readOnly="readonly"
                value={this.state.PriceInfo.yearLength}
              />
              <ul className={style.ul_tip}>
                  <li>重疾保障金 <span>最高十万</span></li>
                  <li>身故保险金<span>最高十万</span></li>
              </ul>
          </div>    
        </Picker>
      </List>
    </div>);
  }
}

export createForm()(Form);
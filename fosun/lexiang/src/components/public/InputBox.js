import React, { Component } from 'react'
import { InputItem } from 'antd-mobile';

export default class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(value) {
        this.props.onChange(value);
        // if (value.replace(/\s/g, '').length < 11) {
        //     this.setState({
        //         hasError: true,
        //     });
        // } else {
        //     this.setState({
        //         hasError: false,
        //     });
        // }

    }
    render() {
        let { name, type="text", value, defaultValue, placeholder="请输入", editable=true, disabled=false, clear, maxLength, onBlur, extra, labelNumber, onErrorClick } = this.props;
        return (
            <div>
                <InputItem
                    error={this.state.hasError}
                    onChange={this.onChange}
                    type={type}
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    editable={editable}
                    disabled={disabled}
                    clear={clear}
                    maxLength={maxLength}
                    onBlur={onBlur}
                    extra={extra}
                    labelNumber={labelNumber}
                    onErrorClick={onErrorClick}
                >{name}</InputItem>
            </div>
        )
    }
}
import React from 'react';
import ReactDOM from 'react-dom';

const InputText = React.createClass({
    getInitialState() {
        return { value : "" }
    },
    onChange(event) {
        this.setState({value: event.target.value})
    },
    onClick() {
        this.props.onClick(this.state.value)
    },
    render: function() {
        return <div>
            <input onChange={this.onChange} disabled={!this.props.enabled}/>
            <a style={this.props.enabled ? undefined : { color: 'red' }} 
               onClick={this.onClick}>{this.props.text}</a>
        </div>
    }
})


export default InputText

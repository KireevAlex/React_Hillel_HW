import React, { Component } from 'react';
import './dataList.css';


export default class dataList extends Component {
    state = {};
    render() {
        // console.log(this.props.data.id)
        return (
                <li key={this.props.data.id} 
                    className={this.props.data.completed ? '' + 'performedClass' : 'nodPerformedClass'}>
                        {this.props.data.title}
                </li>)
    };

};
import React, { Component } from 'react';
import './TodoListRender.css';
import DataList from './dataList/dataList.js';


export default class TodoListRender extends Component {
    state = {};

    render() {

        return (
                <ul>
                    {this.props.data.map((el) => (
                    <DataList  data = { el } 
                                key={el.id} />))}
                </ul>
        );
    };

};

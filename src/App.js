import React, { Component } from 'react'
import './App.css';
import TodoListRender from './components/TodoListRender.js';

export default class App extends Component {
    state = {
        todoList:
            [{
                id: "14",
                title: "Costa Rican Colon North Carolina parsing",
                completed: true
            },
            {
                id: "16",
                title: "Industrial indexing context-sensitive",
                completed: true
            },
            {
                id: "18",
                title: "North Korean Won",
                completed: true
            },
            {
                id: "19",
                title: "Wooden Indiana",
                completed: true
            },
            {
                id: "20",
                title: "Assistant actuating implement",
                completed: true
            },
            {
                id: "21",
                title: "Assistant actuating implement",
                completed: false
            },
            {
                id: "22",
                title: "Assistant actuating implement",
                completed: false
            }
            ],
    };
    render() {
        return (
            <div>
                <TodoListRender data= {this.state.todoList} />
            </div>
        );
    };
};

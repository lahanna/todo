import _ from 'lodash';
import React from 'react';

import './App.css';
import Footer from './footer.js'
import Header from './header.js'

let App = React.createClass({
    displayName: 'App',

    getInitialState() {
        return {
            items: []
        }
    },

    removeItem(item) {
        let itemArray = this.state.items;
        itemArray.splice(itemArray.indexOf(item), 1);

        this.setState({
            items: itemArray
        })
    },

    addItem(e){
        let itemArray = this.state.items;

        let item = {
            text: this._inputElement.value,
            key: Date.now()
        };

        if (item.text === '') {
            return false;
        }

        itemArray.push(item);

        this.setState({
            items: itemArray
        })

        this._inputElement.value = "";

        e.preventDefault();
    },

    render () {

        var that = this;

        return (
            <div className="App">
            <Header/>
            <form onSubmit={this.addItem}>
            <input type="text" ref={(a) => this._inputElement = a}
            placeholder="Enter task here">
            </input>
            <button type="submit" className="addButton">Post-it</button>
            </form>
            <div className="TodoItems">
                <ul className="theList">
                    {this.state.items.map(function(item, index){
                        return <li key={item.key}><div>{item.text}</div><a href="#" key={item.key} onClick={function() {that.removeItem(item) }} className="removeButton" >Task done ✓ </a></li>
                    })}
                </ul>
            </div>
            <Footer/>
            </div>
        );
    }
})

export default App;

import React from 'react';

import './header.css';

const Header = React.createClass({
    displayName: 'Header',

  render() {
    return (
      <div className="Header">
        <h1>toDo✎</h1>
        <div className="HeaderText">
        <p>Write your toDos and turn them into cute sticky notes </p>
        </div>
      </div>
    );
  }
})

export default Header;

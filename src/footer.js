import React from 'react';

import './footer.css';

const Footer = React.createClass({
    displayName: 'Footer',

  render() {
    return (
      <div className="Footer">
      <div className="footerText">
        <p>Made with 💞by <a href="https://hannaolsson.com/"> Hanna Olsson </a></p>
        </div>
      </div>
    );
  }
})

export default Footer;

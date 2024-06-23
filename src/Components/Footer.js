//Footer Component of the Portfolio

//Import React Libraries
import React, { Component } from 'react';

class Footer extends Component {
  render() {

    //Check if 'this.props.data' Exists Before Using it
    if (this.props.data) {
      //Map Through the 'SOCIAL' Array in 'this.props.data' and Create an Array of JSX Elements
      var networks = this.props.data.social.map(function (network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      //Footer Section
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {networks}
            </ul>

            <ul>
              <li>Modified & Revamped By Porsche Herskorn ♥️</li>
            </ul>

            <ul className="copyright">
              <li>&copy; Template Inspired and Credited to Tim Baker - Copyright 2017 Tim Baker</li>
              <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
            </ul>

          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
      </footer>
    );
  }
}

export default Footer;

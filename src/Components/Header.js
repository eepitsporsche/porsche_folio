//Header Component of the Portfolio
    //Header is the first section rendered on the page
        //Header displays the name, occupation, description, and the social media links of the user.


//Import React and Component
import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import particles from '../Const/particle';

//Header Component Class Declaration AND Export
class Header extends Component {
   render() {
      // Check if 'this.props.data' Exists
      if (this.props.data) {
         //Store 'name' From the Data
         var name = this.props.data.name;
         //Store 'occupation' From the Data
         var occupation = this.props.data.occupation;
         //Store 'description' From the Data
         var description = this.props.data.description;
         //Store 'city' From the Data
         var city = this.props.data.address.city;
         //Map Through the 'social' Array in 'this.props.data' and Create an Array of JSX Elements
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      //Render the Header Section
      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">I'm {name}.</h1>
                  <h3>A {city}, Canada based <span>{occupation}</span>. {description}.</h3>
                  <hr />
                  {/* <row className="social">
                  <ul>
                  {networks}
                  </ul>
               </row> */}
               </div>
               <div className="particle">
                  <Particles
                     params={particles}
                     className="particles"
                  />
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;

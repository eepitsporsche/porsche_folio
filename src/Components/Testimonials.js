//Testimonials Component of the Portfolio

//Imports
import React, { Component } from 'react';

class Testimonials extends Component {
   render() {
      //Check if 'this.props.data' Exists
      if (this.props.data) {
         //Map Through the 'testimonials' Array in 'this.props.data' and Create an Array of JSX Elements
         var testimonials = this.props.data.testimonials.map(function (testimonials) {
            return <li key={testimonials.user}>
               <blockquote>
                  <p>{testimonials.text}</p>
                  <cite>{testimonials.user}</cite>
               </blockquote>
            </li>
         })
      }
      //Render the Testimonials Section
      return (
         <section id="testimonials">
            <div className="text-container">
               <div className="row">

                  <div className="two columns header-col">
                     <h1><span>Client Testimonials</span></h1>
                  </div>

                  <div className="ten columns flex-container">
                     <ul className="slides">
                        {testimonials}
                     </ul>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default Testimonials;

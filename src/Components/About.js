//Imports
import React, { Component } from 'react';

//Component Class Declaration and Export
class About extends Component {
   render() {
      //Variables for Data from JSON File if it Exists
      if (this.props.data) {
         var name = this.props.data.name;                 // Store 'name' from the data
         var profilepic = process.env.PUBLIC_URL + '/images/' + this.props.data.image // Store profile picture path
         var bio = this.props.data.bio;                   // Store biography
         var street = this.props.data.address.street;     // Store street address
         var city = this.props.data.address.city;         // Store city
         var state = this.props.data.address.state;       // Store state
         var zip = this.props.data.address.zip;           // Store zip code
         var phone = this.props.data.phone;               // Store phone number
         var email = this.props.data.email;               // Store email
         var resumeDownload = this.props.data.resumedownload; // Store resume download link
      }

      return (
         // About Section
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src={profilepic} alt="Porsche's Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                           <span>{name}</span><br />
                           {/* <span>{street}<br /> */}
                              {city}, {state} {zip}<br />
                           {/* </span> */}
                           <span>{phone}</span><br />
                           <span>{email}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href="/images/porsche_herskorn_resume.pdf" download="porsche_herskorn_resume" className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;

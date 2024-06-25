import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = ({ data }) => {
   // const [url, setUrl] = useState('mailto:test@example.com?subject=subject&body=body');
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   console.log(data)

   //  const handleClick = (e) => {
   //     e.preventDefault();
   //    window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
   //  }

   function sendEmail() {
      document.getElementById('contactForm').addEventListener('submit', function(e) {
         e.preventDefault();

         emailjs.sendForm('service_h5j2jhh', 'template_l8rpadg', this, '-beJhokCJf-vRfshE')
            .then((result) => {
               console.log(result.text);
               alert('Message sent!');
            }, (error) => {
               console.log(error.text);
               alert('Error. Could not send message.')
            });

         var allInputs = document.querySelectorAll('input');
         allInputs.forEach(singleInput => singleInput.value = '');
         document.getElementById("message").value = '';
      })
   }

   return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">
               <p className="lead">{data?.message}</p>
            </div>
         </div>

         <div className="row">
            <div className="eight columns">

               <form onSubmit={sendEmail} id="contactForm" name="contactForm">
                  <fieldset>

                     <div>
                        <label htmlFor="from_name">Name <span className="required">*</span></label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" defaultValue="" size="35" id="from_name" name="from_name" />
                     </div>

                     <div>
                        <label htmlFor="from_email">Email <span className="required">*</span></label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" defaultValue="" size="35" id="from_email" name="from_email" />
                     </div>

                     <div>
                        <label htmlFor="subject">Subject</label>
                        <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" defaultValue="" size="35" id="subject" name="subject" />
                     </div>

                     <div>
                        <label htmlFor="message">Message <span className="required">*</span></label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} cols="50" rows="15" id="message" name="message"></textarea>
                     </div>

                     <div>
                        <button type='submit' onClick={sendEmail} className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="loading wheel spinning" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>

               <div id="message-warning">Error!</div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent. Thank you!<br />
               </div>
            </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>Address and Phone</h4>
                  <p className="address">
                     {data?.name}<br />
                     {/* {data?.address.street} <br /> */}
                     {data?.address.city}, {data?.address.state} {data?.address.zip}<br />
                     <span>{data?.phone}</span>
                  </p>
               </div>

               <div className="widget widget_tweets">

               </div>
            </aside>
         </div>
      </section>
   );
}

export default Contact;
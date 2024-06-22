// Import necessary modules and components.
import React, { Component } from 'react';
// Import ReactGA if needed in the future for Google Analytics.
// import ReactGA from 'react-ga';
import $ from 'jquery';

// Import CSS styles and components.
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

// Define the main App component.
class App extends Component {

  constructor(props) {
    super(props);
    // Set up the initial state for the component.
    this.state = {
      foo: 'bar', // Just a placeholder example state value.
      resumeData: {} // The resume data fetched from 'resumeData.json' will be stored here.
    };
  }

  // Function to fetch resume data using AJAX.
  getResumeData() {
    $.ajax({
      url: process.env.PUBLIC_URL + '/resumeData.json', // The URL to fetch resume data from.
      dataType: 'json', // The expected data type (JSON in this case).
      cache: false, // Disable caching of the AJAX request.
      success: function (data) {
        // On successful AJAX request, update the component's state with the fetched data.
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        // Handle any errors that occur during the AJAX request.
        console.log(err);
        alert(err);
      }
    });
  }

  // Lifecycle method: componentDidMount.
  // This method is called after the component has been rendered to the screen.
  componentDidMount() {
    // Call the function to fetch resume data when the component is mounted.
    this.getResumeData();
  }

  // Render method: This defines the structure of the component.
  render() {
    return (
      <div className="App">
        {/* Render each component with the corresponding data from the state. */}
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

// Export the App component so it can be used in other parts of the application.
export default App;


// Import necessary modules and styles.
import React from 'react'; // Import React library.
import ReactDOM from 'react-dom'; // Import ReactDOM library for rendering components to the DOM.
import './index.css'; // Import the CSS styles for the application.
import App from './App'; // Import the main App component.
import registerServiceWorker from './registerServiceWorker'; // Import the service worker for offline caching.

// Render the App component to the root element in the DOM.
ReactDOM.render(<App />, document.getElementById('root'));

// Register the service worker to enable offline caching and better performance.
registerServiceWorker();
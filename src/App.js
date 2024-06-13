import React, { useEffect } from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Spinner from './components/Spinner';

const App = () => {
  useEffect(() => {
    // Custom JavaScript logic if needed
  }, []);

  return (
    <div>
      <Spinner />
      <Topbar />
      {/* Add other components here */}
    </div>
  );
};

export default App;
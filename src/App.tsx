import React from 'react';
import MainLayout from './components/MainLayout';
import './styles/main.scss';

function App() {
  return (
    <MainLayout>
      <div className="container">
        {/* Your routes/pages will go here */}
        <h1>Welcome to PlayX</h1>
      </div>
    </MainLayout>
  );
}

export default App;

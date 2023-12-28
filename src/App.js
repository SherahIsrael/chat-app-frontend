import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import Navigation from './components/Shared/Navigation';
import Activity from './components/Activity/Activity';
import Footer from './components/Shared/Footer';
  
  const App = () => {
    return (
      <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/activity" element={<Activity />}/>
      </Routes>
      <Footer />
      </>
    );
  }
export default App;
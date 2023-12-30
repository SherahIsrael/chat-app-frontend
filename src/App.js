import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';
import Activity from './components/Activity/Activity';
import Footer from './components/Shared/Footer';
import ChatList from './components/Chat/ChatList';
  
  const App = () => {
    return (
      <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/chatList" element={<ChatList />} />
      </Routes>
      <Footer />
      </>
    );
  }
export default App;
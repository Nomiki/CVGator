import React , { Component } from 'react';
import './App.css';
import ResumeForm from './components/ResumeForm copy';
import Header from './materials/Header';


function App() {
  return (
    <div className="App">
      <Header userName="Eyal"></Header>
      <ResumeForm />
    </div>
  );
}

export default App;

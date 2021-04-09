import "./App.css";
import Compiler from "./Components/Compiler/Compiler";
import Home from "./Components/Home/Home";
import Editor from "./Components/Editor/Editor";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";
import Terminal from "./Components/Terminal/TerminalAccess";
import Chatbot from "./Components/ChatBot/chatbot";
import React from "react";
import NetworkDetector from "./Components/HOC/NetworkDetector";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/Compiler" component={Compiler} />
      <Route exact path="/Editor" component={Editor} />
      <Route exact path="/Chatbot" component={Chatbot} />
      <Route exact path="/Terminal" component={Terminal} />
    </div>
  );
}

export default NetworkDetector(App);

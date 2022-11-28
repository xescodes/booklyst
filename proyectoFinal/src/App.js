import React, { Component } from "react";
import "./assets/App.css";
import './assets/index.css';
import LoginForm from "./components/LoginForm";
import NoteList from "./components/NoteList";
class App extends Component {

  constructor(){
    super();
   
    this.state = {
      notes:[]
    };
  }

  noteCreate(title, text){
    const newNote = {title, text};
    const newArraynotes = [...this.state.notes,newNote]
    const newState = {
      notes:newArraynotes
    }
    this.setState(newState);
  }

  render() {
    return (
      <section className="content">
        <LoginForm noteCreate={this.noteCreate.bind(this)}/>
        <NoteList notes={this.state.notes}/>
      </section>
    );
  }
}

export default App;

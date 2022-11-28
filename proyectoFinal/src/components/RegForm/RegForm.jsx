import React, { Component } from "react";
import "./style.css";
class LoginForm extends Component {
  
  constructor(props){
    super(props);
    this.title = "";
    this.text = "";
  }
  
  handleMudancatitle(evento){
    evento.stopPropagation();
    this.title = evento.target.value;
  }

  handleMudancatext(evento){
    evento.stopPropagation();
    this.text = evento.target.value;
  }

  noteCreate(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.noteCreate(this.title, this.text);
  }
  
  render() {
    return (
      <form className="form-cadastro "
        onSubmit={this.noteCreate.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancatitle.bind(this)}
        />
        <textarea
          rows={13}
          placeholder="Escreva sua note..."
          className="form-cadastro_input"
          onChange={this.handleMudancatext.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          create Nota
        </button>
      </form>
    );
  }
}

export default LoginForm;

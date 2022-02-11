import React, {Component} from 'react';
import './estilo.css'

class App extends Component{

    constructor(props) {
      super(props);
      this.state={
        textoFrase: ''
      };

      this.quebraBiscoito = this.quebraBiscoito.bind(this);

      this.frases=[
          'Siga os brons e aprenda com eles', 'Todos os dias temos a chance de recomeçar',
          'A maior barreira para o sucesso é o medo do fracasso', 'Tenha fé', 
          'Deixe de lado as preocupações e seja feliz'
      ];
    } 
  
    quebraBiscoito(){
      let state = this.state;
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
      state.textoFrase = this.frases[numeroAleatorio];
      this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={require('./assets/biscoito.png')} />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{

  render(){
      return(
          <div>
              <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
          </div>
      );
  }
}

export default App;
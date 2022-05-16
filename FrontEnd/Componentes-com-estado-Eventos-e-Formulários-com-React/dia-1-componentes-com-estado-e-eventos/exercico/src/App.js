// import "./App.css";
// import React from "react";

// function noClick() {
//   console.log('botao1')
// }
// function noClick2() {
//   console.log('botao2')
// }
// function noClick3() {
//   console.log('botao3')
// }
// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <button onClick={noClick}>butao1</button>
//         <button onClick={noClick2}>butao2</button>
//         <button onClick={noClick3}>butão3</button>
//       </>
//     );
//   }
// }

// export default App;
// import React from "react";
// import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.noClick = this.noClick.bind(this)
//   }

//   noClick() {
//     console.log(this)
//     console.log(Math.random(10))
//   }

//   render() {
//     return (
//       <button type="butyon" onClick={this.noClick}>
//         deu certo
//       </button>
//     );
//   }
// }

// export default App;

// import React from "react";
// import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       numeroClicado: 0,
//       numeroClicado2: 0,
//       numeroClicado3: 0,
//     }

//     this.noClick = this.noClick.bind(this);
//     this.noClick2 = this.noClick2.bind(this);
//     this.noClick3 = this.noClick3.bind(this);
//   }

//   noClick() {
//     this.setState((valorQueIniaEmZero, _porps) => ({
//       numeroClicado: valorQueIniaEmZero.numeroClicado + 1,
//     }));
//     console.log(this);
//     console.log("sei la");
//   }
//   noClick2() {
//     this.setState((valorQueIniaEmZero2, _porps) => ({
//       numeroClicado2: valorQueIniaEmZero2.numeroClicado2 + 1,
//     }));
//   }
//   noClick3() {
//     this.setState((valorQueIniaEmZero3, _porps) => ({
//       numeroClicado3: valorQueIniaEmZero3.numeroClicado3 + 1,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.noClick}>{this.state.numeroClicado}</button>
//         <button onClick={this.noClick2}>{this.state.numeroClicado2}</button>
//         <button onClick={this.noClick3}>{this.state.numeroClicado3}</button>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      contador: 0,
    }

    this.numeroPar = this.numeroPar.bind(this)
  }

  numeroPar() {
    this.setState((valorAnterio) => ({
      contador: valorAnterio.contador + 1
    }))
   }
  
  corDizerQueEPar(par) {
    return par % 2 === 0 && par !== 0 ? 'green' : 'white';
  }

  render() {
    const { contador } = this.state
    return(
      <button onClick={this.numeroPar} 
      style={{backgroundColor: this.corDizerQueEPar(contador)}}>{this.state.contador}</button>
    )
  }
}

export default App;
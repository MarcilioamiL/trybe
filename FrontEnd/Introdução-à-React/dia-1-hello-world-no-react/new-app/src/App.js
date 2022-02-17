import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;











// import logo from './logo.svg';
// import './App.css';
// import { Component } from 'react';

// const Task = (value) => {
//   return (
//     <li key={value}>{value}</li>
//   );
// }

// const tasks = ['varrer', 'passar', 'comer']
// const MapTask = tasks.map(task => Task(task))

// class App extends Component {
//   render() {
//     return (
//       <ul>
//         {MapTask}
//       </ul>
//     );

//   }
// }

// export default App;

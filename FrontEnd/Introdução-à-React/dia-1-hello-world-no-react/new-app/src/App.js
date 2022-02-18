import logo from './logo.svg';
import './App.css';
import Image from './image';

function App() {
  return (
    <div className="App">
      <Image souce={logo} alternativeText='Cute cat staring'/>
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

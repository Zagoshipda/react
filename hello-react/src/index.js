import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import * as serviceWorker from './serviceWorker';

// https://reactjs.org/docs/hello-world.html

function tick(){
  // ReactDOM.render(
  //   <React.StrictMode>
  //     <div>
  //       <App2 />
  //       <App2 />
  //     </div>
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );
}


setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

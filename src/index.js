import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// const rootEl = document.getElementById('root');

// function render() {
//   ReactDOM.render(<App />, rootEl);
// }
// if (module.hot) {
//   module.hot.accept('./app/layout/App', function () {
//     setTimeout(render);
//   });
// }

if (module.hot) {
  module.hot.accept();
}

// render();

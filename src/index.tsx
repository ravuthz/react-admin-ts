import {createRoot} from 'react-dom/client';

import './index.less';

import App from './App';
import reportWebVitals from './reportWebVitals';
import React from "react";

// import makeServer from './mocks/server';

if (process.env.NODE_ENV === "development") {
  // const server = makeServer();

  // @ts-ignore
  // window.server = server || {};

  // fetch('/api')
  //     .then(res => res.json())
  //     .then(res => console.log('fetch: ', res));
  //
  // fetch('/api/users')
  //     .then(res => res.json())
  //     .then(res => console.log('users: ', res));
  //
  // fetch('/api/users/1')
  //     .then(res => res.json())
  //     .then(res => console.log('users 1: ', res));
  //
  // fetch('/api/movies?include=author')
  //     .then(res => res.json())
  //     .then(res => console.log('movies: ', res));
}

const container: any = document.getElementById('root');
const root = createRoot(container);

root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

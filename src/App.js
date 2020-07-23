import React from 'react';
// import './styles/main.scss';
import './dist/css/font-awesome.min.css';
import './dist/css/bootstrap.min.css';
import './dist/css/_nav.css';
import './dist/css/style.scss';

import RouterProvider from './providers/RouterProvider';
import ContextProvider from './providers/ContextProvider';

function App() {
  return (
    <ContextProvider>
      <RouterProvider/>
    </ContextProvider>
  );
}

export default App;

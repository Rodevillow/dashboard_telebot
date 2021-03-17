import React, { Fragment } from 'react';
import Header from './components/includes/Header';
import Footer from './components/includes/Footer';

import './assets/scss/app.scss';

function App({ children }) {
  return (
    <Fragment>
      <Header />
      <div className="content container">
        {children}
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;

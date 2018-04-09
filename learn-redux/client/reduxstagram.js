// let's go!
import React from 'react';
import { render } from 'react-dom';
// react-router
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Import CSS
import css from './styles/style.styl';

// Import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Provider } from 'react-redux';
import store, {history} from './store';

// Create our router component
const router = (
  <Provider store={store}>
    <Router history={history}>
      { /* To handle everything essentially */}
      <Route path='/' component={App}>
        { /* This means one level down of Main */}
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:pathId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'));

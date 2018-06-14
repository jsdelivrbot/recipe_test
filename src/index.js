import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import App from './components/app';
import reducers from './reducers';
import RecipesIndex from './components/recipes_index';
import promise from 'redux-promise';
import RecipesNew from './components/recipes_new';
import RecipesShow from './components/recipe_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/recipes/new" component={RecipesNew} />
          <Route path="/recipes/:id" component={RecipesShow} />
          <Route path="/" component={RecipesIndex} />
        </Switch>
      </div>  
    </ BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

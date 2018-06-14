import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RecipeReducer from './reducer_recipes';

const rootReducer = combineReducers({

  recipes: RecipeReducer,
  form: formReducer

});

export default rootReducer;

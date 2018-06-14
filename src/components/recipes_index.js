import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions';
import {Link} from 'react-router-dom';

class RecipesIndex extends Component {

    componentDidMount(){
        this.props.fetchRecipes();
    }

    renderRecipes(){
        return _.map(this.props.recipes, recipe => {
            return(
                <li className="list-group-item" key={recipe.id}>
                    <Link to={`/recipes/${recipe.id}`}>
                        {recipe.title}
                    </Link>
                </li>    
            );
        });
    }

    render() {
        return(
            <div className="left-block">  
                <h3 className="margin-bottom-element">Recipe Database</h3>
                <Link className="btn btn-primary btn-custom-width" to="/recipes/new">
                    Create a new recipe
                </Link>
                <div className="list-custom">
                    <ul className="list-group">
                        {this.renderRecipes()}
                    </ul>
                </div>
            </div>    
        );
    }
}

function mapStateToProps(state){
    return {recipes: state.recipes};
}

export default connect(mapStateToProps, {fetchRecipes})(RecipesIndex);
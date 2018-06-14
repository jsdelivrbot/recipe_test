import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecipe, deleteRecipe } from '../actions';
import { Link } from 'react-router-dom';

class RecipesShow extends Component {
    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.fetchRecipe(id);
    }

    onDeleteClick(){
        const {id} = this.props.match.params;
        this.props.deleteRecipe(id, ()=> {
            this.props.history.push('/');
        });
    }
    
    render(){

        const {recipe} = this.props;

        if(!recipe){
            return <div>Loading...</div>;
        }

        return(
            <div className="list-custom">
                <div className="margin-bottom-element">
                    <Link  to="/">Go Back</Link>
                </div>
                <h3>{recipe.title}</h3>
                <h5>Ingredients:</h5>
                <p>{recipe.categories}</p>
                <h5>Instructions</h5>
                <p>{recipe.content}</p>
                <button
                className="btn btn-danger"
                onClick={this.onDeleteClick.bind(this)}
                >
                Delete Recipe
                </button> 
            </div>    
        );
    }
}

function mapStateToProps({ recipes }, ownProps) {
    return {recipe: recipes[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchRecipe, deleteRecipe})(RecipesShow);
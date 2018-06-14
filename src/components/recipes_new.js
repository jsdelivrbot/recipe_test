import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createRecipe } from '../actions';

class RecipesNew extends Component {

    renderfield(field){

        const className = `form-group ${field.meta.touched && field.meta.error ? "has-danger" : ''}`;

        return(
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                type="text"
                {...field.input}
                />
                <div className="text-help">
                    {field.meta.touched ? field.meta.error : ""}
                </div>
            </div>    
        );
    }

    onSubmit(values){
        this.props.createRecipe(values, () => {

            this.props.history.push('/');
        });
    }
    
    
    render() {

        const {handleSubmit} = this.props;

        return(
            <form className="list-custom" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Recipe name:"
                    name="title"
                    component={this.renderfield}
                />

                <Field
                    label="Ingredients:"
                    name="categories"
                    component={this.renderfield}
                />

                <Field
                    label="Instructions:"
                    name="content"
                    component={this.renderfield}
                />
                <button type="submit" className="btn btn-primary">Create</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>       
        );
    }
} 

function validate(values){
    const errors = {};

    if(!values.title || values.title.length < 3) {
        errors.title = "Enter a title that is at least 3 characters" 
    }

    if(!values.categories) {
        errors.categories = "Enter some ingredients" 
    }

    if(!values.content) {
        errors.content = "Enter some instructions please" 
    }

    return errors;
}

export default reduxForm({
    validate:validate,
    form: 'PostsNewForm'

})(
    connect(null, {createRecipe})(RecipesNew)
);
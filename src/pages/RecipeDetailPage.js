import React, { Component } from "react";
import PropTypes from "prop-types";
import { api } from "../api";
import { RecipeDetail } from "../components/RecipeDetail/RecipeDetail";

export class RecipeDetailPage extends Component {
    state = {
        isLoading: false,
        recipe: null,
        error: null,
        defaultIngredients: []
    };


    //NEFUNGUJE DOBRE
    handleServingCount = event => {
        //cancer classy fuj
        let tempServingCount = "";
        if (event.target.value !== "")
            tempServingCount = Number.parseInt(event.target.value);
        const recipe = { ...this.state.recipe };

        const defaultIngredients = this.state.defaultIngredients;
        const ing = defaultIngredients.map(currIngredient => {
            currIngredient.amount *= tempServingCount;
            return currIngredient;
        });

        recipe.servingCount = tempServingCount;
        recipe.ingredients = ing;
        console.log(this.state.defaultIngredients);
        this.setState({ recipe });
    };

    componentDidMount() {
        this.setState({
            isLoading: true
        });

        const { params } = this.props.match || {};
        const { slug } = params || {};

        api.get(`/recipes/${slug}`).then(response => {
            const { data, problem } = response;
            this.setState({
                isLoading: false,
                recipe: data,
                error: problem
            });
        });
    }
    render() {
        const { isLoading, recipe, error } = this.state;
        return (
            <RecipeDetail
                isLoading={isLoading}
                recipe={recipe}
                error={error}
                handleServingCount={this.handleServingCount}
            />
        );
    }
}

RecipeDetailPage.propTypes = {
    match: PropTypes.object.isRequired
};

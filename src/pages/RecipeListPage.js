import React, { Component } from "react";
import { Container } from "react-bootstrap";

import { api } from "../api";

import { RecipeList } from "../components/RecipeList/RecipeList";
import { SearchBar } from "../components/RecipeList/SearchBar";
import { RecipeFilters } from "../components/RecipeList/RecipeFilters";

export class RecipeListPage extends Component {
    state = {
        recipes: [],
        isLoading: false,
        error: null,
        searchString: "",
        isChecked: false
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        api.get("/recipes").then(response => {
            const { data, problem } = response;
            this.setState({
                isLoading: false,
                recipes: data,
                error: problem
            });
        });
    }

    handleInputChange = event => {
        //ked sa zmeni state zavola sa render
        this.setState({ searchString: event.target.value });
    };

    handleCheckboxChange = event => {
        this.setState({ isChecked: event.target.checked });
    };

    handlePreparationTime = event => {
        switch (event.target.value) {
            case "Mena: ASC":
                this.setState({
                    recipes: this.state.recipes.sort((recipe1, recipe2) => {
                        if (recipe1.slug < recipe2.slug) {
                            return -1;
                        }
                        if (recipe1.slug > recipe2.slug) {
                            return 1;
                        }
                        return null;
                    })
                });
                break;
            case "Casu: ASC":
                this.setState({
                    recipes: this.state.recipes.sort((recipe1, recipe2) => {
                        return (
                            recipe1.preparationTime - recipe2.preparationTime
                        );
                    })
                });
                break;
            case "Casu: DESC":
                this.setState({
                    recipes: this.state.recipes.sort((recipe1, recipe2) => {
                        return (
                            recipe2.preparationTime - recipe1.preparationTime
                        );
                    })
                });
                break;
            case "Mena: DESC":
                this.setState({
                    recipes: this.state.recipes.sort((recipe1, recipe2) => {
                        if (recipe1.slug < recipe2.slug) {
                            return 1;
                        }
                        if (recipe1.slug > recipe2.slug) {
                            return -1;
                        }

                        return null;
                    })
                });
                break;

            default:
                break;
        }
    };

    filterRecipes = recipe => {
        const { searchString, isChecked } = this.state;
        const { title, preparationTime } = recipe;
        const isInTimeFrame = !isChecked || preparationTime < 30;
        const containsSearchString =
            title.toLowerCase().indexOf(searchString.toLowerCase()) > -1;
        return isInTimeFrame && containsSearchString;
    };

    render() {
        const {
            recipes,
            isLoading,
            error,
            searchString,
            isChecked
        } = this.state;
        const filteredRecipes = recipes.filter(this.filterRecipes);
        return (
            <Container fluid>
                <h1 className="d-flex justify-content-lg-center mb-4 title-orange font-weight-bold">
                    RECEPTY
                </h1>

                <SearchBar
                    value={searchString}
                    isChecked={isChecked}
                    onInputChange={this.handleInputChange}
                    onCheckboxChange={this.handleCheckboxChange}
                />

                <RecipeFilters
                    recipes={recipes}
                    handlePreparationTime={this.handlePreparationTime}
                />

                <RecipeList
                    recipes={filteredRecipes}
                    isLoading={isLoading}
                    error={error}
                />
            </Container>
        );
    }
}

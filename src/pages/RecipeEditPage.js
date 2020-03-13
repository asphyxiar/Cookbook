import React, { useState, useEffect } from "react";
import { useParams } from "react-router"; // nasiel som na googeli hooks introduced in react router
import { api } from "../api";
import { RecipeEditDetail } from "../components/RecipeEdit/RecipeEditDetail";
//stackoverflow na routy
import { useHistory } from "react-router-dom";

export function RecipeEditPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(null);

    const [newIngredient, setNewIngredient] = useState({
        isGroup: false,
        amountUnit: "",
        amount: "",
        name: ""
    });

    //kniznica use paramms nasiel som na nete, hooks introduced in react router
    let { slug } = useParams();
    //stackOverflow nasiel som redirect pomocou hookov
    const history = useHistory();

    // indicke video z youtube hooky a objeky v useState,skapal som.
    //handleri
    function handleAmount(event) {
        let tempAmount = "";
        if (event.target.value !== "")
            tempAmount = Number.parseFloat(event.target.value);

        setNewIngredient({
            ...newIngredient,
            amount: tempAmount
        });
    }

    function handleAmountUnit(event) {
        setNewIngredient({ ...newIngredient, amountUnit: event.target.value });
    }

    function handleName(event) {
        setNewIngredient({ ...newIngredient, name: event.target.value });
    }

    function handleTitle(event) {
        setRecipe({ ...recipe, title: event.target.value });
    }

    function handlePreparationTime(event) {
        setRecipe({ ...recipe, preparationTime: event.target.value });
    }

    function handleRemoveIngredient(event) {
        const index = Number.parseInt(event.target.getAttribute("index"));

        //stackoverflow filter zavolat
        setRecipe({
            ...recipe,
            ingredients: recipe.ingredients.filter((item, id) => id != index)
        });
    }

    function handleButtonAdd(event) {
        recipe.ingredients.push(newIngredient);
        setNewIngredient({
            ...newIngredient,
            name: "",
            amount: "",
            amountUnit: ""
        }); // useState zavola render
    }
    function handleSideDish(event) {
        setRecipe({ ...recipe, sideDish: event.target.value });
    }

    function handleDirections(event) {
        setRecipe({ ...recipe, directions: event.target.value });
    }

    function handleServingCount(event) {
        setRecipe({ ...recipe, servingCount: event.target.value });
    }

    function handleSaveRecipe(event) {
        const {
            title,
            sideDish,
            ingredients,
            servingCount,
            preparationTime,
            directions,
        } = recipe;

        if (!title) return;
        api.post(`/recipes/${recipe._id}`, {
            title,
            sideDish,
            ingredients,
            servingCount,
            preparationTime,
            directions,
        }).then(response => {
            console.log(slug);
            history.push(`/recipe/${response.data.slug}`);
        });
    }

    //useEffect namiesto lifecycles v dokumentacii
    useEffect(() => {
        setIsLoading(true);

        api.get(`/recipes/${slug}`).then(response => {
            const { data, problem } = response;
            setIsLoading(false);
            setRecipe(data);
            setError(problem);
        });
    }, []); // ddruhy parameter do useEffect aby to zbehlo len raz, bez toho mi skoro vybuchol PC s tolkym requestov
    return (
        <RecipeEditDetail
            isLoading={isLoading}
            recipe={recipe}
            error={error}
            handleAmount={handleAmount}
            handleAmountUnit={handleAmountUnit}
            handleName={handleName}
            handleButtonAdd={handleButtonAdd}
            newIngredient={newIngredient}
            handleTitle={handleTitle}
            handlePreparationTime={handlePreparationTime}
            handleSideDish={handleSideDish}
            handleSaveRecipe={handleSaveRecipe}
            handleDirections={handleDirections}
            handleServingCount={handleServingCount}
            handleRemoveIngredient={handleRemoveIngredient}
        ></RecipeEditDetail>
    );
}

import React from "react";
import PropTypes from "prop-types";

import { LoadingAnimation } from "../common/LoadingAnimation";
import { ErrorAlert } from "../common/ErrorAlert";
import { RecipeEditIngredientList } from "./RecipeEditIngredientList";
import { AddNewIngredient } from "./AddNewIngredient";
import { RecipeEditTitle } from "./RecipeEditTitle";
import { RecipeEditBasicInfo } from "./RecipeEditBasicInfo";

import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";

export function RecipeEditDetail({
    isLoading,
    recipe,
    error,
    handleAmount,
    handleAmountUnit,
    handleName,
    handleButtonAdd,
    handleTitle,
    newIngredient,
    handleSideDish,
    handlePreparationTime,
    handleSaveRecipe,
    handleDirections,
    handleServingCount,
    handleRemoveIngredient
}) {
    const {
        preparationTime,
        title,
        directions,
        ingredients,
        sideDish,
        slug,
        servingCount
    } = recipe || {};

    if (error) {
        return <ErrorAlert />;
    }

    if (isLoading) {
        return <LoadingAnimation />;
    }

    if (!recipe) {
        return null;
    }

    return (
        <Container fluid>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} lg="8" className="title-orange">
                        <h1>{title}</h1>
                    </Form.Group>
                    <Form.Group
                        className=" justify-content-end"
                        as={Col}
                        lg={{ span: 1, offset: 3 }}
                    >
                        <Button variant="success" onClick={handleSaveRecipe}>
                            Ulozit
                        </Button>
                        <Link to={`/recipe/${slug}`}>
                            <Button variant="secondary" className="ml-2">
                                Zrusit
                            </Button>
                        </Link>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                        {/* <Form.Control type="text" value={title}></Form.Control> */}
                        <RecipeEditTitle
                            title={title}
                            handleTitle={handleTitle}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} lg="2">
                        <RecipeEditBasicInfo
                            preparationTime={preparationTime}
                            sideDish={sideDish}
                            handleSideDish={handleSideDish}
                            handlePreparationTime={handlePreparationTime}
                            handleServingCount={handleServingCount}
                            servingCount={servingCount}
                        />
                    </Form.Group>

                    <Form.Group
                        className="justify-content-center"
                        as={Col}
                        lg="4"
                    >
                        <h3>Ingrediencie</h3>
                        {ingredients.map((ingredient, id) => {
                            const { name, amount, amountUnit } = ingredient;
                            return (

                                    <RecipeEditIngredientList
                                        key={id}
                                        index={id}
                                        name={name}
                                        amount={amount}
                                        amountUnit={amountUnit}
                                        handleRemoveIngredient={
                                            handleRemoveIngredient
                                        }
                                    />
                            );
                        })}
                    </Form.Group>

                    <Form.Group as={Col} lg="6">
                        <h3>Postup</h3>
                        <Form.Control
                            as="textarea"
                            rows="20"
                            value={directions}
                            onChange={handleDirections}
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} lg="6">
                        <AddNewIngredient
                            newIngredient={newIngredient}
                            onButtonAdd={handleButtonAdd}
                            handleAmount={handleAmount}
                            handleAmountUnit={handleAmountUnit}
                            handleName={handleName}
                        />
                    </Form.Group>
                </Form.Row>
            </Form>
        </Container>
    );
}

RecipeEditDetail.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    recipe: PropTypes.object,
    error: PropTypes.string
};

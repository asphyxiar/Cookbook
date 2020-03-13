import React from "react";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { LoadingAnimation } from "../common/LoadingAnimation";
import { ErrorAlert } from "../common/ErrorAlert";
import { RecipeIngredients } from "./RecipeIngredients";
import ReactMarkdown from "react-markdown";
import { PreparationTime } from "../helpers/PreparationTime";
// import { RecipeServingCount } from "./RecipeServingCount";

export function RecipeDetail(props) {
    const { isLoading, recipe, error, handleServingCount } = props;
    const {
        preparationTime,
        title,
        directions,
        ingredients,
        sideDish,
        slug,
        servingCount,
        lastModifiedDate
    } = recipe || {};
    // eslint tu hadze problem lebo su deklarovane premenne ktore nepouzivam ale necham ich tam ze som skusal handleservingcount no nedotiahol dokonca
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
            <Row>
                <Col lg="9">
                    <h1 className="title-orange">{title}</h1>
                </Col>
                <Col lg="3" className="d-flex justify-content-end">
                    <Link to={`/recipe/${slug}/upravit`}>
                        <Button
                            variant="outline-dark"
                            className="edit_recipe_button"
                        >
                            <i className="fa fa-pencil-square-o mr-1"></i>
                            Upraviť recept
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg="4" className="my-3">
                    <span className="mr-1">{sideDish}</span>
                    <PreparationTime preparationTime={preparationTime} />
                </Col>
            </Row>

            <Row>
                <Col lg="3">
                    {ingredients.map(ingredient => {
                        const { _id, name, amount, amountUnit } = ingredient;
                        return (
                            <RecipeIngredients
                                key={_id}
                                name={name}
                                amount={amount}
                                amountUnit={amountUnit}
                            />
                        );
                    })}
                </Col>

                <Col lg="9">
                    {directions === undefined ? (
                        <p>nic tu neni</p>
                    ) : (
                        <ReactMarkdown source={directions} />
                        // <ol>
                        //     {directions.split("\n").map((currEl, index) => {
                        //         console.log(currEl);
                        //         if (currEl !== "")
                        //             return <li key={index}> {currEl.substr(2)} </li>;
                        //     })}
                        // </ol>
                    )}
                </Col>
            </Row>
            {/* mozilla MDN to locale date string */}
            <Row>
                <Col>
                    <p>Naposledy upravené:</p>
                    <i>{new Date(lastModifiedDate).toLocaleDateString("sk")}</i>
                </Col>
            </Row>
        </Container>
    );
}

RecipeDetail.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    recipe: PropTypes.object,
    error: PropTypes.string
};

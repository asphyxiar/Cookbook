import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

export function RecipeIngredients(props) {
    const { amount, amountUnit, name } = props;

    return (
        <div>
            <Row >
                <Col lg="4" className="d-flex justify-content-lg-end">
                    {amount}
                </Col>
                <Col lg="2">{amountUnit}</Col>
                <Col lg="6" className="d-flex justify-content-lg-start">
                    {name}
                </Col>
            </Row>
            <hr className="half-rule"/>
        </div>
    );
}

RecipeIngredients.propTypes = {
    amount: PropTypes.number,
    amountUnit: PropTypes.string,
    name: PropTypes.string
};

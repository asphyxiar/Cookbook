import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

export function RecipeEditIngredientList(props) {
    const { amount, amountUnit, name, handleRemoveIngredient, index } = props;

    return (
        <div>
              <hr className="horizontal_line"></hr>
            <Row className="horizontal_line">
                <Col lg="1">
                    <i
                        className="fa fa-2x fa-trash-o pointer"
                        color="danger"
                        onClick={handleRemoveIngredient}
                        index={index}
                    ></i>
                </Col>
                <Col lg="3" className="d-flex justify-content-lg-end">
                    {amount}
                </Col>
                <Col lg="2">{amountUnit}</Col>
                <Col lg="6" className="d-flex justify-content-lg-start">
                    {name}
                </Col>
            </Row>
        </div>
    );
}

RecipeEditIngredientList.propTypes = {
    amount: PropTypes.number,
    amountUnit: PropTypes.string,
    name: PropTypes.string
};

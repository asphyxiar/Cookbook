import React from "react";
import { Form, Col } from "react-bootstrap";

export function RecipeFilters(props) {
    const { handlePreparationTime } = props;
    return (
        <Form.Row className="justify-content-lg-center">
            <Form.Group as={Col} lg="3">
                <Form.Label>Triediť recepty podla</Form.Label>
                <Form.Control as="select" onChange={handlePreparationTime}>
                    <option defaultValue>Mena: ASC</option>
                    <option>Mena: DESC</option>
                    <option>Casu: ASC</option>
                    <option>Casu: DESC</option>
                </Form.Control>
            </Form.Group>
        </Form.Row>
    );
}

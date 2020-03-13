import React from "react";
import { Form, Col, InputGroup } from "react-bootstrap";

export function RecipeEditBasicInfo(props) {
    const {
        preparationTime,
        sideDish,
        handlePreparationTime,
        handleSideDish,
        handleServingCount,
        servingCount
    } = props;
    return (
        <Form.Group as={Col}>
            <h3>Základné údaje</h3>
            <Form.Label>Doba prípravy</Form.Label>

            <InputGroup className="mb-3">
                <Form.Control
                    type="number"
                    value={preparationTime}
                    onChange={handlePreparationTime}
                ></Form.Control>

                <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">min</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>

            <Form.Label>Počet porcií</Form.Label>
            <Form.Control
                type="number"
                value={servingCount}
                onChange={handleServingCount}
            ></Form.Control>

            <Form.Label>Príloha</Form.Label>
            <Form.Control
                type="text"
                value={sideDish}
                onChange={handleSideDish}
            ></Form.Control>
        </Form.Group>
    );
}

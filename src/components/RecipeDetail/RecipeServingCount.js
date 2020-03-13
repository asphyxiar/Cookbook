import React from "react";
import { Row, Col, Form } from "react-bootstrap";

export function RecipeServingCount(props) {
    const { servingCount, handleServingCount } = props;

    return (
        <Row>
            <Col>
                <Form.Control
                    type="number"
                    value={servingCount}
                    onChange={handleServingCount}
                ></Form.Control>
            </Col>
        </Row>
    );
}

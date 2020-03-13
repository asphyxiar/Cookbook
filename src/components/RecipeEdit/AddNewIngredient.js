import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import { Button, Form, InputGroup } from "react-bootstrap";

export function AddNewIngredient(props) {
    const {
        newIngredient,
        onButtonAdd,
        handleAmount,
        handleAmountUnit,
        handleName
    } = props;

    return (
        <Form.Row>
            <Form.Group as={Col} lg="12">
                <h3>Pridat ingrediencii</h3>
            </Form.Group>
            <Form.Group as={Col} lg="6">
                <Form.Control
                    type="number"
                    value={newIngredient.amount}
                    onChange={handleAmount}
                    placeholder="mnozstvi"
                ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} lg="6">
                <Form.Control
                    type="text"
                    placeholder="jednotka"
                    value={newIngredient.amountUnit}
                    onChange={handleAmountUnit}
                ></Form.Control>
            </Form.Group>
            <Form.Group as={Col} lg="12">
                <InputGroup className="mb-3">
                    <Form.Control
                        type="text"
                        placeholder="nazev"
                        value={newIngredient.name}
                        onChange={handleName}
                    ></Form.Control>

                    <InputGroup.Append>
                        <Button onClick={onButtonAdd}>Pridat</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
        </Form.Row>
    );
}

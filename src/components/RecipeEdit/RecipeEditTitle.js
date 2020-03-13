import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

export function RecipeEditTitle(props) {
    const { title, handleTitle } = props;
    return (
        <Form.Control
            type="text"
            value={title}
            onChange={handleTitle}
        ></Form.Control>
    );
}
RecipeEditTitle.propTypes = {
    title: PropTypes.string.isRequired
};

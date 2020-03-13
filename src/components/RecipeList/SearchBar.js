import React from "react";
import PropTypes from "prop-types";
import { Form, Col } from "react-bootstrap";

export function SearchBar(props) {
    const { value, isChecked, onInputChange, onCheckboxChange } = props;
    return (
        <div>
            <Form.Row className="d-flex justify-content-lg-center">
                <Form.Group as={Col} lg="5" controlId="formSearch">
                    <Form.Control
                        type="text"
                        className="rounded-pill searchBar"
                        value={value}
                        onChange={onInputChange}
                        placeholder=" Hladať recept"
                    ></Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row className="justify-content-lg-center">
                <Form.Group
                    as={Col}
                    lg={{span:2, offset:0}}
                    controlId="formTime"
                >
                    <Form.Check
                        custom
                        type="checkbox"
                        checked={isChecked}
                        onChange={onCheckboxChange}
                        label="pripravené za skorej ako 30 minút"
                    ></Form.Check>
                </Form.Group>
            </Form.Row>
        </div>
    );
}

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onCheckboxChange: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
    value: "",
    isChecked: false
};

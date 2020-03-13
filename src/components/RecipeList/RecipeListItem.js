import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";
import logo from "../../logo/plate.jpg";

export function RecipeListItem(props) {
    const { title, time, slug, sideDish } = props;

    return (
        <Col xs="12" sm="6" md="4" lg="3" className="recipe">
            <Link
                to={`/recipe/${slug}`}
                style={{ textDecoration: "none" }}
            >
                <Card>
                    {/* <Card.Header>
                        <span>
                            <i className="fa fa-cutlery d-flex justify-content-lg-center recipe-text"></i>
                        </span>
                        <span className="recipe-title justify-content-lg-center d-flex">
                            {title}
                        </span>
                    </Card.Header> */}
                    <Card.Img variant="top" src={logo} className="p-4" />
                    <Card.Body>
                        <Card.Title>
                            <hr></hr>
                            <span className="recipe-title justify-content-lg-start d-flex">
                                {title}
                            </span>
                        </Card.Title>
                        <Card.Text className="recipe-text">
                            <span className="recipe-text">
                                {sideDish !== undefined ? (
                                    <>
                                        <i className="fa fa-spoon mr-1"></i>
                                        {sideDish}
                                    </>
                                ) : (
                                    <></>
                                )}
                            </span>
                            <span>
                                <i className="fa fa-clock-o recipe-text "></i>
                            </span>
                            <span className="recipe-text">
                                prep time: {time}
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
}

RecipeListItem.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired
};

RecipeListItem.defaultProps = {
    time: 0
};

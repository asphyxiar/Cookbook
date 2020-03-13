import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import { LoadingAnimation } from "../common/LoadingAnimation";
import { ErrorAlert } from "../common/ErrorAlert";

import { RecipeListItem } from "./RecipeListItem";

export function RecipeList(props) {
  const { recipes, isLoading, error } = props;

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorAlert />;
  }

  return (
    <Row>
      {recipes.map(recipe => {
        const { _id, title, preparationTime, slug,sideDish } = recipe;
        return (
          <RecipeListItem
            key={_id}
            title={title}
            time={preparationTime}
            slug={slug}
            sideDish={sideDish}
          />
        );
      })}
    </Row>
  );
}

RecipeList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  recipes: PropTypes.array.isRequired
};

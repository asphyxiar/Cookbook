import React from "react";
import PropTypes from "prop-types";

export function PreparationTime(props) {
    const { preparationTime } = props;

    let hours = Math.floor(preparationTime / 60);
    let minutes = preparationTime % 60;

    if (hours === 0) {
        return <i className="fa fa-clock-o"> {minutes} min</i>;
    } else if (minutes === 0) {
        return <i className="fa fa-clock-o"> {hours}h</i>;
    } else
        return (
            <i className="fa fa-clock-o">
                {hours} h {minutes} min
            </i>
        );
}

PreparationTime.propTypes = {
    preparationTime: PropTypes.number
};

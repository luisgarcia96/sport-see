import React from "react";
import PropTypes from "prop-types";

import styles from "./SportButton.module.scss"

const SportButton = ({icon}) => {
    return (
        <div className={styles.sportButton}>
            <img src={`/src/assets/SVG/icon-${icon}.svg`} alt="sport icon" />
        </div>
    );
};

SportButton.propTypes = {
    icon: PropTypes.string.isRequired
};

export default SportButton;
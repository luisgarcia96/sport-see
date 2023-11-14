import React from "react";
import PropTypes from "prop-types";

import IntakeTile from "../../../components/IntakeTile/IntakeTile";

import styles from "../Dashboard.module.scss";

const IntakesContainer = ({ keyData }) => {
    return (
        <aside className={styles.intakeContainer}>
            {Object.entries(keyData).map(([intake, count]) => (
                <IntakeTile type={intake} intakeCount={count} key={intake} />
            ))}
        </aside>
    );
};

export default IntakesContainer;

IntakesContainer.propTypes = {
    keyData: PropTypes.object.isRequired,
};
